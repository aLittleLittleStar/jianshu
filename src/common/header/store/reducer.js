/*
 * @Author: liubaozhen
 * @Date: 2021-01-19 20:23:51
 * @LastEditTime: 2021-01-24 23:10:18
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\common\header\store\reducer.js
 */

import { fromJS } from "immutable";

const SEARCH_FOCUSE = "searchFoucs";
const SEARCH_BLUR = "searchBlur";

const defaultState = fromJS({
  focused: false,
});

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUSE) {
    // immutable 对象的 set 方法，会结合之前 immutable 对象的值
    // 和设置的值，返回一个全新的对象
    return state.set("focused", true);
  }

  if (action.type === SEARCH_BLUR) {
    return state.set("focused", false);
  }

  return state;
};
