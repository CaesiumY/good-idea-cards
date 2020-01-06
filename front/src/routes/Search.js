import React, { Component } from "react";
import { Empty, Input, Spin, Alert } from "antd";
import Posts from "../components/Posts";
import api from "../api";

const { Search } = Input;

export default class SearchContainer extends Component {
  state = {
    isLoading: false,
    results: []
  };

  getData = async value => {
    const data = await api.getSearchData(value);
    await this.setState({ results: data.data, isLoading: false });
  };

  handleSearch = value => {
    this.setState({ isLoading: true });
    this.getData(value);
  };

  render() {
    const { isLoading, results } = this.state;
    return (
      <>
        <Search
          placeholder="검색어를 입력해주세요."
          onSearch={value => this.handleSearch(value)}
          enterButton
          size="large"
        />
        {isLoading ? (
          <Spin tip="Loading...">
            <Alert
              message="데이터를 불러오는 중"
              description="시간이 오래 걸린다면 서버가 닫혀있는 거랍니다."
              type="info"
            />
          </Spin>
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
        {results.length === 0 ? <Empty style={{ marginTop: "75px" }} /> : ""}
      </>
    );
  }
}
