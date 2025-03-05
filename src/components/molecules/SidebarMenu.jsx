import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "../atoms/IconButton";
import DropdownIcon from "../../assets/dropdown_icon.png";

const SidebarMenu = ({ visible, setVisible }) => {
    return (
        <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ${visible ? "w-full" : "w-0 overflow-hidden"}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                    <IconButton icon={DropdownIcon} alt="Back" className="h-4 rotate-180" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
            </div>
        </div>
    );
};

export default SidebarMenu;
