
"use client"

import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Bee from './Bee'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const PhoneNav = ({ setIsOpen }) => {
    const realTimeDate = useRef(null);
    const hideRemove = useRef(null);
    const container = useRef(null);
    const tl = useRef(null);

    const closeMenu = () => {
        if (tl.current) {
            // This will now reverse the background AND the text together
            tl.current.reverse();
        }
    };

    useGSAP(() => {
        const spans = container.current?.querySelectorAll("li span");

        // 1. Create the timeline
        tl.current = gsap.timeline({
            paused: true,
            onReverseComplete: () => {
                setIsOpen(false);
            }
        });

        tl.current.to(hideRemove.current, {
            x: "100vw",
            duration: 0.5,
            ease: "power2.inOut"
        }).set(container.current, { display: "block" }).to(hideRemove.current, {
            x: "-100vw",
            duration: 0.5,
            ease: "power2.inOut",
        }).from(spans, {
            y: "200%",
            stagger: 0.15,
            duration: 0.4,
            ease: "power2.out"
        });

        tl.current.play();
    }, { scope: container });

    useEffect(() => {
        function updateTime() {
            const now = new Date();
            const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
            const currentDate = now.toLocaleDateString('en-US', dateOptions);

            // Push to HTML
            realTimeDate.current.textContent = `© ${currentDate} PORTFOLIO`;
        }

        updateTime();
    }, [])


    return (
        <>
            <div ref={hideRemove} className="hide-remove w-full h-screen bg-black absolute top-0 -left-[100vw] z-100 "></div>
            <div ref={container} className="container hidden">
                <Canvas id='canvas' style={{
                    width: "100%",
                    height: "100vh",
                    position: "fixed",
                    top: "0px",
                    left: "0%",
                    zIndex: 99,
                    transition: "all 0.4s linear",
                    pointerEvents: "none",
                }} className='sm:block hidden'>
                    <Bee />
                </Canvas>
                <header className='fixed left-0 z-50 flex flex-col items-center justify-center bg-[#050816] h-screen w-full overflow-hidden'>

                    <button
                        className="fixed top-6 closeMenu right-[2rem] z-[60] hover:scale-110 transition-transform"
                        onClick={() => closeMenu()}
                        aria-label="Close menu"
                    >
                        <img src="/images/closeSword.svg" width={40} height={40} alt="closeSword" aria-hidden="true" />
                    </button>

                    <div className='max-w-7xl w-full'>
                        <nav className='relative px-10'>
                            <ul className='flex ulModern flex-col sm:gap-4 gap-2'>
                                {['ABOUT', 'WORK', 'CONTACT'].map((item, index) => (
                                    <li
                                        key={item}
                                        className='group overflow-hidden p-4'>
                                        <span className='inline-block gsap-nav-item w-fit -tracking-tighter phone-nav-txt text-white/80 cursor-pointer'>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Footer info inside nav */}
                        <div className="absolute footer-txt bottom-10 px-10 max-w-7xl w-full flex justify-between items-end text-gray-500 tracking-widest">
                            <p ref={realTimeDate} id="real-time-date"></p>
                            <div className="flex gap-4">
                                <span className="hover:text-white cursor-pointer inline-block transition-colors">YT</span>
                                <span className="hover:text-white cursor-pointer inline-block transition-colors">GH</span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default PhoneNav