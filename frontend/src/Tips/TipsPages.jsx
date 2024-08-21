import React from 'react'
import TipsPage from './TipsPage'
import sleep1 from '../images/sleep1.jpg'
import sleep2 from '../images/sleep2.jpg'
import sleep3 from '../images/sleep3.jpg'
import sleep4 from '../images/sleep4.jpg'
import fitness1 from '../images/fitness1.jpg'
import fitness2 from '../images/fitness2.jpg'
import fitness3 from '../images/fitness3.jpg'
import fitness4 from '../images/fitness4.jpg'
import meditation1 from '../images/meditation1.jpg'
import meditation2 from '../images/meditation2.jpg'
import meditation3 from '../images/meditation3.jpg'
import meditation4 from '../images/meditation4.jpg'

const sleepTips = [
    {
        image: sleep1,
        alt: 'Sleep 1',
        caption: 'Personalize Your Sleep Routine',
        url: 'https://lpc.stellarsleep.com/',
    },
    {
        image: sleep2,
        alt: 'Sleep 2',
        caption: 'Common Sleep Disorders',
        url: 'https://my.clevelandclinic.org/health/diseases/11429-sleep-disorders',
    },
    {
        image: sleep3,
        alt: 'Sleep 3',
        caption: 'Consult With A Licensed Sleep Specialist',
        url: 'https://dreemhealth.com/',
    },
    {
        image: sleep4,
        alt: 'Sleep 4',
        caption: 'Sleep Disorder Self Help Modules',
        url: 'https://www.calm.com/blog/insomnia-self-care',
    },
]

const fitnessTips = [
    {
        image: fitness1,
        alt: 'Fitness 1',
        caption: 'Select A Workout Plan That Fits Your Needs',
        url: 'https://www.muscleandstrength.com/workout-routines',
    },
    {
        image: fitness2,
        alt: 'Fitness 2',
        caption: 'The Link Between Physical Activity and Mental Health',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9902068/',
    },
    {
        image: fitness3,
        alt: 'Fitness 3',
        caption: 'Find Local Trails and Parks',
        url: 'https://www.alltrails.com/',
    },
    {
        image: fitness4,
        alt: 'Fitness 4',
        caption: 'Nutrition Tips and Mindful Meals',
        url: 'https://www.sleepfoundation.org/nutrition',
    },
]

const meditationTips = [
    {
        image: meditation1,
        alt: 'meditation 1',
        caption: 'Meditation Techniques',
        url: 'https://www.mindful.org/how-to-meditate/',
    },
    {
        image: meditation2,
        alt: 'meditation 2',
        caption: 'Setup Deep Breathing Reminders',
        url: 'https://insighttimer.com/ellenmouton/guided-meditations/one-minute-break-reminder-number-1-take-a-deep-breath',
    },
    {
        image: meditation3,
        alt: 'meditation 3',
        caption: 'In Depth Mood Tracker',
        url: 'https://www.verywellmind.com/best-mood-tracker-apps-5212922',
    },
    {
        image: meditation4,
        alt: 'meditation 4',
        caption: "Sights & Sounds for A Better Night's Sleep",
        url: 'https://www.youtube.com/watch?v=ebaZ3OQoNZ4',
    },
]

export const TipsSleep = () => (
    <TipsPage title="Sleep Disorders Guide" tips={sleepTips} />
)

export const TipsMed = () => (
    <TipsPage title="Meditation Guide" tips={meditationTips} />
)

export const TipsFit = () => (
    <TipsPage title="Fitness Guide" tips={fitnessTips} />
)
