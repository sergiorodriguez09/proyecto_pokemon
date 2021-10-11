const display = document.querySelector(".display");

const getPokemon = async (pokemon) => {
  let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  let data = await result.json();

  const pokemons = data.results.map((element, img) => ({
    name: element.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      img + 1
    }.png`,
  }));

  displayPokemons(pokemons);
};

const displayPokemons = (pokemons) => {
  const pokemonHTML = pokemons
    .map(
      (pokemon) =>
        `<li>
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}"/>
        </li>`
    )
    .join("");
  display.innerHTML = pokemonHTML;
};

getPokemon();