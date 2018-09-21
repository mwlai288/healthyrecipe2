import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      `https://api.edamam.com/search?q=${search}&app_id=c71621aa&app_key=2b7de0e604c8a0bf9f16e4b6419b9835&from=0&to=21`
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
      calories: recipe.recipe.calories || 0,
      fat: recipe.recipe.totalNutrients.FAT.quantity || 0,
      fiber: recipe.recipe.totalNutrients.FIBTG.quantity || 0,
      protein: recipe.recipe.totalNutrients.PROCNT.quantity || 0,
      carbs: recipe.recipe.totalNutrients.CHOCDF.quantity || 0,
      sodium: recipe.recipe.totalNutrients.NA.quantity || 0,
      cholesterol: recipe.recipe.totalNutrients.quantity || 0,
      recipe: recipe.recipe.url,
      dietLabel: recipe.recipe.dietLabels[0],
      healthLabel: [],
      ingredients: ingredients
    };

    const res1 = await axios.post("http://localhost:8080/recipe", payload);
    const comment = {
      post: "",
      recipeId: res1.data.recipeId
    };
    const res = await axios.post(
      `http://localhost:8080/comment/${localStorage.getItem("userId")}`,
      comment
    );
    if (res.status === 201) {
      this.props.history.push("/dashboard");
    }
    console.log(res);
    console.log(res1);
    //  localStorage.setItem('commentId', res..comment)
  };

  public render() {
    return (
      <div>
        <SearchBox className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search" />
            </span>
          </div>
          <input
            type="text"
            value={this.state.search}
            className="form-control"
            placeholder="Search"
            name="search"
            aria-describedby="basic-addon1"
            onChange={this.handleChange}
          />
          <button onClick={this.searchRecipe}>Search</button>
        </SearchBox>

        <RecipeGrid>
          {this.state.recipes.map((recipe: any, i: number) => {
            return (
              <div key={i}>
                <div className="container">
                  <div className="row">
                    <div className="card mb-4 shadow-sm">
                      <ImageSize
                        className="card-img-top"
                        src={recipe.recipe.image}
                        alt="No Image Available"
                      />

                      <div className="card-body">
                        <p className="card-text">
                          Name:
                          {recipe.recipe.label}
                        </p>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Calories:
                          {Math.round(
                            (recipe.recipe.calories /= recipe.recipe.yield)
                          )}
                        </p>
                      </div>
                      <div className="btn-group card-body">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                            this.like(recipe);
                          }}
                        >
                          Like
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <Link to={`/recipe/${recipe.recipe.label}`}>
                            View
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </RecipeGrid>
      </div>
    );
  }
}

const ImageSize = styled.img`
  display: block;
  height: 225px;
  width: 20rem;
`;

const RecipeGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;

const SearchBox = styled.div`
  padding-top: 4rem;
`;
