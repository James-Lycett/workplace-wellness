import React from "react";
import { Link } from "react-router-dom";
import purpleLadyGraphic from "../LandingPage/purpleLadyGraphic.png"

export default function NotFound() {
    return (
        <>
        <div className="flex flex-col justify-center items-center p-10">
            <img
                src={purpleLadyGraphic}
                alt=""
                className="w-3/5 md:w-1/5"
            />
            <h1 className="md:text-4xl text-2xl py-10">404 Page Not Found</h1>
            <Link to="/"><button className="button-light-blue">Return to Home</button></Link>
        </div>
        </>
    )
}