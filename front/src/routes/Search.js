import React, { Component } from "react";
import { Empty, Input } from "antd";

const { Search } = Input;

export default class SearchContainer extends Component {
  render() {
    return (
      <div>
        <Empty />
        <p style={{ textAlign: "center" }}>서비스 준비중입니다...</p>
      </div>
    );
  }
}
