import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import RequireAuth from "./assets/components/Login/RequireAuth/RequireAuth";
import Navbar from "./assets/components/Navbar/Navbar";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./assets/components/Dashboard/Appointments/Appointments";
import Review from "./assets/components/Dashboard/Review/Review";
import AllUsers from "./assets/components/AllUsers/AllUsers/AllUsers";
import RequireAdmin from "./assets/components/Login/RequireAdmin/RequireAdmin";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<Appointments />} />
                    <Route path="review" element={<Review />} />
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <AllUsers />
                            </RequireAdmin>
                        }
                    />
                </Route>
                <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
