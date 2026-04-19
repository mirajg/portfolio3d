
"use client"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const container = useRef(null);
    const overviewTxt = useRef(null);
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
            .from(".skill-card", {
                x: "-100%",
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            });

    }, { scope: container });


    return (
        <>
            <section ref={container} id="skills" className="skills-section bg-[#1d1836] flex transition-all duration-500 ease-in-out overflow-hidden">
                <div className='skills-container p-4 max-w-7xl'>

                    <div className="flex flex-col gap-4">

                        {/* Small Intro Header */}
                        <p className="intro-subtext text-cyan-400 font-medium">
                            Introduction
                        </p>

                        {/* Large Catchy Title */}
                        <div className="relative overflow-hidden">
                            <h1 ref={overviewTxt} className="main-title text-white font-black leading-tight">
                                Overview.
                            </h1>
                        </div>

                        <div className="relative overflow-hidden">
                            <p ref={descriptionTxt} className="description-text text-gray-300 font-light leading-relaxed">
                                I'm a skilled software developer with experience in
                                <span className="text-white font-bold"> JavaScript</span>, and expertise in
                                frameworks like <span className="text-cyan-400">React, Node.js, and Three.js</span>.
                                I'm a quick learner and collaborate closely with clients to create
                                efficient, scalable, and user-friendly solutions.
                            </p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                        {[
                            { title: "Web Developer", img: "/images/web-developer.png" },
                            { title: "Backend Developer", img: "/images/backend-developer.png" },
                            { title: "JS Framework Developer", img: "/images/js-framework-developer.png" },
                            { title: "3D/Visual Animator Designer", img: "/images/designer.png" },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group skill-card relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                        />
                                    </div>

                                    <h3 className="text-center text-[18px] font-bold text-white">
                                        {service.title}
                                    </h3>

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

export default Skills