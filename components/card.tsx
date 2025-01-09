import React from 'react';
import { GrSystem } from "react-icons/gr";
import { FaBook,FaTabletAlt } from "react-icons/fa";
import { MdOutlineTimeToLeave, MdOutlineTimer } from "react-icons/md";
import { BsPlugin } from "react-icons/bs";

const Card = ({ title, Icon, description }) => {
  return (
    <div className="max-w-sm rounded border-black border-2 border-opacity-10 overflow-hidden  bg-white">
        
      <div className="p-4">

        <div className='translate-x-10 translate-y-7'>
        <Icon className="text-black text-6xl" />

        </div>
     
        {/* Card Title */}
        <h2 className="text-2xl font-bold text-gray-800 p-8
        ">{title}</h2>
        
        {/* Card Description */}
        <p className="text-gray-600  translate-x-5 translate-y-[-2rem] p-3">{description}</p>
      </div>

    </div>
  );
};

export default Card;
