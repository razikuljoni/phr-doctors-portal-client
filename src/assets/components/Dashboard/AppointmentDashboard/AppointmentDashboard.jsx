import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const AppointmentDashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">Review</Link>
                    </li>
                    {admin && (
                        <li>
                            <Link to="/dashboard/users">All Users</Link>
                            <Link to="/dashboard/addDoctor">Add Doctor</Link>
                            <Link to="/dashboard/manageDoctor">
                                Manage Doctors
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AppointmentDashboard;
