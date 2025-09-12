import {
  FaJs,
  FaReact,
  FaLaravel,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiPostman,
  SiGithub,
} from "react-icons/si";

function MySkills() {
  const skills = [
    // --- Frontend ---
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-4xl" />,
    },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-200 text-4xl" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500 text-4xl" />,
    },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },

    // --- Backend ---
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-4xl" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500 text-4xl" /> },

    // --- Database ---
    { name: "MySQL", icon: <FaDatabase className="text-blue-500 text-4xl" /> },

    // --- Tools & DevOps ---
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-200 text-4xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-4xl" /> },

    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-4xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6 py-12 border-t border-gray-700"
    >
      <h2
        className="text-4xl font-bold text-blue-400 mb-10 text-center"
        data-aos="fade-up"
      >
        My Skills
      </h2>

      {/* Grid Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-gray-800 flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-gray-200 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
