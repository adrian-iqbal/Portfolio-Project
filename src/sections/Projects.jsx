import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const projects = [
    {
      title: "POS with Inventory Management",
      desc: "A web-based POS with inventory tracking and real-time sales reports to streamline transactions and monitor stock accurately.",
      image: "/public/assets/mokap.png",
      link: "https://github.com/adrian-iqbal",
      stack: ["Laravel", "Filament", "MySQL", "TailwindCSS"],
    },
    {
      title: "Loan & Return Management System",
      desc: "A web application for managing item loans and returns with automated records and easy-to-track transaction reports.",
      image: "/public/assets/mokap3.png",
      link: "https://github.com/adrian-iqbal",
      stack: ["Laravel", "React", "MySQL", "TailwindCSS"],
    },
    {
      title: "Operational System",
      desc: "Web-based Operational System built with Next.js and shadcn/ui to optimize daily operations and simplify reporting.",
      image: "/public/assets/konoha2.jpg",
      link: "https://github.com/adrian-iqbal",
      stack: ["Next.js", "Typescript", "TailwindCSS", "Shadcn.ui"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 py-12"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold text-blue-400 mb-12"
        data-aos="fade-down"
      >
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden group
                       transform transition-all duration-300 hover:scale-[1.03] 
                       hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}
          >
            {/* Gambar project */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Isi project */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                {project.desc}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-700/60 text-cyan-300 border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tombol */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-4 py-2 rounded-lg 
                             bg-cyan-500 text-white font-medium 
                             hover:bg-cyan-600 transition-colors duration-300"
                >
                  View Project
                </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
