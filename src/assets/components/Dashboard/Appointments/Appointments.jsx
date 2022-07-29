import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:8000/booking?patientEmail=${user.email}`)
                .then((res) => res.json())
                .then((data) => setAppointments(data));
        }
    }, [user]);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Patient Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => {
                        return (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "active" : ""}`}
                            >
                                <th>{index + 1}</th>
                                <td>{appointment?.patientName}</td>
                                <td>{appointment?.treatmentName}</td>
                                <td>{appointment?.date}</td>
                                <td>{appointment?.slot}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;
