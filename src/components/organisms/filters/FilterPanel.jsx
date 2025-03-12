import React from "react";
import FilterSection from "../../molecules/filters/FilterSection";

const FilterPanel = ({ isFilterVisible, toggleFilter, category, subCategory, toggleCategory, toggleSubCategory }) => {
    return (
        <div className="min-w-60">
            <p
                className="my-2 text-xl flex items-center cursor-pointer gap-2"
                onClick={toggleFilter} // ✅ Toggle filter saat diklik
            >
                FILTERS
            </p>

            {isFilterVisible && ( // ✅ Gunakan isFilterVisible sebagai boolean
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
