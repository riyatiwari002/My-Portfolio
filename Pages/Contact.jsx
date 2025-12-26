import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  const contactInfo = [
    { icons: <MdOutlineMailOutline />, text: "Email", info: "riyatiwari2626@gmail.com" },
    { icons: <LuPhone />, text: "Phone", info: "9301838148" },
    { icons: <IoLocationOutline />, text: "Location", info: "Indore, India" },
  ];

  const socialMedia = [
    { icon: <LuGithub />, href: "https://github.com/riyatiwari002", label: "Github" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/riya-tiwari-7a051b280/", label: "Linkedin" },
    { icon: <MdOutlineMailOutline />, href: "mailto:rtiyatiwari2626@gmail.com", label: "Email" },
  ];

  return (
    <div id="contact" className="mt-20 bg-white py-10 px-4 md:px-10">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl md:text-4xl">Get In Touch</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-around mt-10 gap-10">
        <div className="space-y-6 lg:w-1/2">
          <h2 className="font-semibold text-2xl">Contact Information</h2>
          {contactInfo.map((item, index) => (
            <div key={index} className="flex gap-4 items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:scale-95 transition-transform duration-300">
              <div className="text-2xl text-blue-700">{item.icons}</div>
              <div>
                <h4 className="font-semibold">{item.text}</h4>
                <p className="text-sm md:text-base">{item.info}</p>
              </div>
            </div>
          ))}

          <h2 className="font-semibold text-2xl pt-4">Follow Me</h2>
          <div className="flex gap-6 text-2xl md:text-3xl">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.href}
                aria-label={item.label}
                className="h-12 w-12 md:h-14 md:w-14 bg-white shadow-lg rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-2xl p-6 md:p-10 rounded-2xl space-y-6 lg:w-1/2">
          <h2 className="font-semibold text-2xl">Send Me a Message</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-semibold">Name</label>
              <input
                type="text"
                id="name"
                required
                className="border rounded-xl w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input
                type="email"
                id="email"
                required
                className="border rounded-xl w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="msg" className="block font-semibold">Message</label>
              <textarea
                id="msg"
                required
                className="border rounded-xl w-full px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl py-4 text-white font-semibold flex justify-center items-center gap-2 hover:opacity-90 transition duration-300"
            >
              <BsSend />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <hr className="mt-10 text-gray-300" />
    </div>
  );
};

export default Contact;








