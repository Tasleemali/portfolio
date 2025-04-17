import Image from "next/image";
import Navbar from "./compo/navbar";
import Header from "./compo/header";
import About from "./compo/about.js";
import Skills from "./compo/skills";
import Projects from "./compo/Project";
import Contact from "./compo/contect";
import HeroSection from "./compo/header";
import AboutMe from "./compo/about.js";


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
