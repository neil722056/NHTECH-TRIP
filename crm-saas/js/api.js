const api = {

  async install(data) {

    const res = await fetch(GAS_URL + "?action=install", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });

    return await res.json();
  },

  async getUsers(data) {

    const res = await fetch(GAS_URL + "?action=getUsers&tenant=" + data.tenant);

    return await res.json();
  }

};