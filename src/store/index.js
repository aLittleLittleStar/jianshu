/*
 * @Author: liubaozhen
 * @Date: 2021-01-18 23:13:14
 * @LastEditTime: 2021-01-18 23:30:52
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\store\index.js
 */
import { createStore } from "redux";
import reducer from "./reducre";

const store = createStore(reducer);

export default store;
