import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";
import SearchIcon from "../../../assets/search_icon.png";
import CrossIcon from "../../../assets/cross_icon.png";

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();

    return showSearch ? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none focus:outline-none focus:ring-0 focus:border-transparent border-transparent bg-transparent text-sm px-2"
                    type="text"
                    placeholder="Search"
                />
                <img className="w-4" src={SearchIcon} alt="Search" />
            </div>
            <img onClick={() => setShowSearch(false)} src={CrossIcon} className="inline w-3 cursor-pointer" alt="Close" />
        </div>
    ) : null;
};

export default SearchBar;
