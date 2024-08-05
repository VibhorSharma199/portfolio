import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faShoppingCart,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord as faDiscordIcon } from "@fortawesome/free-brands-svg-icons";
import { faLinux, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const cardsData = [
  {
    title: "Web Portfolios",
    description:
      "Design and develop stunning web portfolios to showcase your work and enhance your online presence",
    icon: faFileCode,
  },
  {
    title: "eCommerce",
    description:
      "Create powerful online stores to drive sales and reach global customers with ease.",

    icon: faShoppingCart,
  },
  {
    title: "Web Development and Design",
    description:
      "Build responsive, modern websites with creative design and cutting-edge development techniques.",
    icon: faImage,
  },
  {
    title: "NodeJs App",
    description:
      "Develop scalable Node.js applications for efficient backend management and optimized workflows.",
    icon: faNodeJs,
  },
  {
    title: "Linux and Cloud Computing",
    description:
      "Optimize Linux systems and manage cloud infrastructure for enhanced performance and reliability.",
    icon: faLinux,
  },
  {
    title: "Discord and Community Management",
    description:
      "Enhance your Discord server with custom tools and effective community management solutions.",
    icon: faDiscordIcon,
  },
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default Cards;
