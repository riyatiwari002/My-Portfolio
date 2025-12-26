import React from "react";
import profile from "../../public/riya.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const Home = () => {
  const data = {
    info: "Hi, I'm",
    role: "Full Stack Developer",
    Details: `I craft digital experiences that blend creativity with functionality."
    "Passionate about building scalable web applications using modern technologies"
    "and turning ideas into reality through clean, efficient code.`,
  };

  const socialMedia=[
    {
      icon: <LuGithub />,
      href:"https://github.com/riyatiwari002",
      label:"Github"
    },
    {
      icon:   <FiLinkedin />,
      href:"https://www.linkedin.com/in/riya-tiwari-7a051b280/",
      label:"Linkedin"
    },
    {
      icon:  <MdOutlineMailOutline />,
      href:"mailto:rtiyatiwari2626@gmail.com",
      label:"Email"
    },


  ]
  // bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
  return (
    <div>
      <div className="flex justify-around pt-40 bg-linear-to-l bg-blue-50 via-white-100 py-10">
        <div className="w-160">
          <h1 className="text-6xl font-semibold ">
            <span> {data.info} </span>
            <span className="text-7xl font-semibold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Riya Tiwari
            </span>
          </h1>
          <h3 className="font-semibold mt-5 text-3xl text-gray-700">
            {data.role}
          </h3>
          <p className="h-1 bg-linear-to-r bg-orange-500 via-purple-500 to-white-500  w-70"></p>
          <p className="text-gray-500  mt-10 text-xl">{data.Details}</p>
          <div className="flex gap-10 mt-10">
            <button className="bg-linear-to-r bg-blue-500 via-purple-500 to-pink-500 w-auto rounded-2xl flex px-7 py-2 items-center gap-2 text-white font-semibold  shadow-2xl hover:bg-lienar-to-r hover:bg-yellow-500 hover:via-green-500 hover:to-red-500 hover:text-whie transition duration-300 transform  hover:translate-y-0.5">
              <MdOutlineMailOutline /> Hire Me
            </button>
            <button className="border border-blue-700 w-auto shadow-2xl rounded-2xl flex items-center gap-2 px-7 py-2   text-blue-700 font-semibold  hover:bg-linear-to-r hover:bg-blue-500 hover: via-purple-500 hover:to-pink-500 hover:text-white transition duration-300 transform hover:translate-y-0.5">
              <LuDownload />
              Download Resume
            </button>
          </div>
          <div className="flex  gap-10 text-3xl mt-10">
          
         
           {socialMedia.map((item)=>
           <p className="h-14 w-14 bg-gray-300 rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
           <a href={item.href} aria-label={item.label}>{item.icon}</a>
             </p>
          )}
         
         
          </div>
        </div>
        <div className="w-80 h-80 rounded-full shadow-2xl flex justify-center items-center">
          <img
            src={profile}
            alt="profile-error"
            className="w-80 h-80 rounded-full object-cover hover:rotate-360 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
