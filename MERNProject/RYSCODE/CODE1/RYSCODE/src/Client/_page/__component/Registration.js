import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name: '', email: '',  password: '', cPassword: '', contact : ''
  })

  let name,value;
  const handleInput = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }

  const handleSignUp = async (e)=>{
    e.preventDefault();
    const {name,email,password,cPassword,contact} = user;

    const responseStoreuser = await fetch('http://localhost:5000/Registration',{
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email,password,cPassword,contact})
    })

    const response = await responseStoreuser.json();
    if(response.success){
      alert(response.error);
      navigate('?Login')
    }else{
      alert(response.error);
    }
  }
  return (
    <>
       <form className="col-md-12">
                  <div class="mb-4 col-md-12">
                    <input type="text" class="form-control fs-5 col-md-12" id="userName" name="name" placeholder='Enter User Name '  onChange={handleInput}    required/>
                  </div>
                  <div class="mb-4">
                    <input type="email" class="form-control fs-5 " id="Email" name='email' aria-describedby="emailHelp" placeholder='Enter your email'  onChange={handleInput}   required/>
                    <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-4">
                    <input type="password" class="form-control fs-5" id="password" name="password" placeholder='Enter Password'   onChange={handleInput}  required/>
                  </div>
                  <div class="mb-4">
                    <input type="password" class="form-control fs-5" id="cPassword" name="cPassword" placeholder='Enter Repit Password'  onChange={handleInput}  required />
                  </div>
                  <div class="mb-4">
                    <input type="number" class="form-control fs-5" id="contact" name="contact" placeholder='Enter Your Mobile Number'  onChange={handleInput}  required />
                  </div>

                  <button className="Btn Btn--prim Btn--l u-fs24 u-pl3 u-pr3 u-mb1 u-s-db col-md-3 mt-3"
                    data-track-instance="1" onClick={handleSignUp}>SIGN UP </button>
                </form>
                <p className='text-light'>Already have Account<Link to="?Login" className='mx-2 text-danger fw-bold fs-5 text-decoration-none'>'LOGIN'</Link></p>
    </>
  )
}

export default Registration
