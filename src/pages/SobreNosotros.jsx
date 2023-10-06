import React from 'react'
import styles from '../components/styles/infoHome.module.css'
import imagenUno from "../assets/infoHomeUno.jpg";
import imagenTres from "../assets/imagenTres.png";
import imagenCuatro from "../assets/imagenCuatro.jpg";
import NavBar from '../layout/NavBar';
import backgroundImage from '../assets/background-truck2.jpg'

const SobreNosotros = () => {

  return (
    <section
      className={styles.home}
      
    >
      <NavBar />

      <div className={styles.infoContentNosotros} style={{ backgroundImage: `url(${backgroundImage})`, width: "100%", backgroundPosition: 'center', backgroundSize: 'cover' }}>

        <div className={styles.cardNosotros}>
          <div className={styles.cardImage}>
            <img className={styles.imgContentNosotros} src={imagenCuatro} alt="Imagen" />{" "}
          </div>
          <div className={styles.cardContentRight}>
            <h1 className={styles.heading}>KD S.A</h1>
            <p className={styles.paragraph}>
              KD S.A, nace en 2022. Es una empresa de Transporte para envíos
              nacionales. Los valores diferenciales de KD S.A son Calidad,
              Rapidez, Innovación y Sostenibilidad.
            </p>
          </div>
        </div>

        <div className={styles.cardNosotros}>
          <div className={styles.cardContentRight}>
            <h1 className={styles.heading}>Misión</h1>
            <p className={styles.paragraph}>
              Nuestra misión es la construcción de una estructura logística sólida
              y confiable que nos permita garantizar la calidad de nuestro
              servicio y la plena satisfacción de nuestros clientes
            </p>
          </div>
          <div className={styles.cardImage}>
            <img className={styles.imgContentNosotros} src={imagenUno} alt="Imagen" />{" "}
          </div>
        </div>

        <div className={styles.cardNosotros}>
          <div className={styles.cardImage}>
            <img className={styles.imgContentNosotros} src={imagenTres} alt="Imagen" />{" "}
          </div>
          <div className={styles.cardContentRight}>
            <h1 className={styles.heading}>Visión</h1>
            <p className={styles.paragraph}>
              Se basa en el desarrollo de soluciones logísticas dirigidas a
              satisfacer las necesidades cambiantes de nuestros clientes para
              garantizar la oportuna de sus envíos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros