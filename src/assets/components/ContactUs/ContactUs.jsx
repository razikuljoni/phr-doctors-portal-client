import emailjs from "@emailjs/browser";
import React from "react";
import { toast } from "react-toastify";
import appointment from "../../images/appointment.png";

const ContactUs = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ggrfced",
                "template_s37214f",
                e.target,
                "user_T3Rej0OAIHjQAPNwyzQbs"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    if(result.text === "OK") {
                        e.target.reset();
                        toast.success("Email sent successfully!")
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
      
    }
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex items-center justify-center p-20"
        >
            <div>
                <h3 className="text-primary font-bold text-center">
                    Contact Us
                </h3>
                <h1 className="text-3xl text-center text-white">
                    Stay Connected Us
                </h1>
                <form onSubmit={sendEmail} className="w-96 mt-5">
                    <input
                        name="from_name"
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered input-success w-full max-w-md"
                        required
                    />
                    <input
                        name="from_number"
                        type="number"
                        placeholder="Your Contact Number"
                        className="input input-bordered input-success w-full max-w-md mt-3"
                    />
                    <input
                        name="from_email"
                        type="email"
                        placeholder="Your Email Address"
                        className="input input-bordered input-success w-full max-w-md mt-3"
                        required
                    />

                    <input
                        name="from_subject"
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered input-success w-full max-w-md mt-3"
                        required
                    />
                    <textarea
                        name="message"
                        className="textarea textarea-success w-full max-w-md mt-3"
                        placeholder="Message"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn btn-primary uppercase mt-4 block mx-auto text-white font-bold bg-gradient-to-r from-secondary to-primary"
                    >
                        Sent Email
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
