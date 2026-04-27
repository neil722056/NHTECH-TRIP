async function restartInstall() {

  try {

    document.getElementById("log").innerHTML = "♻️ resetting...";

    await fetch(GAS_URL + "?path=reset");

    document.getElementById("log").innerHTML += "<br>✔ reset done";

    // 🔥 重要：直接跳 setup
    setTimeout(() => {
      window.location.href = "setup.html";
    }, 800);

  } catch (err) {

    console.error(err);

    document.getElementById("log").innerHTML =
      "❌ reinstall failed: " + err.message;
  }
}
