
export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin")
}

export const goToApplicationFormPage = (navigate, idTrip) => {
    navigate(`/application/${idTrip}`)
}

export const goToCreateTripFormPage = (navigate) => {
    navigate("/createTrip")
}

export const goToListTripsPage = (navigate) => {
    navigate("/listTrips")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/details/${id}`)
}