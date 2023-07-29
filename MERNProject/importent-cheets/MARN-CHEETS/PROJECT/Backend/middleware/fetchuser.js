const jwt = require('jsonwebtoken');   // import jwt tocken
const JWT_SCRET = "setuisgoodb$by";  // set secrete string
const fetchuser = (req,res,next)=>{
    try {
        
        // 1] get the user from the jwt token and add id to req object
        // fetch token form the header  
        const token = req.header('auth-token');
        if(!token){
          res.status(401).send({error:"Please authenticate using a valid tocken"});
        }
        // 2] verify token match or not 
        const data = jwt.verify(token,JWT_SCRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(500).send("Internal server Error ");
    }
}

module.exports = fetchuser;
