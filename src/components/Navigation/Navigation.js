import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { configPath } from "../../utils/utils";
import "./Navigation.css";

const Navigation = (props) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  // console.log(location);


  // function handleClick() {
  //   props.closeBurger();
  //   // console.log(location.state)
  // }

  function handleMouseOver() {
    setOpen(true);
  }

  function handleMouseOut() {
    setOpen(false);
    // console.log(e.target)
    // console.log(e.relatedTarget)
    // if (e.relatedTarget.className.toLowerCase() === "submenu_active") {
    //  return
    //   } else
    //   setOpen(false);
  }

  function handleToggle() {
    if (!isOpen) {
      setOpen(true);
  } else {
    setOpen(false);
  }
}

  return (
    <nav className={`navigation ${props.burgerOpen ? "navigation__burger_opened" : ""}`}>
      <ul className='navigation__nenu'>
        <li className='navigation__list'>
          <NavLink to='/' className={({ isActive }) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`} onClick={props.closeBurger}>
            ГЛАВНАЯ
          </NavLink>
        </li>
        <li className='navigation__list navigation__list_relative' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div className='navigation__text' onClick={handleToggle}>
            <span className='navigation__link link'>ПОРТФОЛИО</span>
            <FontAwesomeIcon icon={faChevronDown} className={`fa-icon ${isOpen ? "fa-rotate-180" : ""}`} />
          </div>
          <div className={`submenu ${isOpen ? "submenu_active" : ""}`}>
            <ul className='submenu-list'>
              <li className='menu-item'>
                <NavLink
                  to={`/Portfolio/${configPath.special.path}`}
                  className={({ isActive }) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}
                  onClick={props.closeBurger}
                >
                  Индивидуальные съемки
                </NavLink>
              </li>
              <li className='menu-item'>
                <NavLink
                  to={`/Portfolio/${configPath.brands.path}`}
                  className={({ isActive }) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}
                  onClick={props.closeBurger}
                >
                  Съемки для брендов
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className='navigation__list'>
          {location.pathname.length > 1 ? (
            <NavLink to='/' className='navigation__link link' activeClass='navigation__link_active' onClick={props.closeBurger} state={'УСЛУГИ'}>
              УСЛУГИ
            </NavLink>
          ) : (
            <Link
              to='order'
              // href='#order'
              className='navigation__link link'
              activeClass='navigation__link_active'
              onClick={props.closeBurger}
              spy={true}
              smooth={false}
              delay= {0}
              offset={-120}
              duration={600}
            >
              УСЛУГИ
            </Link>
          )}
        </li>
        <li className='navigation__list'>
          <NavLink to='/comment' className='navigation__link link' activeClass='navigation__link_active' onClick={props.closeBurger}>
            ОТЗЫВЫ
          </NavLink>
        </li>
        <li className='navigation__list'>
          <NavLink
            to='/contacts'
            className={({ isActive }) => `navigation__link link ${isActive ? "navigation__link_active" : ""}`}
            onClick={props.closeBurger}
          >
            КОНТАКТЫ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
