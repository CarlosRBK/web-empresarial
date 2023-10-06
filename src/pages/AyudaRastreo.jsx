import React from 'react';
import styles from './styles/ayudaRastreo.module.css';
import stepOne from '../assets/gif/1.gif';
import stepTwo from '../assets/gif/2.gif';
import stepThree from '../assets/gif/3.gif';
import stepFour from '../assets/gif/4.gif';
import NavBar from '../layout/NavBar';
import { Link, useNavigate } from 'react-router-dom';

const AyudaRastreo = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <div>
      <div className={styles.container}>
        <h2>¿Cómo utilizar el rastreo?</h2>
        <div className={styles.instructionContent}>
          <div className={styles.gif}>
            <img src={stepTwo} alt="GIF 2" className={styles.gifImage} />
          </div>
          <div className={styles.explanation}>
            <p>Identificamos el número de Levante, primero la letra de identificación (C-) o (S-) y los 13 números que le siguen.</p>
            <div className={styles.separator}></div>
            <li>
              <strong>IMPORTANTE:</strong> Si el identificador de la boleta es <strong>(C-)</strong> y introducimos <strong>(S-)</strong>, nos dirá que la boleta no existe; este identificador es muy importante, de lo contrario, el rastreo no dará resultados.
            </li>
          </div>
        </div>
        <div className={styles.separatorGrande}></div>
        <div className={styles.instructionContent}>
          <div className={styles.gif}>
            <img src={stepOne} alt="GIF 1" className={styles.gifImage} />
          </div>
          <div className={styles.explanation}>
            <p>En la <Link onClick={goHome} className={styles.link}>WEB KD EXPRESS</Link> cambiamos la letra de identificación de ser necesario y escribimos los 13 números correspondientes a nuestro levante.</p>
          </div>
        </div>
        <div className={styles.separatorGrande}></div>
        <div className={styles.instructionContent}>
          <div className={styles.gif}>
            <img src={stepThree} alt="GIF 3" className={styles.gifImage} />
          </div>
          <div className={styles.explanation}>
            <p>Si la boleta es existente y los datos fueron correctamente cargados, la web devolverá un cuadro donde se especifica el estado del paquete, en este cuadro podremos encontrar los siguientes detalles:</p>
            <div className={styles.separator}></div>
            <p>
              <strong>ESTADO DEL PAQUETE:</strong>
            </p>
            <li>
              <strong>PENDIENTE:</strong> En esta etapa, el paquete ha sido registrado pero aún no ha sido recogido ni enviado.
            </li>
            <li>
              <strong>RECOGIDO:</strong> En esta etapa, el paquete ha sido recogido por el servicio de mensajería y está en proceso de transporte.
            </li>
            <li>
              <strong>EN TRÁNSITO:</strong> El paquete se encuentra en ruta hacia su destino. Está siendo transportado desde el origen hacia la ubicación de entrega.
            </li>
            <li>
              <strong>EN AGENCIA DE DESTINO:</strong> El paquete ha llegado a la agencia de destino local y está listo para su entrega final.
            </li>
            <li>
              <strong>ENTREGADO:</strong> En esta etapa, el paquete ha sido entregado con éxito al destinatario. El proceso de entrega se ha completado.
            </li>
            <div className={styles.separator}></div>
            <p>
              <strong>DETALLES:</strong> Muestra los detalles del envío, como el número de boleta, el origen y el destino.
            </p>
            <div className={styles.separator}></div>
            <p>
              <strong>DETALLES DE ENTREGA:</strong> Esta sección se habilita únicamente cuando el paquete se encuentra en estado "ENTREGADO" y nos brinda información sobre la entrega:
              <li>
                <strong>RECIBIDO POR:</strong> Nos indica el nombre de la persona que recibió el paquete.
              </li>
              <li>
                <strong>C.I:</strong> Nos indica el C.I de la persona que recibió el paquete.
              </li>
              <li>
                <strong>FECHA:</strong> Nos indica la fecha y la <strong>HORA</strong> en la cual se recibió nuestro paquete.
              </li>
              <li>
                <strong>BOTÓN DE VER UBICACIÓN:</strong> Este botón nos abrirá un mapa en donde se muestra la ubicación en la cual se entregó nuestro paquete.
              </li>
            </p>
          </div>
        </div>
        <div className={styles.separatorGrande}></div>
        <div className={styles.instructionContent}>
          <div className={styles.gif}>
            <img src={stepFour} alt="GIF 4" className={styles.gifImage} />
          </div>
        </div>
        <button onClick={goHome} className={styles.btn}>Volver al inicio</button>
      </div>
    </div>
  );
};

export default AyudaRastreo;
