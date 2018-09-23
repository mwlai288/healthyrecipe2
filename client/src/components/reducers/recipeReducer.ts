import { recipeTypes } from "../actions/recipeActions/recipeAction";
import { IRecipeState } from ".";

const initialState: IRecipeState = {
  search: "",
  recipe: []
};

export const recipeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case recipeTypes.INGREDIENT_NAME:
      return {
        ...state,
        search: action.payload.search
      };
    case recipeTypes.RECIPE:
      return {
        ...state,
        recipe: action.payload.searchIngredient
      };
  }
  return state;
};
