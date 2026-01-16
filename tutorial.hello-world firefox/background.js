const MENU_PAGE = "send_page";
const MENU_IMAGE = "send_image";
const API = typeof browser !== "undefined" ? browser : API;


async function getWebhookUrl() {
  const { webhookUrl } = await API.storage.sync.get({ webhookUrl: "" });
  return webhookUrl;
}

async function postWebhook(payload) {
  const webhookUrl = await getWebhookUrl();
  if (!webhookUrl) throw new Error("webhookUrl is not set");
  console.log(payload);
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Webhook failed: ${res.status} ${text}`);
  }
}

API.runtime.onInstalled.addListener(() => {
  API.contextMenus.create({
    id: MENU_PAGE,
    title: "このページをWebhookへ送る",
    contexts: ["page"]
  });
  API.contextMenus.create({
    id: MENU_IMAGE,
    title: "この画像をWebhookへ送る",
    contexts: ["image"]
  });
});

API.contextMenus.onClicked.addListener(async (info, tab) => {
  try {
    if (info.menuItemId === MENU_PAGE) {
      await postWebhook({
        embeds: [{
          type: "page",
          url: tab?.url ?? "hoge",
          title: tab?.title ?? "fuga",
          description: "拡張機能から送信！",
        }]
      });
    } else if (info.menuItemId === MENU_IMAGE) {
      await postWebhook({
        embeds: [{
          type: "image",
          image: {
            url: info.srcUrl ?? "",
          },
        }]
      });
    }
  } catch (e) {
    console.error(e);
    // とりあえず console だけ。後で通知(Notification)や badge 表示にすると使いやすい
  }
});
