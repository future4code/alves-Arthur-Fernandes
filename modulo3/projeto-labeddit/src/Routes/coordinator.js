
export const goBack = (navigate) => {
    navigate(-1)
}


export const goToSignUp = (navigate) => {
    navigate(`/signup`)
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goToFeed = (navigate) => {
    navigate("/")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}