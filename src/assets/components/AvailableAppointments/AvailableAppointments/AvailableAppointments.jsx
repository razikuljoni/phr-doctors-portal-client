import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const AvailableAppointments = ({ selectedDate }) => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/service")
            .then((res) => res.json())
            .then((data) => setAppointments(data));
    }, []);

    return (
        <div className="px-12">
            <h4 className="text-xl text-center text-secondary">
                Available Appointments on {format(selectedDate, "PP")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {appointments.map((appointment) => (
                    <AvailableAppointment
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AvailableAppointment>
                ))}
            </div>
            {treatment && (
                <AppointmentModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                />
            )}
        </div>
    );
};

export default AvailableAppointments;
