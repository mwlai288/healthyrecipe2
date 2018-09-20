import axios from "axios";
import * as React from "react";
// import { Link } from "react-router-dom";

export default class Recipe extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipe: []
    };
  }

  public async componentDidMount() {
    const name = this.props.match.params.name;
    console.log(name);
    const res = await axios.get(
      `https://api.edamam.com/search?q=${name}&app_id=c71621aa&app_key=2b7de0e604c8a0bf9f16e4b6419b9835&from=0&to=1`
    );
    console.log(res);
    this.setState({
      recipe: res.data.hits
    });
  }

  //   public getRecipe = async (e: any) => {};
  //   public like = async (recipe: any) => {
  //     const ingredients = new Array();
  //     recipe.recipe.ingredients.forEach((each: any, i: number) => {
  //       const one = {
  //         ingredient: {
  //           ingredients: each.text
  //         },
  //         quantity: each.weight
  //       };
  //       ingredients.push(one);
  //     });
  //   };

  public render() {
    return (
      <div>
        <h1>Recipe</h1>
        <br />
        <div className="container">
          <div className="row">
            <table className="table table-bordered table-secondary">
              {this.state.recipe.map((item: any, i: number) => {
                return (
                  <thead key={i}>
                    <tr>
                      <th scope="col">Attributes</th>
                      <th scope="col">Values</th>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>
                        <p>{item.recipe.label}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Diet Label</th>
                      <td>
                        <p>{item.recipe.dietLabels}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Yield</th>
                      <td>
                        <p>{item.recipe.yield}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Calories</th>
                      <td>
                        <p>{item.recipe.calories}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Fat</th>
                      <td>
                        <p>{item.recipe.totalNutrients.FAT.quantity}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Protein</th>
                      <td>
                        <p>{item.recipe.totalNutrients.PROCNT.quantity}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Carbs</th>
                      <td>
                        <p>{item.recipe.totalNutrients.CHOCDF.quantity}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Fiber</th>
                      <td>
                        <p>{item.recipe.totalNutrients.FIBTG.quantity}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Sodium</th>
                      <td>
                        <p>{item.recipe.totalNutrients.NA.quantity}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Cholesterol</th>
                      {/* <td>
                        <p>{item.recipe.CHOLE.quantity}</p>
                      </td> */}
                    </tr>
                    <tr>
                      <th>Recipe</th>
                      <td>
                        {/* <Link> {item.recipe.url}</Link> */}
                      </td>
                    </tr>
                  </thead>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
