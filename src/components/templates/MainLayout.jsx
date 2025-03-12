import React from "react";
import Navbar from "../organisms/layout/Navbar";
import Footer from "../organisms/layout/Footer";
import SearchBar from "../organisms/search/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-100">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
