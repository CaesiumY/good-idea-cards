import React, { Component } from "react";
import { Empty } from "antd";

export default class Search extends Component {
  render() {
    return (
      <div>
        <Empty />
        <p style={{ textAlign: "center" }}>서비스 준비중입니다...</p>
      </div>
    );
  }
}
