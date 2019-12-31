import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "antd";

import "../css/sideNav.css";

const MenuLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,900&display=swap&subset=korean");
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  padding: 0.8em;
`;

const MenuAnchor = styled.a`
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

  isMenuOpen = function(state) {
    return state.isOpen;
  };
  render() {
    return (
      <>
        <Menu onStateChange={this.isMenuOpen}>
          <MenuLink to="/" id="home" className="menu-item">
            <Icon type="home" />
            <span> 홈</span>
          </MenuLink>
          <MenuLink to="/drafts" id="edit" className="menu-item">
            <Icon type="edit" />
            <span> 제안하기</span>
          </MenuLink>
          <MenuAnchor
            href="https://github.com/CaesiumY/good-idea-cards"
            target="_blank"
            rel="noopener noreferrer"
            id="contact"
            className="menu-item"
          >
            <Icon type="github" />
            <span> 깃허브</span>
          </MenuAnchor>
        </Menu>
      </>
    );
  }
}
