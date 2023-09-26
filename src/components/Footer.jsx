import React from "react";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          {/* Aquí puedes agregar tu logo */}
        </div>
        <div className={styles.footerLinks}>
          <ul className={styles.listContainer}>
            <li className={styles.listItem}>
              <h5>NUESTRA COMPAÑÍA</h5>
              <ul className={styles.listFoot}>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Sobre KD S.A
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Trabaja con nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Términos y condiciones
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <h5>SERVICIO AL CLIENTE</h5>
              <ul className={styles.listFoot}>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Escribir a KD S.A
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Artículos prohibidos para envío
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <h5>MAS SOBRE KD S.A</h5>
              <ul className={styles.listFoot}>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Agencias
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Ser una agencia de KD
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footLinks}>
                    Ser un punto KD
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              <h5>REDES SOCIALES</h5>
              <ul className={styles.listFootSocial}>
                <a href="https://www.facebook.com/kdexpresspy" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/kdexpresspy/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
                <a href="https://www.wa.link/iz6c7b"><i class="bi bi-whatsapp" target="_blank" rel="noopener noreferrer"></i></a>
              </ul>
            </li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>
        <div className={styles.footerContact}>
          {/* Información de contacto */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
