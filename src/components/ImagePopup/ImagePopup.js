import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ImagePopup.css";
// Функциональный компонент ImagePopup
function ImagePopup({ model, item = 0, closePopup, galleryFoto, handleClickNext, handleClickBack, size }) {
  // const [x1, setX1] = useState(null);
  // const [y1, setY1] = useState(null);
  // const [x2, setX2] = useState(null);
  // const [y2, setY2] = useState(null);
  // const foto = filterFotoPortfolio[item].preview;
  // console.log(galleryFoto)
  useEffect(() => {
    const arrowKeyDown = ({ key }) => {
      if (key === "ArrowLeft") handleClickBack();

      if (key === "ArrowRight") handleClickNext();
    };
    document.addEventListener("keydown", arrowKeyDown);
    return () => document.removeEventListener("keydown", arrowKeyDown);
  }, [handleClickBack, handleClickNext]);

  function clickNext() {
    handleClickNext();
  }

  function clickBack() {
    handleClickBack();
  }

  useEffect(() => {
    if (!model) return;
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [model, closePopup]);

  useEffect(() => {
    function handleClickClose(evt) {
      if (evt.target.classList.contains("popup")) {
          closePopup();
      }
    }
    document.addEventListener("click", handleClickClose);
    return () => document.removeEventListener("click", handleClickClose);
  }, [closePopup]);

  //   useEffect(() => {
  //     let x1;
  //     let x2;

  //     document.addEventListener("onTouchStart", handleTocuhStart);
  //     document.addEventListener("onTouchMove", handleTocuhMove);

  //     function handleTocuhStart(e) {
  //       const firstTouch = e.touches[0];
  // console.log(firstTouch
  //   );

  //     };

  //     function handleTocuhMove(e) {

  //     }

  //   }, []);
  
  let x1 = null;
  let y1 = null;

  function handleTocuhStart(e) {
    // const firstTouch = e.touches[0];
    // setX1(e.touches[0].clientX);
    // setY1(e.touches[0].clientY);
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
  }

  function handleTocuhMove(e) {
    if (!x1 || !y1) {
      return false;
    }
    // setX2(e.touches[0].clientX);
    // setY2(e.touches[0].clientY);
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff < 0) {
        clickNext();
      } else 
      clickBack();
    } else {
      if (yDiff < 0) {
        setTimeout(() => {
          closePopup();
        }, 500)
      }
    }
    x1 = null;
    y1 = null;
  }

  //   useEffect(() => {

  // }, [x1, x2, y1, y2]);

  return (
    <div className={`popup ${model ? "popup_opened" : ""}`}>
      <button className='popup__arrow next' type='button' aria-label='next'>
        <FontAwesomeIcon icon={faArrowRight} className='fa-thin' type='button' aria-label='next' onClick={clickNext} />
      </button>
      <button className='popup__arrow back' type='button' aria-label='back'>
        <FontAwesomeIcon icon={faArrowLeft} className='fa-thin' type='button' aria-label='back' onClick={clickBack} />
      </button>
      <button className='popup__close-button' type='button' aria-label='closePopup' onClick={closePopup}>
        <FontAwesomeIcon icon={faXmark} className='fa-xl' type='button' />
      </button>
      {/* <div className='popup__container popup__container_image'> */}
      {/* <button className='popup__close-button link' type='button' aria-label='closePopup' onClick={onClose}></button> */}
      <img className='popup__image' src={model ? galleryFoto[item].preview : ""} alt='Фото.' onTouchStart={size<769 ? handleTocuhStart : () => false} onTouchMove={size<769 ? handleTocuhMove : () => false} />
      {/* </div> */}
    </div>
  );
}

export default ImagePopup;
