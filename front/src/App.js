import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import AppLayout from "./container/AppLayout";
import Home from "./routes/Home";
import Draft from "./routes/Draft";
import Search from "./routes/Search";
import SideNav from "./components/SideNav";

export default class App extends Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <HashRouter>
            <SideNav></SideNav>
            <AppLayout>
              <Route path="/" exact={true} component={Home}></Route>
              <Route path="/drafts/" exact={true} component={Draft}></Route>
              <Route path="/search/" exact={true} component={Search}></Route>
            </AppLayout>
          </HashRouter>
        </Layout>
      </>
    );
  }
}
