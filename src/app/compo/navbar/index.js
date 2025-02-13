
"use client"
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import third from "@/components/assets/third.png"


function Header() {
    return (
        <div id='header' className='bg-gray-900 text-white mt-10 pt-20'>

            <div className='  mx-auto max-w-screen-xl  '>

                <div className=' mx-10 px-10 py-10 flex flex-wrap justify-center items-center text-center md:text-start gap-5 md:gap-10'>

                    <div className='md:w-auto' >
                        <Image className=' bg-red-500 w-[250px] md:w-[300px] rounded-full text-right' src={third} alt='photo' />
                    </div>

                    <div className=' md:w-auto px-5 text-wrap text-center lg:text-start'>
                        <h1 className=' text-xl sm:text-2xl md:text-4xl'>Hi,It's <span className='text-red-500'>Tasleem</span> </h1>
                        <h3 className='text-xl'>I'm a <span className='text-red-500'> Web Devloper</span></h3>
                        <p className='  text-xm sm:text-sm md:text-lg md:w-[400px] text-wrap'>Passionate about creating user-centric, responsive websites. I specialize in front-end and back-end development to bring your ideas to life. Let’s build something amazing together!

                        </p>

                        <div>
                            <ul className='flex md:justify-start justify-center items-center gap-10 py-5'>
                                <li className=" py-1 px-1 border-2 border-blue-500 text-blue-400 rounded-lg hover:shadow-custom-shadow transition-shadow duration-300"><Facebook className='w-4 h-4' /></li>
                                <li className="  py-1 px-1 border-2 border-white text-white rounded-lg hover:shadow-customs-shadow transition-shadow duration-300"><X className='w-4 h-4' /></li>
                                <li className=" py-1 px-1 border-2 border-rose-600 text-rose-600 rounded-lg hover:shadow-insta-shadow transition-shadow duration-300"><Instagram className='w-4 h-4' /></li>
                                <li className=" py-1 px-1 border-2 border-blue-500 text-blue-400 rounded-lg hover:shadow-custom-shadow transition-shadow duration-300"><Linkedin className='w-4 h-4' /></li>
                            </ul>

                            <a href='#contect'>  <Button className='border-2 border-red-500 rounded-2xl  text-white hover:border-blue-200 hover:bg-red-500  '>Hire me</Button></a>
                        </div>
                    </div>

                    <div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Header

    )
}

export default Navbar
