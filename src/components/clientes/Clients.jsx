import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './clients.module.css'; // Asegúrate de importar los estilos adecuados
import toyotoshi from '../../assets/clients/toyotoshi.webp';
import kemsa from '../../assets/clients/kemsa.png';
import diesa from '../../assets/clients/diesa.png';
import nissei from '../../assets/clients/nissei.png'
import covepa from '../../assets/clients/covepa.webp'
import sansei from '../../assets/clients/sansei.png'
import progresar from '../../assets/clients/progresar.png'
import alejandria from '../../assets/clients/alejandria.webp'
import kaneko from '../../assets/clients/kaneko.jpg'
import vemay from '../../assets/clients/vemay.png'
import pizzahut from '../../assets/clients/pizza-hut.jpg'
import katty from '../../assets/clients/katty.png'
import pcClick from '../../assets/clients/pcClick.png';

const Clients = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (

        <div className={styles.contenedor} >
            <div className={styles.titulo}>
                <h2>Conozca algunos clientes de KD Express</h2>
                <p>Siga el camino de quienes ya trabajan con nosotros y encuentre las mejores soluciones logísticas.</p>

            </div>

            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                infinite={true}
                autoPlaySpeed={2000}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-15-px"
                centerMode={true}
                focusOnSelect={true}
                autoPlay={true}
                className={styles.logos}

            >
                <div className={styles.carrouselImgContenedor}>
                    <img src={toyotoshi} alt="Toyotoshi" className={styles.ImagenesCarrousel} />
                </div>

                <div className={styles.carrouselImgContenedor}>
                    <img src={kemsa} alt="KEMSA" className={styles.ImagenesCarrousel} />
                </div>

                <div className={styles.carrouselImgContenedor}>
                    <img src={nissei} alt="NISSEI" className={styles.ImagenesCarrousel} />
                </div>

                <div className={styles.carrouselImgContenedor}>
                    <img src={diesa} alt="DIESA S.A" className={styles.ImagenesCarrousel} />
                </div>

                <div className={styles.carrouselImgContenedor}>
                    <img src={covepa} alt="COVEPA" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={sansei} alt="SANSEI" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={progresar} alt="progresar" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={alejandria} alt="alejandria" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={pizzahut} alt="Pizza Hut" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={vemay} alt="vemay Flores" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={kaneko} alt="kaneko" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={katty} alt="katty" className={styles.ImagenesCarrousel} />
                </div>
                <div className={styles.carrouselImgContenedor}>
                    <img src={pcClick} alt="pc click" className={styles.ImagenesCarrousel} />
                </div>
            </Carousel>
        </div>
    );
};

export default Clients;
