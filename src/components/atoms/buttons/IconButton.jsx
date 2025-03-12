import React from "react";

const IconButton = ({ icon, alt = "icon", size = "w-5", className = "", onClick }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer ${size} ${className}`}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
