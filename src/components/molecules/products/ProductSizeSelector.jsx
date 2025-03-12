import React from "react";

const ProductSizeSelector = ({ sizes, selectedSize, onSelect }) => {
    return (
        <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
                {sizes.map((size, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(size)}
                        className={`border py-2 px-4 bg-gray-100 ${size === selectedSize ? "border-orange-500" : ""}`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductSizeSelector;
