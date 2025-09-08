import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 py-12"
    >
      {/* Contact Section */}
      <h2
        className="text-4xl font-bold text-blue-400 mb-6 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Contact Me
      </h2>

      <p
        className="text-gray-300 text-center mb-8 max-w-xl"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Feel free to reach out for collaboration or freelance projects 🚀
      </p>

      {/* Contact Button */}
      <a
        href="mailto:iqbaladrian36@gmail.com"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        Say Hello
      </a>

      {/* Social Links */}
      <div
        className="flex gap-6 mt-8"
        data-aos="fade-up"
        data-aos-duration="1600"
      >
        <a
          href="https://github.com/iqbaladrian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/iqbaladrian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:iqbaladrian36@gmail.com"
          className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
