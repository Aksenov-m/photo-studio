import React from "react";
import { useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {

  const navigate = useNavigate();
// console.log(navigate)
  const goBack = () =>navigate(-1);
  
  return (
    <section className='not-found'>
      <span className='not-found__title'>404</span>
      <p className='not-found__text'>Страница не найдена</p>
      <button className='not-found__button link' onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
