import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import styles from './styles/layout.module.css';
import LoadingScreen from '../pages/LoadingScreen';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simula una carga de datos o recursos
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Puedes ajustar el tiempo de carga a tu preferencia
    }, []);

    return (
        <section className={styles.sectionLayout}>
          {isLoading ? (
            <LoadingScreen/>
          ) : (
            <>
              {/* <NavBar /> */}
              <Outlet />
              <Footer />
            </>
          )}
        </section>
    );
}; // Aquí cierra la función Layout

export default Layout;
