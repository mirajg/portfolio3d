

"use client"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

const CodingStory = () => {
    const container = useRef(null);
    const overviewTxt = useRef(null);
    const descriptionTxt = useRef(null);

    return (
        <>
            <section ref={container} className="coding-story-section bg-[#1d1836] flex transition-all duration-500 ease-in-out overflow-hidden">
                <div className='coding-story-container p-4 max-w-6xl'>

                    <div className="flex flex-col gap-4">

                        <p className="intro-subtext text-cyan-400 font-medium">
                            What I have done so far
                        </p>

                        {/* Large Catchy Title */}
                        <div className="relative overflow-hidden">
                            <h1 ref={overviewTxt} className="main-title text-white font-black leading-tight">
                                Work Experience.
                            </h1>
                        </div>

                        <div className="relative overflow-hidden">
                            <p ref={descriptionTxt} className="description-text text-gray-300 font-light leading-relaxed">
                                I've spent years deep-diving into the web dev ecosystem, turning <span className="text-cyan-400">complex logic</span> into clean, functional code. While my journey started in the <span className="text-cyan-400">classroom,</span> my passion lives in my personal lab where I build, break, and refine digital experiences. I'm a student of the craft, a global collaborator on open-source logic, and I'm officially hunting for my next big challenge to crush.
                            </p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                        {[
                            { title: "Frontend Development", description: "Crafting responsive and dynamic user interfaces using HTML, CSS, and JavaScript.", startDate: "Mid-2023" },
                            { title: "Backend Development", description: "Building APIs and server-side applications with Node.js, Express, and MongoDB along with Next.js", startDate: "Mid-2024" },
                            { title: "Full-Stack Projects", description: "Integrating frontend and backend technologies to create seamless web applications.", startDate: "Since 2023" },
                            { title: "Open Source Contributions", description: "Collaborating on npm packages and open-source projects.", startDate: "Late 2025" },
                            { title: "3D/Animation Web Development", description: "Exploring immersive web experiences using Three.js, WebGL and GSAP.", startDate: "Early 2026" },
                        ].map((data, index) => (
                            <div
                                key={index}
                                className="group skill-card relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
                                <div className="relative z-10 flex flex-col items-center">

                                    <h3 className="text-center text-[18px] font-bold text-white">
                                        {data.title}
                                    </h3>
                                    <p className="text-sm text-white/40 mt-2">
                                        {data.description}
                                    </p>
                                    <span className="text-xs text-cyan-400 mt-1">
                                        {data.startDate}
                                    </span>

                                    {/* Subtle decorative line that grows on hover */}
                                    <div className="mt-4 h-1 w-8 bg-cyan-400 rounded-full duration-500 group-hover:w-16" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CodingStory