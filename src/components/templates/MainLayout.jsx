import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import SearchBar from "../organisms/SearchBar";

const MainLayout = ({ children }) => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-100">
      <Navbar />
      <SearchBar /> 
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
