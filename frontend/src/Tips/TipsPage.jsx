import React from 'react'

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
