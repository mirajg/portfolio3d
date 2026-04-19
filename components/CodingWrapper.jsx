
"use client"

import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ActualCoding from './ActualCoding.jsx'

const BG_OPTIONS = [
    { id: 1, path: "/images/background1.png" },
    { id: 2, path: "/images/background2.png" },
    { id: 3, path: "/images/background3.png" },
    { id: 4, path: "/images/background4.png" },
    { id: 5, path: "/images/background5.png" },
    { id: 6, path: "/images/background6.png" },
];

const CodingWrapper = () => {
    const [imgSelect, setImgSelect] = useState(BG_OPTIONS[0].path);

    return (
        <>
            <div className="relative w-full h-screen">
                <Canvas
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${imgSelect})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#1d1836",
                        zIndex: 1,
                        pointerEvents: "none", // Allow clicks to pass through the
                        transition: "background-image 1s ease-out" // Smooth transition for background changes
                    }}
                >
                    {/* 2. Suspense handles the loading state of the 3D model */}
                    <Suspense fallback={null}>
                        <ActualCoding bgImg={imgSelect} />
                    </Suspense>
                </Canvas>

                <div className="absolute z-[9] bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <p className="text-white font-medium drop-shadow-md">Select BG</p>

                    <div className="flex gap-3 p-3 rounded-lg shadow-lg">
                        {BG_OPTIONS.map((skin) => (
                            <button
                                key={skin.id}
                                onClick={() => setImgSelect(skin.path)}
                                className={`w-8 h-8 rounded-full border-2 transition-transform active:scale-90 shadow-lg ${imgSelect === skin.path ? 'border-yellow-400 scale-110' : 'border-white/50'
                                    }`}
                                style={{
                                    backgroundImage: `url(${skin.path})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                aria-label={`Select skin ${skin.id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CodingWrapper;