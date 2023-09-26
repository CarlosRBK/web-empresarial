import React, { useState } from "react";
import Tracking from "./Tracking";
import CalcularEnvios from "./CalcularEnvios";
import styles from "./styles/menuPick.module.css";
import trackingLogo from "../assets/tracking.png";
import enviosLogo from "../assets/envios.png";
import agenciasLogo from "../assets/agencias.png";
import Agencias from "./Agencias";

const MenuPick = () => {
  const [selectedComponent, setSelectedComponent] = useState("tracking");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className={styles.container}>
      <div className={styles.componentSelector}>
        <div
          className={`${styles.button} ${
            selectedComponent === "calcular" ? styles.activeButton : ""
          }`}
          onClick={() => handleComponentChange("calcular")}
        >
          <img
            src={enviosLogo}
            alt="Icono de tracking"
            className={styles.pickIcon}
          />
          SERVICIOS
        </div>
        <div
          className={`${styles.button} ${
            selectedComponent === "tracking" ? styles.activeButton : ""
          }`}
          onClick={() => handleComponentChange("tracking")}
        >
          <img
            src={trackingLogo}
            alt="Icono de tracking"
            className={styles.pickIcon}
          />
          TRACKING
        </div>
        <div
          className={`${styles.button} ${
            selectedComponent === "agencias" ? styles.activeButton : ""
          }`}
          onClick={() => handleComponentChange("agencias")}
        >
          <img
            src={agenciasLogo}
            alt="Icono de tracking"
            className={styles.pickIcon}
          />
          AGENCIAS
        </div>
      </div>
      <div className={styles.componentDisplayContainer}>
        {selectedComponent === "calcular" && <CalcularEnvios />}
        {selectedComponent === "tracking" && <Tracking />}
        {selectedComponent === "agencias" && <Agencias />}
      </div>
    </div>
  );
};

export default MenuPick;
