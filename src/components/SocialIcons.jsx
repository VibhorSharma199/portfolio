import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram />, text: "Instagram", link: "#" },
  { icon: <FaTwitter />, text: "Twitter", link: "#" },
  { icon: <FaLinkedin />, text: "LinkedIn", link: "#" },
  { icon: <FaWhatsapp />, text: "WhatsApp", link: "#" },
];

const SocialIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className={`relative flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full transition-all ${
            hoveredIndex === index ? "w-32" : "w-10"
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <div
            className={`absolute flex items-center justify-center transition-all transform ${
              hoveredIndex === index
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
          >
            <span className="ml-2">{social.icon}</span>
            <span className="ml-2">{social.text}</span>
          </div>
          <div
            className={`absolute flex items-center justify-center transition-all transform ${
              hoveredIndex === index
                ? "scale-0 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
