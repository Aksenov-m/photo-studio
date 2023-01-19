import React, { useState }  from "react";

// Функциональный компонент Questions
function Questions(props) {

  const [isOpen, setOpen] = useState(false);



  // function handleClick() {
  //   setOpen(true);
  // }

  function handleToggle() {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <div className='questions' onClick={handleToggle}>
      <div className='link questions__button'>
        <h3 className='questions__title'>{props.title}</h3>
        <i className={`questions__close ${isOpen ? "questions__close_active" : ""}`}>
        </i>
      </div>
      {isOpen ? (
          props.children
      ) : (
        <></>
      )}
    </div>
  );
}

export default Questions;
