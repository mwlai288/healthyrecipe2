import * as React from "react";
import axios from "axios";
import styled from "styled-components";

export default class Friends extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: []
    };
  }
  public componentDidMount = async () => {
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
  };

  public render() {
    return (
      <div>
        <RecipeGrid>
          {this.state.users.map((user: any, i: number) => {
            return (
              <div key={i}>
                <div className="container">
                  <div className="row">
                    <div className="card mb-4 shadow-sm">
                      <ImageSize
                        className="card-img-top"
                        src={user.avatar}
                        alt="No Image Available"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Name:
                          {user.username}
                        </p>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Calories:
                          {user.userId}
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