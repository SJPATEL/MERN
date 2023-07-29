const jwtoken = require("jsonwebtoken");
const USER = require('../Client/models/users');

const AuthMiddle = async (req,res,next)=>{

        try {
            const token = req.header('auth-token');

            const vaerifyToken = jwtoken.verify(token,process.env.S_KEY);

            const findUser = await USER.findOne({_id:vaerifyToken.id});

            if(!findUser){
                return res.status(400).json({error:"Invalid Credentials"});
            }else{
                req.token = token;
                req.user = findUser;
                req.Id = findUser._id;
            }

            next();
        } catch (error) {
             return res.status(400).json({error:"Invalid Credentials",error});
        }
}

module.exports = AuthMiddle;