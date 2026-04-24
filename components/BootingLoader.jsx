
"use client"

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const BootingLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef(null);
    const countRef = useRef(null);
    const barRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // 1. Fake progress animation (mimicking Dogstudio's precision)
        const counter = { value: 0 };
        tl.to(counter, {
            value: 100,
            duration: 2.5,
            ease: "power4.inOut",
            onUpdate: () => {
                setProgress(Math.round(counter.value));
            }
        });

        // 2. Animate the visual progress bar simultaneously
        tl.to(barRef.current, {
            width: "100%",
            duration: 2.5,
            ease: "power4.inOut",
        }, 0);

        // 3. Cinematic Reveal (The "Exit" animation)
        tl.to([countRef.current, barRef.current], {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in"
        })
            .to(loaderRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1.2,
                ease: "expo.inOut"
            });

    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-[#050816] text-white"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <div className="relative w-full max-w-[300px] md:max-w-[500px]">
                {/* Percentage Counter */}
                <div ref={countRef} className="flex justify-between items-baseline mb-4">
                    <span className="text-xs uppercase tracking-[0.3em] font-light opacity-50">
                        Booting
                    </span>
                    <span className="text-6xl md:text-8xl italic tracking-tighter">
                        {progress}%
                    </span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                    {/* The Actual Moving Bar */}
                    <div
                        ref={barRef}
                        className="h-full bg-[#915eff] w-0 shadow-[0_0_15px_#915eff]" />
                </div>
            </div>
        </div>
    )
}

export default BootingLoader