import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
// import { falight } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import ButtonLink from "../ButtonLink/ButtonLink";
import Gallery from "../Gallery/Gallery";
import PageNotFound from "../PageNotFound/PageNotFound";
import Contacts from "../Contacts/Contacts";
import * as Api from "../../utils/api";
import { configPath } from "../../utils/utils";

function App() {
  // Стейт, отвечающий за бургер
  const location = useLocation();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [cards, setCards] = useState([]);
  const [fotoPortfolio, setFotoPortfolio] = useState([]);
  // const [filterFotoPortfolio, setfilterFotoPortfolio] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const [path, setPath] = useState("");
  const [model, setModel] = useState(false);
  // const [tempImgSrc, setTempImgSrc] = useState("");
 
// console.log(location.path.substring(location.path.lastIndexOf("/")))
  const handlResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    if(path==="" && location.pathname.length>2 ) {
      setPath(location.pathname.substring((location.pathname.lastIndexOf("/")+1)))
    }
  }, []);

  useEffect(() => {
    handlResize();
    window.addEventListener("resize", handlResize);
    return () => window.removeEventListener("resize", handlResize);
  }, []);

  //   const scrollTo = () => {
  //     scroll.scrollTo("order", {
  //       smooth: false,
  //       duration: 0,
  //       delay: 0,
  //     });
  //     console.log(location.state)
  // };
  

  useEffect(() => {
    if(location.pathname.length === 1) {
    const order = document.querySelector(".order").getBoundingClientRect();
    location.state &&
      scroll.scrollTo(order.top, {
        smooth: false,
        duration: 0,
        delay: 0,
      });
    }
    // console.log(location.pathname.length)

  }, [location.pathname.length, location.state]);

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
    Api.getInitialCards("path=%2F%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0&preview_size=XXXL")
      // fetch(
      //   "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FmKoNaEMiJMUptQ&fields=_embedded&path=%2F%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0&preview_size=XXXL",
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // )
      // .then((res) => res.json())
      .then((data) => setCards(data._embedded.items))
      // .then((data) => console.log(data._embedded.items))
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    Promise.all([
      Api.getInitialCards(
        "path=%2F%D0%BB%D1%83%D0%BA%D0%B1%D1%83%D0%BA-%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D1%8D%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%2FCatalog&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%BB%D1%83%D0%BA%D0%B1%D1%83%D0%BA-%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D1%8D%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%2FFashionEditorial&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%BB%D1%83%D0%BA%D0%B1%D1%83%D0%BA-%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D1%8D%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%2FStudioStreet&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%D1%85%2FBazaar&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%D1%85%2FHorizont&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%D1%85%2FMarika&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%D1%85%2FMobJournal&preview_size=XXXL"
      ),
      Api.getInitialCards(
        "path=%2F%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B2%20%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%D1%85%2FMalvie&preview_size=XXXL"
      ),
    ])
      .then(([catalog, fashionEditorial, studioStreet, bazaar, horizont, marika, mobJournal, malvie]) => {
        // let foto = [...catalog._embedded.items, ...fashionEditorial._embedded.items, ...studioStreet._embedded.items]
        let foto = [];
        foto.push(...catalog._embedded.items);
        foto.push(...fashionEditorial._embedded.items);
        foto.push(...studioStreet._embedded.items);
        foto.push(...bazaar._embedded.items);
        foto.push(...horizont._embedded.items);
        foto.push(...marika._embedded.items);
        foto.push(...mobJournal._embedded.items);
        foto.push(...malvie._embedded.items);
        // console.warn(foto)
        setFotoPortfolio(foto);
      })
      .catch((err) => alert(err));
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FmKoNaEMiJMUptQ&fields=_embedded&path=%2F%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0&preview_size=XXXL",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCards(data._embedded.items))
  //     .catch((err) => alert(err));
  // }, []);

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

  function addLock() {
    bodyElement.classList.add("lock");
  }

  function removeLock() {
    bodyElement.classList.remove("lock");
  }

  function openBurger() {
    setBurgerOpen(true);
    addLock();
    // bodyElement.classList.add("lock");
  }

  function closeBurger() {
    setBurgerOpen(false);
    removeLock();
    // bodyElement.classList.remove("lock");
  }

  function handleBurgeClick(evt) {
    if (isBurgerOpen) {
      closeBurger();
      return;
    }
    openBurger();
  }

  const getItem = () => {
    // setTempImgSrc(imgSrc);
    setModel(true);
    addLock();
    // console.warn("сука")
  };

  function closePopup() {
    setModel(false);
    removeLock();
  }

  function handlePathClick(path) {
    // closeBurger();
    setPath(path);
    // console.log(path)
  }

  // function filteredfoto(array, ) {
  //   return array.filter((movie) => movie.duration <= MOVIE_TIME);
  // }
  // useEffect(() => {
  //   const array = fotoPortfolio.filter(function (item, index, arr) {
  //     // debugger
  //     return item.path.includes(path); // вернём уникальные элементы
  //   });
  //   setfilterFotoPortfolio([]);
  //   setTimeout(() => {
  //   setfilterFotoPortfolio(array);
  //   }, 3000)
  //   // setfilterFotoPortfolio((fotoPortfolio) => fotoPortfolio.filter((item) => item.name.includes("DSC01035")));
  //   // console.log(fotoPortfolio)
  //   // console.log(fotoPortfolio[1].cardInfo.path)
  // }, [fotoPortfolio, path]);

  //   const filteredImg = tempImgSrc.filter(function (item) => {
  //     return item.text.length > 25;
  // });

  // if (evt.target.tagName.toLowerCase() === "div") {
  // bodyElement.classList.add("lock");
  // console.log(evt.target.tagName.toLowerCase(), isBurgerOpen);

  // const currentElement = evt.target.tagName.toLowerCase() === "span" ? evt.target.parentNode.parentElement : evt.target.parentElement;
  //  if(currentElement) {
  // debugger
  // setBurgerOpen(true);
  // bodyElement.classList.add("lock");

  // function callback(
  //   id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
  //   phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
  //   actualDuration, // время, затраченное на рендер зафиксированного обновления
  //   baseDuration, // предполагаемое время рендера всего поддерева без кеширования
  //   startTime, // когда React начал рендерить это обновление
  //   commitTime, // когда React зафиксировал это обновление
  //   interactions
  // ) {
  //   // Множество «взаимодействий» для данного обновления )

  //   console.log(id, phase, interactions, actualDuration);
  // }
  return (
    <div className='App' id='app'>
      <div className='page__container'>
        {/* <Profiler id="Header" onRender={callback}> */}
        <Header burgerOpen={isBurgerOpen} onBurger={handleBurgeClick} closeBurger={closeBurger} openBurger={openBurger} />
        {/* </Profiler> */}
        {/* <Profiler id="main" onRender={callback}> */}
        <Routes>
          <Route path='/' element={<Main id='main' foto={cards} size={size} pathClick={handlePathClick} />} />
          <Route path='/Portfolio/*' element={<Portfolio id='portfolio' size={size} pathClick={handlePathClick} />} />
          <Route
            path={`/Portfolio/${configPath.brands.path}/${path==="" ? "нет" : path}`}
            element={
              <Gallery path={path} filterFotoPortfolio={fotoPortfolio} model={model} openPopup={getItem} closePopup={closePopup} />
            }
          />
          <Route
            path={`/Portfolio/${configPath.special.path}/${path==="" ? "нет" : path}`}
            element={
              <Gallery path={path} filterFotoPortfolio={fotoPortfolio} model={model} openPopup={getItem} closePopup={closePopup} size={size}/>
            }
          />
          {/* </Profiler> */}
          <Route path='*' element={<PageNotFound />} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
        <ButtonLink Class={`scroll-to-top ${scrollPosition >= 120 && size > 770 ? "scroll-to-top_active" : ""}`}>
          <FontAwesomeIcon icon={faCircleArrowUp} className='button__scroll-to-top' />
        </ButtonLink>
        <Footer />
      </div>
    </div>
  );
}

export default App;
