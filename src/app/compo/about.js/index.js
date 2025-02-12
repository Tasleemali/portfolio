'use client';

import Image from 'next/image';

export default function AboutMe() {
  return (
    <div id='about' className=" bg-red-500 text-white px-6">
      <div className=" mx-auto max-w-screen-xl ">

      <div className='w-full  py-10 h-auto flex flex-wrap justify-start items-center'>

{/*    
        <div className="w-[400px] border-2 border-black rounded-lg ">
          <img
           src='https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg'
           
            alt="Profile Picture"
           
            className=" w-[400px] rounded-lg   "
          />
        </div> */}
        <div className=" py-10 text-center text-wrap md:text-left">
          <h2 className="text-3xl font-bold">About <span className="text-black">Me</span></h2>
          <h3 className="text-xl font-semibold text-gray-100">Frontend <span className='text-black'>Developer!</span> </h3>
          <p className="mt-4 text-white text-wrap">
          "I'm Tasleem Ali, a self-taught web developer passionate about building intuitive and responsive websites. Through dedicated self-study, I've gained proficiency in HTML, CSS, JavaScript, and frameworks like React and Next Js. I've applied my skills to personal projects, including an e-commerce website and a food delivery platform. I'm eager to continue learning and contributing to innovative web projects."

          </p>
         
        </div>
      </div>
      </div>
    </div>
  );
}
