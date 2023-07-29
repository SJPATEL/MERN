import React, { useState } from 'react'
import logo from '../images/Home.png'
import { Link } from 'react-router-dom'
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // convert to string form json data 
      body: JSON.stringify({ email,password})
    });
    const json = await res.json();
    if(json.success){
      window.alert("Login sucessfully");
      localStorage.setItem('jwtoken',json.token);
          
      window.location.href = '/';
    }else{
      window.alert("Invalid Credentials");
          
      window.location.href = '/login';
    }

  }
  return (
    <>
      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-5 m-auto div2Home text-center'>
          <h1 className='text-center mb-5 '><span className='text-light mx-3'>Sign In O</span>n  This Site</h1>
          <form method='post'>

            <div className="mb-5">

              <input type="email" className="form-control" id="emailL" name='emailL' aria-describedby="emailHelp" placeholder='User Email' required value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>

            <div className="mb-5">

              <input type="password" className="form-control" id="passwordL" name='passwordL' placeholder='User Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary col-md-3 fw-bold fs-5 mb-4" onClick={handleLogin}>SIGN UP</button>
          </form>
          <div className="mb-4 ">
            <Link to="/signup" className='fw-bold  text-danger' > Have`t Account</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
