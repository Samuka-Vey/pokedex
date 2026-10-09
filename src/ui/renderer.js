const pokemonList = document.querySelector('#pokemon-list');

export function renderPokemonList(pokemonList) {
    const container = document.querySelector('#pokemon-list');

    container.replaceChildren();

    pokemonList.forEach(pokemon => {
        const card = document.createElement('article');

        const image = document.createElement('img');
        image.src = pokemon.image;
        image.alt = pokemon.name;
        image.loading = 'lazy';

        const title = document.createElement('h2');
        title.textContent = pokemon.name;

        const number = document.createElement('p');
        number.textContent = `Nº ${pokemon.id}`;
        number.setAttribute('data-id', pokemon.id);

        card.append(image, title, number);
        container.appendChild(card);
    });
}

export function renderLoading() {
    pokemonList.innerHTML = '<p>Carregando Pokémon...</p>';
}

export function renderError(message) {
    pokemonList.innerHTML = '';

    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;

    pokemonList.appendChild(errorMessage);
}

export function renderEmpty() {
    pokemonList.innerHTML = '<p>Nenhum Pokémon encontrado.</p>';
}