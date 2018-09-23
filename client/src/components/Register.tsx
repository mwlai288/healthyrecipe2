import * as React from "react";
import { RouteComponentProps } from "react-router";
import { IRegisterState, IState } from "./reducers";
import * as registerActions from "./actions/authActions/registerActions";
import { connect } from "react-redux";
import axios from "axios";

interface IProps extends RouteComponentProps<{}>, IRegisterState {
  updateError: (message: string) => any;
  registerPassword: (password: string) => any;
  registerUsername: (username: string) => any;
  registerEmail: (email: string) => any;
  registerAvatar: (avatar: string) => any;
  submit: (credentials: any) => any;
}

class Register extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, username } = this.props;
    const payload = {
      email,
      password,
      username
    };
    const res = await axios.post("http://localhost:8080/users", payload);
    if (res.status === 401) {
      this.props.updateError("Invalid Credentials");
    } else if (res.status === 200) {
      this.props.history.push("/");
    } else {
      this.props.updateError("Failed to Register at this time");
    }
  };

  // fetch("http://localhost:8080/users", {
  //   body: JSON.stringify(this.props),
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST"
  // })
  //   .then(resp => {
  //     console.log(resp.status);
  //     if (resp.status === 401) {
  //       this.props.updateError("Invalid Credentials");
  //     } else if (resp.status === 200) {
  //       return resp.json();
  //     } else {
  //       this.props.updateError("Failed to Register at this time");
  //     }
  //     throw new Error("Failed to register");
  //   })
  //   .then(resp => {
  //     this.props.history.push("/");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // };
  public passwordChange = (e: any) => {
    this.props.registerPassword(e.target.value);
  };

  public usernameChange = (e: any) => {
    this.props.registerUsername(e.target.value);
  };

  public emailChange = (e: any) => {
    this.props.registerEmail(e.target.value);
  };

  public render() {
    const { errorMessage, username, password, email } = this.props;

    return (
      <form className="form-signin" onSubmit={this.submit}>
        <h1>Register</h1>
        <label htmlFor="usernameInput">Username</label>
        <input
          onChange={this.usernameChange}
          value={username}
          type="text"
          className="form-control"
          placeholder="Username"
          required
        />

        <label htmlFor="passwordInput">Password</label>
        <input
          onChange={this.passwordChange}
          value={password}
          type="password"
          className="form-control"
          placeholder="Password"
          required
        />

        <label htmlFor="inputEmail">Email</label>
        <input
          onChange={this.emailChange}
          value={email}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email"
          required
        />

        <button type="submit" className="btn btn-primary ">
          Sign in
        </button>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => state.register;
const mapDispatchToProps = {
  updateError: registerActions.updateError,
  registerPassword: registerActions.registerPassword,
  registerUsername: registerActions.registerUsername,
  registerEmail: registerActions.registerEmail,
  registerAvatar: registerActions.registerAvatar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
