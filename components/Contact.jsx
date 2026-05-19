
"use client"

import React, { useState } from 'react';
import { messageSubmit } from '../actions/messageSubmit.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const sectionContainer = useRef(null);
    const formContainer = useRef(null);
    const singleLine = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        const response = await messageSubmit(form);
        setLoading(false);

        if (response.success) {
            alert('✅ Message sent successfully!');
            setForm({ name: '', email: '', message: '' });
        } else {
            alert('❌ Failed to send message. Please try again.');
        }

    };


    useGSAP(() => {
        ScrollTrigger.refresh();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionContainer.current,
                start: 'top 75%',
            }
        });

        tl.from(formContainer.current, {
            y: "100%",
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
        })
            .from(singleLine.current, {
                y: 100,
                opacity: 0,
                rotateX: -30,
                transformOrigin: "top center",
                duration: 1.8,
                ease: "power4.out",
                delay: 0.2,
            });

    }, { scope: sectionContainer });

    return (
        <section id="contact" ref={sectionContainer} className="relative w-full h-fit flex justify-center bg-[#050816] py-20">
            <div className="absolute top-0 left-0 w-full overflow-hidden transform rotate-180">
                <svg
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#100d25"
                        fillOpacity="1"
                        d="M0,160L40,176C80,192,160,224,240,208C320,192,400,128,480,122.7C560,117,640,171,720,181.3C800,192,880,160,960,176C1040,192,1120,256,1200,261.3C1280,267,1360,213,1400,186.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="overflow-hidden">
                <div ref={formContainer} className="max-w-7xl h-fit w-full mx-auto px-6 flex justify-center flex-row gap-10 overflow-hidden">
                    <div className="bg-[#100d25] p-8 rounded-2xl sm:w-fit w-full">
                        <p className="sm:text-[2rem] transition-all text-[1.2rem] text-[#aaa6c3] uppercase tracking-wider">Get in touch</p>

                        <form autoComplete="off" onSubmit={handleSubmit} className="mt-12 h-fit flex flex-col gap-8">
                            <label className="flex flex-col">
                                <span className="mb-4 transition-all sm:text-[1rem] text-[0.875rem] text-white">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="- - - - - - -"
                                    disabled={loading}
                                    className="bg-[#1d1836] py-2 px-4  text-white rounded-lg outline-none border-none font-medium"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="mb-4 transition-all sm:text-[1rem] text-[0.875rem] text-white">Your Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="- - - - - - -"
                                    disabled={loading}
                                    className="bg-[#1d1836]  py-2 px-4  text-white rounded-lg outline-none border-none"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="mb-4 transition-all sm:text-[1rem] text-[0.875rem] text-white">Your Message</span>
                                <textarea
                                    rows="3"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="- - - - - - -"
                                    disabled={loading}
                                    className="bg-[#1d1836] py-2 px-4  text-white rounded-lg outline-none border-none resize-none"
                                />
                            </label>

                            <button
                                type="submit"
                                className="bg-[#1d1836] sm:text-xl text-xs hover:bg-[#2a254a] transition-all duration-300 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        <hr className="singleLine" ref={singleLine} />
                    </div>
                    <div className="hidden lg:flex flex-col justify-start items-start w-[320px] bg-[#0f0c27] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-semibold mb-4">Need help or want to collaborate?</h2>
                        <p className="text-sm leading-7 text-[#c7c3e3]">
                            Share a few details about your project and I’ll get back to you
                            with ideas, timelines, and the best way to move forward.
                        </p>
                        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#7c78a4]">
                            Available for freelance, remote, and contract work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;