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

      function getAll() {
        return pokemonList;
      }

      function add(pokemon) {
        pokemonList.push(pokemon);
      }

      function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement('li');
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
      }

      function addEvent(button, pokemon) {
      button.addEventListener('click', function () {
          showDetails(pokemon);
      })
  }

        function showDetails(pokemon) {
          console.log(pokemon);
        }

        return {
          add: add,
          getAll: getAll,
          addListItem: addListItem
        };
      })();

    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
