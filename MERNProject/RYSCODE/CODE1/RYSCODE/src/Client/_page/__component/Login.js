import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({email : '',password: ''});
  let name,value;
  const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  const handleLogin = async (e)=>{
    e.preventDefault();
    const {email,password} = user;
    
    const responsLogin = await fetch('http://localhost:5000/login',{
      method : 'POST',
      headers :{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({email,password})
    })

    const response = await responsLogin.json();

    if(response.success){
      alert(response.error);
      localStorage.setItem('auth-token',response.token)
      navigate('/')
    }else{
      alert(response.error);
    }
  }
  return (
    <>
      <form className="col-md-12 my-4">
         
         <div className="mb-4">
           <input type="email" className="form-control fs-5 my-5" id="Email" name='email' aria-describedby="emailHelp" placeholder='Enter your email' required onChange={handleInput} />
          
         </div>
         <div className="mb-4">
           <input type="password" className="form-control my-5 fs-5" id="password" name="password" placeholder='Enter your Password' required onChange={handleInput} />
         </div>
        
         <button className="Btn Btn--prim Btn--l u-fs24 u-pl3 u-pr3 u-mb1 u-s-db col-md-3 mt-3"
           data-track-instance="1" onClick={handleLogin}>LOG IN </button>
       </form>
       <p className='text-light'>You have't Account<Link to="?registration" className='mx-2 text-danger fw-bold fs-5 text-decoration-none'>'REGISTRATION'</Link>,<Link to="?forgetpassword" className=' text-danger fw-bold fs-5 text-decoration-none mx-2'>'ForgetPassword'</Link></p>
       <p className='text-light'></p>
    </>
  )
}

export default Login
