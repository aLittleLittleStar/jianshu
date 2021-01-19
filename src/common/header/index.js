/*
 * @Author: liubaozhen
 * @Date: 2021-01-13 22:16:04
 * @LastEditTime: 2021-01-19 20:49:29
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\common\header\index.js
 */
import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from "./style.js";

const Header = (props) => {
  const { focused } = props;

  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>

        <SearchWrapper>
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? "iconfont focused" : "iconfont"}>&#xe614;</i>
        </SearchWrapper>

        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.get("focused"),
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch({ type: "searchFoucs" });
    },

    handleInputBlur() {
      dispatch({ type: "searchBlur" });
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
