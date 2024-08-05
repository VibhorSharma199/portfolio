import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faInstagram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('bg.jpg')",
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-xl md:text-5xl  font-bold">
            Hi, I'm <span className="text-yellow-500">Vibhor Sharma</span>
          </h1>
          <p className="text-sm md:text-lg text-white mt-4">
            Full Stack Web Developer specializing in the MERN stack, with robust
            backend skills and a passion for innovative solutions. Scroll down
            to explore my skills and projects!
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.instagram.com/vibhor.sharma987"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full p-2 bg-transparent text-white mx-2 border border-white transition-all ease-in-out duration-[0.2s] hover:opacity-80">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </a>
            <a
              href="https://discord.com/users/1206447761373794336"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full p-2 bg-transparent text-white mx-2 border border-white transition-all ease-in-out duration-[0.2s] hover:opacity-80">
                <FontAwesomeIcon icon={faDiscord} />
              </button>
            </a>
            <button className="rounded-full p-2 bg-transparent text-white mx-2 border border-white transition-all ease-in-out duration-[0.2s] hover:opacity-80">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
