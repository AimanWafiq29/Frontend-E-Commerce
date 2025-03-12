import React from "react";
import StarIcon from "../../../assets/star_icon.png";
import StarDullIcon from "../../../assets/star_dull_icon.png";

const ProductRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={i < rating ? StarIcon : StarDullIcon} className="w-3 5" />
      ))}
      <p className="pl-2">({reviews})</p>
    </div>
  );
};

export default ProductRating;
