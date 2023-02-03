import React, { useEffect, useState, Profiler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { falight } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ButtonLink from "../ButtonLink/ButtonLink";

function App() {
  // Стейт, отвечающий за бургер
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [cards, setCards] = useState([]);
  const [size, setSize] = useState(window.innerWidth);

 

  const handlResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    handlResize();
    window.addEventListener("resize", handlResize);
    return () => window.removeEventListener("resize", handlResize);
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://cloud-api.yandex.net/v1/disk/resources?path=%2F%D0%94%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%2F%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0&fields=jpeg&preview_crop=false&preview_size=XXXL",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "OAuth y0_AgAAAAAY7mVUAADLWwAAAADZ49Dtj9vWQUVLRQu9Wy6H33On-JVud6w",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     // .then((data) => setCards(data._embedded.items))
  //     .then((data) => console.log(data._embedded.items))
  //     .catch((err) => alert(err));
  // }, []);

  
useEffect(() => {
    fetch(
      "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FmKoNaEMiJMUptQ&fields=_embedded&path=%2F%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0&preview_size=XXXL",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCards(data._embedded.items))
      // .then((data) => console.log(data._embedded.items))
      .catch((err) => alert(err));
  }, []);


  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let bodyElement = document.getElementsByTagName("body")[0];

  function openBurger() {
    setBurgerOpen(true);
    bodyElement.classList.add("lock");
  }

  function closeBurger() {
    setBurgerOpen(false);
    bodyElement.classList.remove("lock");
  }

  function handleBurgeClick(evt) {
     if (isBurgerOpen) {
      closeBurger()
      return
    }
    openBurger()
    }
    // if (evt.target.tagName.toLowerCase() === "div") {
      // bodyElement.classList.add("lock");
      // console.log(evt.target.tagName.toLowerCase(), isBurgerOpen);
  
    // const currentElement = evt.target.tagName.toLowerCase() === "span" ? evt.target.parentNode.parentElement : evt.target.parentElement;
    //  if(currentElement) {
      // debugger
      // setBurgerOpen(true);
      // bodyElement.classList.add("lock");



  function callback(
    id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
    phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
    actualDuration, // время, затраченное на рендер зафиксированного обновления
    baseDuration, // предполагаемое время рендера всего поддерева без кеширования
    startTime, // когда React начал рендерить это обновление
    commitTime, // когда React зафиксировал это обновление
    interactions
  ) {
    // Множество «взаимодействий» для данного обновления )

    console.log(id, phase, interactions, actualDuration);
  }

  return (
    <div className='App' id='app'>
      <div className='page__container'>
      {/* <Profiler id="Header" onRender={callback}> */}
        <Header burgerOpen={isBurgerOpen} onBurger={handleBurgeClick} closeBurger={closeBurger} openBurger={openBurger}/>
        {/* </Profiler> */}
        {/* <Profiler id="main" onRender={callback}> */}
        <Main id='main' foto={cards} size={size} />
        {/* </Profiler> */}
        <Footer />
        <ButtonLink href='#app' Class={`scroll-to-top ${scrollPosition >= 120 && size > 770 ? "scroll-to-top_active" : ""}`}>
          <FontAwesomeIcon icon={faCircleArrowUp} className='button__scroll-to-top' />
        </ButtonLink>
      </div>
    </div>
  );
}

export default App;
