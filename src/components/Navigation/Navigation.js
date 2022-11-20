import React from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navigation.css";

const Navigation = (props) => {
  return (
      /* <button className='navigation__close-button link' type='button' aria-label='closeNavigation' onClick={props.closeBurger}></button> */
      <nav className={`navigation ${props.burgerOpen ? "navigation__burger_opened" : ""}`}>
        <ul className='navigation__nenu'>
          <li className='navigation__list'>
            <NavLink exact={true} to='/' className='navigation__link link' activeClassName='navigation__link_active' onClick={props.closeBurger}>
              ГЛАВНАЯ
            </NavLink>
          </li>
          <li className='navigation__list'>
            <NavLink to='/portfolio' exact={true} className='navigation__link link' activeClassName='navigation__link_active' onClick={props.closeBurger}>
              ПОРТФОЛИО
            </NavLink>
          </li>
          <li className='navigation__list'>
            <Link
              to='order'
              // href='#order'
              className='navigation__link link'
              activeClass='navigation__link_active'
              onClick={props.closeBurger}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              УСЛУГИ
            </Link>
          </li>
          <li className='navigation__list'>
            <NavLink to='/comment' className='navigation__link link' activeClassName='navigation__link_active' onClick={props.closeBurger}>
              ОТЗЫВЫ
            </NavLink>
          </li>
          <li className='navigation__list'>
            <NavLink to='/contacts' className='navigation__link link' activeClassName='navigation__link_active' onClick={props.closeBurger}>
              КОНТАКТЫ
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
