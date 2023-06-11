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
                    if (result.text === "OK") {
                        e.target.reset();
                        toast.success("Email sent successfully!");
                    }
                },
                (error) => {}
            );
    }

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        toast.success(`Mail Sent to the Dental Care Authority Successfuly!`);
        e.target.reset();
    };
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex items-center justify-center "
        >
            <div className="container my-24 mx-auto md:px-6">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex flex-wrap items-center">
                        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                            <div className="h-[500px] w-full">
                                <iframe
                                    title="map"
                                    className="w-full h-[500px]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29202.74340775788!2d90.35409831383363!3d23.806401764746116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6ec1d21bb%3A0xcada2ab0a4063eab!2sMirpur%2010%20Circle!5e0!3m2!1sen!2sbd!4v1686475104231!5m2!1sen!2sbd"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full my-10 lg:my-0 shrink-0 px-10 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                            <form onSubmit={handleContactFormSubmit}>
                                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="toy_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter Your name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="brand"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="sub_catagory"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="brand"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter Your Phone Number"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="toy_description"
                                            rows="8"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Write Your message details here"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="grid justify-items-end">
                                    <button
                                        type="submit"
                                        className="text-white bg-error hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Send Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
