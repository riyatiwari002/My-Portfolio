import React from "react";
import gradient from '../../public/gradient.png'
import toDoList from '../../public/to-do-list.png';
import quiz from '../../public/quiz.png';
import weather from '../../public/weather.png'
import { LuGithub } from "react-icons/lu";
import project from "../../public/project.png";
import { CiShare1 } from "react-icons/ci";
const Projects = () => {
  const projectInfo=[
    {
      image:gradient,
      projectName:"Linear-Gradient-Generator",
      description:`Linear Gradient Generator is an interactive web tool built using HTML, CSS, and JavaScript.
It allows users to select two colors and instantly create a beautiful linear gradient.
The gradient updates in real-time, demonstrating dynamic styling and DOM manipulation.
It also displays the corresponding CSS code for easy use in projects.`,
      technology:["HTML","CSS","JavaScript"],
      code:"https://github.com/riyatiwari002/linear-gradient-generator",
      demo:"https://linear-gradient-generator-gamma.vercel.app/"

    },
    {
      image:toDoList,
      projectName:"To-Do-List",
      description:`Responsive To-Do List is a web application built using HTML, CSS, and JavaScript.
It allows users to add, edit, and delete tasks easily with a clean interface.
The design is fully responsive, adapting perfectly to desktop, tablet, and mobile screens.
It demonstrates dynamic DOM manipulation and efficient task management features.
.`,
      technology:["HTML","CSS","JavaScript"],
      code:"https://github.com/riyatiwari002/my-todo-app",
      demo:"https://to-do-list-fordailytask.netlify.app/"

    },
    {
      image:quiz,
      projectName:"Quiz-App",
      description:`Quiz App is a React-based web application that presents interactive multiple-choice questions.
It uses state and props to manage questions, user answers, and real-time scoring.
This project demonstrates React skills, dynamic UI updates, and component-based design.`,
      technology:["HTML","CSS","JavaScript","React.js"],
      code:"https://github.com/riyatiwari002/Quiz-App",
      demo:"https://quizoralyon.netlify.app/"

    },
    {
      image:weather,
      projectName:"cWeather-App",
      description:`Weather App is a responsive web application built using HTML, CSS, and JavaScript (or React).
It provides real-time weather updates based on user location or searched cities.
The app showcases dynamic API integration, responsive design, and interactive UI.`,
      technology:["HTML","CSS"],
      code:"",
      demo:"https://weather-checker-app-for-country.netlify.app/"

    },
  ]

  const cloneInfo=[
    {
      image:project,
      projectName:"student management",
      description:"lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology:["HTML","CSS"],

    },
    {
      image:project,
      projectName:"gas management",
      description:"lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology:["HTML","CSS"],

    },
    {
      image:project,
      projectName:"popcorm management",
      description:"lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology:["HTML","CSS"],

    },
    {
      image:project,
      projectName:"car management",
      description:"lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology:["HTML","CSS"],

    },
    {
      image:project,
      projectName:"car management",
      description:"lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology:["HTML","CSS"],

    },
    {
      image:project,
      projectName:"car management",
      description:"lorem1sdfyuiop;';lkjhgfghjkkjhgfgh",
      technology:["HTML","CSS"],

    }
  ]
  return (
    <div className="mt-30 bg-white py-10 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl">Featured Projects</h1>
        <p className="text-xl text-gray-700">
          Here are some of my recent projects that showcase my skills and
          expertise
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 p-10 rounded-2xl">
        {projectInfo.map((item)=>
        <div className="space-y-6  shadow-2xl w-200 py-6 rounded-2xl">
        <img src={item.image} alt="project-error" className="w-full h-50 rounded-tr-xl rounded-tl-xl object-cover" />
     
       <div className="ml-10 space-y-4">
         <h2 className="font-semibold text-2xl">{item.projectName}</h2>
        <p className=" text-gray-700">
          {item.description}
        </p>
        <div className="flex gap-2">
        {item.technology.map((tech)=>
          <p className="bg-blue-100 px-6 py-2 rounded-2xl">{tech}</p>
        )}
        </div>
        <div className="flex  items-center gap-10">
          <button className="w-30 border border-blue-900 rounded-xl text-blue-700 text-xl flex items-center gap-3 px-2 py-1 hover:bg-blue-700 hover:text-white hover:scale-110 transition-transform duration-300" onClick={()=>window.open(item.code)}>
            <LuGithub className="text-xl"/>
            Code
          </button>
          <button className="w-50 border border-blue-900 rounded-xl text-blue-700 text-xl flex items-center gap-3 px-2 py-1 hover:bg-linear-to-r hover:bg-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-transform duration-300" onClick={()=>window.open(item.demo)}>
            <CiShare1 />
            Live Demo</button>
        </div>
       </div>
      </div>
        )}
      </div>
      {/* =======================clone design==== */}
     <div className="mt-30 bg-white py-10 space-y-6">
       <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl">Clone Design</h1>
        <p className="text-xl text-gray-700">"I recreate popular websites using HTML, CSS, and JavaScript to sharpen my <br/>frontend skills and explore modern UI/UX trends."</p>
      </div>
        <div className="grid grid-cols-3 gap-5 p-10 rounded-2xl">
        {cloneInfo.map((item)=>
        <div className="space-y-6  shadow-2xl w-120 h-120 py-6 rounded-2xl">
        <img src={item.image} alt="project-error" className="w-full h-50 rounded-tr-xl rounded-tl-xl" />
     
       <div className="ml-10 space-y-4">
         <h2 className="font-semibold text-2xl">{item.projectName}</h2>
        <p className=" text-gray-700">
          {item.description}
        </p>
        <div className="flex gap-2">
        {item.technology.map((tech)=>
          <p className="bg-blue-100 px-6 py-2 rounded-2xl">{tech}</p>
        )}
        </div>
        <div className="flex  items-center gap-10">
          <button className="w-30 border border-blue-900 rounded-xl text-blue-700 text-xl flex items-center gap-3 px-2 py-1 hover:bg-blue-700 hover:text-white hover:scale-110 transition-transform duration-300">
            <LuGithub className="text-xl"/>
            Code
          </button>
          <button className="w-50 border border-blue-900 rounded-xl text-blue-700 text-xl flex items-center gap-3 px-2 py-1 hover:bg-linear-to-r hover:bg-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-transform duration-300">
            <CiShare1 />
            Live Demo</button>
        </div>
       </div>
      </div>
        )}
      </div>
     </div>
    <div className="text-center">
       <button className="text-blue-700 border border-blue-700 rounded-xl px-6 py-2 text-xl hover:bg-blue-500 hover:text-white">View All Posts</button>
    </div>
    </div>
  );
};

export default Projects;
