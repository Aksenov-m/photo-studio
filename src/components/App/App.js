import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className='App'>
      <div className='page__container'>
        <Header />
        <Main />
        {/* <Main burgerOpen={isBurgerOpen} onBurger={handleBurgeClick} closeBurger={closeBurger} /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
