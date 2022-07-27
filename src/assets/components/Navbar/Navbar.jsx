import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [user, setUser] = useState(true);
    const menuItem = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/appointment">Appointments</Link>
            </li>
            <li>
                <Link to="/review">Reviews</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-primary">
                    Doctors Portal
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItem}</ul>
            </div>
            <div className="">
                {user ? (
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex="0">
                            <a>
                                <div class="avatar">
                                    <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <a className="hover:btn-warning">Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                ) : (
                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
