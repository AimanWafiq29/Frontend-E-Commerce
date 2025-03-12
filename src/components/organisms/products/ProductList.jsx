import React from "react";
import ProductCard from "../../molecules/products/ProductCard";
import SectionTitle from "../../molecules/sections/SectionTitle";

const ProductList = ({ products = [], currency, title, description, className = "", columns = "grid-cols-4" }) => {
    if (products.length === 0) {
        return <p className="text-center text-gray-500">No products found.</p>;
    }

    return (
        <div className={`my-10 ${className}`}>
            {title && <SectionTitle text1={title.split(" ")[0]} text2={title.split(" ")[1]} paragraph={description} />}
            <div className={`grid ${columns} gap-4 gap-y-6`}>
                {products.map((product) => (
                    <ProductCard key={product.id || product._id} product={product} currency={currency} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
