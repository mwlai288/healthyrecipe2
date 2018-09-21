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
    return (
      <div>
        {this.state.recipe.map((item: any, i: number) => {
          return (
            <div key={i}>
              <RecipeHeader>
                <FoodPic src={item.recipe.image} alt="No image available" />

                <FoodName>{item.recipe.label}</FoodName>
                <div>
                  Diet Label: {item.recipe.dietLabels} <br />
                  Servings: {item.recipe.yield} <br />
                  Calories: {Math.round(item.recipe.calories)} <br />
                </div>
              </RecipeHeader>
              <RecipeNutrition>
                <NutritionHeading>Nutrition</NutritionHeading>
                <span>
                  Fat:
                  {item.recipe.totalNutrients.FAT === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.FAT.quantity)}
                  grams <br />
                  Protein:
                  {item.recipe.totalNutrients.PROCNT === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.PROCNT.quantity)}
                  grams <br />
                  Carbs:
                  {item.recipe.totalNutrients.CHOCDF === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
                  grams <br />
                  Fiber:
                  {item.recipe.totalNutrients.FIBTG === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.FIBTG.quantity)}
                  grams <br />
                  Sodium:
                  {item.recipe.totalNutrients.NA === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.NA.quantity)}
                  grams <br />
                  Cholesterol:
                  {item.recipe.totalNutrients.CHOLE === undefined
                    ? 0
                    : Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
                  grams
                  <br />
                  <a target="_blank" href={item.recipe.url}>
                    View Full Recipe
                  </a>
                </span>
              </RecipeNutrition>
            </div>
          );
        })}
      </div>
    );
  }
}

const RecipeHeader = styled.span`
  text-align: right;
  top: -7rem;
`;

const RecipeNutrition = styled.div`
  text-align: right;
  /* padding: 2rem 10%; */
`;

const FoodName = styled.h1`
  font-style: italic;
  text-decoration: underline;
`;

const NutritionHeading = styled.h1`
  font-style: italic;
  text-decoration: underline;
`;

const FoodPic = styled.img`
  border-style: groove;
  box-shadow: 0 0 35px black;
  position: relative;
  top: 10rem;
`;
