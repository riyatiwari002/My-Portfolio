import React from "react";
import themes from "../../public/themes.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex justify-between md:justify-around items-center w-full h-auto bg-white shadow-2xl p-4 sticky top-0 left-0 z-20">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Riya Tiwari
        </h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-evenly items-center gap-4 lg:gap-10">
        {navItems.map((item) => (
          <li
            className="hover:text-blue-500 cursor-pointer text-sm lg:text-base"
            onClick={() => scrollToSection(item.href)}
            key={item.name}
          >
            {item.name}
          </li>
        ))}
        {/* <li className="hover:text-blue-500">
          <a href="#">
            <img src={themes} alt="themes" className="w-8 h-8 lg:w-10 lg:h-10" />
          </a>
        </li> */}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li
                className="w-full text-center py-3 hover:bg-gray-100 hover:text-blue-500 cursor-pointer"
                onClick={() => scrollToSection(item.href)}
                key={item.name}
              >
                {item.name}
              </li>
            ))}
            <li className="py-3">
              <a href="#">
                <img src={themes} alt="themes" className="w-8 h-8 mx-auto" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;