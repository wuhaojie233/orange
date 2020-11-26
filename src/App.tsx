import "./App.less";
import React, { FC } from 'react'
import { BrowserRouter } from "react-router-dom";
import Home from "./layout/home/home";
const App: FC = () => {
  return (
    <BrowserRouter>
      <main>
        <Home></Home>
      </main>
    </BrowserRouter>
  );
}

export default App;
