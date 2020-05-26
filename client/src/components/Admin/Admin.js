import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Admin.css";
class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    let loggedIn = true;

    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      name,
    };
  }
  loggedOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  };
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="admin-body">
        <h2>Welcome,{this.state.name}</h2>
        <a href="/" className="logged-a">
          <button className="logged-btn" onClick={this.loggedOut}>
            Logged Out
          </button>
        </a>
      </div>
    );
  }
}

export default Admin;
