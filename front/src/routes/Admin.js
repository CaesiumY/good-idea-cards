import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import api from "../api";

const { Column } = Table;

export default class Admin extends Component {
  state = {
    isLoading: true,
    results: []
  };

  getData = async () => {
    await api
      .getAllDrafts()
      .then(response => {
        this.setState({ results: response.data });
      })
      .catch(e => {
        alert(e);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { results } = this.state;
    return (
      <>
        <Table dataSource={results}>
          <Column title="Author" dataIndex="author" key="author" />
          <Column title="Content" dataIndex="content" key="content" />

          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <Button type="default">Invite {record.lastName}</Button>
                <Divider type="vertical" />
                <Button type="danger">Delete</Button>
              </span>
            )}
          />
        </Table>{" "}
      </>
    );
  }
}
