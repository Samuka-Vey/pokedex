import PokemonService from "./service/pokemonService.js";

import {
    renderPokemonList,
    renderPokemonDetails,
    renderLoading,
    renderError,
    renderEmpty,
    initRenderer,
    pokemonSelector,
} from "./ui/renderer.js";

import {
    renderPagination,
} from "./ui/pokemonPagination.js";

const pokemonService = new PokemonService();

let allPokemon = [];
let pokemonByType = null;

let currentPage = 1;
const pageSize = 20;

const searchInput = document.querySelector("#search-input");
const typeSelect = document.querySelector("#type-select");
const pokemonList = document.querySelector("#pokemon-list");

function updatePokemonList() {
    const query = searchInput.value.trim().toLowerCase();

    const source = pokemonByType ?? allPokemon;

    const filteredPokemon = source.filter((pokemon) =>
        pokemon.name.startsWith(query)
    );

    if (filteredPokemon.length === 0) {
        renderEmpty();
        renderPagination(0, currentPage, handlePageChange);
        return;
    }

    const totalPages = Math.ceil(filteredPokemon.length / pageSize);

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const pagePokemon = filteredPokemon.slice(start, end);

    renderPokemonList(pagePokemon);

    renderPagination(
        totalPages,
        currentPage,
        handlePageChange
    );
}

function handlePageChange(page) {
    currentPage = page;
    updatePokemonList();
}

searchInput.addEventListener("input", () => {
    currentPage = 1;
    updatePokemonList();
});

typeSelect.addEventListener("change", async () => {
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
        console.error("Erro ao filtrar Pokémon:", error);

        renderError("Erro ao filtrar Pokémon por tipo.");
        renderPagination(0, currentPage, handlePageChange);
    }
});

pokemonList.addEventListener("click", async (event) => {
    const card = event.target.closest("article[data-id]");

    if (!card) return;

    try {
        const pokemon = await pokemonService.getByName(
            card.dataset.id
        );

        renderPokemonDetails(pokemon);
    } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
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
        console.error("Erro ao inicializar a Pokédex:", error);

        renderError("Erro ao carregar os Pokémon.");
        renderPagination(0, currentPage, handlePageChange);
    }
}

init();