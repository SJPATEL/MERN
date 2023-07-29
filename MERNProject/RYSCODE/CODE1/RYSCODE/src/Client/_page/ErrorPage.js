import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const ErrorPage = () => {
    let Location = useLocation();
    let style = {}
    if(  (Location.pathname === "/") || (Location.pathname === '/content') || (Location.pathname === "/about") || (Location.pathname === "/Authentication") || (Location.pathname === "/admin") ||  (Location.pathname === "/adminlogin")){
         style = {
            display : 'none'
        }

    }else{
        style = { }

    }

    return (
        <>

         
            <div className="container container2 ErrorPage" style={style}>
                <div className='divError col-md-6 m-auto text-center '>

                    <h1 >404</h1>
                    <div className='div2Error'>
                        <h3>We ARE SORRY , This Page Not Found !</h3>
                        <Link to="/" className='btn btn-primary fs-5 fw-bold'> Go Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
