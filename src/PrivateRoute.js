import React from "react";
import {Redirect, Route} from 'react-router';
import { useReadLocalStorage } from 'usehooks-ts'

const PrivateRoute = props => {
    const token = useReadLocalStorage('token')
    const isLogged = !!token
    return isLogged ? <Route {... props}/> : <Redirect to="/login"/>
}

export default PrivateRoute