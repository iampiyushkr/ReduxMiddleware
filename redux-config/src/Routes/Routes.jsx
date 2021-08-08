import React from 'react'
import Home from './Home'
import LoginPage from './LoginPage.jsx'
import { Link, Route, Switch } from "react-router-dom"

const Routes = () => {
    return (
        <>
            <div>
                <Link to="/" style={{ marginRight: "60px" }}>TASK</Link>
                <Link to="/login" style={{ marginRight: "60px" }}>LOGIN</Link>
                <Link to="/login" style={{ marginRight: "60px" }}>LOGOUT</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route>
                    <h3>404 Page Not Found!!</h3>
                </Route>
            </Switch>
        </>
    )
}

export default Routes
