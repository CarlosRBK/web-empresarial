import React from 'react'
import styles from './contacto.module.css';
import iconoCall from '../../assets/service-background.jpg'

const Contacto = () => {
    return (
        <section className={styles.contactSection}>
            <div>
                <h2 className={styles.ContactTitle}>
                    Contacto
                </h2>
            </div>
            <div className={styles.contactInfoContainer}>
                <div className={styles.containerCard}>
                    <div className={styles.headingCard}>
                        <h2>Encarnación</h2>
                    </div>
                    
                    <i class="bi bi-telephone-fill"></i>

                    <div className={styles.cardServiceContent}>
                        <h4>Contacto:</h4>
                        <p> (0985) 619642</p>
                        <h4>Dirección:</h4>
                        <p> Curupayty, entre, Independencia Nacional y Honorio González. </p>
                    </div>
                </div>´

                <div className={styles.containerCard}>
                    <div className={styles.headingCard}>
                        <h2>Asunción</h2>
                    </div>

                    <i class="bi bi-telephone-fill"></i>

                    <div className={styles.cardServiceContent}>


                        <h4>Contacto:</h4>
                        <p> (0992) 921 080</p>

                        <h4>Dirección:</h4>
                        <p> Alto Paraguay 3473 Av. La Victoria.</p>
                    </div>

                </div>

                <div className={styles.containerCard}>
                    <div className={styles.headingCard}>
                        <h2>Ciudad Del Este</h2>
                    </div>
                    <i class="bi bi-telephone-fill"></i>

                    <div className={styles.cardServiceContent}>
                        <h4>Contacto:</h4>
                        <p> (0994) 360385</p>
                        <h4>Dirección:</h4>
                        <p>Av San Blas y Paysandú.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Contacto