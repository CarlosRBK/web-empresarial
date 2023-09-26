import React from 'react'
import styles from '../styles/infoHome.module.css';

const ServiceComponente = () => {
    return (
            <div className={styles.containerColorService}>
                <div className={styles.tittleCards}>
                    <h2 className={styles.fontTitle}>Nuestros servicios
                    </h2>
                </div>
                <div className={styles.servicioContenido}>
                    <div className={styles.cardService}>
                        <div className={styles.cardContent}>
                            <h1 className={styles.headingService}>Encomiendas</h1>
                        </div>
                        <div className={styles.cardImage}>
                            <i class="bi bi-boxes"></i>
                        </div>
                    </div>
                    <div className={styles.cardService}>
                        <div className={styles.cardContent}>
                            <h1 className={styles.headingService}>Puerta a puerta</h1>
                        </div>
                        <div className={styles.cardImage}>
                            <i class="bi bi-house-door-fill"></i>
                        </div>
                    </div>
                    <div className={styles.cardService}>
                        <div className={styles.cardContent}>
                            <h1 className={styles.headingService}>Rastreo</h1>
                        </div>
                        <div className={styles.cardImage}>
                            <i class="bi bi-search"></i></div>
                    </div>
                </div>
            </div>
    )
}

export default ServiceComponente