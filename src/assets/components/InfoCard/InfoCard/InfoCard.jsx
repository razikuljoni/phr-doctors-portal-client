import React from "react";

const InfoCard = ({ img, cardTitle, cardColor }) => {
    return (
        <div
            className={`card lg:card-side shadow-xl bg-accent px-6 ${cardColor}`}
        >
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
