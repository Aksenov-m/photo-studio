// import React, { useEffect, useState } from "react";

function CardFoto(props) {

  let  width = props.size;
  // debugger
  // const [card, setCard] = useState([]);

  // useEffect(() => {setInterval(()=> {for (let i=0; i<=2; i++) {
  //   setCard(props.info.preview[i]);
  // }

  // }, 10000);

  // }, []);

  return (
    <div className="foto__slide">
      <img className='foto__image' style={{width: width}} src={props.info.preview} alt={props.info.name || "фото"} />
    </div>
  );
}

export default CardFoto;

// {props.info.preview}
