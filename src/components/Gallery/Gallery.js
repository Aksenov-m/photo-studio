import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pics from "../Pics/Pics";
import ImagePopup from "../ImagePopup/ImagePopup";
// import bazar from "../../images/Bazar.jpg";
// import malvie from "../../images/Malvie.jpg";
// import officiel from "../../images/Officiel.jpg";
import "./Gallery.css";

function Gallery(props) {
  // const location = useLocation();
  // console.log(location.pathname)
  
  // const [model, setModel] = useState(false);
  const [tempImgId, setTempImgId] = useState("");
  // const pathName = location.pathname.substring((location.pathname.lastIndexOf("/")+1))
  // console.log(pathName)

  function handleClickNext() {
    setTempImgId(tempImgId+1);
    if(tempImgId === arr.length-1){
      setTempImgId(0)
    }
  }

  function handleClickBack() {
    setTempImgId(tempImgId-1);
    if(tempImgId === 0){
      setTempImgId(arr.length-1)
    }
  }
// debugger
  const arr = props.filterFotoPortfolio.filter((item) => 
  item.path.includes(props.path));
  // console.log(props.filterFotoPortfolio)
  // console.log(arr)
  // setgalleryFoto(arr);

  const getFoto = (item) => {
    setTempImgId(item);
    props.openPopup();
  };
  return (
    <section className='gallery section'>
      {arr.map((cardInfo, index) => (
        <Pics key={cardInfo.resource_id} info={cardInfo} indexFoto={index} {...props} getFoto={getFoto} />
      ))}
      <ImagePopup {...props} item={tempImgId} galleryFoto={arr} handleClickNext={handleClickNext} handleClickBack={handleClickBack}/>
    </section>
  );
}

export default Gallery;
