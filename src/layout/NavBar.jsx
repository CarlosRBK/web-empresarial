import React from "react";
import styles from "./styles/navBar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo-kd.png";

const NavBar = () => {
  
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.itemList}>
        <img src={logo} alt="Logo de KD Express" />
      </ul>
      <ul className={styles.itemList}>
        <li className={styles.navItem}>
          <Link className={styles.navLinks} to="/">INICIO</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLinks} to="/">SERVICIO</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLinks} to="/">NOSOTROS</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLinks} to="/">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
