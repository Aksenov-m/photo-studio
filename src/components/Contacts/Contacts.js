import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import photo from "../../images/photo.jpg";
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className='contacts'>
      <img className='contacts__image' src={photo} alt='Фото Фотографа.' />
      <p className='contacts__text'>Аксенова Алёна</p>
      <a className='contacts__tel' href='tel:+79269401035'>
        +79269401035
      </a>

      <nav className='contacts__menu'>
        <ul className='contacts__list'>
          <li className='list__item'>
            <a className='contacts__link' href='https://www.instagram.com/aloynaaksenova' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='logo contacts__logo instagram fa-sm link' />
              написать в instagram
            </a>
          </li>
          <li className='list__item'>
            <a className='contacts__link' href='https://vk.com/fashionphotoshoot1' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faVk} className='logo contacts__logo vk fa-sm link' />
              написать в Vkontakte
            </a>
          </li>
          <li className='list__item'>
            <a className='contacts__link' href='https://wa.me/79269401035' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faWhatsapp} className='logo contacts__logo whatsapp fa-sm link' />
              написать в whatsapp
            </a>
          </li>
          <li className='list__item'>
            <a className='contacts__link' href='http://t.me/Aloyna_Aksenova' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTelegram} className='logo contacts__logo telegram fa-sm link' />
            написать в telegram
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Contacts;
