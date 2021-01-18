/*
 * @Author: liubaozhen
 * @Date: 2021-01-12 20:29:35
 * @LastEditTime: 2021-01-18 23:18:20
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\App.js
 */
import Header from "./common/header/index.js";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
