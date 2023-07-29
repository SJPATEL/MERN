=======================================================>Rgistration and Loign system 
1]create react app: npx create-react-app appName // create react app
1]install json file: npm inti -y  [Front/Backend]   // create json file 
2]npm install i react-router-dom  [Fornted]   
3] npm install cors  [Backend]   // Sholve port cros error 
4]npm i express    [Backend]   // install express language
5]npm i nodemon    [Backend]   // run backned server
6]npm i mongoose    [Backend]   // install mongoose language 
8]npm install [Frount/Backend]   // install node_module pakage
10]install jwt :npm i jsonwebtoken
11]install bcryptjs : npm i bcryptjs
12] npm i dotenv [Backend] // config file import

*****>> Run File 
npm run start [Fornt]
node mon src/app.js [Backned]

*****>> Front End 
6] app.js 
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Errorpage from './component/Errorpage';


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>     
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="*" element={<Errorpage />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;

1]component/Registration.js
import React, { useState } from 'react'
import logo from '../images/Home.png'
import '../App.css';
import { Link } from 'react-router-dom'

const Signup = () => {
    //1] set josn with state 
  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cPassword: ''
  })
// 2]  on cheange event handle 
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    // store data in user state 
    setUser({ ...user, [name]: value })
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    // object destracture 
    const {name,email,phone,work,password,cPassword} = user;
    // it is api, and it is use to send userData to backend server for store in db
    const response = await fetch(`http://localhost:5000/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // convert to string form json data 
      body: JSON.stringify({name,email,phone,work,password,cPassword})
    });
    const json = await response.json();

    // if(data.status === 422 || !data)
    if(json.success){
      // save the auttoken and rediract 
      alert("Rgistration is usccessfully complet");
    
      window.location.href = '/login';
      
    }else{
      alert("Rgistration is not complet");
    }

  }

  return (
    <>
      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-5 m-auto div2Home text-center'>
          <h1 className='text-center mb-4 '><span className='text-light  '>Sign Up O</span>n This Site</h1>
          <form method='post'>
            <div className="mb-4">

              <input type="text" className="form-control" id="name" name='name' placeholder='User Name' required value={user.name} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='User Email' required value={user.email} onChange={handleInputs} />

            </div>
            <div className="mb-4">

              <input type="number" className="form-control" id="contact" name='phone' placeholder='User Contact Number' required value={user.phone} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="text" className="form-control" id="work" name='work' placeholder='User Work' required value={user.work} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="password" className="form-control" id="password" name='password' placeholder='User Password' required value={user.password} onChange={handleInputs} />
            </div>
            <div className="mb-4">

              <input type="password" className="form-control" id="cPassword" name='cPassword' placeholder='User Confirm Password' required value={user.cPassword} onChange={handleInputs} />
            </div>


            <button type="submit" className="btn btn-primary col-md-3 fw-bold fs-5 mb-4" onClick={handleSignup} >SIGN UP</button>
          </form>
          <div className="mb-4 ">
            <Link to="/login" className='fw-bold  text-danger'> Already have Loign</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup


2]component/Login.js
import React, { useState } from 'react'
import logo from '../images/Home.png'
import { Link } from 'react-router-dom'
import '../App.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    // 1] ti is use not referace page after click button
    e.preventDefault();  

    // 2] it is match data on server
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

3] About.js
import React, { useEffect, useState } from 'react'
import logo from '../images/Home.png'
import setu from '../images/User.jpg'
import Bhole from '../images/Bhole.jpg'
import '../App.css';

const About = () => {

  const [userData,setUserData] = useState({});
  const callAboutPage = async () => {

    try {
    //   get data form server 
      const response = await fetch(`http://localhost:5000/About`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('jwtoken')
        }
      });

      const data = await response.json();
      setUserData(data)

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
    } else {
      window.location.href = '/login';
    }

  }, []);
  return (
    <>
      <div className='divHome'>
        <img src={logo} className='imgHome' alt="" />
        <div className='col-md-12 m-auto div2Home '>

          <div className='d-flex justify-content-between'>
            <div className="col-md-6 row">
              <div className="col-md-6 m-auto text-center">
                <img src={userData.name === 'setu'? setu : Bhole} className='imgAbout my-2' alt="setu" /> <br />
                <button type="submit" className="btn btn-secondary fw-bold col-md-5  mb-4">Edit Proile</button>
              </div>
            
            </div>
            <div className="col-md-6">
              <div>
              </div>
              <div id='profile' className='container '>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>User Id </p>
                  <p className='mx-4 text-primary'>{userData._id}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Name </p>
                  <p className='mx-4 text-primary'>{userData.name}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Email </p>
                  <p className='mx-4 text-primary '>{userData.email}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Phone </p>
                  <p className='mx-4 text-primary '>{userData.phone}</p>
                </div>
                <div className="d-flex justify-content-between mx-5">
                  <p className='mx-4 fw-bold fs-5'>Profession </p>
                  <p className='mx-4 text-primary '>{userData.work}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

4] Navbar.js 
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../App.css';

