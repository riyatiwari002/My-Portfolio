import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
const Contact = () => {
  const contactInfo = [
    {
      icons: <MdOutlineMailOutline />,
      text: "Email",
      info: "riyatiwari2626@gmail.com",
    },
    {
      icons: <LuPhone />,
      text: "Phone",
      info: "9301838148",
    },
    {
      icons: <IoLocationOutline />,
      text: "Location",
      info: "Indore, India",
    },
  ];

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
    <div className="mt-30 bg-white py-10 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl">Get In Touch</h1>
        <p className="text-xl text-gray-700">
          Have a project in mind? Let's discuss how we can work together to
          bring your ideas
          <br /> to life
        </p>
      </div>

      <div className="flex justify-around">
        {/* left */}

      <div className="space-y-4">
        <h2 className="font-semibold text-2xl">Contact Information</h2>
        {contactInfo.map((item) => (
          <div className="flex gap-2 items-center bg-white rounded-xl   shadow-2xl w-200 px-4 py-6  hover:scale-95 transition-transform duration-300">
            <div className="text-2xl text-blue-700">{item.icons}</div>
            <div>
              <h4 className="font-semibold">{item.text}</h4>
              <p>{item.info}</p>
            </div>
            <div></div>
          </div>
        ))}

        <h2 className="font-semibold text-2xl">Follow Me</h2>
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

      
      {/* ====================send msg============ */}
      <div className="bg-white shadow-2xl p-10 rounded-2xl space-y-6 w-200">
        <h2 className="font-semibold text-2xl">Send Me a Message</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-semibold">Name</label>
            <input type="text" id="name" name="name" required className="border cursor-pointer rounded-2xl focus:outline-none caret-black w-full px-4 py-2 text-xl focus:border-blue-700 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input type="text" id="email" name="email" required className="border cursor-pointer rounded-2xl focus:outline-none caret-black w-full px-4 py-2 text-xl focus:border-blue-700 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label htmlFor="msg" className="block font-semibold">Message</label>
            <textarea name="msg" id="msg" required  className="border cursor-pointer min-h-[100px] overflow-y-auto rounded-2xl focus:outline-none caret-black resize-none w-full px-4 py-2 text-xl focus:border-blue-700 focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="w-full px-2 py-3 flex gap-2 items-center text-xl bg-linear-to-r rounded-2xl bg-blue-500  via-blue-500 to-purple-500 text-white justify-center hover:scale-95 transition-transform duration-300">
            <BsSend />
           <button type="submit"> Send Message</button>
          </div>
        </form>
      </div>
      </div>
       <hr className='text-gray-300'/>
    </div>
  );
};

export default Contact;
