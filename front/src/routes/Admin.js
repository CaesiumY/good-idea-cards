import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import api from "../api";

const { Column } = Table;

export default class Admin extends Component {
  state = {
    isLoading: true,
    results: [],
    selectedRowKeys: []
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

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { results, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected}>
            추가
          </Button>
          <Divider type="vertical" />
          <Button type="danger" onClick={this.start} disabled={!hasSelected}>
            삭제
          </Button>

          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `${selectedRowKeys.length} 개의 아이템 선택됨` : ""}
          </span>
        </div>
        <Table dataSource={results} rowSelection={rowSelection}>
          <Column title="Author" dataIndex="author" key="author" />
          <Column title="Content" dataIndex="content" key="content" />

          <Column
            rowSelection={rowSelection}
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <Button type="default">추가</Button>
                <Divider type="vertical" />
                <Button type="danger">삭제</Button>
              </span>
            )}
          />
        </Table>{" "}
      </>
    );
  }
}
