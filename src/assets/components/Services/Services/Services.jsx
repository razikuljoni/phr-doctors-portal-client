import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import treatment from "../../../images/treatment.png";
import whitening from "../../../images/whitening.png";
import PrimaryBtn from "../../PirmaryBtn/PrimaryBtn";
import Service from "../Service/Service";
import Slider from "react-slick";

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
        {
            _id: 4,
            name: "Cavity Protection",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae consequatur sint eligendi! Nesciunt tenetur fuga omnis incidunt maxime in tempore accusamus magni, suscipit animi error et itaque perferendis veniam.",
            img: whitening,
        },
        {
            _id: 5,
            name: "Pediatric Dental",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae consequatur sint eligendi! Nesciunt tenetur fuga omnis incidunt maxime in tempore accusamus magni, suscipit animi error et itaque perferendis veniam.",
            img: whitening,
        },
        {
            _id: 6,
            name: "Oral Surgery",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae consequatur sint eligendi! Nesciunt tenetur fuga omnis incidunt maxime in tempore accusamus magni, suscipit animi error et itaque perferendis veniam.",
            img: whitening,
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className="my-20 mx-12">
            <div className="text-center pb-14">
                <h1 className="text-primary uppercase font-bold">
                    Our Services
                </h1>
                <h2 className="text-4xl font-bold">Service We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </div>
            <div className="hero min-h-screen px-0 sm:px-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={treatment}
                        className="w-full max-w-md rounded-lg shadow-2xl"
                        alt="service img"
                    />
                    <div className="ml-10 pt-10 w-full">
                        <h1 className="text-5xl font-bold">
                            Exceptional Dental Care, on Your Terms
                        </h1>
                        <p className="py-6 ">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <PrimaryBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
