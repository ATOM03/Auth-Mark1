import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";

const App = () => (
  <Router>
    <Route path="/" exact component={Home}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/Admin" component={Admin}></Route>
  </Router>
);

export default App;
