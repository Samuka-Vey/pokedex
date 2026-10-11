export function createPokemonCard(pokemon) {
    const card = document.createElement('article');

    card.dataset.id = pokemon.id;

    card.className = `
        cursor-pointer rounded-xl bg-slate-800 p-4
        text-center text-white transition
        hover:scale-105 hover:bg-slate-700
    `;

    const image = document.createElement('img');
    image.src = pokemon.image;
    image.alt = pokemon.name;
    image.loading = 'lazy';
    image.className = 'mx-auto h-24 w-24 object-contain';

    const title = document.createElement('h2');
    title.textContent = pokemon.name;
    title.className = 'font-bold capitalize';

    const number = document.createElement('p');
    number.textContent = `Nº ${pokemon.id}`;
    number.className = 'text-sm text-slate-400';

    card.append(image, title, number);

    return card;
}