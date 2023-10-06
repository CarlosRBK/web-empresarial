import React from 'react';
import styles from './styles/paginaEnConstruccion.module.css'; // Importa los estilos CSS Modules
import background from '../assets/constructionDos.png'
import { Link, useNavigate } from 'react-router-dom';

const PaginaEnConstruccion = () => {

    const navigate = useNavigate();
    function goHome() {
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Página en construcción, lo mejor está por venir!</h1>
            <img className={styles.image} src={background} alt="Imagen de construcción" />
            <Link><button onClick={goHome} className={styles.button}>Ir al inicio</button></Link>
            <div className={styles.extra}></div>
        </div>
    )
}

export default PaginaEnConstruccion