import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import image from "../../signin-image.webp";
import Facebook from "./Facebook";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    let loggedIn = false;

    const token = localStorage.getItem("token");
    if (token) loggedIn = true;

    this.state = {
      Email: "",
      Password: "",
      loggedIn,
      error: "",
    };
    this.onChange = this.onChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  async formSubmit(ev) {
    ev.preventDefault();
    const { Email, Password } = this.state;
    try {
      const response = await Axios.post("/login", { Email, Password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.Name);
      this.setState({
        loggedIn: true,
      });
    } catch (error) {
      this.setState({
        error: "Invalid Email/Password",
      });
    }
  }

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/admin" />;
    }
    console.log(this.state);
    return (
      <div className="login-body">
        <div className="signip-body">
          <div className="Signup-pic">
            <img src={image} alt="Signip-image" />
            <br />
            <a href="/register" className="signup-a">
              Create an account
            </a>
          </div>
          <div className="Signin">
            <div>
              <h3 className="signin-header">Login</h3>
            </div>

            <form onSubmit={this.formSubmit} className="form">
              <p className="error-p">{this.state.error}</p>
              <div className="signup-input">
                <i class="material-icons">person</i>
                <input
                  name="Email"
                  type="text"
                  placeholder="Email"
                  value={this.state.Email}
                  onChange={this.onChange}
                  required
                  className="input"
                ></input>
              </div>
              <div className="signup-input">
                <i class="material-icons">lock</i>
                <input
                  name="Password"
                  value={this.state.Password}
                  onChange={this.onChange}
                  placeholder="Password"
                  type="password"
                  required
                  className="input"
                ></input>
              </div>
              <div>
                <button className="login-btn" type="submit">
                  Login
                </button>
              </div>
            </form>
            <Facebook className="facebook" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
