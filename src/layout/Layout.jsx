import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from '../components/Footer'
import styles from './styles/layout.module.css';

export const Layout = () => {
    return (
        <section className={styles.sectionLayout}>
            {/* <NavBar /> */}
            <Outlet />
            <Footer />
        </section>
    )
}