import React from "react";
import "./Services.css";
import foto1 from "../../images/package1.jpg";
import foto2 from "../../images/package2.jpg";
import foto3 from "../../images/package3.jpg";
import PackageService from "../PackageService/PackageService";

function Services() {
  return (
    <section id='services' className='services section content__section'>
      <div className='services__info'>
        <h1 className='title services__title'>Частные индивидуальные съемки</h1>
        <p className='subtitle services__subtitle'>Кому нужны индивидуальные съемки? </p>
        <p className='subtitle services__subtitle'>
          Всем кто хочет себя почувствовать удовольствие, кому нужна эмоциональная разрядка, кому нужно приобрести и подтвердить уверенность в себе, в своих
          силах, тому кто хочет просто быть красивым, стильным, желанным. Для кого важно увидеть себя со стороны, я как фотограф смогу подчеркнуть ваши
          достоинства, раскрыть ваши таланты! Найти вашу уникальность, которая станет вашим достоинством!
        </p>
      </div>
      <div className='packages'>
        <>
          <PackageService
            foto={foto1}
            title='Базовый пакет'
            subtitle1='Фотосъёмка длительностью'
            subtitle2='1 час включает в себя:'
            subtitle3='Выгода — большее времени на расслабление, и получения удовольствия от съемочного процесса целый час!'
            subtitle4='К уникальному предложению также предлагаю помощь в подборе визажиста, стилиста и студии.'
            price='7000 рублей'
            isPremium={false}
          >
            <ul className='package__nenu'>
              <li className='package__list'>
                <p className='package__paragraph'>Короткое интервью о задачах съёмки и о том, какой результат хотите получить.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Подбор референсов и идей для фотосъёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Подбор локации для съёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Проведение фотосъёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>10 фотографий в ретуши.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Весь отснятый материал в цветокоррекции.</p>
              </li>
            </ul>
          </PackageService>
          <PackageService
            foto={foto2}
            title='Стандартный пакет'
            subtitle1='Фотосъёмка длительностью'
            subtitle2='2 час включает в себя:'
            subtitle3='Выгода — можно не спешить и получать удовольствие от съемочного процесса 2 часа! Раскрывать себя в свое темпе!'
            subtitle4='К уникальному предложению также предлагаю помощь в подборе визажиста, стилиста и студии.'
            price='15000 рублей'
            isPremium={false}
          >
            <ul className='package__nenu'>
              <li className='package__list'>
                <p className='package__paragraph'>Короткое интервью о задачах съёмки и о том, какой результат хотите получить.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Подбор референсов и идей для фотосъёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Подбор локации для съёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Проведение фотосъёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>30 фотографий в ретуши.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Весь отснятый материал без ретуши.</p>
              </li>
            </ul>
          </PackageService>
          <PackageService
            foto={foto3}
            title='Премиум пакет'
            subtitle1='Фотосъёмка в формате'
            subtitle2='2 час включает в себя:'
            subtitle3='Выгода — полный Релакс, у вас появляется возможность почувствовать 
            себя звездой с обложки журнала, над которой работает целая команда специалистов, 
            вам не нужно ни о чем думать, за вас мы продумаем абсолютно все до мелочей. 
            Результат вашей съемки  может попасть в журнал.'
            subtitle5='«Всё включено как на обложку журнала» длительностью'
            price='Цена по запросу.'
            isPremium={true}
          >
            <ul className='package__nenu'>
              <li className='package__list'>
                <p className='package__paragraph'>Короткое интервью о задачах съёмки и о том, какой результат хотите получить.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Подбор референсов и идей для фотосъёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Подбор локации для съёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Макияж и укладка для одной участницы съёмки.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>3 образа от стилиста по одежде, включая обувь и аксессуары.</p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Проведение фотосъёмки. </p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>30 фотографий в ретуши. </p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Весь отснятый материал без ретуши. </p>
              </li>
              <li className='package__list'>
                <p className='package__paragraph'>Видео-бекстейдж.</p>
              </li>
            </ul>
          </PackageService>
        </>
      </div>
    </section>
  );
}

export default Services;
