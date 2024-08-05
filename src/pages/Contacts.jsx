import React from "react";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord as faDiscordIcon } from "@fortawesome/free-brands-svg-icons";
const Contacts = () => {
  return (
    <>
      <section id="contact" className="h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-[5rem] overflow-y-hidden"
        >
          <h1 className="text-white opacity-10 text-6xl md:text-7xl">
            Contact
          </h1>
          <div className="relative mt-2">
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-12 md:-top-14 text-yellow-500 text-xl md:text-2xl">
              Contact
            </span>
            <div className="h-1 bg-yellow-500 mt-2 mx-auto w-20 absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2"></div>
          </div>
        </motion.div>
        <div className="flex mx-auto gap-16 w-[80%] mt-10 flex-col md:flex-row ">
          <div className="flex flex-col  md:w-[40%]">
            <h1 className="text-white font-bol text-3xl">Say! Hello</h1>
            <Contact />
            {/* <span className="text-white">{result}</span> */}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-bol text-3xl">Contact Info</h1>
            <p className="text-gray-400 text-md">
              Interested in working together? I'm open to new projects and
              <br />
              collaborations. Get in touch to see how we can team up
            </p>
            <div className="mt-5">
              <div className="flex gap-5 group">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 border-gray-400 border rounded-full p-4 hover:border-yellow-500 group-hover:border-yellow-500 transition-all duration-[0.5s] ease-in-out"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-xl">Email</p>
                  <p className="text-gray-400 text-md hover:text-yellow-500 transition-all duration-[0.5s] ease-in-out">
                    <a href="">vibhorsharma961@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group mt-3">
                <div>
                  <FontAwesomeIcon
                    icon={faDiscordIcon}
                    className="text-gray-400 border-gray-400 border rounded-full p-4 hover:border-yellow-500 group-hover:border-yellow-500 transition-all duration-[0.5s] ease-in-out"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-xl">Discord</p>
                  <p className="text-gray-400 text-md hover:text-yellow-500 transition-all duration-[0.5s] ease-in-out">
                    <a href="">69unique69</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group mt-3">
                <div>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-400 border-gray-400 border rounded-full p-4 hover:border-yellow-500 group-hover:border-yellow-500 transition-all duration-[0.5s] ease-in-out"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-xl">Github</p>
                  <p className="text-gray-400 text-md hover:text-yellow-500 transition-all duration-[0.5s] ease-in-out">
                    <a href="">
                      VibhorSharma199 <br /> _VibhorSharma_
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-3 text-white ">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Contacts;
