import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/appointment" element={<Appointment />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
