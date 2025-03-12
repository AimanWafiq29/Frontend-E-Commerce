import React from "react";

const Button = ({ label, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
