import { combineReducers } from "redux";
import { registerReducer } from "./authReducers/registerReducer";
import { signInReducer } from "./authReducers/signInReducer";
// import { chuckNorrisReducer } from "./chuck-norris.reducer";
// import { PokemonSprite } from "../model/PokemonSprite";
// import { recipeReducer } from "./recipeReducers/recipeReducer";

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

// export interface IRecipeState {
//   search: string;
// }

export interface ISignInState {
  password: string;
  username: string;
  errorMessage: string;
}

export interface IState {
  register: IRegisterState;
  // clicker: IClickerState,
  // recipe: IRecipeState;
  signIn: ISignInState;
}

export const state = combineReducers<IState>({
  register: registerReducer,
  // clicker: clickerReducer,
  // recipe: recipeReducer,
  signIn: signInReducer
});
