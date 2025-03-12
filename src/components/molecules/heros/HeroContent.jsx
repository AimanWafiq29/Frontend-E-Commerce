import React from "react";
import Button from "../atoms/Button";

const HeroContent = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">
        Discover the Best Collection
      </h1>
      <p className="text-gray-600 mt-3">
        Explore our latest and most exclusive collections designed just for you.
      </p>
      <Button label="Shop Now" className="mt-5" />
    </div>
  );
};

export default HeroContent;
