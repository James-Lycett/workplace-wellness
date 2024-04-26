import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesComponent from './routes.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'

export function Layout() {
    return (
        <Router>
            <>
                <Header />
                <RoutesComponent />
                <Footer />
            </>
        </Router>
    )
}
