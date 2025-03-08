import React from "react";

const SectionTitle = ({ title, paragrap }) => {
    return (
        <div className="text-center py-8 text-3xl">
            <div className="inline-flex gap-2 items-center mb-3">
                <p className="text-gray-500">
                    {title.split(" ")[0]} <span className="text-gray-700 font-medium">{title.split(" ")[1]}</span>
                </p>
                <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                {paragrap}
            </p>
        </div>
    );
};

export default SectionTitle;
