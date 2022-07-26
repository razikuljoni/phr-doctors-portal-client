import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../icons/clock.svg";
import marker from "../../../icons/marker.svg";
import phone from "../../../icons/phone.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <InfoCard
                cardColor="bg-gradient-to-r from-secondary to-primary"
                cardTitle="Opening Hours"
                img={clock}
            ></InfoCard>
            <InfoCard
                cardColor="bg-accent"
                cardTitle="Visit Our Location"
                img={marker}
            ></InfoCard>
            <InfoCard
                cardColor="bg-gradient-to-r from-secondary to-primary"
                cardTitle="Contact Us Now"
                img={phone}
            ></InfoCard>
        </div>
    );
};

export default Info;
