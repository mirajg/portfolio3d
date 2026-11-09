
"use client"

import React, { useState, useEffect, useRef } from 'react'
import PhoneNav from './PhoneNav'

const WORDS = ['Miraj Gautam', 'Web Developer', '3D Visuals', 'UI Builder']

// Types a word, pauses, deletes it, then moves to the next one
const useTypewriter = (words, typeSpeed = 90, deleteSpeed = 50, pause = 1600) => {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const word = words[index]
        let delay = deleting ? deleteSpeed : typeSpeed

        if (!deleting && text === word) {
            delay = pause
        }

        const timer = setTimeout(() => {
            if (!deleting && text === word) {
                setDeleting(true)
            } else if (deleting && text === '') {
                setDeleting(false)
                setIndex((i) => (i + 1) % words.length)
            } else {
                setText(word.slice(0, text.length + (deleting ? -1 : 1)))
            }
        }, delay)

        return () => clearTimeout(timer)
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

    return text
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isBouncing, setIsBouncing] = useState(false)
    const lastScrollY = useRef(0)
    const didScrollDown = useRef(false)

    const typed = useTypewriter(WORDS)

    useEffect(() => {
        let bounceTimer

        const controlNavbar = () => {
            const y = window.scrollY

            setIsVisible(!(y > lastScrollY.current && y > 100))
            lastScrollY.current = y

            if (y > 100) didScrollDown.current = true

            if (y <= 0 && didScrollDown.current) {
                setIsBouncing(true)
                didScrollDown.current = false
                bounceTimer = setTimeout(() => setIsBouncing(false), 800)
            }
        }

        window.addEventListener('scroll', controlNavbar, { passive: true })
        return () => {
            window.removeEventListener('scroll', controlNavbar)
            clearTimeout(bounceTimer)
        }
    }, [])

    return (
        <>
            <style>{`
                /* Spinning gradient ring around the monogram */
                .logo-ring {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    border-radius: 9999px;
                    padding: 2px;
                    background: conic-gradient(from 0deg, #915eff, #00d4ff, #ff5ecb, #915eff);
                    animation: logo-spin 4s linear infinite;
                    box-shadow: 0 0 16px rgba(145, 94, 255, 0.45);
                }
                .logo-ring-inner {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 9999px;
                    background: #050816;
                    animation: logo-spin 4s linear infinite reverse; /* keeps text upright */
                }
                .logo-mg {
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: -0.05em;
                    background: linear-gradient(90deg, #fff, #915eff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                @keyframes logo-spin { to { transform: rotate(360deg); } }

                /* Typewriter text with gradient + blinking cursor */
                .type-text {
                    background: linear-gradient(90deg, #ffffff, #b79cff, #00d4ff, #ffffff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: type-shimmer 4s linear infinite;
                }
                .type-cursor {
                    display: inline-block;
                    width: 2px;
                    height: 1.1em;
                    margin-left: 2px;
                    vertical-align: middle;
                    background: #915eff;
                    animation: type-blink 0.9s steps(1) infinite;
                }
                @keyframes type-shimmer { to { background-position: 200% center; } }
                @keyframes type-blink { 50% { opacity: 0; } }

                @media (prefers-reduced-motion: reduce) {
                    .logo-ring, .logo-ring-inner, .type-text, .type-cursor { animation: none; }
                }
            `}</style>

            {isOpen && <PhoneNav setIsOpen={setIsOpen} />}

            <header
                className={`px-4 fixed left-0 top-0 z-10 h-20 flex items-center justify-center w-full backdrop-blur-2xl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isBouncing ? 'bounce-animation' : ''}`}
            >
                <nav className="flex max-w-7xl w-full mx-auto items-center justify-between">
                    <span className="flex items-center gap-3 cursor-pointer group">
                        {/* Animated monogram replaces the missing image */}
                        <div className="group-hover:scale-110 transition-transform duration-300">
                            <div className="logo-ring" aria-hidden="true">
                                <div className="logo-ring-inner">
                                    <span className="logo-mg">MG</span>
                                </div>
                            </div>
                        </div>

                        {/* Typewriter text (sm and up). min-w stops the layout jumping while typing */}
                        <h1
                            className="hidden sm:block tracking-tighter developer-name min-w-[12rem]"
                            aria-label="Miraj Gautam"
                        >
                            <span className="type-text">{typed}</span>
                            <span className="type-cursor" aria-hidden="true" />
                        </h1>
                    </span>

                    <button
                        type="button"
                        aria-label="Open menu"
                        className="flex pr-2 hover:scale-110 transition-transform"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7H15M15 7L17 5M15 7L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M9 17H21M9 17L7 15M9 17L7 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header