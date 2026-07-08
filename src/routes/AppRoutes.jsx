import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Favorites from "../pages/Favorites/Favorites";
import Forecast from "../pages/Forecast/Forecast";

function AppRoutes() {
    return (

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/forecast" element={<Forecast />} />

        </Routes>
    );

}

export default AppRoutes;
