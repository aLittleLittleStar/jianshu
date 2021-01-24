/*
 * @Author: liubaozhen
 * @Date: 2021-01-12 20:29:35
 * @LastEditTime: 2021-01-24 18:10:07
 * @LastEditors: liubaozhen
 * @Description:
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\src\App.js
 */
import Header from "./common/header/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
