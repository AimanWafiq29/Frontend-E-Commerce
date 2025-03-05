import React from "react";

const ProductImage = ({ src, alt }) => {
  return (
    <div className="overflow-hidden">
      <img src={src} alt={alt} className="hover:scale-110 transition-all ease-in-out" />
    </div>
  );
};

export default ProductImage;
