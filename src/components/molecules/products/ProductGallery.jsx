import React, { useState } from "react";
import ProductImage from "../../atoms/products/ProductImage";

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll w-[18.7%]">
                {images.map((image, index) => (
                    <ProductImage key={index} src={image} onClick={() => setSelectedImage(image)} className="w-24 sm:w-full" />
                ))}
            </div>
            <div className="w-full sm:w-[80%]">
                <img src={selectedImage} className="w-full" alt="Selected Product" />
            </div>
        </div>
    );
};

export default ProductGallery;
