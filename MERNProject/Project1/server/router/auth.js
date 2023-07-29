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
