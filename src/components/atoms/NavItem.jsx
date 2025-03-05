import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-gray-700 hover:text-black ${
          isActive ? "text-black font-semibold border-b-2 border-black" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
