import React from "react";
import Button from "../../atoms/buttons/Button";

const ProductActions = ({ onAddToCart }) => {
  return (
    <Button label="ADD TO CART" onClick={onAddToCart} className="bg-black text-white px-8 py-3 text-sm" />
  );
};

export default ProductActions;
