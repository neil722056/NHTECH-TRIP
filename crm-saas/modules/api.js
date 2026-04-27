const GAS_URL = "https://script.google.com/macros/s/AKfycbymF5s_0BVe8_kqhsGJXAnY9icWcPSgYeDVylA8g_0O0CKQXTFC_yxYmTtQTVQTYqLd/exec";

export async function callAPI(path) {
  const res = await fetch(GAS_URL + path);
  return await res.json();
}
