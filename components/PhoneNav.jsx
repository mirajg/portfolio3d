
"use client"

import React, { useRef, useState, Suspense } from 'react'
import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Loading from './Loading'

const NAV_ITEMS = [
    { label: 'ABOUT', id: '#about' },
    { label: 'WORK', id: '#work' },
    { label: 'CONTACT', id: '#contact' },
]

const PhoneNav = ({ setIsOpen }) => {
    const realTimeDate = useRef(null);
    const hideRemove = useRef(null);
    const container = useRef(null);
    const tl = useRef(null);
    const [isOpen, setIsOpenState] = useState(false);

    const closeMenu = (data) => {
        if (tl.current) {
            // This will now reverse the background AND the text together
            tl.current.reverse();
        }
    };

    const handleClose = (targetId = null) => {
        if (!tl.current) return;

        tl.current.reverse();

        // If navigating, wait for animation to finish before scrolling
        if (targetId) {
            setTimeout(() => {
                const element = document.querySelector(targetId);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, tl.current.duration() * 1000);
        }
    }

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
        // Lock scroll on mount
        document.body.style.overflow = 'hidden';

        // Update Footer Date
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
        if (realTimeDate.current) {
            realTimeDate.current.textContent = `© ${dateStr} PORTFOLIO`;
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <>
            <div ref={hideRemove} className="hide-remove w-full h-screen bg-black absolute top-0 -left-[100vw] z-99 "></div>
            <div ref={container} className="relative container h-screen hidden nav-container z-99">

                <header className='fixed left-0 flex flex-col items-center justify-center bg-[#050816] h-screen w-full overflow-hidden'>

                    <button
                        className="fixed top-6 closeMenu right-[2rem] hover:scale-110 transition-transform"
                        onClick={() => closeMenu()}
                        aria-label="Close menu">
                        <img src="/images/closeSword.svg" width={40} height={40} alt="closeSword" aria-hidden="true" />
                    </button>

                    <div className='max-w-7xl w-full'>
                        <nav className='relative px-10'>
                            <ul className='flex ulModern flex-col sm:gap-4 gap-2'>
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.label} className={`overflow-hidden sm:py-6 py-2`}>
                                        <span className='gsap-nav-item inline-block'>
                                            <button
                                                onClick={() => handleClose(item.id)}
                                                className="btn-nav font-bold text-white/80 hover:text-white transition-colors tracking-tighter uppercase">
                                                {item.label}
                                            </button>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Footer info inside nav */}
                        <div className="absolute hidden sm:flex footer-txt bottom-10 px-10 max-w-6xl w-full justify-between items-end text-gray-500 tracking-widest">
                            <p ref={realTimeDate} id="real-time-date"></p>
                            <div className="flex gap-4">
                                <span className="hover:text-white cursor-pointer inline-block transition-colors">
                                    <a href="https://www.youtube.com/@AxionVeilX" target='_blank'>YT</a>
                                </span>
                                <span className="hover:text-white cursor-pointer inline-block transition-colors">
                                    <a href="https://github.com/mirajg" target='_blank'>GH</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default PhoneNav
