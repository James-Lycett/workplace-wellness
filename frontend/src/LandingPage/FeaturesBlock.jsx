import React from 'react'
import sleepingGraphic from './sleepingGraphic.png'
import meditatingGraphic from './meditatingGraphic.png'
import stretchingGraphic from './stretchingGraphic.png'

export default function FeaturesBlock() {
    return (
        <div className="flex lg:flex-row flex-col lg:gap-16 lg:w-4/5 lg:p-12 lg:text-xl font-regular">
            <div className="flex flex-col lg:flex-col sm:flex-row items-center flex-1 lg:m-0 m-4">
                <img
                    src={sleepingGraphic}
                    alt=''
                    className="lg:w-full sm:w-1/3 w-full px-5 sm:p-0 max-w-full"
                />
                <p className="m-5 lg:mt-5 pt-5">
                    We can help you sleep if you are interested in that.
                    Probably you are, cause you sleep a lot like a third of your
                    life or something.
                </p>
            </div>
            <div className="flex flex-col lg:flex-col sm:flex-row-reverse items-center flex-1 lg:m-0 m-4">
                <img
                    src={meditatingGraphic}
                    className="lg:w-full sm:w-1/3 w-full px-5 sm:p-0 max-w-full"
                    alt=''
                />
                <p className="m-2 lg:mt-5 pt-5">
                    Also meditation is good for your brain, and your brain is
                    pretty important, and therefore handy to pay attention to.
                </p>
            </div>
            <div className="flex flex-col lg:flex-col sm:flex-row items-center flex-1 lg:m-0 m-4">
                <img
                    src={stretchingGraphic}
                    className="lg:w-full sm:w-1/3 w-full px-5 sm:p-0 max-w-full"
                    alt=''
                />
                <p className="m-5 lg:mt-5 pt-5">
                    Exercise is good, but gyms aren't particularly inspiring so
                    we're showing you yoga. I dunno.
                </p>
            </div>
        </div>
    )
}
