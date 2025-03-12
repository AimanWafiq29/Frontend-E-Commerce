import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../atoms/products/ProductImage";
import ProductName from "../../atoms/products/ProductName";
import ProductPrice from "../../atoms/products/ProductPrice";

const ProductCard = ({ product, currency }) => {
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${product._id}`}>
      <ProductImage src={product.image[0]} alt={product.name} />
      <ProductName name={product.name} />
      <ProductPrice price={product.price} currency={currency} />
    </Link>
  );
};

export default ProductCard;
