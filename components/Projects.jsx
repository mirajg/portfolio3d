
"use client"

import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const container = useRef(null);
    const projectTxt = useRef(null);
    const descriptionTxt = useRef(null);


    useGSAP(() => {
        ScrollTrigger.refresh();

        // Create a timeline linked to the scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
                end: '+=500',
                scrub: 5,
            }
        });

        // Add animations to the timeline (no need for refs, uses scoped selectors)
        tl.from(".main-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
            .from(".description-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            })
            .from(".project-card", {
                x: "-100%",
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            });

    }, { scope: container });


    return (
        <>
            <section ref={container} className="project-section bg-[#1d1836] flex transition-all duration-500 ease-in-out overflow-hidden">
                <div className='project-container p-4 max-w-7xl'>

                    <div className="flex flex-col gap-4">

                        <p className="intro-subtext text-cyan-400 font-medium">
                            My work
                        </p>

                        {/* Large Catchy Title */}
                        <div className="relative overflow-hidden">
                            <h1 ref={projectTxt} className="main-title text-white font-black leading-tight">
                                Projects.
                            </h1>
                        </div>

                        <div className="relative overflow-hidden">
                            <p ref={descriptionTxt} className="description-text text-gray-300 font-light leading-relaxed">
                                Following projects showcases my <span className="text-cyan-400"> skills and experience </span> through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve <span className="text-cyan-400">complex problems,</span> work with different technologies, and manage projects effectively.
                            </p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                        {[
                            { title: "Stock Management", description: "Optimizes retail operations by monitoring sales turnover.", link: "https://github.com/mirajg/stockManagement", imgLink: "/images/stock.avif" },
                            { title: "Real Time Video Call", description: "A web application for video calling with real-time communication.", link: "https://github.com/mirajg/webrtc", imgLink: "/images/videoCall.avif" },
                            { title: "Global Tic-Tac-Toe", description: "A simple tic-tac-toe game with online multiplayer functionality.", link: "https://github.com/mirajg/TicTacToeOnlineUser", imgLink: "/images/ticTacToe.avif" },
                            { title: "Web Chat Application", description: "A real-time chat application with user registration and authentication.", link: "https://github.com/mirajg/onlineChatWithRegistration", imgLink: "/images/chat.avif" },
                            { title: "Offline Game Hub", description: "A collection of offline web games built with HTML, CSS, and JavaScript.", link: "https://github.com/mirajg/games", imgLink: "/images/games.avif" },
                            { title: "More Projects", description: "Explore more of my work on GitHub.", link: "https://github.com/mirajg", imgLink: "/images/githubSVG.svg" },

                        ].map((data, index) => (
                            <div
                                key={index}
                                className="group project-card relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
                                <div className="relative z-10 flex flex-col items-center">
                                    <img src={data.imgLink} alt={data.title} className="w-20 h-20 mb-4 rounded-full object-cover" />
                                    <h3 className="text-center font-bold text-white">
                                        {data.title}
                                    </h3>
                                    <p className="text-xs text-white/40 mt-2">
                                        {data.description}
                                    </p>
                                    <a href={data.link} target="_blank" className="mt-4 flex justify-center gap-2 items-center text-cyan-400 text-xs hover:text-cyan-400/40 transition-colors duration-500">
                                        <span>View Project</span>
                                        <img src="/images/link.svg" alt="Link" className="w-5 h-5" />
                                    </a>

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

export default Projects