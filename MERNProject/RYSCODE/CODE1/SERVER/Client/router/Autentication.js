const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

require('../../db/conn');
const USER = require('../models/users');
const bcrypt = require('bcryptjs');
const jwtoken = require('jsonwebtoken');
const AuthMiddle = require("../../middleware/Authmiddleware");

router.post("/Registration", [
    body('name', 'Invalid User Name').matches(/^[A-Za-z][A-Za-z\s0-9]{3,20}$/),
    body('email', 'Invalid User Email').isEmail(),
    body('password', 'Invalid password , password length must be 8 character require ').matches(/^[A-Za-z0-9][A-Za-z0-9*()_=+-]{7}$/),
    body('contact', 'Invalid contact number').matches(/^[0-9][0-9]{9}$/)
], async (req, res) => {
    let success = false;
    try {

        const err = validationResult(req);
        if (!err.isEmpty()) {
            success = false;
            return res.status(400).json({ error: err.array()[0].msg, success });

        } else {
            const { name, email, password, cPassword, contact } = req.body;

            if (password === cPassword) {
                const salt = await bcrypt.genSalt(10);
                const hasPass = await bcrypt.hash(password, salt);

                // cheack email is exist allready
                const cheackEmail = await USER.findOne({ email });
                if (cheackEmail) {
                    success = false;
                    return res.status(400).json({ error: "Invalid your credentials", success });
                } else {
                    const storeEmail = new USER({
                        name: name,
                        email: email,
                        password: hasPass,
                        contact: contact
                    })
                    const saveuser = await storeEmail.save();

                    if (saveuser) {
                        success = true;
                        return res.status(200).json({ error: "Your Registration Proccess is complete", success });
                    }
                }

            } else {
                success = false;
                return res.status(400).json({ error: "Do not match your password", success });
            }
        }

    } catch (error) {
        success = false;
        return res.status(400).json({ error: "Your Registration process is not complete", success });
    }
})

router.post("/login", async (req, res) => {
    let success = false;
    try {

        const { email, password } = req.body;

        const cheackEmail = await USER.findOne({ email });
        if (cheackEmail) {

            const cheackPassword = await bcrypt.compare(password, cheackEmail.password);

            if (cheackPassword) {

                //genarat auth-token
                const token = jwtoken.sign({ id: cheackEmail._id }, process.env.S_key);

                success = true;
                return res.status(400).json({ error: "Your login proccess is successfully complete", success, token });
            } else {
                success = false;
                return res.status(400).json({ error: "Invalid credentials", success });
            }

        } else {
            success = false;
            return res.status(400).json({ error: "Invalid credentials", success });
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ error: "Your login process is not complete", success });
    }
})
router.post("/forgetpass", [
    body('password', 'Invalid password , password length must be 8 character require ').matches(/^[A-Za-z0-9][A-Za-z0-9*()_=+-]{7,13}$/)
], async (req, res) => {
    let success = false;
    try {

        const err = validationResult(req); 
        if (!err.isEmpty()) {
            success = false;
            return res.status(400).json({ error: err.array()[0].msg, success });

        }

        const { email, password } = req.body;

        const cheackEmail = await USER.findOne({ email });
        if (cheackEmail) {

            const salt = await bcrypt.genSalt(10);
            const hasPass = await bcrypt.hash(password, salt);
            console.log(hasPass);

            const updatePass = await USER.findOneAndUpdate({ email: cheackEmail.email }, { $set: { password: hasPass } })
            if (updatePass) {
                success = true;
                return res.status(200).json({ error: "Update proccess successfully complete", success });
            }else{
                success = false;
                return res.status(400).json({ error: "Invalid credentials", success });
            }

        } else {
            success = false;
            return res.status(400).json({ error: "Invalid credentials", success });
        }


    } catch (error) {
        success = false;
        return res.status(400).json({ error: "Your forgetpass process is not complete", success });
    }
})

router.get('/getUser', AuthMiddle, async (req, res) => {
    res.send(req.user);
})

router.post("/contact", [
    body('message', 'Enter message minimum 20 character').isLength(20, 100)
], AuthMiddle, async (req, res) => {
    let success = false
    try {

        const err = validationResult(req);
        if (!err.isEmpty()) {
            success = false;
            return res.status(400).json({ error: err.array()[0].msg, success });
        } else {

            const { message } = req.body;
            const finduser = await USER.findOne({ _id: req.Id });
            if (finduser) {
                const addmessage = await finduser.addMessage(message)

                await finduser.save();
                success = true;
                res.status(201).json({ error: "Your message successfully submite", success })
            }
        }
    } catch (error) {
        success = false;
        return res.status(400).json({ error: "Your contact process is not complete", success });
    }
})

module.exports = router;