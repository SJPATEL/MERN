import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'


const Errorpage = () => {
  return (
    <>
      <div className="container container2">
        <div className='divError col-md-6 m-auto text-center '>

                <h1 >404</h1>
                <div className='div2Error'>
                    <h3>We ARE SORRY , This Page Not Found !</h3>
                    <Link href="/" className='btn btn-primary fs-5 fw-bold'> Go Back</Link>
                </div>
        </div>
      </div>
    </>
  )
}

export default Errorpage
