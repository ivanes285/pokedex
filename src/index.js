async function getPokemon(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let data = await response.json();
  return data;
}

async function renderPokemon(idPokemon) {
  let data = await getPokemon(idPokemon);
  // window.namePokemon.textContent = data.name;
  // window.imgPokemon.setAttribute("src", data.sprites.front_default);
  document.getElementById('namePokemon').textContent = data.name
  document.getElementById('imgPokemon').setAttribute('src',data.sprites.front_default)
}

 function listenerPokemon() {
  document.getElementById("idPokemon").addEventListener("input", () => {
    const idPokemon = document.getElementById("idPokemon").value;
      renderPokemon(idPokemon);
  });
}


listenerPokemon();


