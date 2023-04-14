import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import FotoLink from "../FotoLink/FotoLink";
// import Gallery from "../Gallery/Gallery";
import { configPath } from "../../utils/utils";
import foto1 from "../../images/Brand1.jpg";
import foto2 from "../../images/Brand2.jpg";
import foto3 from "../../images/Brand3.jpg";
import foto4 from "../../images/Bazar.jpg";
import foto5 from "../../images/Horizont.jpeg";
import foto6 from "../../images/Malvie.jpg";
import foto7 from "../../images/Marika.jpeg";
import foto8 from "../../images/MobJournal.jpeg";

import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className='portfolio section'>
      <div className='portfolio__container'>
        <Routes>
          <Route
            path={configPath.brands.path}
            element={
              <>
                <FotoLink src={foto1} link={configPath.brands.catalog} {...props}/>
                <FotoLink src={foto2} link={configPath.brands.fashionEditorial} {...props}/>
                <FotoLink src={foto3} link={configPath.brands.studioStreet} {...props}/>
              </>
            }
          />
          <Route
            path={configPath.special.path}
            element={
              <>
                <FotoLink src={foto4} link={configPath.special.bazaar} {...props}/>
                <FotoLink src={foto5} link={configPath.special.horizont} {...props}/>
                <FotoLink src={foto6} link={configPath.special.malvie} {...props}/>
                <FotoLink src={foto7} link={configPath.special.marika} {...props}/>
                <FotoLink src={foto8} link={configPath.special.mobJournal} {...props}/>
              </>
            }
          />
        {/* <Route path={`${configPath.special.path}/${props.path || "*"}`} element={<Gallery {...props}/>} /> */}
        </Routes>
      </div>
    </section>
  );
}

export default Portfolio;
