
"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    const container = useRef(null);
    const textDesc = useRef(null);
    const hiText = useRef(null);
    const singleLine = useRef(null);

    // Split the name into characters for that high-end "stagger" effect
    const firstName = "Miraj".split("");
    const lastName = "Gautam".split("");

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Initial fade in for the "Hi"
        tl.from(hiText.current, {
            opacity: 0,
            x: -20,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out"
        })
            // 2. Letters popping up with a slight bounce
            .from(".char", {
                y: 100,
                opacity: 0,
                rotateX: -90,
                stagger: 0.05,
                duration: 0.6,
                ease: "back.out(2.5)"
            }, "-=0.4")
            // 3. Description sliding up smoothly
            .from(textDesc.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.2")
            .from(singleLine.current, {
                y: 100,
                opacity: 0,
                rotateX: -30,
                transformOrigin: "top center",
                duration: 1.8,
                ease: "power4.out",
                delay: 0.2            // Gives the user a split second to focus
            });

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050816] px-6 text-white overflow-hidden"
        >
            {/* Background Glow for "Cool" factor */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#915eff] opacity-20 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto flex flex-col items-start gap-3">

                <div className="flex flex-col">
                    <h1 ref={hiText} className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                        Hi, I'm <span className="text-[#915eff]">Developer</span>
                    </h1>

                    <h2 className="font-black introTxt text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 overflow-hidden flex flex-wrap">
                        <span className="p-2">
                            {firstName.map((char, index) => (
                                <span key={`first-${index}`} className="char inline-block whitespace-pre">
                                    {char}
                                </span>
                            ))}
                        </span>

                        {/* Hidden on small screens (below 'sm' breakpoint) */}
                        <span className="hidden sm:flex px-4 py-2">
                            {lastName.map((char, index) => (
                                <span key={`last-${index}`} className="char inline-block whitespace-pre">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </h2>
                </div>

                <div className="overflow-hidden mt-4">
                    <p ref={textDesc}
                        className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] max-w-2xl">
                        I develop <span className="text-[#915eff]">3D visuals</span>, user <br className="sm:block hidden" />
                        interfaces and web applications
                    </p>
                </div>
            </div>

            <hr className="singleLine" ref={singleLine} />

            <div className="absolute bottom-10 w-full flex justify-center items-center">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 border-[#dfd9ff]/20">
                    <div className="w-3 h-3 rounded-full bg-[#915eff] mb-1 animate-bounce" />
                </div>
            </div>
        </section>
    )
}

export default Hero