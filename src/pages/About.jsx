import React from "react";
import {
  faInstagram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hello from "../assets/vibhor.png";
import { motion } from "framer-motion";
import "../App.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="relative">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-[5rem]"
        >
          <h1 className="text-white opacity-10 text-6xl md:text-7xl">
            ABOUT ME
          </h1>
          <div className="relative mt-2">
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-14 md:-top-16 text-yellow-500 text-xl md:text-2xl">
              ABOUT ME
            </span>
            <div className="h-1 bg-yellow-500 mt-2 mx-auto w-20 absolute -top-9 md:-top-10 left-1/2 -translate-x-1/2"></div>
          </div>
        </motion.div>
        <div className="flex w-[60%] mx-auto justify-evenly flex-col md:flex-row">
          <div className="">
            <motion.img
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              src={hello}
              alt=""
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white mt-14"
          >
            <h1 className="text-3xl">Hi there! I'm Vibhor Sharma</h1>
            <br></br>
            <p className="text-yellow-500 text-2xl">FullStack WebDeveloper</p>
            <br />
            <p className="text-gray-400">
              As a full-stack web developer, I thrive on exploring the latest
              technologies
              <br />
              and crafting seamless, engaging web experiences from front to
              back.
              <br />
              My passion lies in blending design and functionality to build
              innovative solutions that leave a lasting impact. 🌐✨
            </p>
            <br />
            <p className="text-gray-400">
              Birthday : Apr 30, 2006
              <br />
              <br />
              Email : vibhorsharma6969@gmail.com <br />
              <br />
              From : Punjab, India <br />
              <br />
              Language : English, Hindi ,Punjabi
            </p>
            <br />
            <button className="rounded-full w-[100px] h-5 bg-yellow-500 text-black p-5 hover:shadow-sm hover:shadow-yellow-400 hover:border hover:border-yellow-400">
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
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
