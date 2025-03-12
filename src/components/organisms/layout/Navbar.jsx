import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import IconButton from "../../atoms/buttons/IconButton";
import NavMenu from "../../molecules/navigations/NavMenu";
import ProfileDropdown from "../../molecules/navigations/ProfileDropdown";
import SidebarMenu from "../../molecules/navigations/SidebarMenu";

import MenuIcon from "../../../assets/menu_icon.png";
import SearchIcon from "../../../assets/search_icon.png";
import CartIcon from "../../../assets/cart_icon.png";

import { ShopContext } from "../../../context/ShopContext";
import Logo from "../../atoms/images/Logo";

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);

    return (
        <div className="flex items-center justify-between py-5 px-4">
            <Link to="/" className="relative">
                <Logo className="w-36 cursor-pointer" />
            </Link>
            <NavMenu />
            <div className="flex items-center gap-6">
                <IconButton icon={SearchIcon} alt="Search" onClick={() => setShowSearch(true)} />
                <ProfileDropdown />
                <Link to="/cart" className="relative">
                    <IconButton icon={CartIcon} alt="Cart" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
                        {getCartCount()}
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
