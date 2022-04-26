//IIFE
let pokemonRepository = (function() {
  let pokemonList = [{
      name: "Bulbasaur",
      height: 3,
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
  ];

  function getAll(){
    return pokemonList;
  }

  return {
    getAll: getAll
  }
})();
pokemonRepository.getAll().forEach(function (pokemon) {
  console.log(pokemon.name)
});

//forEach Loop
pokemonList.forEach(function(pokemon) {
  document.write("name: " + pokemon.name + " " + "height: " + pokemon.height + " " + "type:" + pokemon.type);
});

//conditional if a pokemon has a height above 2 it is big
if (pokemonList[i].height > 2) {
  document.write(pokemonList[i].height + "-Wow that is big");
}

document.write("<br>");
}
