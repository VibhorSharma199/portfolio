import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8, z: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, z: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#0b1217] text-white p-8 rounded-lg shadow-lg max-w-sm mx-auto m-4 border border-gray-500 group"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-gray-800 p-4 rounded-full w-12 h-12 flex items-center justify-center group-hover:border-yellow-500 group-hover:border-2 transition duration-300">
          <FontAwesomeIcon
            icon={icon}
            size="lg"
            className=" group-hover:text-yellow-500"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center group-hover:text-yellow-500 transition ease-in-out duration-300">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </motion.div>
  );
};

export default Card;
