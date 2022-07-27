import React from "react";
import doctor from "../../images/doctor.png";
import appointment from "../../images/appointment.png";
const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="flex items-center justify-center my-40"
        >
            <div className="flex-1">
                <img className="-mt-40" src={doctor} alt="" />
            </div>
            <div className="flex-1">
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
                <button className="my-5 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default MakeAppointment;