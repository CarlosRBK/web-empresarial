import React from "react";
import styles from "./styles/infoHome.module.css";
import imagenUno from "../assets/infoHomeUno.jpg";
import imagenTres from "../assets/imagenTres.png";
import imagenCuatro from "../assets/imagenCuatro.jpg";

const InfoHome = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={imagenCuatro} alt="Imagen" />{" "}
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.heading}>Sobre Nosotros</h1>
          <p className={styles.paragraph}>
            KD S.A, nace en 2022. Es una empresa de Transporte para envíos
            nacionales. Los valores diferenciales de KD S.A son Calidad,
            Rapidez, Innovación y Sostenibilidad.
          </p>
        </div>
      </div>

      <div className={styles.card}>
      <div className={styles.cardContent}>
          <h1 className={styles.heading}>Misión</h1>
          <p className={styles.paragraph}>
            Nuestra Misión es la construcción de una estructura logística sólida
            y confiable que nos permita garantizar la calidad de nuestro
            servicio y la plena satisfacción de nuestros clientes
          </p>
        </div>
        <div className={styles.cardImage}>
          <img src={imagenUno} alt="Imagen" />{" "}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={imagenTres} alt="Imagen" />{" "}
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.heading}>Visión</h1>
          <p className={styles.paragraph}>
            Se basa en el desarrollo de soluciones logísticas dirigidas a
            satisfacer las necesidades cambiantes de nuestros clientes para
            garantizar la oportuna de sus envíos.
          </p>
        </div>
      </div>

      {/* Repite la estructura de la tarjeta para Misión y Visión */}
    </div>
  );
};

export default InfoHome;
