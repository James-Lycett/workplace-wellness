import React from 'react'
import purpleLadyGraphic from './purpleLadyGraphic.png'

export default function IntroBlock() {
    return (
        <div className="flex lg:flex-row flex-col-reverse gap-10 lg:w-4/5 lg:p-4">
            <div className="flex lg:items-center flex-1">
                <p className="lg:text-xl font-normal lg:px-3">
                    At Workplace Wellness, we are dedicated to guiding you on a
                    journey towards improved sleep quality and enhanced mental
                    wellness. Whether you're dealing with stress, anxiety,
                    insomnia, or simply seeking to optimize your sleep routine,
                    we are here to provide a compassionate and informative space
                    where you can embark on your path to better sleep and mental
                    resilience for you and your team.
                </p>
            </div>
            <div className="flex flex-col items-center flex-1">
                <img
                    src={purpleLadyGraphic}
                    alt=''
                    className="lg:w-4/5 w-3/5 max-w-full"
                />
            </div>
        </div>
    )
}
