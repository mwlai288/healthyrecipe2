import axios from "axios";

export const recipeTypes = {
  INGREDIENT_NAME: "INGREDIENT_NAME",
  RECIPE: "RECIPE"
};

export const ingredients = (search: string) => {
  return {
    payload: {
      ingredientName: search
    },
    type: recipeTypes.INGREDIENT_NAME
  };
};

export const getIngredient = (search: string) => async (dispatch: any) => {
  const appId = process.env.REACT_APP_EDMAM_APP_ID;
  const apiKey = process.env.REACT_APP_EDAMAM_API_KEY;
  const searchIngredient: any = await axios.get(
    `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}`
  );
  console.log(search);
  dispatch({
    payload: {
      searchIngredient
    },
    type: recipeTypes.RECIPE
  });
};
