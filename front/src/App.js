import React, { Component } from "react";
import api from "./api";
import Posts from "./components/Posts";

export default class App extends Component {
  state = {
    results: []
  };

  getData = async () => {
    const data = await api.getAllPosts();
    console.log(data.data);
    this.setState({ results: data.data });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { results } = this.state;
    return (
      <>
        <h1>hello world!</h1>
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
      </>
    );
  }
}
