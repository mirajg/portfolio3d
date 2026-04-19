
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import PhoneNav from './PhoneNav'

const Header = () => {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <>
            {isOpen &&
                <>
                    <PhoneNav setIsOpen={setIsOpen} />
                </>}
            <header className="fixed z-[10] px-4 top-0 left-0 h-20 flex items-center justify-center w-full bg-[#050816]">
                <nav className="flex max-w-7xl w-full mx-auto items-center justify-between">

                    <span className="flex items-center gap-2  cursor-pointer group">
                        <div className="relative group-hover:scale-110 transition-transform duration-300">
                            <img width={40} height={40} className="rounded-full shadow-md shadow-purple-500/20" src="/images/happy.png" alt="HappyFace" />
                        </div>
                        <h1 className="hidden sm:block tracking-wide developer-name">
                            Miraj Gautam
                        </h1>
                        <h1 className="block sm:hidden developer-name tracking-wide">MG</h1>
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