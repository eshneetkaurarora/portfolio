import About from "../components/About";
import BeyondWork from "../components/BeyondWork";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Leadership from "../components/Leadership";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Leadership />
      <BeyondWork />
      <Skills />
      <Contact />
    </>
  );
}
