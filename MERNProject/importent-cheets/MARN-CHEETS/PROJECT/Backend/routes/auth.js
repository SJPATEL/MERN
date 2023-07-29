const express = require("express");
const fetchuser = require("../middleware/fetchuser");  //  includeing fetchuser meddleware 
const User = require("../modul/User");   // imort User shcmas 
const { body, validationResult } = require("express-validator");; // add express-validator 
const bcrypt = require('bcryptjs');    // import bcrypt js
const router = express.Router();   // import router  form expres

const jwt = require('jsonwebtoken');   // import jwt tocken

const JWT_SCRET = "setuisgoodb$by";  // set secrete string


// Create User using :POST "/api/auth/createuser" . Dosent require auth 
router.post('/createuser', [
    // use express-validator 
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atilist 5 character').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    try {
        // 1] cheack express error 
        const err = validationResult(req);
        if (!err.isEmpty()) {
            success = false;
            return res.status(400).json({ error: err.array() });
        }

        // 2] cheack email exist allredy 
        let user = await User.findOne({ email: req.body.email });    
        if (user) {
            success = false;
            return res.status(400).json({ error: "Please enter different email" });
        }

        // 3] careate new (inser) user 
        // use bcrypt 
        const salt = await bcrypt.genSalt(10);
        const secPss = await bcrypt.hash(req.body.password, salt);
        // user = new User(req.body);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPss
        });
        // set jwt for send tocken 
        const data = {
            user: {
                id: user.id    // fetch id for insert into data using by addUser
            }
        }
        // res.json({ authToken })
        // const createUser = await User.save();
        var authToken = jwt.sign(data, JWT_SCRET);    // set Token
        success = true;
        res.json({success,authToken});
    } catch (error) {
        // res.status(500).send("Internal server Error ");
        res.status(500).send(error);
    }

})

// Create User using :POST "/api/auth/login" . Dosent require auth 
router.post('/login', [
    // use express-validator 
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atilist 5 character').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    try {
        // 1] cheack express error 
        const err = validationResult(req);
        if (!err.isEmpty()) {
             success = false;
            return res.status(400).json({ error: err.array() });
        }

        const { email, password } = req.body
        
        // 2] cheack use exist or not using email
        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ error: "Please try to login current credentials" });
        }

        // 3] cheack password is correct or not 
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) {
            success = false;
            return res.status(400).json({ error: "Please enter correct password" })
        }
        success = true;
        // login then send token 
        const data = {     
            user: {
                id: user.id    // fetch id for insert into data using by addUser
            }
        }
        // set Token
        const authToken = jwt.sign(data, JWT_SCRET);
        res.json({success,authToken});
        

    } catch (error) {
        res.status(500).send("Internal server Error ");
    }

})


// get a logdin user ditails :POST "/api/auth/getuser" . login require auth 
router.post('/getuser',fetchuser , async (req, res) => {

    try {

        const userId = req.user.id;
        
        // // 1] cheack use exist or not using email
        let user = await User.findById( userId ).select("-password");
        if (!user) {
            return res.status(400).json({ error: "Please try to login current credentials" });
        }
        res.send(user)

    } catch (error) {
        res.status(500).send("Internal server Error ");
    }

})

module.exports = router;