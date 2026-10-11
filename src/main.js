import PokemonService from './service/pokemonService.js';

import {
    renderPokemonList,
    renderPokemonDetails,
    renderLoading,
    renderError,
    renderEmpty,
    initRenderer
} from './ui/renderer.js';

const pokemonService = new PokemonService();

let allPokemon = [];

async function init() {
    initRenderer();
    renderLoading();

    try {
        allPokemon = await pokemonService.getAll(10000, 0);

        renderPokemonList(allPokemon);
    } catch (error) {
        console.error(error);
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

    if (filteredPokemon.length === 0) {
        renderEmpty();
        return;
    }

    renderPokemonList(filteredPokemon);
});

const pokemonList = document.querySelector('#pokemon-list');

pokemonList.addEventListener('click', async event => {
    const card = event.target.closest('article[data-id]');

    if (!card) return;

    const id = card.dataset.id;

    try {
        const pokemon = await pokemonService.getByName(id);

        renderPokemonDetails(pokemon);
    } catch (error) {
        console.error('Erro ao buscar detalhes do Pokémon:', error);
    }
});

init();