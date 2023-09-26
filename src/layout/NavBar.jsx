import React from "react";
import styles from "./styles/navBar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo-kd.png";

const NavBar = ({ isHidden }) => {

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const scrollToContact = () => {
    const contactoSection = document.getElementById("contacto");
    if (contactoSection) {
      contactoSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
  }

    return (
      <nav className={`${styles.navContainer} ${isHidden ? styles.hidden : ''}`}>          <ul className={styles.itemList}>
        <img src={logo} alt="Logo de KD Express" />
      </ul>
        <ul className={styles.itemList}>
          <li className={styles.navItem}>
            <Link className={styles.navLinks} to="/">INICIO</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLinks} onClick={scrollToServices}>SERVICIO</Link>
          </li>
          {/* <li className={styles.navItem}>
            <Link className={styles.navLinks} to="/">RASTREO</Link>
          </li> */}
          <li className={styles.navItem}>
            <Link className={styles.navLinks} onClick={scrollToContact}>CONTACTO</Link>
          </li>
        </ul>
      </nav>
    );
  };

  export default NavBar;
