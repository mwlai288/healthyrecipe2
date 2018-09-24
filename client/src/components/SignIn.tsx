import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ISignInState, IState } from "./reducers";
import * as signInActions from "./actions/authActions/signInActions";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

interface IProps extends RouteComponentProps<{}>, ISignInState {
  updateError: (message: string) => any;
  updatePassword: (password: string) => any;
  updateUsername: (username: string) => any;
  submit: (credentials: any) => any;
}

class SignIn extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      password: this.props.password,
      username: this.props.username
    };

    const res = await axios.post("http://localhost:8080/users/login", payload);
    if (res.status === 401) {
      this.props.updateError("Invalid Credentials");
    } else if (res.status === 200) {
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("friends", JSON.stringify(res.data.friends));
      localStorage.setItem("comments", JSON.stringify(res.data.comment));
      this.props.history.push("/dashboard");
    } else {
      this.props.updateError("Failed to Login at this time");
    }
    console.log(res);
  };

  public passwordChange = (e: any) => {
    this.props.updatePassword(e.target.value);
  };

  public usernameChange = (e: any) => {
    this.props.updateUsername(e.target.value);
  };

  public render() {
    const { errorMessage, username, password } = this.props;

    return (
      <form className="form-signin" onSubmit={this.submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label htmlFor="inputUsername">Username</label>
        <input
          onChange={this.usernameChange}
          value={username}
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Username"
          required
        />

        <label htmlFor="inputPassword">Password</label>
        <input
          onChange={this.passwordChange}
          value={password}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />

        <button type="submit">Sign in</button>
        <button className=" btn btn-link">
          <Link to="/register">No account? Create one here</Link>
        </button>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => state.signIn;
const mapDispatchToProps = {
  updateError: signInActions.updateError,
  updatePassword: signInActions.updatePassword,
  updateUsername: signInActions.updateUsername
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
