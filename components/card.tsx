import React from 'react';
import { GrSystem } from "react-icons/gr";
import { FaBook, FaTabletAlt } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";

const Card = ({ title, Icon, description }) => {
  return (
    <div className="max-w-sm hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ease-in-out rounded border-2 border-black border-opacity-10 overflow-hidden bg-white group hover:border-orange-400">
      <div className="p-4 relative">
        {/* Icon */}
        <div className="translate-x-10 translate-y-7 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-black text-6xl group-hover:text-orange-400 transition-all duration-300" />
        </div>
        
        {/* Card Title */}
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-400 transition-colors duration-300 p-8">
          {title}
        </h2>

        {/* Card Description */}
        <p className="text-gray-600 translate-x-5 translate-y-[-2rem] group-hover:text-gray-800 transition-all duration-300 p-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
