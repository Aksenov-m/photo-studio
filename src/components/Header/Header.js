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
  }, [props.closeBurger, props.burgerOpen, props, props.onBurger]);

  // useEffect(() => {
  //   function handleClickOpen(evt) {
  //     // const currentElement = evt.target.tagName.toLowerCase() === "span" ? evt.target.parentNode.parentElement : evt.target.parentElement;
  //     if (evt.target.classList.contains("header__burger")) {
  //       props.openBurger();
  //     }
  //   }
  //   document.addEventListener("click", handleClickOpen);
  //   return () => document.removeEventListener("click", handleClickOpen);
  // }, [props, props.openBurger, props.burgerOpen, props.onBurger]);


  return (
    <header className='header section page__header'>
      <Link className='header__link link' to='/'>
        <img className='header__logo' src={logo} alt='Логотип.' />
      </Link>
      <div className={`header__burger ${props.burgerOpen ? "header__burger_active" : ""}`}onClick={props.onBurger}>
      <span ></span>
      </div>
      <Navigation {...props} />
    </header>
  );
}

export default Header;
