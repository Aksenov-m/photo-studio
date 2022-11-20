import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  let bodyElement = document.getElementsByTagName('body')[0];

    // Стейт, отвечающий за бургер
    const [isBurgerOpen, setBurgerOpen] = useState(false);

  function handleBurgeClick() {
    setBurgerOpen(true);
    bodyElement.classList.add("lock");
  }

  function closeBurger() {
    setBurgerOpen(false);
    bodyElement.classList.remove("lock");
  }


  return (
    <div className="App" >
      <div className='page__container'>
        <Header burgerOpen={isBurgerOpen} onBurger={handleBurgeClick} closeBurger={closeBurger}/>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
