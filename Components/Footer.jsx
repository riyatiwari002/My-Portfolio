import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
      const socialMedia = [
        {
          icon: <LuGithub />,
          href: "https://github.com/riyatiwari002",
          label: "Github",
        },
        {
          icon: <FiLinkedin />,
          href: "https://www.linkedin.com/in/riya-tiwari-7a051b280/",
          label: "Linkedin",
        },
        {
          icon: <MdOutlineMailOutline />,
          href: "mailto:rtiyatiwari2626@gmail.com",
          label: "Email",
        },
      ];
  return (
    
    <div className='flex justify-between items-center pl-10 pr-10 pb-10'>
      <div>
         
      <p className='text-gray-700'>Made By ❤️ Riya Tiwari</p>
      <p className='text-gray-700 font-sm'>&copy; 2025 All rights reserved.</p>
      </div>
       <div>
          <div className="flex  gap-10 text-3xl mt-10">
        {socialMedia.map((item) => (
          <p className="h-14 w-14 bg-white shadow-xl rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <a href={item.href} aria-label={item.label}>
              {item.icon}
            </a>
          </p>
        ))}
      </div>
      </div>

       </div>

  )
}

export default Footer
