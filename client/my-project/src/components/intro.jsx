import { useState } from "react";

export default function Intro() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-cyan-400 min-h-screen text-black font-sans">
      
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 relative">
        
        <div className="logo text-xl font-bold">
          Duwayne
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleNav}
          className="z-50 relative w-8 h-8 flex flex-col justify-between"
        >
          <span className={`h-1 bg-green-500 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-3" : ""}`}></span>
          <span className={`h-1 bg-green-500 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-1 bg-green-500 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}></span>
        </button>

        {/* NAV */}
        <nav
          className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl font-bold transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a href="#home" onClick={closeNav} className="hover:text-green-400">
            Home
          </a>
          <a href="#services" onClick={closeNav} className="hover:text-green-400">
            My Services
          </a>
          <a href="#about" onClick={closeNav} className="hover:text-green-400">
            About Me
          </a>
          <a href="#work" onClick={closeNav} className="hover:text-green-400">
            My Work
          </a>
        </nav>
      </header>

      {/* INTRO SECTION */}
      <section
        id="home"
        className="flex flex-col items-center text-center px-6 py-20"
      >
        <h1 className="text-4xl md:text-6xl font-light">
          Hi, I am <strong className="block font-black">Duwayne Frieslaar</strong>
        </h1>

        <h3 className="mt-4 text-xl font-semibold">
          Let's change the world together!
        </h3>

        <img
          src="./img/Confident.png"
          alt="Duwayne"
          className="w-60 h-60 rounded-full shadow-2xl mt-8"
        />

        <p className="mt-6 bg-green-400 px-6 py-2 font-mono font-bold">
          Junior Fullstack Developer
        </p>
      </section>

      {/* DOWNLOAD CV */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Download My CV</h2>

        <a
          href="/Du-wayne Frieslaar.docx"
          download
          className="bg-green-400 px-8 py-3 uppercase tracking-widest font-bold hover:scale-110 transition-transform"
        >
          Download CV
        </a>
      </section>
    </div>
  );
}
