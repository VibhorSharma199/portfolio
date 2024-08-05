import React from "react";
import { motion } from "framer-motion";
import Progress from "../components/Progress";
const Skills = () => {
  return (
    <>
      <section id="skills" className="overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-[5rem]"
        >
          <h1 className="text-white opacity-10 text-6xl md:text-7xl">Skills</h1>
          <div className="relative mt-2">
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-14 md:-top-16 text-yellow-500 text-xl md:text-2xl">
              Skills
            </span>
            <div className="h-1 bg-yellow-500 mt-2 mx-auto w-20 absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2"></div>
          </div>
        </motion.div>
        <div className="flex md:flex-row flex-col w-[100%] justify-evenly mt-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="ml-4 md:ml-0 overflow-x-hidden"
          >
            <h1 className="text-yellow-500 font-bold text-2xl ">
              Familiar with These Technologies
            </h1>
            <p className="text-white">
              During my journey of designing numerous sites and backend
              <br />
              projects, I frequently explored new technologies. For example,
              <br />
              backend development taught me about databases, and working on
              <br />
              websites introduced me to platforms like Vercel. <br />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="md:w-[30%] w-[60%] md:mx-0 mx-auto mt-5 md:mt-0"
          >
            <Progress />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
