import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from '../components/Footer'

export const Layout = () => {
    return (
        <section>
            <NavBar />
            <Outlet />
            <Footer />
        </section>
    )
}