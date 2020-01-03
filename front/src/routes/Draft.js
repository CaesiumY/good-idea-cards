import React, { Component } from "react";
import api from "../api";
import { Form, Icon, Input, Button } from "antd";

const { TextArea } = Input;

class Draft extends Component {
  state = {
    author: "",
    content: "",
    isLoading: false
  };

  pushData = async () => {
    const result = await api.createDrafts({
      author: this.state.author,
      content: this.state.content
    });
    this.setState({ title: "", body: "" });
    console.log("result:", result);
  };

  enterLoading = () => {
    this.setState({ isLoading: true });
  };

  exitLoading = () => {
    this.setState({ isLoading: false });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("author", {
              rules: [{ required: true, message: "첫 번째 칸을 채워주세요!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="인물 또는 성어를 적어주세요."
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("content", {
              rules: [{ required: true, message: "두 번째 칸을 채워주세요!" }]
            })(
              <TextArea
                placeholder="내용을 적어주세요."
                autoSize={{ minRows: 4, maxRows: 8 }}
                allowClear
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="draft-form-button"
              block
              loading={isLoading}
              onClick={this.enterLoading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
const WrappedDraftForm = Form.create({ name: "Draft" })(Draft);

export default WrappedDraftForm;
