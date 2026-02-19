import React from 'react'
export default function Work() {
    const projects = [
    {
      image: "/img/task.PNG",
      link: "https://nimble-gecko-238ea9.netlify.app/",
      alt: "Task App",
    },
    {
      image: "/img/MusicApp.PNG",
      link: "https://dfreezy-songs.netlify.app/",
      alt: "Music App",
    },
    {
      image: "/img/fitness.PNG",
      link: "https://quiet-pegasus-2f4065.netlify.app",
      alt: "Fitness Tracker",
    },
    {
      image: "/img/cert.PNG",
      link: "https://awardedtoyou.netlify.app",
      alt: "Certificate App",
    },
    {
      image: "/img/dashboard.PNG",
      link: "https://loquacious-dusk-140a09.netlify.app",
      alt: "Dashboard",
    },
    {
      image: "/img/Confidence Course.PNG",
      link: "https://confidence-course.netlify.app/",
      alt: "Confidence Course",
    },
    {
      image: "/img/attraction.PNG",
      link: "https://attraction-calculator.netlify.app/",
      alt: "Attraction Calculator",
    },
    {
      image: "/img/Screenshot 2024-11-27 181823.png",
      link: "https://jocular-lily-af8324.netlify.app/",
      alt: "Project Screenshot",
    },
  ];

  return (
    <section id="work" className="bg-black py-20 px-6 text-white">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">My Work</h2>
        <p className="text-gray-600 mt-2">
          Here's what I'm all about
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>

      {/* GitHub Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/DFreezy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-400 text-white px-8 py-3 rounded-full font-bold hover:scale-110 transition-transform duration-300"
        >
          Check out my GitHub
        </a>
      </div>
    </section>
  );
}