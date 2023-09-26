import MenuPick from "../components/MenuPick";
import styles from "./styles/home.module.css";
import backgroundImage from "../assets/background-truck2.jpg";
import InfoKdContent from "../components/infoKdContent/InfoKdContent";
import ServiceComponente from "../components/servicesComponent/ServiceComponente";
import Contacto from "../components/contacto/Contacto";
import { useEffect, useRef, useState } from "react";
import NavBar from "../layout/NavBar";
const Home = () => {
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Ajusta este valor según tu preferencia
      if (scrollY > 100 && !isVisible) {
        setIsVisible(true);
      } else if (scrollY <= 100 && isVisible) {
        setIsVisible(false);
      }

      // Oculta el NavBar cuando el usuario scrollee hacia abajo
      if (scrollY > 490 && !isNavBarHidden) {
        setIsNavBarHidden(true);
      } else if (scrollY <= 490 && isNavBarHidden) {
        setIsNavBarHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isNavBarHidden]);

  return (
    <section
      className={styles.home}
      style={{ backgroundImage: `url(${backgroundImage})`, width: "100%" }}
    >
      <div className={styles.fadeIn}>
        <NavBar isHidden={isNavBarHidden} />
        <div className={styles.lema}>
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
        <div className={styles.containerMenuPick}>
          <MenuPick />
        </div>
        <div className={`${styles.infoKdContent} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.containerContent}>
            <InfoKdContent />
            <section id="services" ref={serviciosRef}>
              <ServiceComponente />
            </section>
            <section id="contacto" ref={contactoRef}>
              <Contacto />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
