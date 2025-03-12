import React from "react";

const Image = ({ src, className = "", alt = "image", onClick }) => {
    return <img src={src} className={className} alt={alt} onClick={onClick} loading="lazy" />;
};

export default Image;
