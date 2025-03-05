import React from "react";
import Navbar from "../organisms/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
