import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import SideNav from "./components/SideNav";

export default class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <SideNav></SideNav>
          <Route path="/" exact={true} component={Home}></Route>
        </HashRouter>
      </>
    );
  }
}
