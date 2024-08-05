import React from "react";

const Progresses = ({ title, percent }) => {
  return (
    <>
      <div className="flex justify-between mt-5">
        <span className="text-base font-medium text-white dark:text-white">
          {title}
        </span>
        <span className="text-sm font-medium text-yellow-500 dark:text-white">
          {percent}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-yellow-500 h-2.5 rounded-full"
          style={{ width: `${percent}` }}
        ></div>
      </div>
    </>
  );
};

export default Progresses;
