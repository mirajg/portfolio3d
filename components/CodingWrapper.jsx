
"use client"

import React, { useState, Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three' // Import THREE for color space constants
import ActualCoding from './ActualCoding.jsx'
import Loading from './Loading.jsx'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

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
    const container = useRef(null);
    const insideContainer = useRef(null);
    const settingsContainer = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
                end: '+=500',
            }
        });

        tl.from(insideContainer.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
        tl.from(settingsContainer.current, {
            y: "100%",
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })
    }, { scope: container });

    return (
        <div ref={container} className="overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full z-[20] transform rotate-180">
                <svg
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[120px]"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#050816" // CHANGE THIS: Match the background color of the section ABOVE this one
                        fillOpacity="1"
                        d="M0,160L40,176C80,192,160,224,240,208C320,192,400,128,480,122.7C560,117,640,171,720,181.3C800,192,880,160,960,176C1040,192,1120,256,1200,261.3C1280,267,1360,213,1400,186.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                    </path>
                </svg>
            </div>


            <div ref={insideContainer} className="relative w-full h-screen"
                style={{
                    backgroundImage: `url(${imgSelect})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#1d1836",
                    transition: "background-image 1s ease-in-out"
                }}>
                <Canvas
                    // Enable sRGB color management on the renderer
                    gl={{
                        antialias: true,
                        outputColorSpace: THREE.SRGBColorSpace,
                        alpha: true // Important: allows the div background to show through
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                        pointerEvents: "none", // Re-enabled so you can interact with the model
                    }}
                >
                    <Suspense fallback={<Loading />}>
                        <ActualCoding bgImg={imgSelect} />
                    </Suspense>
                </Canvas>

                {/* UI Controls */}
                <div className="overflow-hidden">
                    <div ref={settingsContainer} className="absolute z-[10] bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <p className="text-white font-medium drop-shadow-md">Select BG</p>
                        <div className="flex gap-3 p-3 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg">
                            {BG_OPTIONS.map((skin) => (
                                <button
                                    key={skin.id}
                                    onClick={() => setImgSelect(skin.path)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all active:scale-90 ${imgSelect === skin.path ? 'border-yellow-400 scale-110' : 'border-white/50'
                                        }`}
                                    style={{
                                        backgroundImage: `url(${skin.path})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                    aria-label={`Switch to background ${skin.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingWrapper;