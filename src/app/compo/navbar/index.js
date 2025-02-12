
"use client"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {

    const [activeMenu ,setActiveMenu] = useState('home')
    const [menu ,setmenu] = useState(false)
    return (
        <div className='bg-gray-900 text-white'>
            <div className='mx-auto max-w-screen-xl px-5 sm:px-8 md-px-10 py-10'>

                <div className=' w-full flex justify-between items-center'>
                    <div className=''>
                        <span className='text-3xl font-bold  self-center whitespace-nowrap text-red-500 shadow-lg'  >Tasleem.</span>
                    </div> 

                    <div className={`${menu?'fixed':'hidden'}  top-20 left-0 right-0 z-20  md:flex `}>
{/* 
                        <span onClick={()=>setmenu(!menu)} className='md:hidden'>Back</span> */}
                    <ul className= '  flex  z-10 flex-col md:flex-row justify-between items-center gap-10'>
                   <a className='' href='#header'>    <li value={"home"}  onClick={()=> {setActiveMenu('home'),setmenu(false)}} className={`${activeMenu === 'home' ?"border-b border-red-500 text-red-500 ":''}`} >Home</li></a> 
                   <a href='#about'>   <li value={'about'} onClick={()=> {setActiveMenu('about'),setmenu(false)}}className={`${activeMenu === 'about' ?" border-b border-red-500 text-red-500":''}`} >About</li></a> 
                   <a href='#project'>    <li value={"project"} onClick={()=> {setActiveMenu('project'),setmenu(false)}} className={`${activeMenu === 'project' ?"border-b border-red-500 text-red-500  ":''}`}>project</li></a> 
                  <a href='#contect'> <li value={"service"} onClick={()=> {setActiveMenu('service'),setmenu(false)}} className={`${activeMenu === 'service' ?"border-b border-red-500 text-red-500 ":''}`}>Contect</li></a>  
                    </ul>
                    </div>
                    <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="   inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={()=>setmenu(!menu)}
           
          >
            <Menu className='w-10 h-10'/>
          </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
