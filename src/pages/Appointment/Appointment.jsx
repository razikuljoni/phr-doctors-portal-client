import React, { useState } from "react";
import AppointmentBanner from "../../assets/components/AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../../assets/components/AvailableAppointments/AvailableAppointments";
import Footer from "../../assets/components/Footer/Footer";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointments selectedDate={selectedDate} />
            <Footer />
        </>
    );
};

export default Appointment;
