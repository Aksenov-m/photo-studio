import React, { useEffect, useState } from "react";
import CardFoto from "../CardFoto/CardFoto";
// import Carousel from "../Carousel/Carousel";
// import bazar from "../../images/Bazar.jpg";
// import malvie from "../../images/Malvie.jpg";
// import officiel from "../../images/Officiel.jpg";
import "./Foto.css";

function Foto(props) {
// const result = props.foto.map((cardInfo) => {
//   debugger
//   return cardInfo;
// });


let height = props.size * 1.5;
  return (
    <section
      className='foto section'
      style={{
        height: height,
      }}
    >
      {/* <Carousel {...props}> */}
      {props.foto.map((cardInfo, index) => (
          <CardFoto key={cardInfo.resource_id} info={cardInfo} indexFoto={index} {...props}/>
        ))}
      {/* </Carousel> */}
    </section>
  );
}

export default Foto;
