import React from "react";
import Progresses from "./Progresses";
const progressData = [
  {
    title: "Javascript",
    percent: "90%",
  },
  {
    title: "NodeJs",
    percent: "98%",
  },
  {
    title: "Python",
    percent: "95%",
  },
  {
    title: "C++",
    percent: "98.5  %",
  },
  {
    title: "ReactJS",
    percent: "100%",
  },
  {
    title: "Java",
    percent: "20%",
  },
  {
    title: "More Coming Soon",
    percent: "",
  },
];

const Progress = () => {
  return (
    <div className="">
      {progressData.map((proggress, index) => (
        <Progresses
          key={index}
          title={proggress.title}
          percent={proggress.percent}
        />
      ))}
    </div>
  );
};

export default Progress;
