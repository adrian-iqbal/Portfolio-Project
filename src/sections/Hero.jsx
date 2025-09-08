import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4 relative bg-gray-900"
      style={{
        backgroundImage: "url('/assets/kacamata.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 animate-fadeIn">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4 drop-shadow-lg transform transition duration-700 hover:scale-105 hover:text-blue-300">
          Hi, I'm Iqbal
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md animate-fadeIn delay-200">
          A passionate <span className="text-blue-400">Software Engineer</span>{" "}
          who loves building modern web applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center animate-fadeIn delay-400">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:translate-y-[-2px]"
          >
            View My Projects
          </a>

          <a
            href="/assets/CV_Iqbal_Adrian.pdf"
            download="CV_Iqbal_Adrian.pdf"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:translate-y-[-2px]"
          >
            <FaDownload className="animate-bounce-slow" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
