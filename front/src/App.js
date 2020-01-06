import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import { createGlobalStyle } from "styled-components";
import AppLayout from "./container/AppLayout";
import Home from "./routes/Home";
import Draft from "./routes/Draft";
import Search from "./routes/Search";
import SideNav from "./components/SideNav";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,900&display=swap&subset=korean");
  @import url("https://fonts.googleapis.com/css?family=Noto+Serif+KR:400,700&display=swap&subset=korean");

`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
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
