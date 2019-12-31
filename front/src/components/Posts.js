import React, { Component } from "react";
import { Card } from "antd";

export default class Posts extends Component {
  render() {
    const { id, author, content } = this.props;
    return (
      <div className="post">
        <Card title={id} style={{ width: 300 }}>
          <h2 className="post__author">{author}</h2>
          <p className="post__content">{content}</p>
        </Card>
      </div>
    );
  }
}
