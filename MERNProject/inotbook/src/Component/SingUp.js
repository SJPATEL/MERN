import React, { useContext, useState } from 'react'
import noteContecxt from '../Context/notes/noteCotext';

const SingUp = () => {
  const context = useContext(noteContecxt);
  const { showAlert } = context;
  const [credentials, Setcredentials] = useState({ namesinup: '',emailsinup: '', passwordsinup: '' });
  
  const {namesinup,emailsinup,passwordsinup} = credentials;
  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:namesinup,email: emailsinup, password: passwordsinup })
    });
    const json = await response.json();
    if(json.success){
      // save the auttoken and rediract 
      localStorage.setItem('token',json.authToken);
      showAlert('success', 'Your accout is successfully created');
      window.location.href = '/';
      
    }else{
      showAlert('danger', 'Invalid crendetials');
    }

  }
    
  const onChang = (e) => {

    Setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='col-md-6 m-auto '>
          <h2 className='my-2'>Create an Accoutn on iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="namesinup" className="form-label">Name</label>
          <input type="text" className="form-control" id="namesinup" name='namesinup' required onChange={onChang} minLength={5}/>
        </div>
        <div className="mb-3">
          <label htmlFor="emailsinup" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailsinup" name='emailsinup' aria-describedby="emailHelp" required onChange={onChang} minLength={5}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordsinup" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordsinup" name='passwordsinup'minLength={5} required onChange={onChang} autoComplete='off'/>
        </div>
        <div className="mb-3">
          <label htmlFor="cPasswordsinup" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cPasswordsinup" name='cPasswordsinup' required onChange={onChang} autoComplete='off'/>
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default SingUp
