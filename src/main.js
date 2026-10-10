import PokemonService from './service/pokemonService.js';

import {
    renderPokemonList,
    renderLoading,
    renderError
} from './ui/renderer.js';

const pokemonService = new PokemonService();

let allPokemon = [];

async function init() {
    renderLoading();

    try {
        allPokemon = await pokemonService.getAll(10000);

        renderPokemonList(allPokemon);
    } catch (error) {
        renderError('Erro ao carregar os Pokémon.');
    }
}

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        renderPokemonList(allPokemon);
        return;
    }

    const filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.startsWith(query)
    );

    renderPokemonList(filteredPokemon);
});

init();