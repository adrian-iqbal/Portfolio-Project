import { Mail, Phone, MapPin, User } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-4 sm:px-6 py-10 sm:py-12"
    >
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-8 sm:mb-10 text-center"
        data-aos="fade-down"
      >
        About Me
      </h2>

      {/* Card Wrapper */}
      <div
        className="bg-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center
                   transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        data-aos="fade-up"
      >
        {/* Profile Image */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="relative">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-xl">
              <img
                src="/assets/Profile.jpeg"
                className="w-full h-full rounded-xl object-cover 
                           transition-transform duration-300 ease-in-out 
                           hover:scale-105 hover:rotate-1"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <p
            className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Hello, I’m <span className="text-cyan-400"> Iqbal Adrian</span>. I’m
            a Web Developer who loves combining creativity and technology to
            build websites that not only work seamlessly but are also visually
            pleasing. I believe every website has its own story, and my role is
            to bring that story to life through designs that are simple,
            elegant, and supported by the latest technology.
          </p>

          {/* Detail Info */}
          <div
            className="grid gap-3 sm:gap-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-cyan-500/20 transition">
              <User className="text-cyan-400" size={18} />
              <span className="text-cyan-400">Name :</span>
              <span className="text-gray-200">M. Iqbal Adrian</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-cyan-500/20 transition">
              <Mail className="text-cyan-400" size={18} />
              <span className="text-cyan-400">Email :</span>
              <span className="text-gray-200">iqbaladrian36@gmail.com</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-cyan-500/20 transition">
              <MapPin className="text-cyan-400" size={18} />
              <span className="text-cyan-400">Address :</span>
              <span className="text-gray-200">Medan, Indonesia</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-cyan-500/20 transition">
              <Phone className="text-cyan-400" size={18} />
              <span className="text-cyan-400">Phone :</span>
              <span className="text-gray-200">+62 895-6132-79986</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
