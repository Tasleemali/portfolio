import React from 'react';

const skills = [
  { name: "HTML", logo: "https://img.icons8.com/?size=48&id=20909&format=png" },
  { name: "CSS", logo: "https://img.icons8.com/?size=80&id=YjeKwnSQIBUq&format=png" },
  { name: "JavaScript", logo: "https://img.icons8.com/?size=48&id=108784&format=png" },
  { name: "React", logo: "https://img.icons8.com/?size=80&id=NfbyHexzVEDk&format=png" },
  { name: "Next.js", logo: "https://img.icons8.com/?size=24&id=r2OarXWQc7B6&format=png" },
  { name: "MongoDB", logo: "https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png" },
  { name: "Tailwind CSS", logo: "https://img.icons8.com/?size=80&id=WoopfRcDj3RF&format=png" },
  { name: "Bootstrap", logo: "https://img.icons8.com/?size=48&id=84710&format=png" },
];

export default function Skills() {
  return (
    <div id='Skills' className='bg-gradient-to-b bg-black text-white py-16 px-6'>
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-emerald-400">Skills</span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl">
          These are the technologies I work with regularly to build responsive and dynamic websites.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111827] hover:bg-emerald-600 transition p-6 rounded-xl shadow-lg flex flex-col items-center justify-center group"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform"
              />
              <span className="text-lg font-semibold text-gray-100 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
