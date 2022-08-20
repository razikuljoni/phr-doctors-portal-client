import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../Loading/Loading";

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (error) {
        toast.error("Error occured!");
    }
    if (loading || adminLoading) {
        return (
            <div className="mt-52">
                <Loading />
            </div>
        );
    }
    if (!user || !admin) {
        signOut(auth);
        toast.error("You don't have Access");
        toast.success("Sign out Successfully");
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default RequireAdmin;
