import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Loading/Loading";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(selectedDate, "PP");
    // useEffect(() => {
    //     // fetch("https://doctors-portal-server-one-lilac.vercel.app/service")
    // fetch(`https://doctors-portal-server-one-lilac.vercel.app/available?date=${formatedDate}`)
    //     .then((res) => res.json())
    //         .then((data) => setAppointments(data));
    // }, [formatedDate]);

    // Queries
    const {
        isLoading,
        isError,
        data: appointments,
        error,
        refetch,
    } = useQuery(["available", formatedDate], () =>
        fetch(
            `https://doctors-portal-server-one-lilac.vercel.app/available?date=${formatedDate}`
        )
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="px-12 mb-24">
            <h4 className="text-xl text-center text-secondary mb-20">
                Available Appointments on {format(selectedDate, "PP")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {appointments?.map((appointment) => (
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
                    refetch={refetch}
                />
            )}
        </div>
    );
};

export default AvailableAppointments;
