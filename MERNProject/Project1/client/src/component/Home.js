import React,{useEffect,useState} from 'react'
import logo from '../images/Home.png'
import '../App.css';

const Home = () => {
  const [userData,setUserData] = useState('');
  const [userName,setuserName] = useState(false);
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
      setUserData(data.name)
   
      setuserName(true);
      
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
  return (
    <>
      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-6 m-auto div2Home text-center'>
            <h1>  <span className='text-danger'> {userData}</span> <br /> Welcome {userName ? " To On This Site" : ""}  </h1>
        </div>
      </div>

    </>
  )
}

export default Home
