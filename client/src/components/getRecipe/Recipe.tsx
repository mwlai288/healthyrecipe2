import axios from "axios";
import * as React from "react";
import styled from "styled-components";

export default class Recipe extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipe: [],
      users: []
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

    const recipeId = await axios.post(
      `http://localhost:8080/recipe/name`,
      name
    );
    // localStorage.setItem("comments", JSON.stringify(res.data.comment));
    let comment = localStorage.getItem("comments");
    console.log(name);

    if (comment) {
      const recipeComment = JSON.parse(comment);
      const test = recipeComment.filter(
        (comment: any) => comment.recipeId == recipeId.data.recipeId
      );
      console.log(test);
    }
  }

  public render() {
    return (
      <div>
        {this.state.recipe.map((item: any, i: number) => {
          return (
            <div key={i}>
              <FoodName>{item.recipe.label}</FoodName>
              <GridTest>
                <FoodPic src={item.recipe.image} alt="No image available" />
                <NutrionInfo>
                  <NutritionTitle>Nutritional Info</NutritionTitle>
                  Diet Label:
                  {item.recipe.dietLabels
                    ? " Seems Reasonable"
                    : item.recipe.dietLabels}
                  <br />
                  Servings: {item.recipe.yield} <br />
                  Calories: {Math.round(item.recipe.calories)} <br />
                  <div>
                    <span>
                      Fat:
                      {item.recipe.totalNutrients.FAT === undefined
                        ? 0
                        : Math.round(item.recipe.totalNutrients.FAT.quantity)}
                      grams <br />
                      Protein:
                      {item.recipe.totalNutrients.PROCNT === undefined
                        ? 0
                        : Math.round(
                            item.recipe.totalNutrients.PROCNT.quantity
                          )}
                      grams <br />
                      Carbs:
                      {item.recipe.totalNutrients.CHOCDF === undefined
                        ? 0
                        : Math.round(
                            item.recipe.totalNutrients.CHOCDF.quantity
                          )}
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
                  </div>
                </NutrionInfo>
              </GridTest>
            </div>
          );
        })}
      </div>
    );
  }
}

const NutritionTitle = styled.h1`
  font-style: italic;
  text-decoration: underline;
`;

const FoodName = styled.h1`
  display: flex;
  font-style: italic;
  font-family: "Prata", serif;
  justify-content: center;
  position: top;
`;

const NutrionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FoodPic = styled.img`
  border-style: groove;
  box-shadow: 0 0 35px black;
`;

const GridTest = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 5rem;
`;
