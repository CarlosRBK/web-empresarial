import styles from "./styles/home.module.css";
import backgroundImage from "../assets/background-truck2.jpg";
import InfoKdContent from "../components/infoKdContent/InfoKdContent";
import Contacto from "../components/contacto/Contacto";
import { useEffect, useRef, useState } from "react";
import NavBar from "../layout/NavBar";
import Tracking from "../components/Tracking";
import Clients from "../components/clientes/Clients";
import { Link } from "react-router-dom";
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
      className={styles.backgroundImage}
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
          <Tracking />
        </div>
        <section className={styles.contenedorMas}>

          <div className={styles.itemsMenuMas}>
            <Link to={'/nosotros'} className={styles.itemNavMas}>
              <i>KD</i>
            </Link>
            <Link to={'/nosotros'} className={styles.itemNavMas}>
              <p className={styles.LinkText}>Sobre Nosotros
              </p>
            </Link>
          </div>

          <div className={styles.separator}>
            
          </div>
          <div className={styles.itemsMenuMas}>
            <Link to={'/construccion'} className={styles.itemNavMas}>

              <i class="bi bi-briefcase"></i>
            </Link>
            <Link to={'/construccion'} className={styles.itemNavMas}>
              <p className={styles.LinkText}>Para Empresas
              </p>
            </Link>
          </div>
          <div className={styles.separator}>
            
          </div>
          <div className={styles.itemsMenuMas}>
            <Link to={'/construccion'} className={styles.itemNavMas}>

              <i class="bi bi-building-up"></i>
            </Link>
            <Link to={'/construccion'} className={styles.itemNavMas}>

              <p className={styles.LinkText}>Red KD
              </p>
            </Link>
          </div>
        </section>
        <div className={styles.containerContent}>
          <InfoKdContent />
          {/* <section id="services" ref={serviciosRef}>
              <ServiceComponente />
            </section> */}
          <section id="contacto" ref={contactoRef}>
            <Contacto />
          </section>
          <section>
            <Clients />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
