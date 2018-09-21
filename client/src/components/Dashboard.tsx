import * as React from "react";
import axios from "axios";
import styled from "styled-components";

export default class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  public componentDidMount = async () => {
    const res = await axios.get(
      `http://localhost:8080/users/${localStorage.getItem("userId")}`
    );
    localStorage.setItem("friends", JSON.stringify(res.data.friends));
    localStorage.setItem("comments", JSON.stringify(res.data.comment));
    let comment = localStorage.getItem("comments");

    if (comment) {
      // com=JSON.parse(comment);

      const res2 = await axios.post(
        `http://localhost:8080/recipe/ids`,
        JSON.parse(comment)
      );
      console.log(res2);
      this.setState({
        recipes: res2.data
      });
    }
  };

  public render() {
    return (
      <div>
        <RecipeGrid>
          {this.state.recipes.map((recipe: any, i: number) => {
            return (
              <div key={i}>
                <div className="container">
                  <div className="row">
                    <div className="card mb-4 shadow-sm">
                      <ImageSize
                        className="card-img-top"
                        src={recipe.image}
                        alt="No Image Available"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Name:
                          {recipe.label}
                        </p>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Calories:
                          {recipe.calories}
                        </p>
                      </div>
                      <div className="btn-group card-body" />
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
const RecipeGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;
const ImageSize = styled.img`
  display: block;
  height: 225px;
  width: 20rem;
`;
