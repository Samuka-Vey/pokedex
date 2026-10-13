const modal = document.querySelector("#pokemon-modal");
const title = document.querySelector("#modal-title");
const subtitle = document.querySelector("#modal-subtitle");
const content = document.querySelector("#modal-content");
const closeButton = document.querySelector("#modal-close");

export function renderPokemonModal(pokemon) {
  title.textContent = pokemon.name;
  subtitle.textContent = `Nº ${pokemon.id}`;

  console.log(pokemon.id);

  const image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`;

  image.onerror = () => {
    image.onerror = null;

    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

    image.onerror = () => {
      image.onerror = null;

      image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`;
    };
  };
  image.alt = pokemon.name;
  image.className = "mx-auto h-32 w-32 object-contain";
  image.style.imageRendering = "pixelated";

  const types = document.createElement("p");
  types.className = "text-center capitalize text-indigo-300";
  types.textContent = pokemon.types.map((item) => item.type.name).join(" / ");

  const height = document.createElement("p");
  height.textContent = `Altura: ${pokemon.height / 10} m`;

  const weight = document.createElement("p");
  weight.textContent = `Peso: ${pokemon.weight / 10} kg`;

  const statsTitle = document.createElement("h3");
  statsTitle.textContent = "Atributos";
  statsTitle.className = "mb-2 mt-4 text-lg font-bold";

  const stats = document.createElement("ul");
  stats.className = "space-y-2";

  pokemon.stats.forEach((item) => {
    const stat = document.createElement("li");
    stat.className = `
            flex justify-between rounded-lg
            bg-slate-800 p-2
        `;

    const name = document.createElement("span");
    name.textContent = item.stat.name.replaceAll("-", " ");

    const value = document.createElement("span");
    value.textContent = item.base_stat;

    stat.append(name, value);
    stats.appendChild(stat);
  });

  content.replaceChildren(image, types, height, weight, statsTitle, stats);

  modal.showModal();
}

export function closePokemonModal() {
  modal.close();
}

export function setupPokemonModal() {
  closeButton.addEventListener("click", closePokemonModal);
}
