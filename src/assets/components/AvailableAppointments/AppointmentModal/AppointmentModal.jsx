import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "../../../../firebase.init";

const AppointmentModal = ({ selectedDate, treatment, setTreatment, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name } = treatment;
    const formatedDate = format(selectedDate, "PP");
    const handleSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            slot,
            date: formatedDate,
            patientName: user.displayName,
            patientEmail: user.email,
            patientPhone: e.target.phone.value,
        };
        fetch("https://phr-doctors-portal.herokuapp.com/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.success){
                    toast.success(`Booked Appointment on ${formatedDate} at ${slot}`);
                } else{
                    toast.error(`Already have an appointment on ${data?.booking?.date} at ${data.booking?.slot}`)
                };
                refetch();
                setTreatment(null);
            });
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
                        <select
                            name="slot"
                            className="select select-primary w-full max-w-xs"
                        >
                            {treatment?.slots?.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name="name"
                            type="text"
                            value={user?.displayName}
                            className="input input-bordered input-primary w-full max-w-xs"
                            disabled
                        />
                        <input
                            name="email"
                            type="email"
                            value={user?.email}
                            className="input input-bordered input-primary w-full max-w-xs"
                            disabled
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Your Phone Number"
                            className="input input-bordered input-primary w-full max-w-xs"
                            required
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
