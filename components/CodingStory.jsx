
"use client"
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    {
        title: "Frontend Development",
        description: "Crafting responsive and dynamic user interfaces using HTML, CSS, and JavaScript.",
        startDate: "Mid-2023",
        icon: "⟨/⟩",
        isRight: true,
        dotClass: "bg-cyan-400",
        dotShadow: "0 0 0 4px rgba(34,211,238,0.2), 0 0 12px rgba(34,211,238,0.6)",
        barGradient: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
    },
    {
        title: "Full-Stack Projects",
        description: "Integrating frontend and backend technologies to create seamless web applications.",
        startDate: "Since 2023",
        icon: "⬡",
        isRight: false,
        dotClass: "bg-violet-500",
        dotShadow: "0 0 0 4px rgba(139,92,246,0.2), 0 0 12px rgba(139,92,246,0.6)",
        barGradient: "linear-gradient(90deg, #8b5cf6, #22d3ee)",
    },
    {
        title: "Backend Development",
        description: "Building APIs and server-side applications with Node.js, Express, MongoDB, and Next.js.",
        startDate: "Mid-2024",
        icon: "⚙",
        isRight: true,
        dotClass: "bg-cyan-400",
        dotShadow: "0 0 0 4px rgba(34,211,238,0.2), 0 0 12px rgba(34,211,238,0.6)",
        barGradient: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
    },
    {
        title: "Open Source Contributions",
        description: "Collaborating on npm packages and open-source projects with developers worldwide.",
        startDate: "Late 2025",
        icon: "⬡",
        isRight: false,
        dotClass: "bg-violet-500",
        dotShadow: "0 0 0 4px rgba(139,92,246,0.2), 0 0 12px rgba(139,92,246,0.6)",
        barGradient: "linear-gradient(90deg, #8b5cf6, #22d3ee)",
    },
    {
        title: "3D / Animation Web Dev",
        description: "Exploring immersive web experiences using Three.js, WebGL, and GSAP.",
        startDate: "Early 2026",
        icon: "◈",
        isRight: true,
        dotClass: "bg-cyan-400",
        dotShadow: "0 0 0 4px rgba(34,211,238,0.2), 0 0 12px rgba(34,211,238,0.6)",
        barGradient: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
    },
]

const CodingStory = () => {
    const timeLineContainer = useRef(null);
    const topWorkTxt = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: timeLineContainer.current,
                start: 'top 75%',
                end: '+=500',
                scrub: 5,
            }
        });

        tl.from(topWorkTxt.current, {
            opacity: 0,
            y: 100,
            delay: 0.1,
            ease: "linear"
        })
            .from(".card", {
                x: "100%",
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(2)"
            })
    }, { scope: timeLineContainer });


    return (
        <section
            ref={timeLineContainer}
            className="bg-[#1d1836] min-h-screen py-20 px-6 relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />

            <div
                className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
            <div
                className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

            <div className="max-w-5xl mx-auto relative">

                <div className='overflow-hidden'>
                    <div ref={topWorkTxt} className="mb-20 text-center">
                        <p className="text-cyan-400 text-xs tracking-[4px] uppercase mb-3">
                            What I have done so far
                        </p>
                        <h1 className="text-white work-txt tracking-tight leading-tight m-0">
                            Work <span className="text-cyan-400">Experience.</span>
                        </h1>
                        <p className="max-w-xl mx-auto mt-5 text-white/45 sm:text-[15px] text-xs leading-relaxed italic">
                            Years deep-diving into the web dev ecosystem — turning{" "}
                            <span className="text-cyan-400 not-italic">complex logic</span>{" "}
                            into clean, functional code. Built, broken, and refined.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical line */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 left-[14px] sm:left-1/2 sm:-translate-x-1/2 z-0"
                        style={{ background: "linear-gradient(to bottom, transparent, #22d3ee 10%, #8b5cf6 80%, transparent)" }} />

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={[
                                "relative z-2 flex items-center mb-14 pl-9 sm:pl-0",
                                item.isRight ? "sm:justify-end" : "sm:justify-start",
                            ].join(" ")}>
                            {/* Card */}
                            <div className="group card relative w-full sm:w-[44%] bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7 backdrop-blur-lg cursor-default">

                                {/* Top gradient bar */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                                    style={{ background: item.barGradient }} />

                                {/* Arrow right (points left toward center) — desktop only */}
                                {item.isRight && (
                                    <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-[-10px] w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-white/[0.06]" />
                                )}

                                {/* Arrow left (points right toward center) — desktop only */}
                                {!item.isRight && (
                                    <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-[-10px] w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-white/[0.06]" />
                                )}

                                <div className="flex items-start gap-3">
                                    <span
                                        className="text-cyan-400 text-xl flex-shrink-0 mt-0.5"
                                        style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.5))" }}>
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h3 className="m-0 text-white tracking-wide">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs text-white/45 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <span className="inline-block mt-3 text-[11px] tracking-[2px] uppercase text-cyan-400 bg-cyan-400/[0.08] border border-cyan-400/20 px-3 py-0.5 rounded-full">
                                            {item.startDate}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Dot */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-2 left-[14px] sm:left-1/2 ${item.dotClass}`}
                                style={{ boxShadow: item.dotShadow }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CodingStory