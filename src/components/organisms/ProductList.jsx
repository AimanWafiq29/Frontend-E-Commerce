import React from "react";
import ProductCard from "../molecules/ProductCard";

const ProductList = ({ products, currency }) => {
  return (
    <div className="my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} currency={currency} />
      ))}
    </div>
  );
};

export default ProductList;
