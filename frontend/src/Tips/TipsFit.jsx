import React from 'react'
import fitness1 from './Images/fitness1.jpg'
import fitness2 from './Images/fitness2.jpg'
import fitness3 from './Images/fitness3.jpg'
import fitness4 from './Images/fitness4.jpg'

export default function TipsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center font-bold">
                Physical Fitness Guide
            </h2>
            <hr className="mb-5 w-2/5 mx-auto border-2 border-black" />
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <div className="relative overflow-hidden w-50 h-50">
                        <img
                            src={fitness1}
                            className="object-cover w-full h-full"
                            alt="Fitness Image 1"
                        />
                    </div>
                    <p className="text-xl text-center mt-2 mb-10">
                        Select A Workout Plan That Fits Your Needs
                    </p>
                </div>
                <div>
                    <div className="relative overflow-hidden h-100">
                        <img
                            src={fitness2}
                            className="object-cover"
                            alt="Fitness Image 2"
                        />
                    </div>
                    <p className="text-xl text-center mt-2 mb-10">
                        The Link Between Physical Activity and Mental Health
                    </p>
                </div>
                <div>
                    <div className="relative overflow-hidden w-50 h-50">
                        <img
                            src={fitness3}
                            className="object-cover w-full h-full"
                            alt="Fitness Image 3"
                        />
                    </div>
                    <p className="text-xl text-center mt-2 mb-10">
                        Find Local Trails and Parks
                    </p>
                </div>
                <div>
                    <div className="relative overflow-hidden w-50 h-50">
                        <img
                            src={fitness4}
                            className="object-cover w-full h-full"
                            alt="Fitness Image 4"
                        />
                    </div>
                    <p className="text-xl text-center mt-2 mb-10">
                        Nutrition Tips and Mindful Meals
                    </p>
                </div>
            </div>
        </div>
    )
}
