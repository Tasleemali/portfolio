"use client"

import { AlignRightIcon, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [IsStckyMenu, setIsStickyMenu] = useState(false)
  const [IsActive, setIsActive] = useState("home")
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 1000)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyMenu(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`text-white sticky top-0 z-20 transition-colors duration-500 ${IsStckyMenu ? "bg-[#0f172a] shadow-lg shadow-[#00ff9f]/10" : "bg-transparent"}`}>
      <div className='max-w-screen-2xl mx-auto py-5'>
        <nav className='flex justify-between items-center px-5'>

          {/* Logo */}
     <span className={`
  text-3xl font-bold tracking-wide
  ${shake ? 'animate-shake' : ''}
  bg-white
  bg-clip-text text-transparent 
  drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)]
  hover:drop-shadow-[0_0_10px_#f97316]
  transition duration-300
`}>
  𝓣𝓪𝓼𝓵𝓮𝓮𝓶.
</span>
          {/* Desktop Nav */}
          <ul className='hidden md:flex space-x-14 items-center text-white font-medium'>
            {["home", "skills", "project", "contect"].map(section => (
              <a key={section} href={`#${section}`}>
                <li
                  onClick={() => setIsActive(section)}
                  className={`transition duration-300 cursor-pointer hover:text-[#00ff9f] ${
                    IsActive === section ? "border-b-2 border-[#00ff9f]" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              </a>
            ))}
          </ul>

          {/* Mobile Nav */}
          <div className={`md:hidden fixed top-0 right-0 z-30 p-5 w-full h-lvh bg-[#0f172a] transform ${isOpenMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <span onClick={() => setIsOpenMenu(false)} className='float-right'>
              <X className='w-7 h-7' />
            </span>
            <ul className='mt-10 grid grid-cols-1 place-items-center space-y-10 text-white text-xl font-medium'>
              {["home", "skills", "project", "contect"].map(section => (
                <a key={section} href={`#${section}`}>
                  <li
                    onClick={() => {
                      setIsOpenMenu(false)
                      setIsActive(section)
                    }}
                    className={`transition duration-300 hover:text-[#00ff9f] ${
                      IsActive === section ? "border-b-2 border-[#00ff9f]" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* Menu Button */}
          <button onClick={() => setIsOpenMenu(true)} className='md:hidden'>
            <AlignRightIcon className='w-7 h-7' />
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

