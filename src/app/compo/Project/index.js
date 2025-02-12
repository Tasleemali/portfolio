import Image from "next/image";

 import project from "@/components/assets/project.png"
// ];

export default function Projects() {
    return (
      <div id="project" className="py-12 bg-red-500 ">
         <div className="mx-auto max-w-screen-xl">

        <div className="mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Projects</h2>
          <div className=" w-full flex flex-col space-y-10 justify-center items-center">
          
              <div  className="bg-red-500 p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center gap-10">
                <Image src={project} alt='img'  className=" w-[200px] h-[130px] rounded-lg" />
                <div>
                <h3 className="text-xl font-semibold mt-4">Next.js food delivery Platform with Tailwind & MongoDB,</h3>
                <p className="text-white mt-2">Experience a seamless shopping experience with our modern e-commerce platform, built using Next.js, Tailwind CSS, and MongoDB. Our website offers a fast, responsive, and user-friendly interface with secure authentication to protect your accountz</p>
                <a href='https://food-sigma-eight.vercel.app' className="mt-4 inline-block px-4 py-2 bg-slate-800 border-2 border-red-500 text-white rounded-md hover:bg-black">
                  Visit Website
                </a>
                </div>

              </div>
              {/* 1 */}
             
              <div  className="bg-red-500 p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center gap-10">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjbCJACzGX_GdZxgZWTk5KNGF0Cf1X1y7Xw&s' alt='img' width={500} height={300} className="rounded-lg" />
                <div>
                <h3 className="text-xl font-semibold mt-4">Next.js E-Commerce Platform with Tailwind & MongoDB,</h3>
                <p className="text-white mt-2">Enjoy fast and convenient food delivery with our modern web application, built using Next.js, Tailwind CSS, and MongoDB. Our platform offers a smooth, user-friendly experience with secure authentication, real-time order tracking, and an optimized checkout process.</p>
                <a href='' className="mt-4 inline-block px-4 py-2 bg-black border-2 border-red-500 text-white rounded-md">
                  Visit Website
                </a>
                </div>

              </div>
          </div>
          
        </div>
        </div>
      </div>
    );
  }