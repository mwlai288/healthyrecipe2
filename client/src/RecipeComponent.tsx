import axios from 'axios';
import * as React from 'react';

export default class RecipeComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            recipe: []
        };
    }

    public addRecipeToTable = (recipe: any) => {
        const tbody = document.getElementById('recipe-table-body');
        tbody!.innerHTML += `
        <tr>
          <th scope="row"></th>
          <td></td>
        </tr>
        `
      }

      public getRecipe = async (e: any) => {
        e.preventDefault();
        const { search } = this.state;
        const res = await axios.get(
          `https://api.edamam.com/search?q=${search}&app_id=c71621aa&app_key=2b7de0e604c8a0bf9f16e4b6419b9835`
        );
        this.setState({
          recipes: res.data.hits
        });
      };
       public like=async(recipe:any)=>{
            const ingredients=new Array();
            recipe.recipe.ingredients.forEach((each:any,i:number)=>{
               const one= {
                    "ingredient": {
     
                        "ingredients": each.text
                    },
                    "quantity": each.weight
            }
              ingredients.push(one);
            });
        }

    public render() {
        return (
            <div>
                <h1>Recipe</h1>
                <br />
                <div className="container" >
                    <div className="row">
                        <table className="table table-bordered table-secondary">
                            <thead>
                                <tr>
                                    <th scope="col">Attributes</th>
                                    <th scope="col">Values</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                </tr>
                                <tr>
                                    <th>Diet Label</th>
                                </tr>
                                <tr>
                                    <th>Yield</th>
                                </tr>
                                <tr>
                                    <th>Calories</th>
                                </tr>
                                <tr>
                                    <th>Fat</th>
                                </tr>
                                <tr>
                                    <th>Protein</th>
                                </tr>
                                <tr>
                                    <th>Carbs</th>
                                </tr>
                                <tr>
                                    <th>Fiber</th>
                                </tr>
                                <tr>
                                    <th>Sodium</th>
                                </tr>
                                <tr>
                                    <th>Cholesterol</th>
                                </tr>
                                <tr>
                                    <th>Recipe</th>
                                </tr>
                            </thead>
                            
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
