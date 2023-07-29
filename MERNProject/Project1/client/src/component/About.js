import React, { useEffect, useState } from 'react'
import logo from '../images/Home.png'
import setu from '../images/User.jpg'
import Bhole from '../images/Bhole.jpg'
import '../App.css';

const About = () => {

  const [userData,setUserData] = useState({});
  const callAboutPage = async () => {

    try {
      // const respons = await fetch('http://localhost:5000/About' ,{
      //   method : "GET",
      //   headers : {
      //     Accept: "appllication/json",
      //     "Content-Type": "application/json"
      //   },
      //   credentials : "include"  
      // } );
      const response = await fetch(`http://localhost:5000/About`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('jwtoken')
        }
      });

      const data = await response.json();
      console.log(data);
      setUserData(data)

      if (!response.status === 200) {

        const error = new Error(response.error);
        throw error;
      }

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    // 1] it is call automatically after relode page only one time run 

    if (localStorage.getItem('jwtoken')) {

      // Aa function only run karu se teno kai bijo use nathi 
      callAboutPage();
    } else {
      window.location.href = '/login';
    }

  }, []);
  return (
    <>
      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-12 m-auto div2Home '>

          <div className='d-flex justify-content-between'>
            <div className="col-md-6 row">
              <div className="col-md-6 m-auto text-center">
                <img src={userData.name === 'setu'? setu : Bhole} className='imgAbout my-2' alt="setu" /> <br />
                <button type="submit" className="btn btn-secondary fw-bold col-md-5  mb-4">Edit Proile</button>
              </div>
              <div className="col-md-6">
                <h4 className='fw-bold text-light'>{userData.name}</h4>
                <h6 className='text-light'>{userData.work}</h6>
                <hr className='text-light' />
                <h6 className='text-light fw-bold'>Work Like</h6>
                <p className='my-0'><a href="youtube" className='text-decoration-none text-light'>You tube</a></p>
                <p className='my-0'><a href="youtube" className='text-decoration-none text-light'>instagram</a></p>
                <p className='my-0'><a href="youtube" className='text-decoration-none text-light'>fach book</a></p>
                <p className='my-0'><a href="youtube" className='text-decoration-none text-light'>web Developer</a></p>
                <p className='my-0'><a href="youtube" className='text-decoration-none text-light'>Coder</a></p>
              </div>
            </div>
            <div className="col-md-6">
              <div>

                <h3 className='mx-2'>About</h3>

                <hr className='text-dark' />
              </div>
              <div id='profile' className='container '>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>User Id </p>
                  <p className='mx-4 text-primary'>{userData._id}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Name </p>
                  <p className='mx-4 text-primary'>{userData.name}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Email </p>
                  <p className='mx-4 text-primary '>{userData.email}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Phone </p>
                  <p className='mx-4 text-primary '>{userData.phone}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Profession </p>
                  <p className='mx-4 text-primary '>{userData.work}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default About
