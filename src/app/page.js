import Image from "next/image";
import Navbar from "./compo/navbar";
import Header from "./compo/header";
import About from "./compo/about.js";
import Skills from "./compo/skills";
import Projects from "./compo/Project";
import Contact from "./compo/contect";


export default function Home() {
  return (
  <div className=" bg-slate-900 h-lvh ">
    <Navbar/>
    <Header/>
    <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  </div>
  );
}
