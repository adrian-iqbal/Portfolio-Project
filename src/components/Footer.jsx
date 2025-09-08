import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Iqbal Adrian. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/adrian-iqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/iqbal-adrian-072082328/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:iqbaladrian36@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