const Navbar = () => {
    const handleLogout = ()=>{
        //logOut
        localStorage.removeItem('jwtoken');
        window.location.href = '/login';
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">             
                    <Link className="navbar-brand fw-bold" to="/"> <img src={logo} alt="" className='imgLogo mx-2'/>S E T U</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                          
                            { !localStorage.getItem('jwtoken') ?<ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/signup">Registration</Link>
                            </li> </ul> :
                            <li className="nav-item ">
                                <Link className="nav-link active" type='btn' onClick={handleLogout}>LogOut</Link>
                            </li>}
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar


export default About


*****>> Backend 
1]config.env 
DATABASE = mongodb+srv://setu:setupatel@cluster0.ndupnhi.mongodb.net/mernstack?retryWrites=true&w=majority
PORT = 5000
SECRET_KEY = MYNAMEISSETUPATELSOTHISISLOIGN

1]db/conn.js
const  mongoose  = require("mongoose");
const DB = process.env.DATABASE; // get env file

mongoose.connect(DB).then(() => {       // db connection
    console.log('connection successfull');   
}).catch((err) => {
    console.log("no connection");
});

2]modles/userShema.js 
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');      // tocken
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cPassword: {
        type: String,
        require: true
    },
    data:{
        type: Date,
        default : Date.now
    },
    messages : [
        {
            message:{
                type: String,
                require: true
            }
        }
    ],
    // tokens after login users 
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
})

// we are genarating token 
userSchema.methods.genrateAuthToken = async function () {
    try {
        // _id : get login user id in db 
        let token = jwt.sign({id: this._id }, process.env.SECRET_KEY);
        // store token in tokens fild in db 
        this.tokens = this.tokens.concat({token : token});
        await this.save();         

        return token;
    } catch (error) {
        console.log(error);
    }
    
}

// we are store messgae 
userSchema.methods.addMessage=  async function (message) {
    try {
        this.messages = this.messages.concat({message});
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
        
    }
}

// create collection 
const User = mongoose.model('USER', userSchema);

module.exports = User;

4] middleware/authenticate.js 

const jwt = require('jsonwebtoken');      // tocken
const User = require('../models/userShema');  // require user shcema


const authenticate = async (req , res, next) =>{
    
    try {
        // 1] get token form header
        // const token = localStorage.getItem('jwtoken');
        const token = req.header('auth-token');
        
        // 2] jwt.verify token 
        const verifyToken  = jwt.verify(token, process.env.SECRET_KEY);

        // 3] get user data using token 
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token": token});
        if(!rootUser){throw new Error("User Not Found !")} 

        // 4] store data in req 
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
        
    } catch (error) {
        res.status(401).send('Unauthorized:No token provided');
        console.log(error);
        
    }
}

module.exports = authenticate;

5]router /auth.js 
const express = require("express");
const router = express.Router();

require('../db/conn');  // db connection
const User = require('../models/userShema');  // require user shcema
const authenticate = require("../middleware/authenticate") // middale ware 
const bcrypt = require('bcryptjs');     // passwrod has


