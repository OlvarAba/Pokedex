//IIFE
let pokemonRepository = (function() {
  let pokemonList = [{
      name: "Bulbasaur",
      height: 2,
      type: "grass,poison",
    },
    {
      name: "Squirtle",
      height: 1,
      type: "water",
    },
    {
      name: "Charmander",
      height: 2,
      type: "fire",
    },
    {
      name: "Pikachu",
      height: 1,
      type: "electric"
    },
    {
      name: "Nidoqueen",
      height: 4,
      type: "poison, ground"
    }
  ];

  function getAll(){
    return pokemonList;
  }

  function add(pokemon){
        pokemonList.push(pokemon);
    }

  return {
    add: add,
    getAll: getAll
  }

})();
pokemonRepository.getAll().forEach(function (pokemon) {
  document.write("name: " + pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type);

  //conditional if a pokemon has a height above 2 it is big
  if (pokemon.height > 3) {
    document.write(" - Wow that is big");
  }

  document.write("<br>");
});
