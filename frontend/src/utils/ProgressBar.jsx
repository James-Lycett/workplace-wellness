import React from "react";

export default function ProgressBar({ completed, progress }) {

    // Pretty self explanatory, the bar is as long as the value passed down
    const completedBarStyle = {
        width: `${completed}%`,
        borderRadius: completed === 100 ? '50%' : '25% 0 0 25%', // Circle when completed, rounded for progress
    }

    const progressBarStyle = {
        width: `${progress}%`,
        borderRadius: '25% 0 0 25%', // Always rounded for progress
    }

    if (!completed) {
        return (
        <>
        <div>
            <div className="bg-black h-2.5 rounded-full" style={ progressBarStyle }></div>
        </div>
        </>
        )
    } else {
        return (
            <>
            <div className="my-3">
                <div className="bg-black h-2.5 rounded-full" style={ progressBarStyle }></div>
            </div>
            <div>
                <div className="bg-black h-2.5 rounded-full" style={ completedBarStyle }></div>
            </div>
            </>
        )
    }
}
