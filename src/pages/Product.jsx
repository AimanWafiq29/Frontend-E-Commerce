import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import StarIcon from "../assets/star_icon.png";
import StarDullIcon from "../assets/star_dull_icon.png";

const Product = () => {

    const { productId } = useParams(); // Ambil ID dari URL
    const { products, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState(null);

    const fetchProductData = () => {
        const product = products.find((item) => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    };


    useEffect(() => {
        const product = products.find((item) => item._id === productId);
        if (product) {
            setProductData(product);
            setImage(product.image[0]);
        }
    }, [productId, products]);


    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* Product Data */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product Image */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData?.image?.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
                            ))
                        }
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img src={image} className="w-full" alt="" />
                    </div>
                </div>
                {/* Product Description */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2 ">
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={StarIcon} className="w-3 5" />
                        <img src={StarIcon} className="w-3 5" />
                        <img src={StarIcon} className="w-3 5" />
                        <img src={StarIcon} className="w-3 5" />
                        <img src={StarDullIcon} className="w-3 5" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className={'flex gap-2'}>
                            {
                                productData?.sizes?.map((item, index) => (
                                    <button
                                        onClick={() => setSize(item)}
                                        className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                        ADD TO CART
                    </button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% original product</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exhchange policy within 7 days</p>
                    </div>
                </div>
            </div>

            {/* Desciption & Review Section */}
            <div className="mt-20">
                <div className="flex">
                    <p className="border px-5 py-3 text-sm">
                        Desciption
                    </p>
                    <p className="border px-5 py-3 text-sm">
                        Review (122)
                    </p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
                    </p>
                </div>
            </div>

        </div>
    ) : <div className="opacity-0" ></div>
};

export default Product;
