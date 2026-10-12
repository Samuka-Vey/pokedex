import Api from "./api.js";

class PokemonService {
  constructor() {
    this.api = new Api("https://pokeapi.co/api/v2");
  }

  async getAll(limit = 50, offset = 0) {
    const data = await this.api.get(`/pokemon?limit=${limit}&offset=${offset}`);

    return data.results.map((pokemon) => {
      const id = pokemon.url.split("/").filter(Boolean).pop();

      return {
        id: Number(id),
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });
  }

  async getByName(name) {
    return await this.api.get(
      `/pokemon/${encodeURIComponent(name.toLowerCase())}`,
    );
  }

  async getById(id) {
    return await this.api.get(`/pokemon/${id}`);
  }

  async getByType() {
    const data = await this.api.get(`/type`);
    return data.results.map((type) => type.name);
  }

  async filterByType(type) {
    const data = await this.api.get(`/type/${type.toLowerCase()}`);

    return data.pokemon.map((item) => {
      const pokemon = item.pokemon;

      const id = Number(pokemon.url.split("/").filter(Boolean).pop());

      return {
        id: id,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });
  }
}

export default PokemonService;
