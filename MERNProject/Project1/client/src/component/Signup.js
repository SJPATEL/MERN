import React, { useState } from 'react'
import logo from '../images/Home.png'
import '../App.css';
import { Link } from 'react-router-dom'

const Signup = () => {

  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cPassword: ''
  })
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const {name,email,phone,work,password,cPassword} = user;
    const response = await fetch(`http://localhost:5000/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // convert to string form json data 
      body: JSON.stringify({name,email,phone,work,password,cPassword})
    });
    const json = await response.json();

    // if(data.status === 422 || !data)
    if(json.success){
      // save the auttoken and rediract 
      alert("Rgistration is usccessfully complet");
    
      window.location.href = '/login';
      
    }else{
      alert("Rgistration is not complet");
    }

  }

  return (
    <>
      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-5 m-auto div2Home text-center'>
          <h1 className='text-center mb-4 '><span className='text-light  '>Sign Up O</span>n This Site</h1>
          <form method='post'>
            <div className="mb-4">

              <input type="text" className="form-control" id="name" name='name' placeholder='User Name' required value={user.name} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='User Email' required value={user.email} onChange={handleInputs} />

            </div>
            <div className="mb-4">

              <input type="number" className="form-control" id="contact" name='phone' placeholder='User Contact Number' required value={user.phone} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="text" className="form-control" id="work" name='work' placeholder='User Work' required value={user.work} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="password" className="form-control" id="password" name='password' placeholder='User Password' required value={user.password} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="password" className="form-control" id="cPassword" name='cPassword' placeholder='User Confirm Password' required value={user.cPassword} onChange={handleInputs} />
            </div>


            <button type="submit" className="btn btn-primary col-md-3 fw-bold fs-5 mb-4" onClick={handleSignup} >SIGN UP</button>
          </form>
          <div className="mb-4 ">
            <Link to="/login" className='fw-bold  text-danger'> Already have Loign</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup
