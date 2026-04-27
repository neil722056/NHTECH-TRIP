
const GAS_URL = "https://script.google.com/macros/s/AKfycbymF5s_0BVe8_kqhsGJXAnY9icWcPSgYeDVylA8g_0O0CKQXTFC_yxYmTtQTVQTYqLd/exec";

async function loadStatus() {
  const res = await fetch(GAS_URL + "?path=state");
  const data = await res.json();

  document.getElementById("crmId").innerText = data.crmId;
  document.getElementById("crmUrl").href = data.crmUrl;
}

async function restartInstall() {

  await fetch(GAS_URL + "?path=reset");

  setTimeout(() => {
    window.location.href = "setup.html";
  }, 800);
}

window.onload = loadStatus;
