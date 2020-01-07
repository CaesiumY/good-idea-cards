import React, { Component } from "react";
import { Card, Icon } from "antd";
import styled from "styled-components";

const PostCard = styled(Card)`
  font-family: "Noto Serif KR", serif;
  word-break: keep-all;
`;

export default class Posts extends Component {
  render() {
    const { id, author, content } = this.props;
    return (
      <div>
        <PostCard title={`${id}번 카드`} bordered={false}>
          <h2>
            <Icon type="caret-right" />
            {author}
          </h2>
          <p>{content}</p>
        </PostCard>
      </div>
    );
  }
}
