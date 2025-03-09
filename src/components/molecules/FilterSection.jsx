import React from "react";
import Checkbox from "../atoms/Checkbox";

const FilterSection = ({ title, options, selected, toggle }) => {
    return (
        <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">{title}</p>
            <div className="flex flex-col gap-2">
                {options.map((item) => (
                    <Checkbox
                        key={item}
                        label={item}
                        value={item}
                        onChange={toggle}
                        checked={selected.includes(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterSection;
