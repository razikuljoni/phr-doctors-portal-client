import React from "react";
import { SwiperSlide } from "swiper/react";
import "../Testimonials/Testimonials.css";
const Testimonial = ({ review }) => {
    return (
        <SwiperSlide>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review.description}</p>
                    <div className="flex items-center mt-3">
                        <div className="avatar pr-5">
                            <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src="https://placeimg.com/192/192/people"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default Testimonial;
