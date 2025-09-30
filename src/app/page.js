"use client";
import { motion } from "framer-motion";

export default function Page() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "NextJS",
    "ReactJS",
    // "LynxJS",
    "TailwindCSS",
    "ReduxToolkit",
    "GIT",
    "Motion",
    "Shadcn UI",
  ];
  return (
    <>
      <div className="relative w-full min-h-screen">
        <img
          src="./valley.jpg"
          alt="valley"
          className="w-full h-full object-cover -z-20 absolute"
        />
        <div
          className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_20%,transparent_80%,rgba(0,0,0,0.6))] "
        ></div>
        <div className="text-white flex flex-col items-center select-none justify-center pt-52 z-50 uppercase relative">
          <p className="lg:text-6xl md:text-4xl text-[32px] py-2 font-medium text-center">
            HI, I'M Hasanboy <br /> Kadirov
          </p>
          <p className="md:text-lg text-[16px] sm:py-2 pb-2 font-medium text-center">
            I am a frontend developer. <br />I build websites and web
            applications.
          </p>

          <div className="flex gap-2">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 py-2 px-6 cursor-pointer 
              transition duration-200 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.6)]"
            >
              Contact Me
            </a>

            <button
              onClick={() => window?.open("/resume.pdf", "_blank")}
              className="rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-6 cursor-pointer
              transition duration-200 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.6)]"
            >
              CV
            </button>
          </div>
        </div>

        <div className="absolute top-90 w-full overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            <p
              className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-transparent
                 [text-stroke:2px_#3B3F47] [-webkit-text-stroke:2px_#3B3F47]
                 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] px-4"
            >
              Frontend Developer | React & Next.js Specialist •
            </p>
            <p
              className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-transparent
                 [text-stroke:2px_#3B3F47] [-webkit-text-stroke:2px_#3B3F47]
                 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] px-4"
            >
              Frontend Developer | React & Next.js Specialist •
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-transparent
          [text-stroke:1px_#3B3F47] [-webkit-text-stroke:1px_#3B3F47]
          drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] px-4"
              >
                <div className="flex items-center justify-center gap-8 text-2xl">
                  <p>QodirovDeveloper</p>
                  <span className="relative flex h-2 w-2 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-[#12161C] pt-5">
        <div
          id="aboutMe"
          className="container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-normal"
        >
          <div className="md:py-30 py-20">
            <div className="space-y-5 pb-4 flex flex-col items-center justify-center">
              <p className="text-5xl text-center tetx-[#e4e4e4]">About Me</p>
              <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
              <p className="max-w-[480px] text-lg text-center text-[#cacaca]">
                Here you can find information about who I am, what I do, and my
                current skills in programming and technology.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-4 duration-200">
              <div>
                <p className="text-3xl pb-6 tetx-[#e4e4e4]">Get to know me!</p>
                <p className="text-lg text-[#cacaca]">
                  Hello! I’m a frontend developer focused on modern web
                  technologies. I studied at Najot Ta’lim from December 2024 to
                  September 2025 and gained practical skills from four qualified
                  mentors. Problem-solving drives me, and I simply love
                  programming!
                </p>
              </div>
              <div>
                <p className="text-3xl pb-6 tetx-[#e4e4e4]">My Skills</p>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-[#E9ECEF] text-[#212529] font-medium rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D1014]">
        <div
          id="projects"
          className="container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-normal"
        >
          <div className="md:py-30 py-20">
            <div className="space-y-5 sm:pb-12 pb-6 flex flex-col items-center justify-center">
              <p className="text-5xl text-center tetx-[#e4e4e4]">Projects</p>
              <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
              <p className="text-lg text-center text-[#cacaca]">
                You can see my projects here!
              </p>
              <p className="text-lg text-center text-[#cacaca]">
                You can see more projects in my{" "}
                <a
                  href="https://github.com/QodirovDeveloper"
                  className="text-[#0DCAF0] btn-link"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                page.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="w-full bg-black text-white rounded-sm overflow-hidden shadow-lg">
                <div>
                  <img
                    src="unsplash.png"
                    alt="unsplash"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">22-09-2025</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  Unsplash Photos Clone.
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  An Unsplash clone where users can search, view, and upload
                  images.
                </p>
                <div className="px-4 pb-4">
                  <a
                    href="https://unsplash-photo-ten.vercel.app"
                    target="_blank"
                    className="inline-flex items-center justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </div>

              <div className="w-full bg-black text-white rounded-sm overflow-hidden shadow-lg">
                <div>
                  <img
                    src="recipe.png"
                    alt="recipe"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">16-09-2025</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  Healthy Recipe Finder
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  An application that allows users to search, view, and add
                  healthy food recipes.
                </p>
                <div className="px-4 pb-4">
                  <a
                    href="https://recipe-finderr-two.vercel.app"
                    target="_blank"
                    className="inline-flex items-center justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </div>

              <div className="w-full bg-black text-white rounded-sm overflow-hidden shadow-lg">
                <div>
                  <img
                    src="youTube.png"
                    alt="youTube"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">26-08-2025</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  YouTube Clone
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  {/* A video platform similar to YouTube. */}A YouTube-style
                  platform where users can upload, search, and watch videos.
                </p>
                <div className="px-4 pb-4">
                  <a
                    href="https://youtube-clone-iota-azure.vercel.app/"
                    target="_blank"
                    className="inline-flex items-end justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="pr-2 pl-2">
        <div className="md:py-30 py-20">
          <div className="space-y-5  flex flex-col items-center justify-center">
            <p className="text-5xl text-center tetx-[#e4e4e4]"> Contact</p>

            <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
            <p className="max-w-[650px] text-lg text-center text-[#cacaca]">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="pt-10 flex items-center justify-center text-white px-4">
            <form className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-lg p-6 space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your phone number OR Telegram username{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+7(996)996-90-80 / @QodirovDev"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your Email
                </label>
                <input
                  type="email"
                  placeholder="for@example.com"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Hello"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-gray-700 hover:bg-gray-800 transition font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
