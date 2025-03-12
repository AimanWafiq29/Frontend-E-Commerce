import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-gray-700 hover:text-black ${isActive ? "text-black font-semibold border-b-2 border-black" : ""
        }`
      }
    >
      {icon && <img src={icon} alt="icon" className="w-5 h-5 mb-1" />}
      {label}
    </NavLink>
  );
};

export default NavItem;
