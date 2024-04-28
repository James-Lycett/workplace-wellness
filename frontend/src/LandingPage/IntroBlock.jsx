import React from "react";
import purpleLadyGraphic from "./purpleLadyGraphic.png"

function IntroBlock(){
    return (
        <div className="flex flex-row gap-10 lg:w-4/5 lg:p-12 bg-white rounded-xl">
            <div className="flex items-center flex-1">
                <p className="text-midxl font-medium px-3">
                    At Workplace Wellness, we are dedicated to guiding you on a journey towards
                    improved sleep quality and enhanced mental wellness. 
                    Whether you're dealing with stress, anxiety, insomnia, or simply seeking to
                    optimize your sleep routine, we are here to provide a compassionate and
                    informative space where you can embark on your path to better sleep and mental
                    resilience for you and your team.
                </p>
            </div>
            <div className="flex flex-col items-center flex-1">
                <img src={purpleLadyGraphic} className="w-4/5"/>
            </div>
        </div>
    )
}

export default IntroBlock