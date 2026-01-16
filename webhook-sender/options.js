const API = typeof browser !== "undefined" ? browser : API;

(async () => {
  const input = document.getElementById("url");
  const btn = document.getElementById("save");

  const { webhookUrl } = await API.storage.sync.get({ webhookUrl: "" });
  input.value = webhookUrl;

  btn.addEventListener("click", async () => {
    await API.storage.sync.set({ webhookUrl: input.value.trim() });
    alert("Saved");
  });
})();
