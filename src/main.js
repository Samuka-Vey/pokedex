
import PokemonService from './service/pokemonService.js';

import {
    renderPokemonList,
    renderLoading,
    renderError
} from './ui/renderer.js';

const pokemonService = new PokemonService();

async function init() {
    renderLoading();

    try {
        const data = await pokemonService.getAll();

        if (!Array.isArray(data)) {
            throw new Error('Dados inválidos');
        }

        renderPokemonList(data);
    } catch (error) {
        console.error('Erro ao carregar Pokémon:', error);
        renderError('Não foi possível carregar os Pokémon.');
    }
}

init();