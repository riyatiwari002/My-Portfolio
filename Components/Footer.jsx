import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  const socialMedia = [
    { icon: <LuGithub />, href: "https://github.com/riyatiwari002", label: "Github" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/riya-tiwari-7a051b280/", label: "Linkedin" },
    { icon: <MdOutlineMailOutline />, href: "mailto:rtiyatiwari2626@gmail.com", label: "Email" },
  ];

  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-10 pb-10 gap-6'>
      <div className='text-center md:text-left'>
        <p className='text-gray-700'>Made By ❤️ Riya Tiwari</p>
        <p className='text-gray-700 text-sm'>&copy; 2025 All rights reserved.</p>
      </div>
      <div className="flex gap-6 text-2xl md:text-3xl">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.href}
            aria-label={item.label}
            className="h-12 w-12 md:h-14 md:w-14 bg-white shadow-lg rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;