import React from "react";
import NavItem from "../atoms/NavItem";

const NavMenu = () => {
  return (
    <ul className="hidden sm:flex gap-5 text-sm">
      <NavItem to="/" label="HOME" />
      <NavItem to="/collection" label="COLLECTION" />
      <NavItem to="/about" label="ABOUT" />
      <NavItem to="/contact" label="CONTACT" />
    </ul>
  );
};

export default NavMenu;
