// =========================
// CONFIG
// =========================
const GAS_URL = "https://script.google.com/macros/s/AKfycbxS1JueOIcz4DdwJHxiA-9GqMhY4Z1cWyOBSrv5tIoF3kEnR9sqEEd1PrNsTDyLBuUb/exec";

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
