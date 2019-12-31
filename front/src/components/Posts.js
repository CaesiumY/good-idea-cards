import React, { Component } from "react";
import { Card, Icon } from "antd";

export default class Posts extends Component {
  render() {
    const { id, author, content } = this.props;
    return (
      <div className="post">
        <Card title={id} bordered={false}>
          <h2 className="post__author">
            <Icon type="caret-right" />
            {author}
          </h2>
          <p className="post__content">{content}</p>
        </Card>
      </div>
    );
  }
}
