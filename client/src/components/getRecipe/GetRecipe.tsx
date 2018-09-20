import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class GetRecipe extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipes: [],
      search: ""
    };
  }

  public handleChange = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  public searchRecipe = async (e: any) => {
    e.preventDefault();
    const { search } = this.state;
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=c71621aa&app_key=2b7de0e604c8a0bf9f16e4b6419b9835`
    );
    console.log(res.data.hits);
    this.setState({
      recipes: res.data.hits
    });
  };
  public like = async (recipe: any) => {
    const ingredients = new Array();
    recipe.recipe.ingredients.forEach((each: any, i: number) => {
      const one = {
        ingredient: {
          ingredients: each.text
        },
        quantity: each.weight
      };
      ingredients.push(one);
    });
    const payload = {
      image: recipe.recipe.image,
      label: recipe.recipe.label,
      yield: recipe.recipe.yield,
      calories: recipe.recipe.calories,
      fat: recipe.recipe.totalNutrients.FAT.quantity,
      fiber: recipe.recipe.totalNutrients.FIBTG.quantity,
      protein: recipe.recipe.totalNutrients.PROCNT.quantity,
      carbs: recipe.recipe.totalNutrients.CHOCDF.quantity,
      sodium: recipe.recipe.totalNutrients.NA.quantity,
      cholesterol: recipe.recipe.totalNutrients.CHOLE.quantity,
      recipe: recipe.recipe.url,
      dietLabel: recipe.recipe.dietLabels[0],
      healthLabel: [],
      ingredients: ingredients
    };

    await axios.post("http://localhost:8080/recipe", payload);
    // let data = JSON.parse(res.data.split("}{") + "}");
    // let comment = { recipeId: data.recipeId, post: "" };
    // await axios.post(
    //   `http://localhost:8080/comments/${localStorage.getItem(userId)}`,
    //   comment
    // );
  };

  public render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={this.state.search}
        />
        <button onClick={this.searchRecipe}>Search</button>
        <div>
          {this.state.recipes.map((recipe: any, i: number) => {
            return (
              <div key={i}>
                <img src={recipe.recipe.image} alt="No Image Available" />
                <div>
                  <p>
                    Name:
                    {recipe.recipe.label}
                  </p>
                </div>
                <p>
                  Calories:
                  {Math.round((recipe.recipe.calories /= recipe.recipe.yield))}
                </p>
                <button
                  onClick={() => {
                    this.like(recipe);
                  }}
                >
                  like
                </button>
                <Link to={`/recipe/${recipe.recipe.label}`}>View</Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
