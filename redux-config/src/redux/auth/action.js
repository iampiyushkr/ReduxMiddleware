import { LOGIN_SUCCESS, lOGIN_FAILURE, lOGIN_REQUEST } from "./actiontype"
import axios from "axios"

const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

const loginfailure = (err) => {
    return {
        type: lOGIN_FAILURE,
        payload: err
    }
}
const loginRequest = () => {
    return {
        type: lOGIN_REQUEST
    }
}


const loginUser = (payload) => (dispatch) => {
    const requestAction = loginRequest();

    dispatch(requestAction)
    const { email, password } = payload;
    axios.post("https://reqres.in/api/login", {
        email, password
    })
        .then((res) => {
            const successAction = loginSuccess(res.data.token)
            dispatch(successAction);
        })
        .catch((err) => {
            const failureAction = loginfailure(err.message)
            dispatch(failureAction)
        })
}

export { loginSuccess, loginfailure, loginRequest, loginUser }