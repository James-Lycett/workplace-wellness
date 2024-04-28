import React from "react";
import { Link } from "react-router-dom";

function CallToActionBlock() {
    return (
        <div className="lg:w-4/5 text-center text-midxl font-medium lg:p-12 my-12 bg-white rounded-xl">
            <p className="mb-5">Are you ready to wellness up your workplace? Click here to register an account and get your workness wellplace journey started!</p>
            <Link to="/register" className="button-light-blue">Get Started</Link>
        </div>
    )
}

export default CallToActionBlock