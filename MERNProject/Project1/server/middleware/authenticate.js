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