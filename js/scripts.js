let pokemonRepository = (function() {
	let pokemonList = [];
	let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

	function loadList() {
		return fetch(apiUrl)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				json.results.forEach(function(item) {
					let pokemon = {
						name: item.name,
						detailsUrl: item.url
					};
					add(pokemon);
				});
			})
			.catch(function(e) {
				console.error(e);
			});
	}

	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(details) {
				item.imageUrl = details.sprites.front_default;
				item.height = details.height;
				item.types = details.types;
			})
			.catch(function(e) {
				console.error(e);
			});
	}

	function addListItem(pokemon) {
		// select List & create list item
		let ul = document.querySelector("ul");
		let listItem = document.createElement("li");
		listItem.classList.add("col-sm-8");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.addEventListener("click", event => {
			showDetails(pokemon);
			event.target.blur();
		});
		//Add classes & attributes to list item
		button.classList.add("btn", "btn-block", "btn-outline-primary");
		button.classList.add("m-1", "bg-blue", "text-capitalize");
		button.setAttribute("data-toggle", "modal");
		button.setAttribute("data-target", ".modal");

		// hideModal function to hide to modal

		// Add item to list
		listItem.appendChild(button);
		ul.appendChild(listItem);
	}

	function showModal(pokemon) {
		let modalBody = $(".modal-body");
		let modalTitle = $(".modal-title");

		modalTitle.empty();
		modalBody.empty();

		let pokemonName = $(`<h1>${pokemon.name}</h1>`);
		let pokemonImage = $(
			`<img class="modal-img mx-auto" src="${pokemon.imageUrl}" alt="Drawing of Pokemon ${pokemon.name}">`
		);
		let pokemonHeight = $(
			`<p class="ml-4 mt-3 mb-0">Height: ${pokemon.height}</p>`
		);
		let pokemonWeight = $(`<p class="ml-4 mb-0">Weight: ${pokemon.weight}</p>`);
		let pokemonTypes = $(
			`<p class="ml-4">Types: ${pokemon.types}</p>`
		);

		modalTitle.append(pokemonName);
		modalBody.append(pokemonImage);
		modalBody.append(pokemonHeight);
		modalBody.append(pokemonTypes);
	}

	function showDetails(pokemon) {
		loadDetails(pokemon).then(() => {
			showModal(pokemon);
			//modal.show(pokemon.name, pokemon.height, pokemon.types, pokemon.svgUrl);
		});
	}

	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function addEvent(button, pokemon) {
		button.addEventListener("click", function() {
			showDetails(pokemon);
		});
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
