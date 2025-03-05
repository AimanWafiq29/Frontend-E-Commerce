import React from "react";

const IconButton = ({ icon, alt, size = "w-5", className = "", onClick }) => {
  return (
    <img
      src={icon}
      alt={alt}
      className={`${size} cursor-pointer ${className}`}
      onClick={onClick}
    />
  );
};

export default IconButton;
