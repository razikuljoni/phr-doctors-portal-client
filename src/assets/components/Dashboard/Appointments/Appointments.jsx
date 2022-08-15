import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(
                `https://phr-doctors-portal.herokuapp.com/booking?patientEmail=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    if (res.status === 401) {
                        toast.error("UnAuthorized Access!");
                        signOut(auth);
                        navigate("/");
                    } else if (res.status === 403) {
                        toast.error("Forbidden Access!");
                        signOut(auth);
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => setAppointments(data));
        }
    }, [user, navigate]);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="overflow-x-auto">
            <h1 className="text-2xl text-primary text-center my-5">
                Your All Appointments
            </h1>
            <table className="table w-full">
                {error}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Patient Name</th>
                        <th>Treatment Name</th>
                        <th>Appointment Date</th>
                        <th>Time Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments?.map((appointment, index) => {
                        return (
                            <tr
                                key={index}
                                className={`${index % 2 !== 0 ? "active" : ""}`}
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
