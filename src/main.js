import PokemonService from './service/pokemonService.js';

import {
    renderPokemonList,
    renderPokemonDetails,
    renderLoading,
    renderError,
    renderEmpty,
    initRenderer,
    pokemonSelector
} from './ui/renderer.js';

const pokemonService = new PokemonService();

let allPokemon = [];
let pokemonByType = null;

let currentPage = 1;
const pageSize = 20;

const searchInput = document.querySelector('#search-input');
const typeSelect = document.querySelector('#type-select');
const pokemonList = document.querySelector('#pokemon-list');
const pagination = document.querySelector('#pagination');

function updatePokemonList() {
    const query = searchInput.value.trim().toLowerCase();

    const source = pokemonByType ?? allPokemon;

    const filteredPokemon = source.filter(pokemon =>
        pokemon.name.startsWith(query)
    );

    if (filteredPokemon.length === 0) {
        renderEmpty();
        renderPagination(0);
        return;
    }

    const totalPages = Math.ceil(
        filteredPokemon.length / pageSize
    );

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const pagePokemon = filteredPokemon.slice(start, end);

    renderPokemonList(pagePokemon);
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    pagination.replaceChildren();

    if (totalPages <= 1) {
        return;
    }

    const previousButton = document.createElement('button');

    previousButton.textContent = 'Anterior';
    previousButton.disabled = currentPage === 1;

    previousButton.className = `
        rounded-lg bg-slate-700 px-4 py-2 text-white
        transition hover:bg-slate-600
        disabled:cursor-not-allowed disabled:opacity-40
    `;

    previousButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePokemonList();
        }
    });

    const pageInfo = document.createElement('span');

    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    pageInfo.style.color = '#000';
    pageInfo.className = 'text-white';

    const nextButton = document.createElement('button');

    nextButton.textContent = 'Próxima';
    nextButton.disabled = currentPage === totalPages;

    nextButton.className = `
        rounded-lg bg-slate-700 px-4 py-2 text-white
        transition hover:bg-slate-600
        disabled:cursor-not-allowed disabled:opacity-40
    `;

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePokemonList();
        }
    });

    pagination.append(
        previousButton,
        pageInfo,
        nextButton
    );
}

searchInput.addEventListener('input', () => {
    currentPage = 1;

    updatePokemonList();
});

typeSelect.addEventListener('change', async () => {
    const selectedType = typeSelect.value;

    try {
        currentPage = 1;
        renderLoading();

        if (!selectedType) {
            pokemonByType = null;
        } else {
            pokemonByType =
                await pokemonService.filterByType(selectedType);
        }

        updatePokemonList();

    } catch (error) {
        console.error('Erro ao filtrar Pokémon:', error);

        renderError('Erro ao filtrar Pokémon por tipo.');
        pagination.replaceChildren();
    }
});

pokemonList.addEventListener('click', async event => {
    const card = event.target.closest('article[data-id]');

    if (!card) return;

    const id = card.dataset.id;

    try {
        const pokemon = await pokemonService.getByName(id);

        renderPokemonDetails(pokemon);

    } catch (error) {
        console.error(
            'Erro ao buscar detalhes do Pokémon:',
            error
        );
    }
});

async function init() {
    initRenderer();
    renderLoading();

    try {
        allPokemon = await pokemonService.getAll(10000, 0);

        await pokemonSelector(pokemonService);

        updatePokemonList();

    } catch (error) {
        console.error('Erro ao inicializar a Pokédex:', error);

        renderError('Erro ao carregar os Pokémon.');
        pagination.replaceChildren();
    }
}

init();