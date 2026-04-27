
export function log(msg) {

  const el = document.getElementById("log");

  el.innerText += "\n" + msg;

  console.log(msg);
}
