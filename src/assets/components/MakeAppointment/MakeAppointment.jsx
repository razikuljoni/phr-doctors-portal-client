import React from "react";
import doctor from "../../images/doctor.png";
import appointment from "../../images/appointment.png";
import PrimaryBtn from "../PirmaryBtn/PrimaryBtn";
const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex items-center justify-center my-40"
        >
            <div className="flex-1">
                <img
                    className="lg:-mt-40 lg:w-full hidden md:block"
                    src={doctor}
                    alt=""
                />
            </div>
            <div className=" flex-auto m-5 md:m-0 md:flex-1">
                <h3 className="text-primary font-bold">Appointment</h3>
                <h1 className="text-white text-3xl my-4">
                    Make an appointment today
                </h1>
                <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi eaque perferendis aliquid libero, quos, quibusdam magni
                    voluptates consequuntur perspiciatis voluptatem animi ea
                    neque cum, sequi vero! Nulla nobis, sint dolor fuga
                    consectetur cumque eaque eos a deleniti sunt, incidunt
                    commodi.
                </p>
                <PrimaryBtn/>
            </div>
        </section>
    );
};

export default MakeAppointment;
