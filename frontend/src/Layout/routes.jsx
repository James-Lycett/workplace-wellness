import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import AdminHome from '../AdminHome/AdminHome'
import LoginPage from '../LoginPage/LoginPage'
import CreateAccount from '../CreateAccount/CreateAccount'
import UserHome from '../UserHome/UserHome'
import UserActivityLog from '../UserActivityLog/UserActivityLog'
import CreateUserAccount from '../CreateAccount/CreateUserAccount'
import CreateAdminAccount from '../CreateAccount/CreateAdminAccount'
import UserRegisterForm from '../CreateAccount/UserRegisterForm'
import UserPastReports from '../UserPastReports/UserPastReports'
import TipsPage from '../Tips/TipsPage'
import About from '../Boilerplate/About'
import Careers from '../Boilerplate/Careers'
import Contact from '../Boilerplate/Contact'
import Terms from '../Boilerplate/Terms'
import PrivacyPolicy from '../Boilerplate/Privacy'
import AdminReport from '../AdminHome/AdminReport'
import TipsSleep from '../Tips/TipsSleep'
import TipsMed from '../Tips/TipsMed'
import TipsFit from '../Tips/TipsFit'
// import ImagePage from "../Tips/ImagePage"

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/:userId/home" element={<AdminHome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/user/:userId/home" element={<UserHome />} />
            <Route path="/user/account" element={<CreateUserAccount />} />
            <Route path="/admin/account" element={<CreateAdminAccount />} />
            <Route path="/admin/:userId/report" element={<AdminReport />} />
            <Route path="/user/:userId/log" element={<UserActivityLog />} />
            <Route path="/user/registerForm" element={<UserRegisterForm />} />
            <Route path="/tips/options" element={<TipsPage />} />
            {/* <Route path="/tips/images" element={<ImagePage />} /> */}
            <Route path="/user/:userId/history" element={<UserPastReports />} />
            <Route path="/bp/about" element={<About />} />
            <Route path="/bp/careers" element={<Careers />} />
            <Route path="/bp/contact" element={<Contact />} />
            <Route path="/bp/terms" element={<Terms />} />
            <Route path="/bp/privacy" element={<PrivacyPolicy />} />
            <Route path="/tips/sleep" element={<TipsSleep />} />
            <Route path="/tips/fitness" element={<TipsFit />} />
            <Route path="/tips/meditation" element={<TipsMed />} />
        </Routes>
    )
}
