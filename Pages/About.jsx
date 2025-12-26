import React from "react";
import { LuDownload } from "react-icons/lu";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
const About = () => {
  const technology = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];
  return (
    <div className="px-10 mt-30 pb-10">
      {/* ===============about heading====== */}
      <div className="text-center space-y-4">
        <h2 className="font-semibold text-5xl">About Me</h2>
        <p className="text-xl text-gray-700">
          Get to know more about me, my skills, and my journey as a developer
        </p>
      </div>
      {/* ====================about main============ */}
      <div className="flex justify-around mt-20">
        {/* ============================about left===== */}
        <div className="space-y-7">
          <h4 className="font-semibold text-3xl">My Story</h4>
          <p className="w-170 text-gray-700 text-xl">
            I'm a passionate Full Stack Developer with over 1 years of
            experience creating dynamic web applications. My journey began with
            a curiosity about how websites work, which evolved into a deep love
            for coding and problem-solving.
            <br />
            <br /> I specialize in building scalable applications using modern
            technologies like React, Node.js, and MongoDB. I believe in writing
            clean, efficient code and creating user experiences that are both
            functional and beautiful.
            <br />
            <br /> When I'm not coding, you can find me exploring new
            technologies, contributing to open-source projects, or sharing my
            knowledge with the developer community.
          </p>
          <button className="border border-blue-700   text-blue-700 font-semibold w-auto rounded-2xl flex items-center gap-2 px-7 py-2 hover:bg-blue-500 hover:text-white">
            <LuDownload />
            Download Resume
          </button>
        </div>
        {/* =======================about right==== */}

        <div className="space-y-7">
          <h3 className="font-semibold text-3xl">Technologies I Use</h3>
          <div className="grid grid-cols-2 gap-8">
            {technology.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-200 font-semibold rounded-xl  px-20 py-2 shadow-2xl grid grid-cols-2 hover:scale-110 transition-transform duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-3xl">Quick Stats</h3>

            <div className="bg-blue-200 flex items-center gap-4 px-5 py-4 rounded-xl shadow-md hover:scale-110 transition-transform duration-300">
              <div className="p-3 bg-blue-300 rounded-full">
                <LuChevronsLeftRight className="text-blue-700 text-2xl" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900">20+</h2>
                <p className="text-gray-700 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="bg-blue-200 flex gap-2 item-center px-5 py-4 rounded-xl shadow-md hover:scale-110 transition-transform duration-300">
              <div className="p-3 bg-blue-300 rounded-full">
                <GoDatabase className="text-blue-700 text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">1+</h2>
                <p className="text-gray-700 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
