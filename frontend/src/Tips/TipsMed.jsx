import React from 'react'
import meditation1 from './Images/meditation1.jpg'
import meditation2 from './Images/meditation2.jpg'
import meditation3 from './Images/meditation3.jpg'
import meditation4 from './Images/meditation4.jpg'

export default function TipsMed() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center font-bold">
                    Meditation & Relaxation Guide
                </h2>
                <hr className="mb-5 w-2/5 mx-auto border-2 border-black" />
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <div className="relative overflow-hidden w-50 h-50">
                            <img
                                src={meditation1}
                                className="object-cover"
                                alt="Meditation Image 1"
                            />
                        </div>
                        <p className="text-xl text-center mt-2 mb-10">
                            Meditation Techniques
                        </p>
                    </div>
                    <div>
                        <div className="relative overflow-hidden w-50 h-50">
                            <img
                                src={meditation2}
                                className="object-cover"
                                alt="Meditation Image 2"
                            />
                        </div>
                        <p className="text-xl text-center mt-2 mb-10">
                            Setup Deep Breathing Reminders
                        </p>
                    </div>
                    <div>
                        <div className="relative overflow-hidden w-50 h-50">
                            <img
                                src={meditation3}
                                className="object-cover"
                                alt="Meditation Image 3"
                            />
                        </div>
                        <p className="text-xl text-center mt-2 mb-10">
                            In Depth Mood Tracker
                        </p>
                    </div>
                    <div>
                        <div className="relative overflow-hidden w-50 h-50">
                            <img
                                src={meditation4}
                                className="object-cover"
                                alt="Meditation Image 4"
                            />
                        </div>
                        <p className="text-xl text-center mt-2 mb-10">
                            Sights & Sounds for A Better Night's Sleep
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
