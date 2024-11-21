import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Hero from "./components/Home/Hero";
import Portfolio from "./components/Home/Portfolio";
import Skills from "./components/Home/Skills";
import Footer from "./components/Main/Footer";
import Header from "./components/Main/Header";

export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <About/>
  <Skills/>
  <Portfolio/>
  <Contact/>
  <Footer/>
  </>
);
}
