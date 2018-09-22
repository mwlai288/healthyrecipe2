import * as React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Dashboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      recipes: [],
      users: []
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
      const res1 = await axios.post(
        `http://localhost:8080/recipe/ids`,
        JSON.parse(comment)
      );

      let friend = localStorage.getItem("friends");

      if (friend) {
        const res2 = await axios.post(
          `http://localhost:8080/users/friends`,
          JSON.parse(friend)
        );
        console.log(res2);
        this.setState({
          users: res2.data
        });
      }

      console.log(res1);
      this.setState({
        recipes: res1.data
      });
    }
  };

  public friendPage = (e: any) => {
    localStorage.setItem("friendId", e);
  };

  public render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                {this.state.users.map((user: any, i: number) => {
                  return (
                    <div key={i}>
                      <div className="container">
                        <div className="row">
                          <div>
                            <div>
                              <p>
                                <Link to={`/${user.userId}/friend`}>
                                  <Avatar
                                    src={user.avatar}
                                    alt="No Image Available"
                                  />
                                  {user.username}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <h1 className="h2">Dashboard</h1>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
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
        </main>
      </div>
    );
  }
}
const Avatar = styled.img`
  padding-left: 5px;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const RecipeGrid = styled.div`
  display: grid;
  height: 90px !important;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;

const ImageSize = styled.img`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;
