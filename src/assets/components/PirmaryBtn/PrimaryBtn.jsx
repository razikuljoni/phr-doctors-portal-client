import React from "react";
import { useNavigate } from "react-router-dom";

const PrimaryBtn = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/appointment");
    }
    return (
        <button
            onClick={handleClick}
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
        >
            Get Started
        </button>
    );
};

export default PrimaryBtn;
