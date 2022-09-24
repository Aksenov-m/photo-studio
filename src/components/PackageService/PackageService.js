import React from "react";

// Функциональный компонент packageService
function PackageService(props) {
  return (
    <article className='package-service'>
      <div className='package'>
        <img className='package__image' src={props.foto} alt='Обложка журнала.' />
        <h2 className='title package__title'>{props.title}</h2>
        <h3 className='package__subtitle'>{props.subtitle1}</h3>
        {props.isPremium ? (<h3 className='package__subtitle'>{props.subtitle5}</h3>) : (<></>)}
        <h3 className='package__subtitle'>{props.subtitle2}</h3>
        {props.children}
      </div>
      <div className='package__price'>
        <p className='subtitle services__subtitle'>{props.subtitle3}</p>
        <span className='price'>{props.price}</span>
        <p className='subtitle services__subtitle'>{props.subtitle4}</p>
      </div>
    </article>
  );
}

export default PackageService;
