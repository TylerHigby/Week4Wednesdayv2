import { AppState } from "../AppState.js";
import { api, pokemonApi } from "./AxiosService.js";

class PokemonService {
  async getPokemon(url) {
    const res = await pokemonApi.get(url)
    AppState.activePokemon = res.data
  }
  async getPokemons(url = '/pokemon') {
    const res = await pokemonApi.get(url)
    console.log(res.data.results)
    AppState.activePokemon = res.data.results
    AppState.next = res.data.next
    AppState.previous = res.data.previous
  }

  async getMyPokemons() {
    const res = await api.get('/api/pokemon')
    // console.log(res.data)
    AppState.myPokemon = res.data
  }

}


export const pokemonService = new PokemonService()