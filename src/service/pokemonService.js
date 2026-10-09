
import Api from './api.js';

class PokemonService {
    constructor() {
        this.api = new Api('https://pokeapi.co/api/v2');
    }

    async getAll(limit = 50, offset = 0) {
        const data = await this.api.get(
            `/pokemon?limit=${limit}&offset=${offset}`
        );

         console.log('Data fetched from API:', data);


        return data.results.map(pokemon => {
            const id = pokemon.url
                .split('/')
                .filter(Boolean)
                .pop();

            return {
                id: Number(id),
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            };
        });

    }       

    async getByName(name) {
        return await this.api.get(
            `/pokemon/${encodeURIComponent(name.toLowerCase())}`
        );
    }
}

export default PokemonService;