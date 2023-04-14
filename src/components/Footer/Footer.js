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
    <footer className='footer section page__footer' id={'footer'}>
      <nav className='footer__menu'>
        <ul className='footer__list'>
          <li>
            <a className='footer__link' href='https://vk.com/fashionphotoshoot1' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faVk} className='logo footer__logo vk fa-xl link' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='https://www.instagram.com/aloynaaksenova' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='logo footer__logo instagram fa-xl link' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='https://wa.me/79269401035' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className='logo footer__logo whatsapp fa-xl link' />
            </a>
          </li>
          <li>
            <a className='footer__link' href='http://t.me/Aloyna_Aksenova' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} className='logo footer__logo telegram fa-xl link' />
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
