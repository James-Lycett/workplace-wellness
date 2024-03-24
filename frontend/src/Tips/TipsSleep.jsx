import React from 'react'
import sleep1 from './Images/sleep1.jpg'
import sleep2 from './Images/sleep2.jpg'
import sleep3 from './Images/sleep3.jpg'
import sleep4 from './Images/sleep4.jpg'

export default function TipsSleep() {
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
        </div>
    )
}
