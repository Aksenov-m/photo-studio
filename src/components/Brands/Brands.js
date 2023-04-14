import React from "react";
import "./Brands.css";
import foto1 from "../../images/Brand1.jpg";
import foto2 from "../../images/Brand2.jpg";
import foto3 from "../../images/Brand3.jpg";
import Catalog from "../Catalog/Catalog";
import { configPath } from "../../utils/utils";

function Brands(props) {
  return (
    <section id='brands' className='brands section content__section'>
      <div className='brands__info'>
        <h1 className='title brands__title'>БРЕНДАМ</h1>
        <h2 className='subtitle brands__subtitle'>Каталог&nbsp;для интернет-магазина</h2>
        <ol className='brands__nenu'>
          <li className='brands__list'>
            <p className='brands__paragraph'>
              25% успешного каталога, это четкое проектное задание для съемочной команды.Я помогу вам определится с концепцией, задачами, заданием и создать
              ПРОДАЮЩИЙ контент.
            </p>
          </li>
          <li className='brands__list'>
            <p className='brands__paragraph'>
              Каждая съемка начинается с разработки концепции, расчета бюджета, согласования дедлайна и составления чёткого проектного задания. Эта база на
              основании которой осуществляется организация съемки, подбор команды, и все необходимые бронирования и согласования. Чем подробнее и конкретнее
              будет задание, тем проще команде выдать результат ожидаемый брендом.
            </p>
          </li>
        </ol>
      </div>
      <div className='catalogs'>
        <>
          <Catalog
            pathClick={props.pathClick}
            foto={foto1}
            title='Catalog'
            subtitle1='Почему мой каталог принесет вам хорошие продажи?'
            subtitle2='К уникальному предложению также предлагаю помощь 
            в подборе профессиональных визажистов, стилистов, моделей и студии.'
            to={configPath.brands.catalog}
            isCatalog={true}
          >
            <ul className='catalog__nenu'>
              <li className='catalog__list'>
                <p className='catalog__paragraph'>Знаю требования к каталогу и как правильно подать товар;</p>
              </li>
              <li className='catalog__list'>
                <p className='catalog__paragraph'>Не беру более 2х проектов параллельно, работаю на качество;</p>
              </li>
              <li className='catalog__list'>
                <p className='catalog__paragraph'>Я умею создавать каталоги под требования площадок: Wildberries, Lamoda, OZON</p>
              </li>
              <li className='catalog__list'>
                <p className='catalog__paragraph'>
                  Как предприниматель я мыслю показателями продаж и делаю все от меня возможное для финансового и имиджего роста вашего бренда.{" "}
                </p>
              </li>
            </ul>
          </Catalog>
          <Catalog pathClick={props.pathClick} foto={foto2} title='Fashion&nbsp;editorial' to={configPath.brands.fashionEditorial} isCatalog={false}>
            <p className='catalog__paragraph'>
              Каждая имиджевая съемка обсуждается отдельно и стоимость варьируется в зависимости от технического задания, для более подробного расчета
              необходимо составление брифа и личная консультация
            </p>
          </Catalog>
          <Catalog pathClick={props.pathClick} foto={foto3} title='Studio+Street' to={configPath.brands.studioStreet} isCatalog={false}>
            <ul className='catalog__nenu'>
              <li className='catalog__list'>
                <p className='catalog__paragraph'>Онлайн-консультация для составления индивидуального предложения.</p>
              </li>
              <li className='catalog__list'>
                <p className='catalog__paragraph'>Проработка мудборда</p>
              </li>
            </ul>
          </Catalog>
        </>
      </div>
    </section>
  );
}

export default Brands;
