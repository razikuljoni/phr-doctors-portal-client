import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
    console.log(selectedDate);
    return (
        <div>
            <h4 className='text-xl text-center text-secondary'>Available Appointments on {format(selectedDate, "PP")}</h4>
        </div>
    );
};

export default AvailableAppointments;