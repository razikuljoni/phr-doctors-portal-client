import React, { useState } from "react";
import chair from "../../images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    class="max-w-md rounded-lg shadow-2xl"
                    alt="dentist chair"
                />
                <div>
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
