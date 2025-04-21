
import Navbar from "./section-page/navbar";

import Skills from "./section-page/skills";
import Projects from "./section-page/Project";
import Contact from "./section-page/contact";
import HeroSection from "./section-page/header";
import AboutMe from "./section-page/about.js/index.js";


export default function Home() {
  return (
  <div className="bg-black text-white ">
    <div className="max-w-screen-2xl">
    <Navbar/>
   <HeroSection/>
   <AboutMe/>
  <Skills/>
  <Projects/>
  <Contact/>
    </div>
   
  </div>
  );
}
