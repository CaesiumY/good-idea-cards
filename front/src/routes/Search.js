import React, { Component } from "react";
import { Empty, Input, Spin } from "antd";
import Posts from "../components/Posts";

const { Search } = Input;

export default class SearchContainer extends Component {
  state = {
    isLoading: false,
    results: []
  };

  render() {
    const { isLoading, results } = this.state;
    return (
      <>
        <Search
          placeholder="검색어를 입력해주세요."
          onSearch={value => console.log(value)}
          enterButton
          size="large"
        />
        {isLoading ? (
          <Spin tip="Loading..."></Spin>
        ) : (
          <div className="posts">
            {results.map(item => (
              <Posts
                id={item.id}
                author={item.author}
                content={item.content}
                key={item.id}
              />
            ))}
          </div>
        )}
        {results ? <Empty style={{ marginTop: "75px" }} /> : "success"}
      </>
    );
  }
}
