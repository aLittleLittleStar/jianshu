/*
 * @Author: liubaozhen
 * @Date: 2021-01-18 23:14:16
 * @LastEditTime: 2021-01-19 20:32:38
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\store\reducre.js
 */
import { combineReducers } from "redux";
import { reducer as header } from "../common/header/store";

const reducer = combineReducers({
  header,
});

export default reducer;
