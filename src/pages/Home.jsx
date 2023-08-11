import React, { useState } from "react";
import MenuPick from "../components/MenuPick";
import style from "./styles/home.module.css";
import backgroundImage from "../assets/background-truck.jpg";
import InfoHome from "../components/InfoHome";

const Home = () => {
  return (
    <section
      className={style.home}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={style.lema}>
        <span>
          <h1>FUERTE,</h1>
        </span>
        <span>
          <h1>GRANDE,</h1>
        </span>
        <span>
          <h1>NACIONAL</h1>
        </span>
      </div>
      <div className={style.container}>
        <MenuPick />
      </div>
      <div className={style.container}>
        <InfoHome />
      </div>
    </section>
  );
};

export default Home;
