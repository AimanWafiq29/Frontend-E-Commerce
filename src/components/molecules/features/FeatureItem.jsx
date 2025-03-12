import React from "react";
import IconButton from "../../atoms/buttons/IconButton";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <IconButton icon={icon} alt={title} className="w-12 m-auto mb-5" />
      <p className="font-semibold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureItem;
