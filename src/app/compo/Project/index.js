import Image from "next/image";
import project from "@/components/assets/project.png";
import summary from '@/components/assets/summary.png';
import youth from "@/components/assets/youth.png";

export default function Projects() {
  return (
    <div id="project" className="bg-gradient-to-b from-[#0f172a] via-black to-[#0f172a] text-white px-5 w-full">
      <div className="w-full py-10 flex flex-col items-center gap-10 max-w-6xl mx-auto">
        
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4">
            Real-World <span className="text-gray-100">Work!</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl">
            Here are some of my latest projects built using Next.js, Tailwind CSS, and MongoDB. These showcase my skills in building fast, responsive, and modern web applications with beautiful UIs and smooth functionality.
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full">
          {[project, summary, youth].map((img, index) => (
            <div
              key={index}
              className="bg-[#0a1e23] p-6 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-8"
            >
              <Image
                src={img}
                alt="Project"
                className="w-[240px] h-[140px] rounded-lg object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-emerald-300">Next.js Food Delivery Platform</h3>
                <p className="text-gray-300 mt-2">
                  Experience a seamless shopping experience with our modern e-commerce platform, built using Next.js, Tailwind CSS, and MongoDB. Fast, responsive, and secure – crafted with real-world UX in mind.
                </p>
                <a
                  href="https://food-sigma-eight.vercel.app"
                  target="_blank"
                  className="mt-4 inline-block px-5 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
