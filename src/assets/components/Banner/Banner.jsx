import React from "react";
import chair from "../../images/chair.png";
import PrimaryBtn from "../PirmaryBtn/PrimaryBtn";

const Banner = () => {
    return (
        <div className="hero min-h-screen sm:px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="max-w-lg rounded-lg shadow-2xl w-full px-0"
                    alt="chair img"
                />
                <div className="mt-10 w-full">
                    <h1 className="text-5xl font-bold">
                        Your next smile starts here!
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <PrimaryBtn />
                </div>
            </div>
        </div>
    );
};

export default Banner;
