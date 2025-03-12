import React from "react";

const SubscribeForm = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div className="text-center">
            <div className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</div>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint suscipit cum quia deleniti est.
            </p>
            <form
                onSubmit={onSubmitHandler}
                className="w-full sm:w-1/2 flex mx-auto my-6 border border-gray-300 rounded-lg overflow-hidden"
            >
                <input
                    className="w-full px-4 py-3 outline-none text-gray-700 flex-1"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="bg-black text-white text-sm px-6 py-3 w-auto shrink-0">
                    SUBSCRIBE
                </button>
            </form>
        </div>
    );
};

export default SubscribeForm;
