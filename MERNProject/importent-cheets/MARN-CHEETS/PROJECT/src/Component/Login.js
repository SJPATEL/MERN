import React, { useContext, useState } from 'react'
import noteContecxt from '../Context/notes/noteCotext';


const Login = () => {

  const context = useContext(noteContecxt);
  const { showAlert } = context;

  const [credentials, Setcredentials] = useState({ emaiLogin: '', passwordLogin: '' });

  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.emaiLogin, password: credentials.passwordLogin })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // console.log('valid');
      // save the auttoken and rediract 
      localStorage.setItem('token', json.authToken)
      showAlert('success', 'Your accout is successfully created');
      window.location.href = '/';

    } else {
      showAlert('danger', 'Invalid crendetials');
    }

  }

  const onChang = (e) => {

    Setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='col-md-6 m-auto'>
      <h2 className='my-2'>Login on iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emaiLogin" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emaiLogin" name='emaiLogin' aria-describedby="emailHelp" value={credentials.emaiLogin} onChange={onChang} minLength={5} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordLogin" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordLogin" name="passwordLogin" onChange={onChang} value={credentials.passwordLogin} minLength={5} required autoComplete='off' />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Login
