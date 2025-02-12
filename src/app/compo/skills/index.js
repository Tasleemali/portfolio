import React from 'react'

const skills = [
    { name: "HTML", logo: "https://img.icons8.com/?size=48&id=20909&format=png" },
    { name: "CSS", logo: "https://img.icons8.com/?size=80&id=YjeKwnSQIBUq&format=png" },
    { name: "JavaScript", logo: "https://img.icons8.com/?size=48&id=108784&format=png" },
    { name: "React", logo: "https://img.icons8.com/?size=80&id=NfbyHexzVEDk&format=png" },
    { name: "Next.js", logo: "https://img.icons8.com/?size=24&id=r2OarXWQc7B6&format=png" },
    { name: "MongoDB", logo: "https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png    " },
    { name: "Tailwind CSS", logo: "https://img.icons8.com/?size=80&id=WoopfRcDj3RF&format=png" },
    { name: "Bootstrap", logo: "https://img.icons8.com/?size=48&id=84710&format=png" },
  ];
  
  export default function Skills() {
    return (

        <div className=' bg-gray-900 text-white'>

<div className='mx-auto max-w-screen-xl'>


      <div className=" mx-5 flex flex-col items-center justify-center">
        <h2 className=" py-5 text-3xl font-bold  mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-red-500">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-4" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    );
  }