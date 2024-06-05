import React from 'react'
import TipsPage, { sleepTips, meditationTips, fitnessTips } from './TipsPage'

export const TipsSleep = () => (
    <TipsPage title="Sleep Disorders Guide" tips={sleepTips} />
)

export const TipsMed = () => (
    <TipsPage title="Meditation Guide" tips={meditationTips} />
)

export const TipsFit = () => (
    <TipsPage title="Fitness Guide" tips={fitnessTips} />
)
