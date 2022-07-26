import React from "react";
import chair from '../../images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="max-w-lg rounded-lg shadow-2xl"
                    alt="chair img"
                />
                <div>
                    <h1 className="text-5xl font-bold">Your next smile starts here!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
