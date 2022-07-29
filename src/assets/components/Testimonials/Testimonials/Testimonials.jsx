import React from "react";
import quote from "../../../icons/quote.svg";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import Testimonial from "../Testimonial/Testimonial";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((review) => (
                    <Testimonial key={review._id} review={review}></Testimonial>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
