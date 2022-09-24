import React, { useEffect } from "react";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header(props) {
  useEffect(() => {
    if (!props.burgerOpen) return;
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        props.closeBurger();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [props.burgerOpen, props.closeBurger]);

  useEffect(() => {
    function handleClickClose(evt) {
      if (evt.target.classList.contains("navigation__burger_opened")) {
        props.closeBurger();
      }
    }
    document.addEventListener("click", handleClickClose);
    return () => document.removeEventListener("click", handleClickClose);
  }, [props.burgerOpen, props.closeBurger]);

  return (
    <header className='header section page__header'>
      <Link className='link' to='/'>
        <img className='header__logo' src={logo} alt='Логотип.' />
      </Link>
      <button className={`header__button ${props.loggedIn ? "" : "header__button_disabled"}`} onClick={props.onBurger}></button>
      <Navigation {...props} />
    </header>
  );
}

export default Header;
