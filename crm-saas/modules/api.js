const GAS_URL = "https://script.google.com/macros/s/AKfycbxS1JueOIcz4DdwJHxiA-9GqMhY4Z1cWyOBSrv5tIoF3kEnR9sqEEd1PrNsTDyLBuUb/exec";

export async function callAPI(path) {
  const res = await fetch(GAS_URL + path);
  return await res.json();
}
