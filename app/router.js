import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokemonController } from "./controllers/PokemonController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokemonController],
    view: /*html*/`
    <div class="d-flex gap-3">
      <div>
        <div>
          <button class="btn btn-secondary" id='previous' disabled onclick="app.PokemonController.go('previous')">Previous</button>
          <button class="btn btn-secondary" id='next' disabled onclick="app.PokemonController.go('next')">Next</button>
        </div>
        <div id='pokemon'></div>
      </div>
      <div id='myPokemon'></div>
        
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */