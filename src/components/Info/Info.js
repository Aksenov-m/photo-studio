import React from "react";
import "./Info.css";

function Info() {
  return (
    <section id='info' className='info section content__section'>
        <h3 className='title info__title'>Усиливаю вашу уверенность в себе</h3>
        <p className="subtitle info__subtitle">Я делаю фотографии чтобы можно было вернуться в тот самый момент и проживать снова и снова его!</p>
        <h2 className="title info__title-gift">Подарочный сертификат</h2>
        <p className='paragraph'>Кому стоит подарить фотосессию:</p>
      <nav>
        <ul className='info__nenu'>
          <li className='info__list'>
            <p className='info__text'>Тому, кто этого хочет. Кто видел мои фотографии, 
            и они ему понравились. Возможно вы уже были у меня на съёмке и показывали результат.</p>
          </li>
          <li className='info__list'>
          <p className='info__text'>Тому, кто не совсем успешно ведёт бизнес-аккаунт в инстаграм. Но вы знаете, 
          что в человеке огромный потенциал, его просто нужно раскрыть.</p>
          </li>
          <li className='info__list'>
          <p className='info__text'>Тому, кто никогда не был на фотосессии, но вы знаете, что человек этого хочет.</p>
          </li>
          <li className='info__list'>
          <p className='info__text'>А можно подарить сертификат себе! А можно подарить сертификат себе!</p>
          </li>
        </ul>
      </nav>
      <p className='paragraph info__paragraph'>Вы получите сертификат на электронную почту. В нём будет уникальный код, который нужно будет сообщить при заказе фотосъёмки.</p>
      <p className='paragraph info__paragraph'>Срок действия сертификата 1 год.</p>
    </section>
  );
}

export default Info;
