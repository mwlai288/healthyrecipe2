import axios from "axios";
import * as React from "react";

export default class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
    };
  }

  public registerUser = async (e: any) => {
    e.preventDefault();
    const { email, password, username } = this.state;
    const payload = {
      email,
      password,
      username
    };
    const res = await axios.post("http://localhost:8080/users", payload);
    if (res.status === 200) {
      this.props.history.push("/");
    } else {
      throw Error("Error registering");
    }
  };

  public handleChange = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  public render() {
    return (
      <div>
        <h1>Register to Healthy Recipes</h1>
        <form className="form-signin" onSubmit={this.registerUser}>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
