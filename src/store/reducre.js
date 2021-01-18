/*
 * @Author: liubaozhen
 * @Date: 2021-01-18 23:14:16
 * @LastEditTime: 2021-01-18 23:48:25
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\store\reducre.js
 */
const defaultState = {
  focused: false,
};

export default (state = defaultState, action) => {
  if (action.type === "searchFoucs") {
    return {
      focused: true,
    };
  }

  if (action.type === "searchBlur") {
    return {
      focused: false,
    };
  }

  return state;
};
