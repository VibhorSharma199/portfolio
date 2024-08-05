import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link, animateScroll as scroll } from "react-scroll";
import navImage from "../assets/image.png";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isSticky ? " bg-[#0b1217]" : "bg-[#0b1217] md:bg-transparent"
        } w-full transition-colors duration-300 fixed top-0 z-50`}
      >
        <nav className="flex justify-between w-[100%] md:w-[60%] mx-auto list-none text-white py-4 bg-transparent">
          <div className="text-2xl cursor-pointer ml-3 md:ml-0 mt-2 md:mt-0">
            <div className="flex gap-2">
              <Link to="home" className="flex gap-2">
                <img src={navImage} alt="" className="w-10 h-10" />
                ShDevVibhor
              </Link>
            </div>
          </div>
          <div className="hidden md:flex gap-5 text-md">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="domains"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
              >
                Domains
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </div>
          <button onClick={handleOnClick} className="md:hidden text-lg mr-3">
            {clicked ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </nav>
      </div>
      {clicked && (
        <div className="md:hidden bg-[#0b1217] w-full text-white fixed top-16 left-0 right-0 transition-all duration-300 z-50">
          <ul className="flex flex-col items-center gap-5 py-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="domains"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                Domains
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer"
                onClick={handleOnClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
