import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
  const [admin,setAdmin] = useState({email : '',password: ''});
  let name,value;
  const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setAdmin({...admin,[name]:value});
  }

  const handleLogin = async (e)=>{
    e.preventDefault();
    const {adminname,adminPassword} = admin;
    console.log(adminname);
    console.log(adminPassword);
    localStorage.setItem('adminname',adminname);
    localStorage.setItem('adminPassword',adminPassword);
    setTimeout(() => {
        localStorage.removeItem('adminname');
        localStorage.removeItem('adminPassword');
    }, (24 * 60 * 60 * 1000));

    if ((localStorage.getItem('adminname') === 'setu8885') && (localStorage.getItem('adminPassword') === '990499')) {
        navigate('/admin');

    }

  }
  return (
    <>
    <div className="container  ">

      <form className="col-md-6 m-auto my-4">
         
         <div className="mb-4">
           <input type="text" className="form-control fs-5 my-5" id="admin" name='adminname'   required onChange={handleInput} />
          
         </div>
         <div className="mb-4">
           <input type="password" className="form-control my-5 fs-5" id="adminPassword" name="adminPassword"  required onChange={handleInput} />
         </div>
        
         <button className="Btn Btn--prim Btn--l u-fs24 u-pl3 u-pr3 u-mb1 u-s-db col-md-3 mt-3"
           data-track-instance="1" onClick={handleLogin}>LOG IN </button>
       </form>
    </div>
    
    </>
  )
}

export default Login
