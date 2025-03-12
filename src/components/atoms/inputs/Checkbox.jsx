import React from "react";

const Checkbox = ({ label, value, onChange, checked, name, ...props }) => {
  return (
    <label className="flex gap-2 text-sm font-light text-gray-700">
      <input
        className="w-3"
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {label}
    </label>
  );
};

export default Checkbox;
