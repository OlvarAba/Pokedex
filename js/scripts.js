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

//loop that list all pokemon with the height and name
for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    "Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + "."
  );

  //conditional if a pokemon has a height above 2 it is big
  if (pokemonList[i].height > 2) {
    document.write(pokemonList[i].height + "-Wow that is big");
  }

  document.write("<br>");
}
