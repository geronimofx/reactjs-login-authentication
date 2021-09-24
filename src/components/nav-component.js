import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router';
import { useReadLocalStorage } from 'usehooks-ts'

export default function Nav (){

    const history = useHistory()
    const token = useReadLocalStorage('token')

    function handleLogout() {
        localStorage.removeItem('token')
        history.push('/login')
    }
    
    const isLogged = !!token

    return(
        
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Login</Link>
                        </li>
                        {isLogged && ( 
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleLogout}>Logout</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}