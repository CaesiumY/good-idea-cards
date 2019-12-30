import React, { Component } from "react";

export default class Posts extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { id, author, content } = this.props;
    return (
      <div className="post">
        <p className="post__id">{id}</p>
        <h3 className="post__author">{author}</h3>
        <p className="post__content">{content}</p>
      </div>
    );
  }
}
