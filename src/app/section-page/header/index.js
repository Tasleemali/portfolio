"use client"
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState ,useEffect } from 'react'
import third from "@/components/assets/third.png"


export default function HeroSection() {

    const [shake, setShake] = useState(false)
    
      useEffect(() => {
        const interval = setInterval(() => {
          setShake(true);
          setTimeout(() => setShake(false), 1000)
        }, 7000)
    
        return () => clearInterval(interval)
      }, [])
    return (
        <section id='Home' className="w-full px-4 py-10 bg-black text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">

                {/* Profile Image */}
                <div className={`flex-shrink-0 ${shake ? 'animate-shakeY' : ''} `}>
                    <Image
                        src={third}
                        alt="Tasleem Profile Photo"
                        width={300}
                        height={300}
                        className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover border-4 border-emerald-400 shadow-xg"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center lg:text-left max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white">
                        Hi, It's <span className="text-emerald-400">Tasleem</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl mb-4">
                        I'm a <span className="text-blue-400">Web Developer</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                        Passionate about creating user-centric, responsive websites. I specialize in front-end and back-end development to bring your ideas to life. Let’s build something amazing together!
                    </p>

                    {/* Social Icons */}
                    <ul className="flex justify-center lg:justify-start items-center gap-6 mt-6">
                        <li className="p-2 text-blue-500 hover:text-emerald-400 rounded-full hover:shadow-md hover:scale-125 transition">
                            <Facebook className="w-5 h-5" />
                        </li>
                        <li className="p-2 text-white hover:text-emerald-400 rounded-full hover:shadow-md hover:scale-125 transition">
                            <X className="w-5 h-5" />
                        </li>
                        <li className="p-2 text-pink-500 hover:text-emerald-400 rounded-full hover:shadow-md hover:scale-125 transition">
                            <Instagram className="w-5 h-5" />
                        </li>
                        <li className="p-2 text-blue-500 hover:text-emerald-400 rounded-full hover:shadow-md hover:scale-125 transition">
                            <Linkedin className="w-5 h-5" />
                        </li>
                    </ul>

                    {/* Hire Me Button */}
                    <div className="mt-6">
                        <a href="#contact">
                            <button className="rounded shadow-lg transition px-4 py-2 text-white bg-emerald-500 hover:bg-emerald-600">
                                Contect Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
