import React from "react";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { TbTools } from "react-icons/tb";

const Skills = () => {
  const frontend = [
    { skills: "HTML/CSS", label: "95%" },
    { skills: "Javascript", label: "75%" },
    { skills: "React", label: "60%" },
    { skills: "Tailwind CSS", label: "60%" },
    { skills: "BootStrap", label: "95%" },
  ];

  const backend = [
    { skills: "Node.js", label: "85%" },
    { skills: "Express.js", label: "80%" },
    { skills: "MongoDB", label: "75%" },
    { skills: "REST APIs", label: "85%" },
    { skills: "Authentication", label: "80%" },
  ];

  const tools = [
    { skills: "Git/GitHub", label: "90%" },
    { skills: "VS Code", label: "95%" },
    { skills: "Postman", label: "85%" },
  ];

  const SkillCard = ({ title, icon, items }) => (
    <div className="space-y-4 shadow-2xl px-4 py-6 bg-white rounded-xl w-full hover:shadow-2xl">
      <div className="flex gap-2 text-xl md:text-2xl items-center font-semibold">
        {icon}
        <p>{title}</p>
      </div>
      <div>
        <ul className="space-y-4 md:space-y-6">
          {items.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium text-sm md:text-base">{item.skills}</span>
                <span className="text-gray-500 text-sm">{item.label}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: item.label }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div id="skills" className="mt-20 bg-gray-200 pt-20">
      <div className="text-center space-y-4 px-4">
        <h1 className="font-bold text-3xl md:text-4xl">Skills & Expertise</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-10 pb-20 mt-10 md:mt-20 px-4 md:px-10">
        <SkillCard 
          title="Frontend" 
          icon={<LuChevronsLeftRight className="text-blue-700 text-3xl md:text-4xl" />} 
          items={frontend} 
        />
        
        <SkillCard 
          title="Backend" 
          icon={<GoDatabase className="text-blue-700 text-3xl md:text-4xl" />} 
          items={backend} 
        />
        
        <SkillCard 
          title="Tools & Others" 
          icon={<TbTools className="text-blue-700 text-3xl md:text-4xl" />} 
          items={tools} 
        />
      </div>
    </div>
  );
};

export default Skills;