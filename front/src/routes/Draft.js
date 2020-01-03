import React, { Component } from "react";
import api from "../api";
import { Form, Icon, Input, Button } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const SubmitButton = styled(Button)`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,900&display=swap&subset=korean");
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  color: white;
  background-color: #373a47;
  border-color: #373a47;
`;

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
    this.enterLoading();
    setTimeout(() => {
      this.exitLoading();
    }, 3000);
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
            <SubmitButton
              htmlType="submit"
              className="draft-form-button"
              block
              loading={isLoading}
              type="primary"
            >
              제출하기
            </SubmitButton>
          </Form.Item>
        </Form>
      </>
    );
  }
}
const WrappedDraftForm = Form.create({ name: "Draft" })(Draft);

export default WrappedDraftForm;
