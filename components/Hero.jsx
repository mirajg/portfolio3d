"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    const container = useRef(null); // Container for scoping
    const nameRef = useRef(null);   // Ref for the specific element
    const textDesc = useRef(null);   // Ref for the specific element
    const hiText = useRef(null);   // Ref for the specific element

    useGSAP(() => {
        // GSAP automatically searches WITHIN the container ref when you provide the scope
        gsap.from('.name-highlights span', {
            y: 100,
            stagger: 0.1, // Lowered slightly for a smoother "wave"
            opacity: 0,
            duration: 0.5,
            ease: "power1.out"
        });

        gsap.from(textDesc.current, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "linear"
        })

        gsap.from(hiText.current, {
            opacity: 0,
            duration: 1,
            ease: "power4.in"
        })
    }, { scope: container });

    return (
        <section ref={container} className="hero-page w-full flex flex-col items-center justify-center p-4 py-8 pt-40">
            <div id="main-page-layout">
                <h1 className="mt-2 p-4 overflow-hidden">
                    <span ref={hiText} className='inline-block tracking-widest'>Hi, I'm</span>
                    <span ref={nameRef} className="text-[#915EFF] p-4 name-highlights inline-block tracking-wider">
                        <span className='inline-block'>M</span>
                        <span className='inline-block'>i</span>
                        <span className='inline-block'>r</span>
                        <span className='inline-block'>a</span>
                        <span className='inline-block'>j</span>
                        <span className='sm:inline-block hidden  px-2'></span>
                        <span className='sm:inline-block hidden '>G</span>
                        <span className='sm:inline-block hidden '>a</span>
                        <span className='sm:inline-block hidden '>u</span>
                        <span className='sm:inline-block hidden '>t</span>
                        <span className='sm:inline-block hidden '>a</span>
                        <span className='sm:inline-block hidden '>m</span>
                        <span>
                            <img width={60} height={60} className="rounded-full inline-block sm:hidden shadow-md shadow-purple-500/20" src="/images/web.png" alt="web" />
                        </span>
                    </span>
                </h1>
                <p className="text-[#dfd9ff] overflow-hidden mt-6">
                    <span className='inline-block' ref={textDesc}>I develop 3D visuals, user interfaces and web applications</span>
                </p>
            </div>
        </section>
    )
}

export default Hero