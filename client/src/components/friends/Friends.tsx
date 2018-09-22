import * as React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Friends extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      friends: [],
      search: ""
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

  public friendPage = (e: any) => {
    localStorage.setItem("friendId", e);
  };

  public handleChange = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  public addFriend = async (e: any) => {
    e.preventDefault();
    const { search } = this.state;
    const payload = {
      username: search
    };
    const res = await axios.post(
      `http://localhost:8080/users/username`,
      payload
    );
    console.log(res.data);
    const payload2 = {
      fuser: res.data.userId
    };

    const res2 = await axios.post(
      `http://localhost:8080/friend/${localStorage.getItem("userId")}`,
      payload2
    );
    if (res2.status === 200) {
      localStorage.setItem("friends", JSON.stringify(res2.data.friends));
      location.reload();
    }
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
            placeholder="Add by Username"
            name="search"
            aria-describedby="basic-addon1"
            onChange={this.handleChange}
          />
          <button onClick={this.addFriend}>Add Friend</button>
        </SearchBox>

        <RecipeGrid>
          {this.state.users.map((user: any, i: number) => {
            return (
              <div key={i}>
                <div className="container">
                  <div className="row">
                    <div className="card mb-4 shadow-sm">
                      <Link
                        onClick={() => this.friendPage(user.userId)}
                        to={`/${user.userId}/friend`}
                      >
                        <ImageSize
                          className="card-img-top"
                          src={user.avatar}
                          alt="No Image Available"
                        />
                      </Link>
                      <div className="card-body">
                        <p className="card-text">
                          Name:
                          {user.username}
                        </p>
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

const SearchBox = styled.div`
  padding-top: 4rem;
`;
