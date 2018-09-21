import axios from "axios";
import * as React from "react";

export default class SignIn extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
  }

  public signInUser = async (e: any) => {
    e.preventDefault();

    const payload = {
      password: this.state.password,
      username: this.state.username
    };
    console.log(payload);
    const res = await axios.post("http://localhost:8080/users/login", payload);
    if (res.status === 200) {
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("friends", JSON.stringify(res.data.friends));
      localStorage.setItem("comments", JSON.stringify(res.data.comment));
      localStorage.setItem("userId", res.data);
      this.props.history.push("/dashboard");
    } else if (res.status === 403) {
      throw Error("Invalid credentials");
    } else {
      throw Error("Error while attempting to sign in");
    }
    console.log(res);
  };

  public handleChange = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  public render() {
    return (
      <div>
        <h1>Sign In to your Healthy Recipes account</h1>

        <form className="form-signin" onSubmit={this.signInUser}>
          <label htmlFor="sign-in-username">Username: </label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <label htmlFor="sign-in-password">Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="enter password"
            onChange={this.handleChange}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
