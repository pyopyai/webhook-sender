(async () => {
  const input = document.getElementById("url");
  const btn = document.getElementById("save");

  const { webhookUrl } = await chrome.storage.sync.get({ webhookUrl: "" });
  input.value = webhookUrl;

  btn.addEventListener("click", async () => {
    await chrome.storage.sync.set({ webhookUrl: input.value.trim() });
    alert("Saved");
  });
})();
