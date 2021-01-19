/*
 * @Author: liubaozhen
 * @Date: 2021-01-19 20:23:51
 * @LastEditTime: 2021-01-19 20:53:39
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\common\header\store\reducer.js
 */

import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
});

export default (state = defaultState, action) => {
  if (action.type === "searchFoucs") {
    // immutable 对象的 set 方法，会结合之前 immutable 对象的值
    // 和设置的值，返回一个全新的对象
    return state.set("focused", true);
  }

  if (action.type === "searchBlur") {
    return state.set("focused", false);
  }

  return state;
};
