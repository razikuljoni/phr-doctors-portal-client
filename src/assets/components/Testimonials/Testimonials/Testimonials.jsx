import React from "react";
import Rating from "react-rating";
import quote from "../../../icons/quote.svg";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";

import { format } from "date-fns";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "John Doe",
            location: "California",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at laudantium quod est. Neque minus aspernatur quia quos aperiam, fugit fugiat, similique dolorum animi possimus nam, voluptate fuga dolor eligendi? Quam voluptatibus obcaecati aut quasi suscipit molestias laudantium, distinctio porro.",
            img: people1,
        },
        {
            _id: 2,
            name: "Razikul Islam",
            location: "Dhaka",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at laudantium quod est. Neque minus aspernatur quia quos aperiam, fugit fugiat, similique dolorum animi possimus nam, voluptate fuga dolor eligendi? Quam voluptatibus obcaecati aut quasi suscipit molestias laudantium, distinctio porro.",
            img: people2,
        },
        {
            _id: 3,
            name: "Maruf Shahid",
            location: "Rangpur",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at laudantium quod est. Neque minus aspernatur quia quos aperiam, fugit fugiat, similique dolorum animi possimus nam, voluptate fuga dolor eligendi? Quam voluptatibus obcaecati aut quasi suscipit molestias laudantium, distinctio porro.",
            img: people3,
        },
        {
            _id: 4,
            name: "Rajakar Prince",
            location: "Uttara Dhaka",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at laudantium quod est. Neque minus aspernatur quia quos aperiam, fugit fugiat, similique dolorum animi possimus nam, voluptate fuga dolor eligendi? Quam voluptatibus obcaecati aut quasi suscipit molestias laudantium, distinctio porro.",
            img: people3,
        },
        {
            _id: 5,
            name: "Shohanur Rahman",
            location: "Domar, Nilphamari",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at laudantium quod est. Neque minus aspernatur quia quos aperiam, fugit fugiat, similique dolorum animi possimus nam, voluptate fuga dolor eligendi? Quam voluptatibus obcaecati aut quasi suscipit molestias laudantium, distinctio porro.",
            img: people3,
        },
        {
            _id: 6,
            name: "Razikul Islam",
            location: "Mirpur, Dhaka",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at laudantium quod est. Neque minus aspernatur quia quos aperiam, fugit fugiat, similique dolorum animi possimus nam, voluptate fuga dolor eligendi? Quam voluptatibus obcaecati aut quasi suscipit molestias laudantium, distinctio porro.",
            img: people3,
        },
    ];
    return (
        <section className="my-48 mx-12">
            <div className="flex justify-between">
                <div className="mb-14">
                    <h3 className="text-primary font-bold">Testimonial</h3>
                    <h1 className="text-3xl">What Our Patients Say!</h1>
                </div>
                <div>
                    <img className="w-24 sm:w-48" src={quote} alt="quote" />
                </div>
            </div>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        loop: true,
                    }}
                    autoplay={true}
                    loop={true}
                    pagination={{
                        delay: 4000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {reviews.map((review) => (
                            <SwiperSlide key={review._id}>
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
                                            <div
                                                style={{ width: "100%" }}
                                                className="flex justify-between"
                                            >
                                                <div className="">
                                                    <h4 className="font-bold">
                                                        {review.name}
                                                    </h4>
                                                    <p>{review.location}</p>
                                                </div>
                                                <div>
                                                    <div className="rating">
                                                        {/* <input
                                                            type="radio"
                                                            name="rating-4"
                                                            className="mask mask-star-2 bg-green-500"
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-4"
                                                            className="mask mask-star-2 bg-green-500"
                                                            checked
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-4"
                                                            className="mask mask-star-2 bg-green-500"
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-4"
                                                            className="mask mask-star-2 bg-green-500"
                                                        />
                                                        <input
                                                            type="radio"
                                                            name="rating-4"
                                                            className="mask mask-star-2 bg-green-500"
                                                        /> */}
                                                        <Rating
                                                            initialRating={Math.ceil(
                                                                Math.random() *
                                                                    3 +
                                                                    2
                                                            )}
                                                            emptySymbol={
                                                                <input
                                                                    type="radio"
                                                                    name="rating-7"
                                                                    className="mask mask-star-2 bg-orange-200"
                                                                />
                                                            }
                                                            fullSymbol={
                                                                <input
                                                                    type="radio"
                                                                    name="rating-7"
                                                                    className="mask mask-star-2 bg-orange-500"
                                                                />
                                                            }
                                                            fractions={2}
                                                            readonly
                                                        />
                                                    </div>
                                                    <br />
                                                    <p>
                                                        {format(
                                                            Date.now(),
                                                            "PP"
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </>
        </section>
    );
};

export default Testimonials;
