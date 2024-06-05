import React from 'react'
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
        image: sleep1,
        alt: 'Sleep 1',
        caption: 'Personalize Your Sleep Routine',
    },
    {
        image: sleep2,
        alt: 'Sleep 2',
        caption: 'Common Sleep Disorders',
    },
    {
        image: sleep3,
        alt: 'Sleep 3',
        caption: 'Consult With A Licensed Sleep Specialist',
    },
    {
        image: sleep4,
        alt: 'Sleep 4',
        caption: 'Sleep Disorder Self Help Modules',
    },
]

export const fitnessTips = [
    {
        image: fitness1,
        alt: 'Fitness 1',
        caption: 'Select A Workout Plan That Fits Your Needs',
    },
    {
        image: fitness2,
        alt: 'Fitness 2',
        caption: 'The Link Between Physical Activity and Mental Health',
    },
    {
        image: fitness3,
        alt: 'Fitness 3',
        caption: 'Find Local Trails and Parks',
    },
    {
        image: fitness4,
        alt: 'Fitness 4',
        caption: 'Nutrition Tips and Mindful Meals',
    },
]

export const meditationTips = [
    {
        image: meditation1,
        alt: 'meditation 1',
        caption: 'Meditation Techniques',
    },
    {
        image: meditation2,
        alt: 'meditation 2',
        caption: 'Setup Deep Breathing Reminders',
    },
    {
        image: meditation3,
        alt: 'meditation 3',
        caption: 'In Depth Mood Tracker',
    },
    {
        image: meditation4,
        alt: 'meditation 4',
        caption: "Sights & Sounds for A Better Night's Sleep",
    },
]

export default function TipsPage({ title, tips }) {
    return (
        <div className="flex justify-center m-10">
            <div className="flex flex-col items-center justify-center max-w-4xl">
                <div className="mb-10 w-full">
                    <h2 className="text-3xl text-center font-bold">{title}</h2>
                    <hr className="mb-5 w-3/4 mx-auto border-2 border-black" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tips.map((tip, index) => (
                        <div key={index}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={tip.image}
                                    className="object-contain rounded-lg"
                                    alt={tip.alt}
                                />
                                <p className="text-xl text-center mt-2 mb-10">
                                    {tip.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
