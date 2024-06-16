import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import Dashboard from '../Dashboard/Dashboard'
import LoginPage from '../LoginPage/LoginPage'
import CreateAccount from '../CreateAccount/CreateAccount'
import About from '../Boilerplate/About'
import Careers from '../Boilerplate/Careers'
import Contact from '../Boilerplate/Contact'
import Terms from '../Boilerplate/Terms'
import PrivacyPolicy from '../Boilerplate/Privacy'
import { TipsSleep, TipsMed, TipsFit } from '../Tips/TipsPages'

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/dashboard/:userId" element={<Dashboard />}/>
            <Route path="/tips">
                <Route path="sleep" element={<TipsSleep />} />
                <Route path="fitness" element={<TipsFit />} />
                <Route path="meditation" element={<TipsMed />} />
            </Route>
            <Route path="/bp">
                <Route path="about" element={<About />} />
                <Route path="careers" element={<Careers />} />
                <Route path="contact" element={<Contact />} />
                <Route path="terms" element={<Terms />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
            </Route>
        </Routes>
    )
}
