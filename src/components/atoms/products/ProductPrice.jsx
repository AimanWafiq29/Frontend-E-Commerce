import React from "react";

const ProductPrice = ({ price, currency }) => {
  return <p className="text-sm font-medium">{currency}{price}</p>;
};

export default ProductPrice;
