import React  from "react";
import { Link } from "react-router-dom";
import "./FotoLink.css";


function FotoLink(props) {
  // let title = document.querySelector('div');

  // function handleMouseOver(evt) {
  //   const title = evt.currentTarget.firstChild;
  //   // console.log('Событие инициировано на', evt.currentTarget.firstChild)
  //   // console.log('Событие поймано на', evt.currentTarget)
  //   // console.log(title)
  //   title.classList.add("active");
  //   }
  

  // function handleMouseOut(evt) {
  //   const title = evt.currentTarget.firstChild;
  //   // console.log(title)
  //   title.classList.remove("active");
  // }

  // onMouseOut={handleMouseOut}

  return (
    <>
      <Link className='fotoLink' to={props.link} onClick={() => props.pathClick(props.link)}>
        <h3 className='fotoLink__title'>{props.link}</h3>
        <img className='fotoLink__image' src={props.src} alt='Фото.' />
      </Link>
    </>
  );
}

export default FotoLink;
