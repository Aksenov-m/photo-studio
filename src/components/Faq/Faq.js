import React from "react";
import "./Faq.css";
import Questions from "../Questions/Questions";

function Brands() {
  return (
    <section id='faq' className='faq section content__section'>
      <div className='faq__info'>
        <p className='faq__paragraph'>FAQ</p>
        <h2 className='title faq__title'>Отвечаю на ваши вопросы</h2>
      </div>
      <Questions title='Полезная информация'>
        <div className='questions__information'>
          <p className='questions__paragraph'>Пожалуйста, прочитайте перед бронированием съемки</p>
          <ol className='questions__nenu'>
            <li className='questions__list'>
              <p className='questions__paragraph'>
                Бронирование даты производится только после предоплаты. Сумма предоплаты зависит от&nbsp;вида съемки и&nbsp;уточняется у&nbsp;фотографа.
              </p>
            </li>
            <li className='questions__list'>
              <p className='questions__paragraph'>
                Если вы&nbsp;заказываете у&nbsp;меня съемку, то&nbsp;это автоматически означает, что вы&nbsp;ознакомлены с&nbsp;моим портфолио, со&nbsp;стилем
                моей работы, а&nbsp;также с&nbsp;условиями съемки (сюда входит период, в&nbsp;течение которого я&nbsp;отдам ваши фотографии, количество снимков
                и&nbsp;другие условия, которые я&nbsp;обычно прописываю или проговариваю сразу).
              </p>
            </li>
            <li className='questions__list'>
              <p className='questions__paragraph'>
                Предоплата не&nbsp;возвращается, если по&nbsp;какой-либо причине клиент отказывается от&nbsp;участия в&nbsp;съемке, возможна замена
                на&nbsp;другого участника.
              </p>
            </li>
            <li className='questions__list'>
              <p className='questions__paragraph'>
                Авторское право на&nbsp;все фотографии принадлежит мне, а&nbsp;это значит, что фотографии со&nbsp;съемок я&nbsp;могу использовать для размещения
                в&nbsp;своем портфолио или для своей рекламы, если вы&nbsp;не&nbsp;хотите, чтобы ваши фотографии фигурировали где-то, это оговаривается
                индивидуально и&nbsp;заранее!
              </p>
            </li>
          </ol>
        </div>
      </Questions>
      <Questions title='Как заказать съёмку?'>
        <nav>
          <ul className='order__nenu'>
            <li className='order__list'>
              <p className='questions__paragraph'>Свяжитесь со мной любым удобным способом Мы обсудим предстоящую съёмку.</p>
            </li>
            <li className='order__list'>
              <p className='questions__paragraph'>Я пришлю договор.</p>
            </li>
            <li className='order__list'>
              <p className='questions__paragraph'>Вы внесете предоплату 50%.</p>
            </li>
            <li className='order__list'>
              <p className='questions__paragraph'>Выберем локацию, модель и т. д.</p>
            </li>
            <li className='order__list'>
              <p className='questions__paragraph'>Согласуем дату.</p>
            </li>
            <li className='order__list'>
              <p className='questions__paragraph'>Я проведу съёмку.</p>
            </li>
            <li className='order__list'>
              <p className='questions__paragraph'>Вы получите готовые фотографии и видео.</p>
            </li>
          </ul>
        </nav>
      </Questions>
      <Questions title='Скидка для постоянных клиентов 10%'>
        <div className='questions__information'>
          <p className='questions__paragraph'>
            Для всех моих клиентов, начиная с третьей съёмки закрепляется скидка 10% на любой пакет услуг, за исключением экспресс-фотосессий и свадебной
            съёмки.
          </p>
        </div>
      </Questions>
      <Questions title='Я не хочу чтобы мои фотографии где то публиковались'>
        <div className='questions__information'>
          <p className='questions__paragraph'>
          Об этом необходимо предупредить обязательно  фотографа до фотосессии
          </p>
        </div>
      </Questions>
    </section>
  );
}

export default Brands;
