import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../css/sideNav.css";

const MenuLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,900&display=swap&subset=korean");
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  padding: 0.8em;
`;

export default class SideNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Menu>
          <MenuLink to="/" id="home" className="menu-item">
            홈
          </MenuLink>
          <MenuLink to="/drafts" id="about" className="menu-item">
            제안하기
          </MenuLink>
          <MenuLink
            to="https://github.com/CaesiumY/good-idea-cards"
            id="contact"
            className="menu-item"
          >
            깃허브
          </MenuLink>
        </Menu>
      </>
    );
  }
}
