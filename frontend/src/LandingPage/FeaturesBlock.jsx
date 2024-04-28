import React from "react";
import sleepingGraphic from "./sleepingGraphic.png"
import meditatingGraphic from "./meditatingGraphic.png"
import stretchingGraphic from "./stretchingGraphic.png"

function FeaturesBlock() {
    return (
        <div className="flex flex-row lg:gap-16 lg:w-4/5 lg:p-12 text-midxl font-medium bg-white rounded-xl">
            <div className="flex flex-col items-center flex-1">
                <img src={sleepingGraphic} className="w-full"/>
                <p className="mt-5">
                    We can help you sleep if you are interested in that. Probably you are, cause you sleep a lot like a third of your life or something.
                </p>
            </div>
            <div className="flex flex-col items-center flex-1">
                <img src={meditatingGraphic} className="w-full"/>
                <p className="mt-5">
                    Also meditation is good for your brain, and your brain is pretty important, and therefore handy to pay attention to. 
                </p>
            </div>
            <div className="flex flex-col items-center flex-1">
                <img src={stretchingGraphic} className="w-full"/>
                <p className="mt-5">
                    Exercise is good, but gyms aren't particularly inspiring so we're showing you yoga. I dunno. 
                </p>
            </div>
        </div>
    )
}

export default FeaturesBlock