import React, { useEffect, useRef } from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Foto from "../Foto/Foto";
import AboutMe from "../AboutMe/AboutMe";
import Services from "../Services/Services";
import Info from "../Info/Info";
import Brands from "../Brands/Brands";
import Order from "../Order/Order";
import Faq from "../Faq/Faq";

// Функциональный компонент Main
function Main(props) {
  // const mainRef = useRef();

  // useEffect(() => {
  //   console.log("mainRef", mainRef.current);
  // }, []);

  return (
    <>
      <main className='content'>
        <Foto {...props} />
        <AboutMe />
        <Order />
        <Services />
        <Info />
        <Brands {...props}/>
        <Faq />
      </main>
    </>
  );
}

export default Main;
