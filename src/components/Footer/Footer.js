import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer section page__footer'>
      <nav className='footer__menu'>
        <ul className='footer__list'>
          <li>
            <a className='footer__link' href='https://vk.com/aloynaaksenova' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faVk} className='footer__logo vk' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='https://www.instagram.com/aloynaaksenova' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='footer__logo instagram' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='whatsapp://send?phone=79269401035/' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className='footer__logo whatsapp' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='http://t.me/Aloyna_Aksenova' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} className='footer__logo telegram' />
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer__text">
        <h3 className='footer__title'>Aloyna_Aksenova</h3>
        <p className='footer__copyright'>&copy;2023</p>
      </div>
    </footer>
  );
}

export default Footer;
