import React from "react";
import Cards from "../components/Cards";
import { motion } from "framer-motion";

const Domains = () => {
  return (
    <>
      <section id="domains" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-[5rem]"
        >
          <h1 className="text-white opacity-10 text-6xl md:text-7xl">
            Domains
          </h1>
          <div className="relative mt-2">
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-12 md:-top-14 text-yellow-500 text-xl md:text-2xl">
              Domains
            </span>
            <div className="h-1 bg-yellow-500 mt-2 mx-auto w-20 absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2"></div>
          </div>
        </motion.div>
        <Cards />
      </section>
    </>
  );
};

export default Domains;
