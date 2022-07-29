import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../images/chair.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="w-full max-w-md rounded-lg shadow-2xl"
                    alt="dentist chair"
                />
                <div className="">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
