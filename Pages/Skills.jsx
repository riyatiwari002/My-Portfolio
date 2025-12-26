import React from "react";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { TbTools } from "react-icons/tb";
const Skills = () => {
  const frontend = [
    {
      skills: "HTML/CSS",
      label: "95%",
    },
    {
      skills: "Javascript",
      label: "75%",
    },
    {
      skills: "React",
      label: "60%",
    },
    {
      skills: "Tailwind CSS",
      label: "60%",
    },
    {
      skills: "BootStrap",
      label: "95%",
    },
  ];

  const backend = [
    {
      skills: "Node.js",
      label: "85%",
    },
    {
      skills: "Express.js",
      label: "80%",
    },
    {
      skills: "MongoDB",
      label: "75%",
    },
    {
      skills: "REST APIs",
      label: "85%",
    },
    {
      skills: "Authentication",
      label: "80%",
    },
  ];

  const tools = [
    {
      skills: "Git/GitHub",
      label: "90%",
    },
    {
      skills: "VS Code",
      label: "95%",
    },
    {
      skills: "Postman",
      label: "85%",
    },
  ];

  return (
    <div className="mt-20 bg-gray-200 pt-20">
      {/* ==========skills heading=== */}
      <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl">Skills & Expertise</h1>
        <p className="text-gray-700 text-xl">
          Here are the technologies and tools I work with to bring ideas to life
        </p>

        <div className="flex justify-evenly gap-10 pb-20 mt-20">
          {/* =============frontend==== */}
          <div className="space-y-4 shadow-2xl px-4 py-6 bg-white rounded-xl w-120 hover:shadow-2xl">
            <div className="flex gap-2 text-2xl items-center font-semibold">
              <p>
                <LuChevronsLeftRight className="text-blue-700 text-4xl" />
              </p>
              <p>Frontend</p>
            </div>
            <div>
              <ul className="space-y-6">
                {frontend.map((item) => (
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {item.skills}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {item.label}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-linear-to-r bg-blue-500 via-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: item.label }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================backend=== */}
          <div className="space-y-6 bg-white shadow-xl w-120 px-4 py-6 rounded-xl hover:shadow-2xl">
            <div className="flex gap-2 font-semibold text-2xl items-center">
                <p><GoDatabase className="text-blue-700 text-2xl" /></p>
                <p>Backend</p>
            </div>

            <div>
                <ul className="space-y-6">
                    {backend.map((item)=>
                    <li>
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-gray-700">{item.skills}</span>
                            <span className="text-sm text-gray-500">{item.label}</span>
                        </div>
                        <div className="w-full bg-gray-200  rounded-full h-2"></div>
                        <div className="w-full bg-linear-to-r bg-blue-500 via-purple-500 to-pink-500 rounded-full h-2" style={{width:item.label}}></div>
                    </li>
                    )}
                </ul>
            </div>
          </div>
          {/* =================tools=== */}
           {/* ================backend=== */}
          <div className="space-y-6 bg-white shadow-xl w-120 px-4 py-6 rounded-xl hover:shadow-2xl">
            <div className="flex gap-2 font-semibold text-2xl items-center">
                <p><TbTools className="text-blue-700 text-2xl" /></p>
                <p>Tools & Others</p>
            </div>

            <div>
                <ul className="space-y-6">
                    {tools.map((item)=>
                    <li>
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-gray-700">{item.skills}</span>
                            <span className="text-sm text-gray-500">{item.label}</span>
                        </div>
                        <div className="w-full bg-gray-200  rounded-full h-2"></div>
                        <div className="w-full bg-linear-to-r bg-blue-500 via-purple-500 to-pink-500 rounded-full h-2" style={{width:item.label}}></div>
                    </li>
                    )}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
