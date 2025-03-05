import React, { useState } from "react";
import Logo from "../atoms/Logo";
import IconButton from "../atoms/IconButton";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../../assets/cart_icon.png";
import SearchIcon from "../../assets/search_icon.png";
import MenuIcon from "../../assets/menu_icon.png";
import NavMenu from "../molecules/NavMenu";
import ProfileDropdown from "../molecules/ProfileDropdown";
import SidebarMenu from "../molecules/SidebarMenu";

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 px-4">
            <Logo />
            <NavMenu />
            <div className="flex items-center gap-6">
                <IconButton icon={SearchIcon} alt="Search" />
                <ProfileDropdown />
                <Link to="/cart" className="relative">
                    <IconButton icon={CartIcon} alt="Cart" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
                        3
                    </p>
                </Link>
                <IconButton onClick={() => setVisible(true)} icon={MenuIcon} alt="Menu" className="w-5 sm:hidden" />
            </div>

            {/* Sidebar Menu */}
            <SidebarMenu visible={visible} setVisible={setVisible} />

        </div>
    );
};

export default Navbar;
