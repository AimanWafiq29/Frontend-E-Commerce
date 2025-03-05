import React from "react";
import HeroImage from "../../assets/hero_img.png";

const HeroSection = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-400">

            {/* Bagian Kiri (Text) */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center px-6">

                {/* Best Seller Label & Shop Now - Rata Kiri Kanan */}
                <div className="flex flex-col justify-between items-center w-full">
                    <div className="items-start">
                        {/* Best Seller Label */}
                        <div className="flex items-center gap-2">
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                            <p className="font-medium text-sm md:text-base text-gray-700">OUR BESTSELLERS</p>
                        </div>

                        {/* Heading */}
                        <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl font-bold leading-relaxed text-gray-900 text-center">
                            Latest Arrivals
                        </h1>

                        {/* Shop Now Button */}
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Bagian Kanan (Hero Image) */}
            <img src={HeroImage} alt="Hero Banner" className="w-full sm:w-1/2" />
        </div>
    );
};

export default HeroSection;
