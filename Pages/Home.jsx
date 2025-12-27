import React from "react";
import profile from "../../public/riya.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import resume from '../../public/riyaFullStack.pdf'
const Home = () => {
  const scrollToContact=()=>{
    const element=document.querySelector("#contact");
    if(element)
    {
      element.scrollIntoView({behavior:"smooth"});
    }
  }
  const data = {
    info: "Hi, I'm",
    role: "Full Stack Developer",
    Details: `I craft digital experiences that blend creativity with functionality. Passionate about building scalable web applications using modern technologies and turning ideas into reality through clean, efficient code.`,
  };

  const socialMedia = [
    { icon: <LuGithub />, href: "https://github.com/riyatiwari002", label: "Github" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/riya-tiwari-7a051b280/", label: "Linkedin" },
    { icon: <MdOutlineMailOutline />, href: "mailto:rtiyatiwari2626@gmail.com", label: "Email" },
  ];

  return (
    <div id="home">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center pt-20 lg:pt-40 bg-linear-to-l from-blue-50 to-white py-10 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 xl:w-160 text-center lg:text-left px-4 lg:px-0 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            <span>{data.info} </span>
            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block mt-2">
              Riya Tiwari
            </span>
          </h1>
          <h3 className="font-semibold mt-5 text-2xl md:text-3xl text-gray-700">
            {data.role}
          </h3>
          <p className="h-1 bg-linear-to-r from-orange-500 via-purple-500 to-white w-full lg:w-70 mt-4"></p>
          <p className="text-gray-500 mt-6 lg:mt-10 text-lg md:text-xl leading-relaxed">
            {data.Details}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8">
            <button className="border border-blue-700 shadow-2xl rounded-2xl flex justify-center items-center gap-2 px-6 py-3 text-blue-700 font-semibold  rounded-2xl flex justify-center items-center gap-2 px-6 py-3 hover:text-white font-semibold shadow-2xl hover:shadow-lg transition duration-300 w-full sm:w-auto hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500" onClick={scrollToContact}>
              <MdOutlineMailOutline /> Hire Me
            </button>
            <a href={resume} download className="inline-block">
            <button className="border border-blue-700 shadow-2xl rounded-2xl flex justify-center items-center gap-2 px-6 py-3 text-blue-700 font-semibold hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition duration-300 w-full sm:w-auto">
              <LuDownload />
              Download Resume
            </button>
            </a>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 md:gap-10 text-3xl mt-8">
            {socialMedia.map((item, index) => (
              <p key={index} className="h-12 w-12 md:h-14 md:w-14 bg-gray-300 rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <a href={item.href} aria-label={item.label}>{item.icon}</a>
              </p>
            ))}
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl flex justify-center items-center">
          <img
            src={profile}
            alt="profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover hover:rotate-360 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;