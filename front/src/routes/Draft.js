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

  pushData() {
    this.enterLoading();
    api
      .createDrafts({
        author: this.state.author,
        content: this.state.content
      })
      .then(response => {
        this.setState({ title: "", body: "" });
        console.log(response);
        this.exitLoading();
      })
      .catch(e => {
        console.log(e);
      });
  }

  enterLoading = () => {
    console.log("loading");
    this.setState({ isLoading: true });
  };

  exitLoading = () => {
    console.log("loaded");
    this.setState({ isLoading: false });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values.author, values.content);
        await this.setState({ author: values.author, content: values.content });
        await this.pushData();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="draft-form">
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
