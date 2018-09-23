import { combineReducers } from "redux";
import { registerReducer } from "./authReducers/registerReducer";
import { signInReducer } from "./authReducers/signInReducer";
import { recipeReducer } from "./recipeReducer";
// import { chuckNorrisReducer } from "./chuck-norris.reducer";
// import { PokemonSprite } from "../model/PokemonSprite";

// export interface IChuckNorrisState {
//   buyJokeEnabled: boolean,
//   joke: string,
// }

export interface IRegisterState {
  username: string;
  password: string;
  email: string;
  avatar: string;
  errorMessage: string;
}

export interface IRecipeState {
  search: "";
  recipe: [];
}

export interface ISignInState {
  password: string;
  username: string;
  errorMessage: string;
}

export interface IState {
  register: IRegisterState;
  recipe: IRecipeState;
  signIn: ISignInState;
  // clicker: IClickerState,
}

export const state = combineReducers<IState>({
  register: registerReducer,
  recipe: recipeReducer,
  signIn: signInReducer
  // clicker: clickerReducer,
});
