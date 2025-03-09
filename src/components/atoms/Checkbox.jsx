import React from "react";

const Checkbox = ({ label, value, onChange, checked }) => {
    return (
      <label className="flex gap-2 text-sm font-light text-gray-700">
        <input
          className="w-3"
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    );
  };
  
  export default Checkbox;
  