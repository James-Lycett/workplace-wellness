import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import IntroBlock from "./IntroBlock";
import FeaturesBlock from "./FeaturesBlock";
import CallToActionBlock from "./CallToActionBlock";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center lg:px-10 bg-slate-100">
            <h1 className="text-4xl text-center font-extrabold tracking-tight py-12">Welcome to Workplace Wellness</h1>
            <IntroBlock />
            <h2 className="text-4xl font-extrabold tracking-tight py-12">What We Offer</h2>
            <FeaturesBlock />
            <CallToActionBlock />
        </div>
    );
}
