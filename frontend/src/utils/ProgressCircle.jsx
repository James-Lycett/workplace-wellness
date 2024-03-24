import React from 'react'

export default function CircularProgressBar({ progress }) {
    const radius = 40; // Adjust the radius as needed
    const radius2 = 37.5;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference + (progress / 100) * circumference;

    return (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="#e0e0e0" // Color of the hollow circle
                strokeWidth="10" // Thickness of the hollow circle
            />
            <circle
                cx="50"
                cy="50"
                r={radius2}
                fill="none"
                stroke="#00528E" // Color of the progress circle
                strokeWidth="15" // Thickness of the progress circle
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 50 50)"
            />
            <text x="52" y="56.5" textAnchor="middle" fill="#000000" className='font-bold text-lg'>{progress}%</text>
        </svg>
    );
}