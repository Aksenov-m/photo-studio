import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";
import { configPath } from "../../utils/utils";

// Функциональный компонент packageService
function Catalog(props) {
  return (
    <article className='catalog-service'>
      <img className='catalog-service__image' src={props.foto} alt='Обложка журнала.' />
      <h2 className='title catalog-service__title'>{props.title}</h2>
      {props.children}
      {props.isCatalog ? <p className='subtitle catalog-service__subtitle'>{props.subtitle2}</p> : <></>}
      <div className='catalog-service__price'>
        <Link className='catalog-service__link link' to={`/Portfolio/${configPath.brands.path}/${props.to}`} onClick={()=> props.pathClick(props.to)}>
          Смотреть
        </Link>
        <p className='catalog-service__arrow'>→</p>
      </div>
    </article>
  );
}

export default Catalog;
