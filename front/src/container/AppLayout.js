import React, { Component } from "react";
import SideNav from "../components/SideNav";

import { Layout } from "antd";
import "antd/dist/antd.css";
import "../css/appLayout.css";

const { Content, Footer } = Layout;

export default class AppLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideNav></SideNav>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a target="_blank" href="https://github.com/CaesiumY/good-idea-cards">
            Good Idea Cards ©2018 Created by Caesiumy
          </a>
        </Footer>
      </Layout>
    );
  }
}
