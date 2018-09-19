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

  public async componentDidMount() {
    const test = await axios.get("http://localhost:8080/users/1");
    console.log(test);
    // const modifiedTest = test.data.split("}{")[0] + "}";
    // JSON.parse(modifiedTest);
    // console.log(JSON.parse(modifiedTest).username);
  }

  public handleChange = (e: any) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  public render() {
    return (
      <div>
        <h1>Register to Healthy Recipes</h1>
        <form onSubmit={this.registerUser}>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
