import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Order.css";
import foto from "../../images/services.jpg";

function Brands() {
  return (
    <section id='order' className='order section'>
      <div className='order__main'>
        <div className='order__photoshoot'>
          <p className='order__paragraph'>ЗАКАЗАТЬ ФОТОСЕССИЮ</p>
          <h2 className='order__title'>90% процентов успеха продажи вашей продукции качественно снятый контент</h2>
          <a type='button' className='button__order link' href='http://t.me/Aloyna_Aksenova' target='_blank' rel="noreferrer">
            Заказать
          </a>
          <img className='order__foto' src={foto} alt='Обложка журнала.'></img>
        </div>
        <div className='order__price'>
          <div className='price'>
            <p className='price__paragraph'>ПРАЙС ДЛЯ БРЕНДОВ</p>
            <h2 className='price__title'>Услуги</h2>
            <Link
              to='brands'
              rel='noreferrer'
              className='price__link link'
              spy={true}
              smooth={true}
              offset={-140}
              duration={900}
            >
              Перейти →
            </Link>
          </div>
          <div className='price'>
            <p className='price__paragraph'>ПРАЙС ДЛЯ ЧАСТНЫХ КЛИЕНТОВ</p>
            <h2 className='price__title'>Услуги</h2>
            <Link
              to='services'
              rel='noreferrer'
              className='price__link link'
              spy={true}
              smooth={true}
              offset={-140}
              duration={900}
            >
              Перейти →
            </Link>
          </div>
          <div className='price'>
            <p className='price__paragraph'>Подарочный сертификат</p>
            <h2 className='price__title'>Услуги</h2>
            <Link
              to='info'
              rel='noreferrer'
              className='price__link link'
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
            >
              Перейти →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
