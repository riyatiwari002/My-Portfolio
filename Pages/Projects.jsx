import React from "react";
import gradient from "../../public/gradient.png";
import toDoList from "../../public/to-do-list.png";
import quiz from "../../public/quiz.png";
import weather from "../../public/weather.png";
import { LuGithub } from "react-icons/lu";
import project from "../../public/project.png";
import { CiShare1 } from "react-icons/ci";

const Projects = () => {
  const projectInfo = [
    {
      image: gradient,
      projectName: "Linear-Gradient-Generator",
      description: `Linear Gradient Generator is an interactive web tool built using HTML, CSS, and JavaScript.
It allows users to select two colors and instantly create a beautiful linear gradient.
The gradient updates in real-time, demonstrating dynamic styling and DOM manipulation.
It also displays the corresponding CSS code for easy use in projects.`,
      technology: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/riyatiwari002/linear-gradient-generator",
      demo: "https://linear-gradient-generator-gamma.vercel.app/",
    },
    {
      image: toDoList,
      projectName: "To-Do-List",
      description: `Responsive To-Do List is a web application built using HTML, CSS, and JavaScript.
It allows users to add, edit, and delete tasks easily with a clean interface.
The design is fully responsive, adapting perfectly to desktop, tablet, and mobile screens.
It demonstrates dynamic DOM manipulation and efficient task management features.`,
      technology: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/riyatiwari002/my-todo-app",
      demo: "https://to-do-list-fordailytask.netlify.app/",
    },
    {
      image: quiz,
      projectName: "Quiz-App",
      description: `Quiz App is a React-based web application that presents interactive multiple-choice questions.
It uses state and props to manage questions, user answers, and real-time scoring.
This project demonstrates React skills, dynamic UI updates, and component-based design.`,
      technology: ["HTML", "CSS", "JavaScript", "React.js"],
      code: "https://github.com/riyatiwari002/Quiz-App",
      demo: "https://quizoralyon.netlify.app/",
    },
    {
      image: weather,
      projectName: "cWeather-App",
      description: `Weather App is a responsive web application built using HTML, CSS, and JavaScript (or React).
It provides real-time weather updates based on user location or searched cities.
The app showcases dynamic API integration, responsive design, and interactive UI.`,
      technology: ["HTML", "CSS"],
      code: "",
      demo: "https://weather-checker-app-for-country.netlify.app/",
    },
  ];

  const cloneInfo = [
    {
      image: project,
      projectName: "student management",
      description: "lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology: ["HTML", "CSS"],
    },
    {
      image: project,
      projectName: "gas management",
      description: "lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology: ["HTML", "CSS"],
    },
    {
      image: project,
      projectName: "popcorm management",
      description: "lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology: ["HTML", "CSS"],
    },
    {
      image: project,
      projectName: "car management",
      description: "lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology: ["HTML", "CSS"],
    },
    {
      image: project,
      projectName: "car management",
      description: "lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology: ["HTML", "CSS"],
    },
    {
      image: project,
      projectName: "car management",
      description: "lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology: ["HTML", "CSS"],
    },
  ];

  return (
    <div
      id="projects"
      className="mt-20 md:mt-30 bg-white py-8 md:py-10 px-4 md:px-10 space-y-6 md:space-y-8"
    >
      {/* Featured Projects Heading */}
      <div className="text-center space-y-3 md:space-y-4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Featured Projects
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 px-2 md:px-0">
          Here are some of my recent projects that showcase my skills and
          expertise
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 px-2 md:p-10 rounded-2xl">
        {projectInfo.map((item, index) => (
          <div
            key={index}
            className="space-y-4 md:space-y-6 shadow-xl md:shadow-2xl w-full max-w-2xl mx-auto py-4 md:py-6 rounded-xl md:rounded-2xl"
          >
            <img
              src={item.image}
              alt="project"
              className="w-full h-48 md:h-56 lg:h-64 rounded-t-xl md:rounded-tr-xl md:rounded-tl-xl object-cover"
            />

            <div className="px-4 md:ml-6 lg:ml-10 space-y-3 md:space-y-4">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                {item.projectName}
              </h2>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technology.map((tech, techIndex) => (
                  <p
                    key={techIndex}
                    className="bg-blue-100 px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-xl md:rounded-2xl text-xs md:text-sm lg:text-base"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-10 items-start sm:items-center">
                {item.code && (
                  <button
                    className="w-full sm:w-auto border border-blue-900 rounded-lg md:rounded-xl text-blue-700 text-base md:text-lg lg:text-xl flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 hover:bg-blue-700 hover:text-white hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(item.code)}
                  >
                    <LuGithub className="text-lg md:text-xl" />
                    Code
                  </button>
                )}
                {item.demo && (
                  <button
                    className="w-full sm:w-auto border border-blue-900 rounded-lg md:rounded-xl text-blue-700 text-base md:text-lg lg:text-xl flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(item.demo)}
                  >
                    <CiShare1 className="text-lg md:text-xl" />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clone Design Section */}
      {/* <div className="mt-20 md:mt-30 bg-white py-8 md:py-10 space-y-6 md:space-y-8 px-2 md:px-0">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Clone Design</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 px-2 md:px-0">
            "I recreate popular websites using HTML, CSS, and JavaScript to sharpen my <br className="hidden md:block"/>frontend skills and explore modern UI/UX trends."
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 px-2 md:p-10 rounded-2xl">
          {cloneInfo.map((item, index) => (
            <div key={index} className="space-y-4 md:space-y-6 shadow-xl md:shadow-2xl w-full max-w-md mx-auto py-4 md:py-6 rounded-xl md:rounded-2xl">
              <img 
                src={item.image} 
                alt="project" 
                className="w-full h-40 md:h-48 lg:h-56 rounded-t-xl md:rounded-tr-xl md:rounded-tl-xl object-cover" 
              />
             
             <div className="px-4 md:ml-6 space-y-3 md:space-y-4">
               <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">{item.projectName}</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technology.map((tech, techIndex) => (
                  <p key={techIndex} className="bg-blue-100 px-3 py-1 md:px-4 md:py-2 rounded-xl text-xs md:text-sm">
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center">
                <button className="w-full sm:w-auto border border-blue-900 rounded-lg md:rounded-xl text-blue-700 text-base md:text-lg flex items-center justify-center gap-2 px-3 py-2 hover:bg-blue-700 hover:text-white hover:scale-105 transition-transform duration-300">
                  <LuGithub className="text-lg md:text-xl"/>
                  Code
                </button>
                <button className="w-full sm:w-auto border border-blue-900 rounded-lg md:rounded-xl text-blue-700 text-base md:text-lg flex items-center justify-center gap-2 px-3 py-2 hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 transition-transform duration-300">
                  <CiShare1 className="text-lg md:text-xl"/>
                  Live Demo
                </button>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
       */}
      {/* View All Button */}
      <div className="text-center pt-4 md:pt-6">
        <button
          onClick={() =>
            window.open("https://github.com/riyatiwari002", "_blank")
          }
          className="text-blue-700 border border-blue-700 rounded-lg md:rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg lg:text-xl hover:bg-blue-500 hover:text-white transition duration-300"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
