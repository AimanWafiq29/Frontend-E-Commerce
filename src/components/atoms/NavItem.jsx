import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink to={to} className="flex flex-col items-center text-gray-700 hover:text-black">
      {label}
      <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
    </NavLink>
  );
};

export default NavItem;
