// =========================
// CONFIG
// =========================
const GAS_URL = "https://script.google.com/macros/s/AKfycbymF5s_0BVe8_kqhsGJXAnY9icWcPSgYeDVylA8g_0O0CKQXTFC_yxYmTtQTVQTYqLd/exec";

// =========================
// INIT
// =========================
import { loadState } from "./modules/state.js";
import { reinstall, resetSystem } from "./modules/install.js";
import { log } from "./modules/log.js";

window.reinstall = reinstall;
window.resetSystem = resetSystem;

// =========================
// BOOT
// =========================
async function boot() {

  log("🚀 dashboard booting...");

  const state = await loadState();

  document.getElementById("crmId").innerText = state.crmId || "-";
  document.getElementById("version").innerText = state.version || "-";

  if (state.crmUrl) {
    document.getElementById("crmUrl").href = state.crmUrl;
    document.getElementById("crmUrl").innerText = state.crmUrl;
  }

  log("✔ system loaded");
}

boot();
