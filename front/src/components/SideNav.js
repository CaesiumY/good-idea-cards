import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "../css/sideNav.css";

export default class SideNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Menu>
          <Link to="/" id="home" className="menu-item">
            홈
          </Link>
          <Link to="/drafts" id="about" className="menu-item">
            제안하기
          </Link>
          <Link
            to="https://github.com/CaesiumY/good-idea-cards"
            id="contact"
            className="menu-item"
          >
            깃허브
          </Link>
        </Menu>
      </>
    );
  }
}
