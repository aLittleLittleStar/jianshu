/*
 * @Author: liubaozhen
 * @Date: 2021-01-24 17:53:52
 * @LastEditTime: 2021-01-24 20:32:31
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\pages\home\index.js
 */
import React, { Component } from "react";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Topic from "./component/Topic";
import Write from "./component/Write";
import { HomeWrapper, HomeLeft, HomeRight } from "./style.js";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Write />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
