import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function drawPokemon() {
  setHTML('pokemon', AppState.pokemon.map(p => {
    return `<div>
    <button class="btn btn-dark" onclick="app.PokemonController.getEm('${p.url}')"><b>${p.name}</b></button>
    </div>
    `
  }).join(''))
}

function drawMyPokemon() {

}

function drawNext() {
  const button = document.getElementById('next')
  if (AppState.next) {
    button.removeAttribute('disabled')
    button.classList.remove('d-none')
  } else {
    button.classList.add('d-none')
    button.setAttribute('disabled', 'true')
  }
}

function drawPrevious() {
  const button = document.getElementById('previous')
  if (AppState.previous) {
    button.removeAttribute('disabled')
    button.classList.remove('d-none')
  } else {
    button.classList.add('d-none')
    button.setAttribute('disabled', 'true')
  }
}


export class PokemonController {
  constructor() {
    // console.log('pokemon controller')
    this.getPokemons()
    AppState.on('account', this.getMyPokemons)
    AppState.on('pokemon', drawPokemon)
    AppState.on('myPokemon', drawMyPokemon)
    AppState.on('next', drawNext)
    AppState.on('previous', drawPrevious)

  }


  async getPokemons() {
    try {
      // console.log('getting pokemons')
      await pokemonService.getPokemons()
    } catch (error) {
      Pop.error(error)
    }
  }

  async getMyPokemons() {
    try {
      // console.log('getting my pokemons')
      await pokemonService.getMyPokemons()
    } catch (error) {
      Pop.error(error)
    }
  }


  async go(direction) {
    try {
      await pokemonService.getPokemons(direction == 'next' ? AppState.next : AppState.previous)
    } catch (error) {
      Pop.error(error)
    }
  }

  async getEm(url) {
    try {
      await pokemonService.getPokemon(url)
    } catch (error) {
      Pop.error(error)
    }
  }
}