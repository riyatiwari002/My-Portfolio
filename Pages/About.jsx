import React from "react";
import { LuDownload } from "react-icons/lu";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";

const About = () => {
  const technology = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"
  ];

  return (
    <div id="about" className="px-4 md:px-10 mt-20 lg:mt-30 pb-10">
      <div className="text-center space-y-4">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">About Me</h2>
        <p className="text-lg md:text-xl text-gray-700 px-4">
          Get to know more about me, my skills, and my journey as a developer
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-around mt-10 lg:mt-20 gap-10 lg:gap-0">
        <div className="space-y-7 lg:w-1/2 px-4 lg:px-0">
          <h4 className="font-semibold text-2xl md:text-3xl">My Story</h4>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            I'm a passionate Full Stack Developer with over 1 year of experience creating dynamic web applications. My journey began with a curiosity about how websites work, which evolved into a deep love for coding and problem-solving.
            <br /><br />
            I specialize in building scalable applications using modern technologies like React, Node.js, and MongoDB. I believe in writing clean, efficient code and creating user experiences that are both functional and beautiful.
            <br /><br />
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>
          <a href="./src/assets/riyaFullStack.pdf" download className="inline-block">
                     <button className="border border-blue-700 shadow-2xl rounded-2xl flex justify-center items-center gap-2 px-6 py-3 text-blue-700 font-semibold hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition duration-300 w-full sm:w-auto">
                       <LuDownload />
                       Download Resume
                     </button>
                     </a>
        </div>

        <div className="space-y-7 lg:w-1/2 px-4 lg:px-0">
          <h3 className="font-semibold text-2xl md:text-3xl">Technologies I Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {technology.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-200 font-semibold rounded-xl px-4 py-3 text-center shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-2xl md:text-3xl">Quick Stats</h3>
            <div className="space-y-4">
              <div className="bg-blue-200 flex items-center gap-4 px-5 py-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-blue-300 rounded-full">
                  <LuChevronsLeftRight className="text-blue-700 text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">20+</h2>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
              </div>

              <div className="bg-blue-200 flex items-center gap-4 px-5 py-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <div className="p-3 bg-blue-300 rounded-full">
                  <GoDatabase className="text-blue-700 text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">1+</h2>
                  <p className="text-gray-700">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;