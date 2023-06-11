import React from "react";

const AvailableAppointment = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div className="card-title text-primary text-center">
                    {name}
                </div>
                <div className="text-red-700">
                    {slots.length === 0 ? (
                        "Try on another Date"
                    ) : (
                        <p>{slots[0]}</p>
                    )}
                </div>
                <div>
                    {slots.length} {slots.length > 1 ? "Slots" : "Slot"}{" "}
                    Available
                </div>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="my-modal"
                        className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointment)}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;
