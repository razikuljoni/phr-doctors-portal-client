import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const AppointmentDashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className="text-2xl text-primary text-center">Dashboard</h1>
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
                    { admin && <li>
                        <Link to="/dashboard/users">All Users</Link>
                    </li>}
                </ul>
            </div>
        </div>
    );
};

export default AppointmentDashboard;
