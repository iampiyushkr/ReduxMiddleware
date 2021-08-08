import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Login from '../Components/Login'
import { loginUser } from '../redux/auth/action'
import { Redirect } from 'react-router'
import axios from "axios"
const LoginPage = () => {
    const dispatch = useDispatch()
    const { isAuth, isLoding, isError, token } = useSelector((state) => state.auth, shallowEqual)

    const handleLogin = ({ email, password }) => {
        dispatch(loginUser({ email, password }))
    }

    if (isAuth) {
        return <Redirect to="/" />
    }
    if (isLoding) {
        return <div>....Loading</div>
    }
    return (
        <div>
            <h1>login page</h1>
            <Login handleLogin={handleLogin} />
            {isError && <div>Wrong Credentials</div>}
        </div>
    )
}

export default LoginPage