// Router 1 : Store user data in db 
router.post("/register", async (req, res) => {
    let success = false;
    try {
        // 1] get user data 
        const { name, email, phone, work, password, cPassword } = req.body;

        // 2] cheack user enter fill full details 
        if (!name || !email || !phone || !work || !password || !cPassword) {
            success = false;
            return res.status(422).json({ error: "Please fill full ditails" })
        }

        // 3] cheack user is already exist in db
        const cheackUser = await User.findOne({ email });
        if (cheackUser) {
            success = false;
            return res.status(422).json({ error: "Email is already Exist !" })
        }

        // 4] cheack passwrod or confirm password equls or not
        if (password !== cPassword) {
            success = false;
            return res.status(422).json({ error: "Your password do not match !" })
        }

        // 5] genarat salt password hassing
        const salt = await bcrypt.genSalt(10);
        const hasPss = await bcrypt.hash(password, salt);
        const hasCPss = await bcrypt.hash(cPassword, salt);
        // insert user 
        const addUser = new User({
            name: name,
            email: email,
            phone: phone,
            work: work,
            password: hasPss,
            cPassword: hasCPss
        });

        const successStore = await addUser.save();
        if (successStore) {
            success = true;
            return res.status(500).json({ 'success': "Regiser process is successfully complete !",success })
        }
    } catch (error) {
        success = false;
        return res.status(400).json({ error: "Invalid  credentials",success })
    }
})

// Router 2 :  (Login)
router.post("/signin", async (req, res) => {
    let success = false;
    try {
        // 1] get user data for user enter
        const { email, password } = req.body;

        // 2] cheack user enter fill full details 
        if (!email || !password) {
            success = false;
            return res.status(400).json({ error: "Please fill full ditails" })
        }

        // 3] cheack user email is exist in db
        const loginUser = await User.findOne({ email });  
        if (loginUser) {

            // 4] cheack password is exist in db using has compare method
            const findPassword = await bcrypt.compare(password, loginUser.password);

            if (!findPassword) {
                success = false;
                return res.status(400).json({ error: "Invalid  credentials" })
            } else {

                // 5] set token middle ware  
                const token = await loginUser.genrateAuthToken();
                console.log(token);
                
                success = true;
                // 6] token store in cookie 
                // res.cookie('jwtoken' , token , {
                //     expires : new Date(Date.now() + 25892000000),
                //     httpOnly: true
                // })
                // set token in localStorage 
                // localStorage.setItem('jwtoken',token);
                // console.log(req.cookies())
                return res.status(200).json({ success,token })
            }
        } else {
            return res.status(400).json({ error: "Invalid  credentials",success })
        }

    } catch (error) {
        return res.status(400).json({ error: "Invalid  credentials",success })
    }
})

// about us ke page 
router.get("/About",authenticate, (req,res) =>{
    res.send(req.rootUser);  // middleware rootUser
})

router.get("/getuserdata",authenticate, (req,res) =>{
    res.send(req.rootUser);  // middleware rootUser
})


router.post("/contact",authenticate, async (req,res) =>{
    
    try {
        // 1] get user data from form 
        const {name,email,phone,message} = req.body;
        // 2] cheack data is empty 

        if(!name  ||  !email  ||  !phone  ||  !message){
            console.log('error in contact from');
            return res.json({error: "plzz filled the contact form"});
        }
        // 3] find user collection 
        const userContact = await User.findOne({_id: req.userID})   

        if(userContact){
            // 4] add data in usercontact collection 
            const userMessage = await userContact.addMessage(message);

            await userContact.save();
            res.status(201).json({message:"user cotact success"})
        }

    } catch (error) {
        console.log(error);
        
    }
})


module.exports = router;



7]app.js 
const express = require("express");
var cors = require('cors')  // cros

const dotenv = require("dotenv");  
dotenv.config({path: './config.env'});  // import env file 
require('./db/conn'); // db connection

const app = express(); //use express funciton
const PORT = process.env.PORT;
app.use(cors())

app.use(express.json())

// Availabe routes 
app.use(require('./router/auth'));    // we link the router file 


app.listen(PORT, () => {
    console.log(`connection is success at ${PORT}`);
});
