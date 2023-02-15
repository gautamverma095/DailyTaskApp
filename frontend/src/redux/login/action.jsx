import axios from "axios"
import { setCookie, hasCookie } from 'cookies-next';

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const USER_ERROR = "USER_ERROR"
export const LOGOUT = "LOGOUT"



export const userSignup = (payload) => {
    return {
        type: SIGNUP_SUCCESS,
        payload
    }
    
}



export const userLogin = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
    
}
export const userError = (payload) => {
    return {
        type: USER_ERROR,
        payload
    }
    
}



export const logout = () => {
    return {
        type: LOGOUT,
    }
    
}

// middleware

export const userSignUpThunk = (user) => (dispatch) => {
    axios.post("http://localhost:3001/user/signup", user).then((res) => {
        // console.log(res.data);
        setCookie('token', res.data.token);
        alert("signup successfull")
        dispatch(userSignup(res.data))
        
    }).catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message)
        dispatch(userError(err.response.data.message))
    })
}

export const userLoginThunk = (user) => (dispatch) => {
    axios.post("http://localhost:3001/user/login", user).then((res) => {
        console.log(res);
        setCookie('token', res.data.token);
        alert("login successfull")
        dispatch(userLogin(res.data))
        
    }).catch((err) => {
        console.log(err);
        alert(err.response.data.message)
        dispatch(userError(err.response.data.message))
    })
}


