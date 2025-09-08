import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import MySkills from "./sections/MySkills";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: false, // animasi bisa muncul berulang kali
      mirror: true, // animasi jalan juga saat elemen keluar viewport
    });
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen divide-y divide-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
