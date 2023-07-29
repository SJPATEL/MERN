import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
const ForgetPass = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({email : '',password: ''});
  let name,value;
  const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  const handleForgetPass = async (e)=>{
    e.preventDefault();
    const {email,password} = user;
    
    const responsLogin = await fetch('http://localhost:5000/forgetpass',{
      method : 'POST',
      headers :{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({email,password})
    })

    const response = await responsLogin.json();

    if(response.success){
      alert(response.error);
      navigate('/Authentication?Login')
    }else{
      alert(response.error); 
    }   
  }
  return (
    <>
      <form className="col-md-12 my-4">
         
         <div className="mb-4">
           <input type="email" className="form-control fs-5 my-5" id="Email" name='email' aria-describedby="emailHelp" placeholder='Enter your login email' required onChange={handleInput} />
          
         </div>
         <div className="mb-4">
           <input type="password" className="form-control my-5 fs-5" id="password" name="password" placeholder='Enter new Password' required onChange={handleInput} />
         </div>
        
         <button className="Btn Btn--prim Btn--l u-fs24 u-pl3 u-pr3 u-mb1 u-s-db col-md-3 mt-3"
           data-track-instance="1" onClick={handleForgetPass}>Forget </button>
       </form>
    </>
  )
}

export default ForgetPass
