window.onload = () => { // AQUI LO QUE HAGO ES DECIRLE AL NAVEGADOR QUE ME REALICE LA FUNCION CUANDO SE CARGUE LA PAGINA
  getPokemons()
}

const getPokemons = async() => { // AQUI OBTENEMOS LOS POKEMONS
  let pokemons = [] // CREO UN ARRAY DONDE IRAN METIDOS TODOS LOS POKEMONS
  for (let i = 1; i < 151; i++) { // MEDIANTE UN FOR, CONSEGUIMOS QUE ACCEDA SOLO A LOS 150 PRIMEROS
    let pokemonURL = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) // ATACO AL ENDPOINT DE LA APPI PARA CONSEGUIR LOS POKEMONS
    let pokemonJson = await pokemonURL.json() // CONVIERTO EN FORMATO JSON 
    pokemons.push(pokemonJson) // METO TODOS LOS POKEMONS EN EL ARRAY "POKEMONS"
  }
  let pokemonsMap = pokemons.map(pokemon => (  // HAGO MAP PARA ACCEDER A LO QUE NECESITO, EN ESTE CASO A LA IMAGEN 
    {
      name: pokemon.forms[0].name, // BUCEO HASTA QUE OBTENGO EL NOMBRE
      imagen: pokemon.sprites["front_default"] // BUCEO HASTA QUE OBTENGO LA IMAGEN
    }
  ))
  drawPokemons(pokemonsMap) 
}

 const drawPokemons = (pokemons) => { // AQUI ME METO EN EL UL "DISPLAY" DONDE VAN A IR MIS POKEMONS. LUEGO DIBUJO CADA UNO, QUE SERA UN LI, CON SU RESPECTIVO NOMBRE E IMAGEN.
   let ul = document.querySelector(".display")
   let mapeo = pokemons.map(pokemon =>
    `<li>
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.imagen}"
    </li>`
    )  
    ul.innerHTML = mapeo // HAGO INNER HTML DE MAPEO PARA INTRODUCIR LO QUE HE HECHO EN MI HTML,
 }