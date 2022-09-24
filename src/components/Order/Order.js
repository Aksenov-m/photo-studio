import React from "react";
import "./Order.css";
import foto from "../../images/services.jpg";

function Brands() {
  return (
    <section id='order' className='order section content__section'>
      <div className='order__photoshoot'>
        <p className='order__paragraph'>ЗАКАЗАТЬ ФОТОСЕССИЮ</p>
        <h2 className='order__title'>90% процентов успеха продажи вашей продукции качественно снятый контент</h2>
        <button name='button' type='button' class='button__order'>
          Заказать
        </button>
        <img className='order__foto' src={foto} alt='Обложка журнала.'></img>
      </div>
      <div className='order__price'>
        <div className='price'>
          <p className='price__paragraph'>ПРАЙС ДЛЯ БРЕНДОВ</p>
          <h2 className='price__title'>Услуги</h2>
          <a
            href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'
            target='_blank'
            rel='noreferrer'
            className='price__link link'
          >
            Перейти →
          </a>
        </div>
        <div className='price'>
          <p className='price__paragraph'>ПРАЙС ДЛЯ ЧАСТНЫХ КЛИЕНТОВ</p>
          <h2 className='price__title'>Услуги</h2>
          <a
            href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'
            target='_blank'
            rel='noreferrer'
            className='price__link link'
          >
            Перейти →
          </a>
        </div>
        <div className='price'>
          <p className='price__paragraph'>ОБУЧЕНИЕ </p>
          <h2 className='price__title'>Услуги</h2>
          <a
            href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md'
            target='_blank'
            rel='noreferrer'
            className='price__link link'
          >
            Перейти →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Brands;
