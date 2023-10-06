import React, { useEffect, useState } from 'react'
import styles from '../styles/infoHome.module.css';
import cajas from "../../assets/infoHomeUno.jpg";
import puertaEnPuerta from "../../assets/puerta-en-puerta2.png";
import track from "../../assets/track.png";
import { Link } from 'react-router-dom';

const InfoKdContent = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600); // Cambia a tu punto de quiebre según lo que consideres "móvil"
        };

        handleResize(); // Llama a la función cuando se carga la página para establecer el estado inicial

        window.addEventListener('resize', handleResize); // Agrega un event listener para manejar cambios en el tamaño de la pantalla

        // Limpia el event listener cuando el componente se desmonta para evitar problemas de memoria
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // El segundo argumento del useEffect vacío asegura que este efecto se ejecute solo una vez, similar a componentDidMount


    return (
        <>
            <div className={styles.infoContent}>
                <div className={isMobile ? styles.cardMobile : styles.cardRight}>
                    <div className={styles.cardImage}>
                        <img className={styles.imgContent} src={cajas} alt="Imagen" />{" "}
                    </div>
                    <div className={styles.cardContentRight}>
                        <h1 className={styles.heading}>Envios Rápidos y Confiables</h1>
                        <p className={styles.paragraph}>
                            Envía paquetes y documentos de forma segura con nuestro servicio. Ofrecemos soluciones de entrega eficientes y confiables para asegurar que tus envíos lleguen a su destino de manera puntual y en perfectas condiciones.
                        </p>
                    </div>
                </div>

                <div className={styles.separator}> </div>

                <div>

                </div>
                <div className={isMobile ? styles.cardMobile : styles.cardLeft}>
                    <div className={styles.cardImage2}>
                        <img className={styles.imgContent} src={puertaEnPuerta} alt="Imagen" />{" "}
                    </div>
                    <div className={styles.cardContentLeft}>
                        <h1 className={styles.heading}> Entrega Puerta a Puerta</h1>
                        <p className={styles.paragraph}>
                            Con nuestro servicio de entrega puerta a puerta, nos encargamos de recoger tus paquetes en el origen y entregarlos directamente en la puerta de destino.
                        </p>
                    </div>
                </div>

                <div className={styles.separator}> </div>


                <div className={isMobile ? styles.cardMobile : styles.cardRight}>
                    <div className={styles.cardImage}>
                        <img className={styles.imgContent} src={track} alt="Imagen" />{" "}
                    </div>
                    <div className={styles.cardContentRight}>
                        <h1 className={styles.heading}>Rastreo</h1>
                        <p className={styles.paragraph}>
                            Ofrecemos una transparencia total en la entrega de tu paquete. Podrás seguir cada movimiento. Brindándote una visión detallada y precisa de la entrega. Puedes tener la tranquilidad de saber que tu paquete llega a las manos correctas, en el momento adecuado.                        </p>
                        <div className={styles.contenedorBtn}>
                            <Link className={styles.rastreoHelp} to={'/ayuda-rastreo'}>¿Cómo utilizar el rastreo?</Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default InfoKdContent