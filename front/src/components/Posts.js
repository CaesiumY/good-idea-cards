import React, { Component } from "react";
import { Card, Icon } from "antd";
import styled from "styled-components";

const PostCard = styled(Card)`
  @import url("https://fonts.googleapis.com/css?family=Noto+Serif+KR:400,700&display=swap&subset=korean");
  font-family: "Noto Serif KR", serif;
  word-break: keep-all;
`;

export default class Posts extends Component {
  render() {
    const { id, author, content } = this.props;
    return (
      <div className="post">
        <PostCard title={id} bordered={false}>
          <h2 className="post__author">
            <Icon type="caret-right" />
            {author}
          </h2>
          <p className="post__content">{content}</p>
        </PostCard>
      </div>
    );
  }
}
