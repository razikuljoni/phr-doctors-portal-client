import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";
import treatment from "../../../images/treatment.png";
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae consequatur sint eligendi! Nesciunt tenetur fuga omnis incidunt maxime in tempore accusamus magni, suscipit animi error et itaque perferendis veniam.",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae consequatur sint eligendi! Nesciunt tenetur fuga omnis incidunt maxime in tempore accusamus magni, suscipit animi error et itaque perferendis veniam.",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae consequatur sint eligendi! Nesciunt tenetur fuga omnis incidunt maxime in tempore accusamus magni, suscipit animi error et itaque perferendis veniam.",
            img: whitening,
        },
    ];
    return (
        <div className="my-20 mx-12">
            <div className="text-center">
                <h1 className="text-primary uppercase font-bold">
                    Our Services
                </h1>
                <h2 className="text-4xl font-bold">Service We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
                {services.map((service) => (
                    <Service service={service} />
                ))}
            </div>
            <div className="hero min-h-screen px-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={treatment}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="service img"
                    />
                    <div className="ml-10">
                        <h1 className="text-5xl font-bold">
                            Exceptional Dental Care, on Your Terms
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
