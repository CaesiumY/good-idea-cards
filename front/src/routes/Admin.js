import React, { Component } from "react";
import { Table, Divider, Button, Popconfirm, message } from "antd";
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

  confirmDeleteOneItem = async (index, e) => {
    message.error("삭제되었습니다.");
    await api.deleteDrafts(index);
    this.getData();
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
          <Button type="primary" disabled={!hasSelected}>
            추가
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title={`${selectedRowKeys.length}개의 아이템을 정말로 삭제하시겠습니까?`}
            onConfirm={this.confirmDelete}
            okText="예"
            cancelText="아니오"
            placement="topLeft"
          >
            <Button type="danger" disabled={!hasSelected}>
              삭제
            </Button>
          </Popconfirm>
          <span style={{ marginLeft: 15 }}>
            {hasSelected ? `${selectedRowKeys.length} 개 선택` : ""}
          </span>
        </div>
        <Table
          dataSource={results}
          rowSelection={rowSelection}
          size="small"
          rowKey="id"
        >
          <Column title="Id" dataIndex="id" key="id" />
          <Column title="Author" dataIndex="author" key="author" />
          <Column title="Content" dataIndex="content" key="content" />

          <Column
            rowSelection={rowSelection}
            title="Action"
            key="action"
            render={(text, record, index) => (
              <span>
                <Button type="default">추가</Button>
                <Divider type="vertical" style={{ visibility: "hidden" }} />
                <Popconfirm
                  title={`${record.id}번 항목을 정말로 삭제하시겠습니까?`}
                  onConfirm={this.confirmDeleteOneItem.bind(this, record.id)}
                  okText="예"
                  cancelText="아니오"
                  placement="topRight"
                >
                  <Button type="danger">삭제</Button>
                </Popconfirm>
              </span>
            )}
          />
        </Table>{" "}
      </>
    );
  }
}
