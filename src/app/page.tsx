import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experiences";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col px-4 items-center">
       <Intro/>
       <SectionDivider/>
       <About/>
       <Projects/>
       <Skills/>
       <Experience/>
       <Contact/>
       <Footer/>
      </main>
     
  );
}
