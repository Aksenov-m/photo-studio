import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id='about-me' className='about-me section content__section'>
      <div className='about'>
        <h2 className='about-me__title'>Алена Аксенова</h2>
        <p className="about-me__subtitle">Я фотограф из Москвы</p>
      </div>
      <nav>
        <ul className='about-me__nenu'>
          <li className='about-me__list'>
            <p className='about-me__paragraph'>Фотографировать — поймать красоту в доли секунды.</p>
          </li>
          <li className='about-me__list'>
          <p className='about-me__paragraph'>Основное место фотосъёмки — Москва и ее окрестности, готова к выезду из города.  Всегда открыта к новым знакомствам.</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default AboutMe;