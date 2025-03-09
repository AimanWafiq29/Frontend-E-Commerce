import React from "react";
import Logo from "../atoms/Logo";

const Footer = () => {
    return (
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <Logo className="mb-5 w-32"/>
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, tempore quisquam.
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-212-456-7890</li>
                    <li>Contact@foreveryou.com</li>
                </ul>
            </div>
            <div className="col-span-3">
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2024@ Forever.com All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
