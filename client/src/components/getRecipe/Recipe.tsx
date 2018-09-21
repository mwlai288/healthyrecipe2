import axios from "axios";
import * as React from "react";
import styled from "styled-components";

export default class Recipe extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipe: []
    };
  }

  public async componentDidMount() {
    const name = this.props.match.params.name;
    const res = await axios.get(
      `https://api.edamam.com/search?q=${name}&app_id=c71621aa&app_key=2b7de0e604c8a0bf9f16e4b6419b9835&from=0&to=1`
    );
    this.setState({
      recipe: res.data.hits
    });
  }

  public render() {
    // const ingredientList = this.state.recipe.ingredientLines.forEach(
    //   (line: any) => {
    //     <ul>
    //       <li>{line}</li>
    //     </ul>;
    //   }
    // );

    return (
      <div>
        <h1>Recipe</h1>
        <br />
        {this.state.recipe.map((item: any, i: number) => {
          return (
            <div key={i}>
              <RecipeHeader>
                <img src={item.recipe.image} alt="No image available" />
                <FoodName>{item.recipe.label}</FoodName>
              </RecipeHeader>

              <div>
                <h2>
                  Diet Label:
                  {item.recipe.dietLabels}
                </h2>
                <p>Servings</p>
                <p>{item.recipe.yield}</p>
                <h2>Calories</h2>
                <p>{Math.round(item.recipe.calories)}</p>
              </div>

              <div>
                <h2>Nutrition</h2>
                <h2>Fat</h2>
                <p>
                  {item.recipe.totalNutrients.FAT === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.FAT.quantity)}
                  grams
                </p>
                <h2>Protein</h2>
                {item.recipe.totalNutrients.PROCNT === undefined
                  ? 0
                  : Math.round(item.recipe.totalNutrients.PROCNT.quantity)}
                grams
                <h2>Carbs</h2>
                {item.recipe.totalNutrients.CHOCDF === undefined
                  ? 0
                  : Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
                grams
                <h2>Fiber</h2>
                {item.recipe.totalNutrients.FIBTG === undefined
                  ? 0
                  : Math.round(item.recipe.totalNutrients.FIBTG.quantity)}
                grams
                <h2>Sodium</h2>
                {item.recipe.totalNutrients.NA === undefined
                  ? 0
                  : Math.round(item.recipe.totalNutrients.NA.quantity)}
                grams
                <h2>Cholesterol</h2>
                {item.recipe.totalNutrients.CHOLE === undefined
                  ? 0
                  : Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
                grams
              </div>

              {item.recipe.ingredientLines.map((line: any) => {
                <ul>
                  <li>line</li>
                </ul>;
                console.log(line);
              })}

              <h2>Recipe</h2>
              <a target="_blank" href={item.recipe.url}>
                View Full Recipe
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

const RecipeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const FoodName = styled.h1`
  font-style: italic;
`;
