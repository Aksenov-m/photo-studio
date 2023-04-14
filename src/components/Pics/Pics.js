import React, { useEffect, useState } from "react";
import "./Pics.css";

function Pics(props) {


  const handleClick = (index) => {
    props.getFoto(index);
  }


  return (
    <div className="pics">
      <img className='foto__image' src={props.info.preview} alt={props.info.name || "фото"} onClick={()=> handleClick(props.indexFoto)}/>
    </div>
  );
}

export default Pics;
