import React, { useEffect, useState } from 'react'
import logo from '../images/Home.png'
import '../App.css';

const Contact = () => {
  const [userData,setUserData] = useState({name : '', email : '',phone : '' , message : ''});
  const callAboutPage = async () => {

    try {
     
      const response = await fetch(`http://localhost:5000/getuserdata`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('jwtoken')
        }
      });

      const data = await response.json();
      console.log(data);
      setUserData({ ...userData, name: data.name, email : data.email, phone : data.phone})

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
    }
  }, []);

  const heandelOnchage = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]:value});
  }

  // send data to backend 
  const handleContact = async (e) =>{
    e.preventDefault();
    console.log('click');
    
    const {name,email,phone,message} = userData;
    const respons = await fetch('http://localhost:5000/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('jwtoken')
      },
      body: JSON.stringify({name,email,phone,message})
    });

    const data = await respons.json();
    
    if(!data){
      console.log('message not send');
      
    }else{
      alert("message send");
      setUserData({...userData , message:''});
    }


  }
  return (
    <>
    

      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-12 m-auto div2Home '>

          <div className='d-flex justify-content-between'>

            <div className="col-md-5 m-auto">
              <div className="my-5 col-md-6 m-auto">

                <input type="text" className="form-control text-center fw-bold " id="contact" value="+91 760 094 3147" readOnly />
              </div>
              <div className="my-5 col-md-6 m-auto">

                <input type="text" className="form-control text-center fw-bold " id="email" value="sjpatel298@gmail.com" readOnly />
              </div>
              <div className="my-5 col-md-6 m-auto">

                <input type="text" className="form-control text-center fw-bold " id="address" value="Kahipur , Vadangar " readOnly />
              </div>
            </div>
            <div className="col-md-5 m-auto">
              <form method='post'>
                <div className="mb-5">

                  <input type="text" className="form-control" id="nameC" name='name' placeholder='Your Name' value={userData.name === '' ? '':userData.name}  onChange={heandelOnchage} required />
                </div>
                <div className="mb-5">

                  <input type="email" className="form-control" id="emailC" name='email' aria-describedby="emailHelp" placeholder='Your Email' value={userData.email === '' ? '':userData.email} onChange={heandelOnchage}   required />

                </div>

                <div className="mb-5">

                  <input type="number" className="form-control" id="contactC" name='phone' placeholder='Your Contact Number' value={userData.phone === '' ? '':userData.phone} onChange={heandelOnchage}  required />
                </div>

                <div className="mb-5">

                <textarea className="form-control" id="messageC" rows="5" name='message' placeholder='Your Message' onChange={heandelOnchage} ></textarea>
                </div>

                <button type="submit" className="btn btn-secondary col-md-6 fw-bold fs-5  mb-4" onClick={handleContact}>SEND MESSAGE</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
