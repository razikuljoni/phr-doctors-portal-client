import React from "react";
import Footer from "../../assets/components/Footer/Footer";

const AboutPage = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-3xl text-primary text-center">
                        This is a dentist website
                    </h1>
                    <p>Where you can do different things like as</p>
                    <ul style={{ listStyleType: "circle" }}>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Take an appointment</li>
                        <li>See your all appointments</li>
                    </ul>
                    <p>Admin Can do lot more things like</p>
                    <ul style={{ listStyleType: "circle" }}>
                        <li>See all ysers</li>
                        <li>Make Someone admin</li>
                        <li>Remove from admin list</li>
                        <li>Add Doctor</li>
                        <li>Remove Doctor</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
