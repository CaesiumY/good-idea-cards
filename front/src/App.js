import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Draft from "./routes/Draft";
import SideNav from "./components/SideNav";
import { Layout } from "antd";

export default class App extends Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <HashRouter>
            <SideNav></SideNav>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/dratfs" component={Draft}></Route>
          </HashRouter>
        </Layout>
      </>
    );
  }
}
