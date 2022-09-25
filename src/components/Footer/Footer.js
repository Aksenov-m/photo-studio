import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer section page__footer'>
      <nav className='footer__menu'>
        <ul className='footer__list'>
          <li>
            <a className='footer__link' href='https://vk.com/aloynaaksenova' target='_blank'>
              <i class='footer__logo vk'></i>
            </a>
          </li>
          <li>
            <a className='footer__link' href='https://www.instagram.com/aloynaaksenova' target='_blank'>
              <i class='footer__logo instagram'></i>
            </a>
          </li>
          <li>
            <a className='footer__link' href='whatsapp://send?phone=79269401035/' target='_blank'>
              <i class='footer__logo whatsapp'></i>
            </a>
          </li>
          <li>
            <a className='footer__link' href='http://t.me/Aloyna_Aksenova' target='_blank'>
              <i class='footer__logo telegram'></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer__text">
        <h3 className='footer__title'>Aloyna_Aksenova</h3>
        <p className='footer__copyright'>&copy;2022</p>
      </div>
    </footer>
  );
}

export default Footer;
