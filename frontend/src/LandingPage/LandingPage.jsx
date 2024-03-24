import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function LandingPage() {
    return (
        <div>
            <div className="columns-2 mx-10 py-5">
                <div className="break-after-column m-6">
                    <h1 className="text-4xl font-bold mb-5">Welcome to Workplace Wellness</h1>    
                    <p>At Workplace Wellness, we are dedicated to guiding you on a journey towards
improved sleep quality and enhanced mental wellness. Our mission is to empower
you with our expertly curated articles, evidence-based tips, and personalized
strategies designed to help you unlock the secrets to a restful night's sleep. Whether you're dealing with stress, anxiety, insomnia, or simply seeking to
optimize your sleep routine, we are here to provide a compassionate and
informative space where you can embark on your path to better sleep and mental
resilience.</p><br/>
                    <p>Join our community of like-minded individuals who are committed to prioritizing their mental health through the transformative power of quality sleep.</p>
                </div>
                {/* Buttons section */}
                <div className=" bg-accent-background border-2 border-primary-1 rounded m-6 pb-10">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl mt-9 mb-3">Already a member?</p>
                            <Link
                                to="/login"
                                className="button-dark-rounded text-3xl rounded-2xl w-1/2 py-5"
                            >
                                SIGN IN
                            </Link>
                        <hr className="h-px border-1 border-gray-400 w-11/12 rounded-xl z-50 my-9"/>
                        <p className="text-2xl  mb-3">
                            Don't have an account?
                        </p>
                            <Link
                                to="/register"
                                className="button-dark-rounded text-3xl rounded-2xl w-1/2 py-5"
                            >
                                REGISTER
                            </Link>
                    </div>
                </div>
            </div>

            {/* Footer section */}
            <div>
                
            </div>
        </div>    
    );
}
