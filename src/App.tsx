import "./App.less";
import React, { FC } from 'react'
import { BrowserRouter } from "react-router-dom";
import Home from "./layout/home/home";
import { Provider } from 'react-redux'
import store from "./store/store";
const App: FC = () => {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <main>
          <Home></Home>
        </main>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
