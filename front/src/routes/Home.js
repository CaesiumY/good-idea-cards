import React, { Component } from "react";
import api from "../api";
import Posts from "../components/Posts";

import { Spin, Alert, Empty, Button, notification } from "antd";

export default class Home extends Component {
  state = {
    isLoading: true,
    isReloading: false,
    results: []
  };

  openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: `${message}`
    });
  };

  getData = async () => {
    await api
      .getAllPosts()
      .then(response => {
        this.setState({
          results: response.data,
          isLoading: false,
          isReloading: false
        });
      })
      .catch(e => {
        this.openNotificationWithIcon("error", e);
      });
  };

  reloadData = () => {
    this.setState({ isReloading: true });
    this.getData();
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    this.setState({ results: [] });
  }

  render() {
    const { results, isLoading, isReloading } = this.state;

    return (
      <>
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
          <div>
            {results.map(item => (
              <Posts
                id={item.id}
                author={item.author}
                content={item.content}
                key={item.id}
              />
            ))}
            <Button
              type="primary"
              block
              style={{ position: "relative", top: "150px" }}
              icon="reload"
              loading={isReloading}
              onClick={this.reloadData}
            >
              새로 가져오기
            </Button>
          </div>
        )}
      </>
    );
  }
}
