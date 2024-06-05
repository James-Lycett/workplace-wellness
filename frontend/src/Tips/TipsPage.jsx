import React from 'react'
// import ImagePage from "./ImagePage";
import sleep1 from './Images/sleep1.jpg'
import sleep2 from './Images/sleep2.jpg'
import sleep3 from './Images/sleep3.jpg'
import sleep4 from './Images/sleep4.jpg'
import fitness1 from './Images/fitness1.jpg'
import fitness2 from './Images/fitness2.jpg'
import fitness3 from './Images/fitness3.jpg'
import fitness4 from './Images/fitness4.jpg'
import meditation1 from './Images/meditation1.jpg'
import meditation2 from './Images/meditation2.jpg'
import meditation3 from './Images/meditation3.jpg'
import meditation4 from './Images/meditation4.jpg'

export const sleepTips = [
    {
        title: 'Sleep Disorders Guide',
        images: [
            {
                src: sleep1,
                alt: 'Image 1',
                description: 'Personalize Your Sleep Routine',
            },
            {
                src: sleep2,
                alt: 'Image 2',
                description: 'Common Sleep Disorders',
            },
            {
                src: sleep3,
                alt: 'Image 3',
                description: 'Consult With A Licensed Sleep Specialist',
            },
            {
                src: sleep4,
                alt: 'Image 4',
                description: 'Sleep Disorder Self Help Modules',
            },
        ],
    },
]

export const fitnessTips = [
    {
        title: 'Physical Fitness Guide',
        images: [
            {
                src: fitness1,
                alt: 'Image 1',
                description: 'Select A Workout Plan That Fits Your Needs',
            },
            {
                src: fitness2,
                alt: 'Image 2',
                description:
                    'The Link Between Physical Activity and Mental Health',
            },
            {
                src: fitness3,
                alt: 'Image 3',
                description: 'Find Local Trails and Parks',
            },
            {
                src: fitness4,
                alt: 'Image 4',
                description: 'Nutrition Tips and Mindful Meals',
            },
        ],
    },
]

export const meditationTips = [
    {
        title: 'Meditation & Relaxation Guide',
        images: [
            {
                src: meditation1,
                alt: 'Image 1',
                description: 'Meditation Techniques',
            },
            {
                src: meditation2,
                alt: 'Image 2',
                description: 'Setup Deep Breathing Reminders',
            },
            {
                src: meditation3,
                alt: 'Image 3',
                description: 'In Depth Mood Tracker',
            },
            {
                src: meditation4,
                alt: 'Image 4',
                description: "Sights & Sounds for A Better Night's Sleep",
            },
        ],
    },
]

export default function TipsPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center font-bold">
                    Sleep Disorders Guide
                </h2>
                <hr className="mb-5 w-2/5 mx-auto border-2 border-black" />
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <div className="relative overflow-hidden ">
                            <img
                                src={sleep1}
                                className="object-contain"
                                alt="Sleep Routine"
                            />
                            <p className="text-xl text-center mt-2 mb-10">
                                Personalize Your Sleep Routine
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden">
                            <img
                                src={sleep2}
                                className="object-fill"
                                alt="Common Sleep Disorders"
                            />
                        </div>

                        <p className="text-xl text-center mt-2 mb-10">
                            Common Sleep Disorders
                        </p>
                    </div>
                    <div>
                        <div className="relative overflow-hidden">
                            <img
                                src={sleep3}
                                className="object-fill h-150 w-150"
                                alt="Consult With A Licensed Sleep Specialist"
                            />
                        </div>

                        <p className="text-xl text-center mt-2 mb-10">
                            Consult With A Licensed Sleep Specialist
                        </p>
                    </div>
                    <div>
                        <div className="relative overflow-hidden">
                            <img
                                src={sleep4}
                                className="object-fill h-150 w-150"
                                alt="Sleep Disorder Self Help Modules"
                            />
                        </div>

                        <p className="text-xl text-center mt-2 mb-10">
                            Sleep Disorder Self Help Modules
                        </p>
                    </div>
                </div>
            </div>

            {/* Physical Fitness Guide */}
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
