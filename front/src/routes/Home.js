import React, { Component } from "react";
import api from "../api";
import Posts from "../components/Posts";

import { Spin, Alert, Empty } from "antd";

export default class Home extends Component {
  state = {
    isLoading: true,
    results: []
  };

  getData = async () => {
    const data = await api.getAllPosts();
    await this.setState({ results: data.data, isLoading: false });
  };

  stopLoading = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  };
  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    this.setState({ results: [] });
  }

  render() {
    const { results, isLoading } = this.state;

    return (
      <div>
        test
        {isLoading ? (
          <Spin tip="Loading...">
            <Alert
              message="데이터를 불러오는 중"
              description="시간이 오래 걸린다면 서버가 닫혀있는 거랍니다."
              type="info"
            />
            <br />
            <Empty />
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
      </div>
    );
  }
}
