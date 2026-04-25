
"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import PhoneNav from './PhoneNav'

const Header = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isBouncing, setIsBouncing] = useState(false);
    const didScrollDown = useRef(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(window.scrollY);

            const scrollTop = window.scrollY; // Get the current scroll position

            if (scrollTop > 100) {
                didScrollDown.current = true;
            }

            if (scrollTop <= 0 && didScrollDown.current) {
                setIsBouncing(true);
                didScrollDown.current = false;

                // Auto-remove the class after animation
                setTimeout(() => setIsBouncing(false), 800);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // Cleanup the listener on unmount
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            {isOpen &&
                <>
                    <PhoneNav setIsOpen={setIsOpen} />
                </>}
            <header className={`px-4 fixed left-0 top-0 z-10 h-20 flex items-center justify-center w-full backdrop-blur-2xl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isBouncing ? 'bounce-animation' : ''}`}>
                <nav className="flex max-w-7xl w-full mx-auto items-center justify-between">

                    <span className="flex items-center gap-2  cursor-pointer group">
                        <div className="relative group-hover:scale-110 transition-transform duration-300">
                            <img width={40} height={40} className="rounded-full shadow-md shadow-purple-500/20" src="/images/happy.png" alt="HappyFace" />
                        </div>
                        <h1 className="hidden italic sm:block tracking-tighter developer-name">
                            Miraj Gautam
                        </h1>
                        <h1 className="block italic sm:hidden developer-name tracking-tighter">MG</h1>
                    </span>

                    <ul className="flex pr-2" onClick={() => { setIsOpen(true) }}>
                        <li className='mr-2 hover:scale-110 transition-transform'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7H15M15 7L17 5M15 7L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                                <path d="M3 12H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

                                <path d="M9 17H21M9 17L7 15M9 17L7 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header