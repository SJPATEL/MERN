import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => { 
    const navigate = useNavigate();
    const [contact,setContact] = useState({message : ''});
    const [user,setUser] = useState({});

    const handleInput = (e)=>{ 
        let name = e.target.name;
        let value = e.target.value;
        setContact({...contact,[name]:value});
    }

    const getContactUser = async ()=>{

        
        const responseContactUser = await fetch('http://localhost:5000/getUser',{
            method : "GET",
            headers:{
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
        })

        const responsUser = await responseContactUser.json();
        if(responsUser){

            setUser(responsUser);
        }

    }

    const handleContact = async (e) =>{
        e.preventDefault();

        const {message} = contact;
        const responseContact = await fetch('http://localhost:5000/contact',{
            method : "POST",
            headers:{
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
            body: JSON.stringify({message})
        })

        const response = await responseContact.json();
        if(response.success){
            alert(response.error);
            setContact({message:''})
        }else{
            alert(response.error);
            setContact({message:''})
        }
    }

    useEffect(() => {
        // 1] it is call automatically after relode page only one time run 
    
        if (localStorage.getItem('auth-token')) {
    
          // Aa function only run karu se teno kai bijo use nathi 
          getContactUser();
        } else {
            navigate('/');
        }
      }, []);

    return (
        <>
            <form className="col-md-12 ">

                <div class="mb-5">
                    <input type="email" class="form-control fs-5 " id="Email" name='Email' aria-describedby="emailHelp" placeholder='Enter your email' value={user.email} />
                </div>

                <div class="mb-5">
                    <input type="text" class="form-control fs-5" id="contact" name="contact"   value={user.contact} />
                </div>

                <div class="mb-4">
                    <textarea class="form-control fs-5" id="message"  name='message' placeholder='Enter Your Message'   rows="5" style={{width: "100%"}} onChange={handleInput}></textarea>
                </div>



                <button className="Btn Btn--prim Btn--l u-fs24 u-pl3 u-pr3 u-mb1 u-s-db col-md-3 mt-3"
                    data-track-instance="1" onClick={handleContact}>SUBMIT </button>
            </form>
        </>
    )
}

export default Contact
