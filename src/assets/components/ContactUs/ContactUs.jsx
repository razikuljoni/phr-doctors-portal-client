import React from "react";
import appointment from "../../images/appointment.png";
const ContactUs = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex items-center justify-center p-20"
        >
            <div>
                <h3 className="text-primary font-bold text-center">
                    Contact Us
                </h3>
                <h1 className="text-3xl text-center">Stay Connected Us</h1>
                <div className="w-96 mt-5">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered input-success w-full max-w-md"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered input-success w-full max-w-md mt-5"
                    />
                    <textarea
                        className="textarea textarea-success w-full max-w-md mt-5"
                        placeholder="Message"
                    ></textarea>
                    <button className="btn btn-primary uppercase mt-4 block mx-auto text-white font-bold bg-gradient-to-r from-secondary to-primary">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
