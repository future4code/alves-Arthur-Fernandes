import { BASE_URL } from '../Constants/url'
import { goToFeed, goToLoginPage } from '../Routes/coordinator'
import axios from 'axios'



export const Logar = (body, setLoading, setErr, navigate, setLogged) => {

        axios.post(`${BASE_URL}users/login`, body)

          .then((resp) => {
      
            localStorage.setItem('token', resp.data.token);
            setLogged(true);
            goToFeed(navigate);
          setLoading(false)
          })
          .catch((err) => {
          
            setLoading(false)
            setErr(err.response.data)
          })
      }
      export const SignUp = (body, setLoading, setErr, navigate, setOpen) => {

        setLoading(true)
            axios.post(`${BASE_URL}users/signup`, body)
    
              .then((resp) => {
              
                goToLoginPage(navigate);
                setOpen(true);
              setLoading(false)
              })
              .catch((err) => {
               
                setLoading(false)
                setErr(err.response.data)
              })
          }