function WorkExperience() {
  const experiences = [
    {
      role: "Frontend Developer (Internship)",
      company: "PT Cazh Academy",
      period: "Des 2024 - Jan 2025",
      desc: "Built and optimized the operational platform UI for PT Cazh Academy using Next.js and Tailwind CSS.",
      stack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      role: "Fullstack Developer (Internship)",
      company: "PT PLN Nusantara Power",
      period: "March 2025 - May 2025",
      desc: "Developed internal web apps for inventory and employee management. Also provided IT Support for day-to-day technical issues.",
      stack: ["Laravel", "Filament", "MySQL", "TailwindCSS"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 py-12"
    >
      <h2
        className="text-4xl font-bold text-blue-400 mb-10 text-center"
        data-aos="fade-up"
      >
        Work Experience
      </h2>

      <div className="space-y-8 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} // biar munculnya bergiliran
            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/50 
                       transition transform hover:-translate-y-1 p-6"
          >
            <h3 className="text-2xl font-semibold text-cyan-400">{exp.role}</h3>
            <p className="text-gray-300 italic">
              {exp.company} | {exp.period}
            </p>
            <p className="text-gray-300 mt-2">{exp.desc}</p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-700 text-cyan-300 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
