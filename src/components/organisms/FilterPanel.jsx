import React from "react";
import { useState } from "react";
import FilterSection from "../molecules/FilterSection";

const FilterPanel = ({ showFilter, category, subCategory, toggleCategory, toggleSubCategory }) => {
    return (
        <div className="min-w-60">
            <p
                className="my-2 text-xl flex items-center cursor-pointer gap-2"
                onClick={showFilter}
            >
                FILTERS
            </p>

            {showFilter && (
                <>
                    <FilterSection
                        title="CATEGORIES"
                        options={["Men", "Women", "Kids"]}
                        selected={category}
                        toggle={toggleCategory}
                    />
                    <FilterSection
                        title="TYPE"
                        options={["Topwear", "Bottomwear", "Winterwear"]}
                        selected={subCategory}
                        toggle={toggleSubCategory}
                    />
                </>
            )}
        </div>
    );
};

export default FilterPanel;
