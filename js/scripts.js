//IIFE
let pokemonRepository = (function () {
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

function add (pokemon) {
   pokemonList.push(pokemon)
 }

 function getAll () {
   return pokemonList
 };

 return {
   add: function(pokemon) {
     pokemonList.push(pokemon);
   },
   getAll: function() {
     return pokemonList;
   }
 };

//forEach Loop
  pokemonList.ForEach(pokemon => document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + "."));

  //conditional if a pokemon has a height above 2 it is big
  if (pokemonList[i].height > 2) {
    document.write(pokemonList[i].height + "-Wow that is big");
  }

  document.write("<br>");
}
})();
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
  });
