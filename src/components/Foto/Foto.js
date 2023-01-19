import React, { useEffect, useState } from "react";
import CardFoto from "../CardFoto/CardFoto";
import Carousel from "../Carousel/Carousel";
// import bazar from "../../images/Bazar.jpg";
// import malvie from "../../images/Malvie.jpg";
// import officiel from "../../images/Officiel.jpg";
import "./Foto.css";

function Foto(props) {
  return (
    <section
      className='foto section content__section'
      style={{
        minWidth: "100%",
        maxWidth: "100%",
      }}
    >
      <Carousel {...props}>
        {props.foto.map((cardInfo) => (
          <CardFoto key={cardInfo.resource_id} info={cardInfo} />
        ))}
      </Carousel>
    </section>
  );
}

export default Foto;
