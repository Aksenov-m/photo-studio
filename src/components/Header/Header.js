import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
      <Link className='header__link link' to='app'>
        <span className='header__logo link'>Fashion photographer Aloyna Aksenova</span>
      </Link>
      <div className={`header__burger ${props.burgerOpen ? "header__burger_active" : ""}`}onClick={props.onBurger}>
      <span ></span>
      </div>
      <Navigation {...props} />
    </header>
  );
}

export default Header;
