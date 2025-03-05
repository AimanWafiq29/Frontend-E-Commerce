import React from "react";
import Logo from "../atoms/Logo";
import NavItem from "../molecules/NavItem";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/cart_icon.png";
import ProfileIcon from "../../assets/profile_icon.png";
import SearchIcon from "../../assets/search_icon.png";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 font-medium px-4 bg-amber-600">

            <Logo />

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavItem to="/" label="HOME" />
                <NavItem to="/collection" label="COLLECTION" />
                <NavItem to="/about" label="ABOUT" />
                <NavItem to="/contact" label="CONTACT" />
            </ul>

            <div className="flex items-center gap-6">
                <img src={SearchIcon} alt="" className="w-5 cursor-pointer" />
                <div className="group relative">
                    <img src={ProfileIcon} alt="" className="w-5 cursor-pointer" />
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <img src={CartIcon} alt="" className="w-5 min-w-5" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">3</p>
                </Link>

            </div>

        </div>
    );
};

export default Navbar;
