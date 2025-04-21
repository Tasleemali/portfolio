'use client';

export default function AboutMe() {
  return (
    <div
      id="About"
      className="bg-gradient-to-b from-[#0f172a] via-black to-[#0f172a] text-white px-5 w-full"
    >
      <div className="w-full py-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full text-center md:text-left max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">
            Frontend <span className="text-gray-100">Developer!</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I'm Tasleem Ali, a self-taught web developer passionate about building intuitive and responsive websites. Through dedicated self-study, I've gained proficiency in HTML, CSS, JavaScript, and frameworks like React and Next.js. I've applied my skills to personal projects, including an e-commerce website and a food delivery platform. I'm eager to continue learning and contributing to innovative web projects.
          </p>
        </div>
      </div>
    </div>
  );
}
