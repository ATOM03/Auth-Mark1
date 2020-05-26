import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="Home-Box">
        <div className="Home-header">
          <h2>
            Welcome to our
            <span className="badge badge-danger">MERN Website</span>
          </h2>
        </div>
        <div className="Home-content">
          <a href="/register">
            <button className="btn btn-primary">Register</button>
          </a>
          <Link to={"/login"}>
            <button className="btn btn-outline-success">Login</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
