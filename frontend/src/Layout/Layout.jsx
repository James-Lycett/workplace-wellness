import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesComponent from './routes.jsx'
import Footer from '../Footer/Footer.jsx'

export function Layout() {
    return (
        <Router>
            <>
                <RoutesComponent />
                <Footer />
            </>
        </Router>
    )
}
