import React from "react";

// Функциональный компонент packageService
function Catalog(props) {
  return (
    <article className='catalog-service'>
        <img className='catalog-service__image' src={props.foto} alt='Обложка журнала.' />
        {props.isCatalog ? <h2 className='title catalog-service__title'>{props.title}</h2> : <></>}
        {props.children}
      {props.isCatalog ? <p className='subtitle catalog-service__subtitle'>{props.subtitle2}</p> : <></>}
      <div className='catalog-service__price'>
        <a className='catalog-service__link link' href={props.link} target='_blank' rel="noreferrer">
          Смотреть
        </a>
        <p className='catalog-service__arrow'>→</p>
      </div>
    </article>
  );
}

export default Catalog;
