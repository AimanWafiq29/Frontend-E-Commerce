import React from "react";
import Title from "../../atoms/typographys/Title";

const SectionTitle = ({ text1, text2, paragrap }) => {
    return (
        <div className="text-center py-8 text-3xl">
            <Title text1={text1} text2={text2} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                {paragrap}
            </p>
        </div>
    );
};

export default SectionTitle;
