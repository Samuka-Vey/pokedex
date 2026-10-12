import { createPokemonCard } from './pokemonCard.js';

import {
    renderPokemonModal,
    setupPokemonModal,
} from './pokemonModal.js';

import { populateTypeSelector } from './pokemonSelector.js';

const pokemonList = document.querySelector('#pokemon-list');

export function renderPokemonList(pokemonList) {
    const container = document.querySelector('#pokemon-list');

    const cards = pokemonList.map(createPokemonCard);

    container.replaceChildren(...cards);
}

export function pokemonSelector(pokemonService) {
    pokemonService.getByType().then(types => {
        populateTypeSelector(types);
    });
}

export function renderPokemonDetails(pokemon) {
    renderPokemonModal(pokemon);
}

export function initRenderer() {
    setupPokemonModal();
}

export function renderLoading() {
    pokemonList.textContent = 'Carregando Pokémon...';
}

export function renderError(message) {
    pokemonList.replaceChildren();

    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;

    pokemonList.appendChild(errorMessage);
}

export function renderEmpty() {
    pokemonList.textContent = 'Nenhum Pokémon encontrado.';
}