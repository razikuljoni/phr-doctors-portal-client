import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ selectedDate, treatment, setTreatment }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null);
    };
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-lg text-primary text-center">
                        {treatment.name}
                    </h3>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 justify-items-center gap-y-3"
                    >
                        <input
                            type="text"
                            value={format(selectedDate, "PP")}
                            className="input input-bordered input-primary w-full max-w-xs"
                            disabled
                        />
                        <select name="slot" className="select select-primary w-full max-w-xs">
                            {treatment?.slots?.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Your Phone Number"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-primary w-full max-w-xs"
                        />
                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Confirm
                        </label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
