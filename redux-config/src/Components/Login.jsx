import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = { email, password }
        handleLogin(payload)
    }
    return (
        <div>
            <h3>login form</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={(e => setEmail(e.target.value))} type="text" placeholder="email" />
                <br />
                <input onChange={(e => setPassword(e.target.value))} type="password" placeholder="password" />
                <br />
                <input type="submit" />

            </form>

        </div>
    )
}

export default Login
