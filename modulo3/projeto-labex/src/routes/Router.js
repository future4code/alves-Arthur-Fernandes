import  Login  from "../pages/LoginPage";
import  HomePage  from "../pages/HomePage"
import  ErrorPage  from "../pages/ErrorPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage";
import CreateTripPage from "../pages/CreateTripPage";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/listTrips" element={<ListTripsPage />} />
          <Route path="/application/:id" element={<ApplicationFormPage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/details/:id" element={<TripDetailsPage />} />
          <Route path="/createTrip" element={<CreateTripPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    )


}