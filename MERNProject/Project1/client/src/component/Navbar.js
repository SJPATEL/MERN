import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../App.css';

const Navbar = () => {
    const handleLogout = ()=>{
        localStorage.removeItem('jwtoken');
        window.location.href = '/login';
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">             
                    <Link className="navbar-brand fw-bold" to="/"> <img src={logo} alt="" className='imgLogo mx-2'/>S E T U</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                            { !localStorage.getItem('jwtoken') ?<ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/signup">Registration</Link>
                            </li> </ul> :
                            <li className="nav-item ">
                                <Link className="nav-link active" type='btn' onClick={handleLogout}>LogOut</Link>
                            </li>}
                        </ul>
                        
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
