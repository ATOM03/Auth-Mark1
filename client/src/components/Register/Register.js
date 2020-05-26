import React, { Component } from "react";
import axios from "axios";
import "./Register.css";
import image from "./../../signup-image.webp";
class Register extends Component {
  state = {
    Name: "",
    Email: "",
    Password: "",
    error: "",
  };

  handleChange = (event) => {
    const Target = event.target;
    const name = Target.name;
    const value = Target.value;

    this.setState({
      [name]: value,
    });
  };
  submit = (event) => {
    event.preventDefault();

    const payload = {
      Name: this.state.Name,
      Email: this.state.Email,
      Password: this.state.Password,
    };
    axios({
      url: "/register",
      method: "POST",
      data: payload,
    })
      .then((res) => {
        console.log(res.data.msg);
        this.resetState();
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "Email Already Registered",
        });
      });
  };

  resetState = () => {
    this.setState({
      Name: "",
      Email: "",
      Password: "",
    });
  };

  render() {
    return (
      <div className="Register-Body">
        <div className="Signup-body">
          <div className="Signup">
            <div>
              <h3 className="signup-header">Register</h3>
            </div>
            <div>
              <form onSubmit={this.submit} className="form">
                <p className="error-p">{this.state.error}</p>
                <div className="signup-input">
                  <i class="material-icons">face</i>
                  <input
                    name="Name"
                    placeholder="Name"
                    type="text"
                    value={this.state.Name}
                    onChange={this.handleChange}
                    required
                    className="input"
                  />
                </div>
                <div className="signup-input">
                  <i class="material-icons">email</i>
                  <input
                    name="Email"
                    placeholder="Email"
                    type="email"
                    value={this.state.Email}
                    required
                    onChange={this.handleChange}
                    className="input"
                  />
                </div>
                <div className="signup-input">
                  <i class="material-icons">lock</i>
                  <input
                    name="Password"
                    placeholder="Password"
                    type="password"
                    value={this.state.Password}
                    required
                    onChange={this.handleChange}
                    className="input"
                  />
                </div>
                <button className="register-btn" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="Signup-pic">
            <img src={image} alt="Signup-image" />
            <a href="/login" className="signup-a">
              I am Already a Member
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
