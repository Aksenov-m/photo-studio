import React, { useEffect, useState } from "react";

function CardFoto(props) {
  let width = props.size;
  let height = props.size * 1.5;
  // debugger
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (rating <= props.foto.length-1) {
      const timeout = setTimeout(() => {
        setRating(rating + 1);
        // console.log(rating);
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    }
    setRating(0);
  }, [props.foto, rating]);

  return (
    <div className={`foto__slide ${rating === props.indexFoto ? "active" : ""}`}>
      <img className='foto__image' style={{ width: width, height: height }} src={props.info.preview} alt={props.info.name || "фото"} />
    </div>
  );
}

export default CardFoto;
