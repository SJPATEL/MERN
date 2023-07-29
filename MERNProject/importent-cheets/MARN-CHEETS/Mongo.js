==================== MongoTotorial ===================
====>clear console:cls
====>start command:start mongod.exe
====>run mongo:run mongo / start mongod
====>show database: show dbs
====>currunt database cheack:db
====>create database:  use databaseName
====>insert one felds(row) :> db.setudata.insertOne({name:"ReactJs",type:"Front End",videos:80,active:true })
====>insert many felds :> > db.setudata.insertMany([{name:"NodJs",type:"DataBase",videos:5,active:true},{name:"PHP",type:"DataBase",videos:5,active: true}]);
curruntdatabase.collenctionName.insertOne({})
output:{
        "acknowledged" : true,  // It mense create successfylly
        "insertedId" : ObjectId("646755a1f992bf71116c4d1e") // As primary key
}
=====>Show collections(tables):> show collections
output:setudata
=====>Cheack documents in collection :> db.setudata.find()
output:{ "_id" : ObjectId("646755a1f992bf71116c4d1e"), "name" : "ReactJs", "type" : "Front End", "videos" : 80, "active" : true
 }
=====>Cheack documents in collection formate : > db.setudata.find().pretty()
output:{
        "_id" : ObjectId("646755a1f992bf71116c4d1e"),   //documents
        "name" : "ReactJs",
        "type" : "Front End",
        "videos" : 80,
        "active" : true
}
=====>read only one filds with use key: db.setudata.find({name:"MongoDB"}).pretty()
=====>show only name :> db.setudata.find({name:"MongoDB"},{name:1}).pretty()
output{{ "_id" : ObjectId("64675c2cf992bf71116c4d1f"), "name" : "MongoDB" }}
=====>show without id :> db.setudata.find({name:"MongoDB"},{_id:0,name:1}).pretty()
1:show only name ,
0:show all without name
=====>show limit number of data:> db.setudata.find({active:true}).pretty().limit(1) (or)
> db.setudata.findOne({active:true}) //It show bydefault first feld
=====>show limit number of data:> > db.setudata.find({active:true}).pretty().limit(1).skip(1) //It show second filed

=====>update one feled :db.setudata.updateOne(  { name: "PHP" } , { $set:  { type:"Back End" }  } )
=====>update mayny felds:> db.setudata.updateMany( {type:"DataBase"} , {$set:  {type:"Full Stack"} } )

=====>delete felds:> db.setudata.deleteMany({type: "Full Stack"})
=====>delete all felds : db.setudata.deleteMany({})

==================== Mongoose Totorial ===================
==>Manage Your package:npm init -y
==> install mongooes : npm install mongoose
==>run js file : node File.js  // it is run repet after update code
==> install nodemon : npm i -D nodemon // it is referase automatically afer save code
==>run js file : nodemon index.js
==>connection  :
 const { default: mongoose } = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));

===> Schema
// A mongoose schema defines the structure of the document(mentains felds datatypes). defualt values,validatores, etc...
const playlistSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        ctype: String,
        videos: Number,
        author: String,
        active: Boolean,
        date: {
            type: Date,
            default: Date.now
        }
    })

===>Collections creations
    const Playlist = new mongoose.model("Playlist",playlistSchema)

===>Create document or insert (Only one document)
// create docmument or insert
const createDocument = async () => {
    try {
        //document
        const reactPlaylist = new Playlist({
            name: "Node Js",
            ctype: "Beck End",
            videos: 50,
            author: "Setu Technical",
            active: true

        })
        const result = await reactPlaylist.save();
        console.log(result);
    } catch (error) {
        console.log(error);

    }
}
createDocument(); // run function

===>Create document or insert (Many document)
const createDocument = async () => {
    try {

        const jsPlaylist = new Playlist({
            name: "Java-Script",
            ctype: "Front End",
            videos: 150,
            author: "Setu Technical",
            active: true

        })
        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "DataBase",
            videos: 30,
            author: "Setu Technical",
            active: true

        })
        const mongoosePlaylist = new Playlist({
            name: "Mongoose JS",
            ctype: "DataBase",
            videos: 70,
            author: "Setu Technical",
            active: true

        })
        const expressPlaylist = new Playlist({
            name: "Mongoose JS",
            ctype: "Back End",
            videos: 4,
            author: "Setu Technical",
            active: true

        })
        const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist]);
        console.log(result);
    } catch (error) {
        console.log(error);

    }

}
createDocument();

===> read document
const getDocument = async ()=>{
    try {

        const result = await Playlist
        .find({ctype: "Front End"})
        .select({name:1})
        .limit(1);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getDocument();

===> comarision operator
$gt :  >
$lt :  <
$gt:  >=
$lt :  <=
$in: under
$nin: not under
const result = await Playlist
// .find({videos: {$gt: 50}})
// .find({ctype: {$in : ["Back End","Front End"]}})
.find({ctype: {$nin : ["Back End","Front End"]}})
.select({name:1});


===> Logincal operator
$and : pass two ro more array
$not
$nor
$or : pass two or more array
const result = await Playlist
.find({$or :  {ctype: "Back End"}  })
.select({name:1});

===>count
const result = await Playlist
.find({$or :  {ctype: "Back End"}  })
.select({name:1}).count() / .countDocuments();;

===> sort
const result = await Playlist
.find({ author : "Setu Technical"})
.sort("name : -1");  // or
.sort({name : 1 });

====> Update document
const updateDocument =  async (_id) => {
    try {
        // const result = await Playlist.updateOne( {_id : "64698e9717a9e3c7f046044b"} );
        // const result = await Playlist.updateOne( {_id : id} );
        // const result = await Playlist.updateOne( {_id} , {
        // const result = await Playlist.findByIdAndUpdate( {_id} , {  //update and show old document
        //     $set : {
        //         name : "Java Script"
        //     }
        // });

        const result = await Playlist.findByIdAndUpdate( {_id} , {  // update and show new update docment
            $set : {
                name : "Java-Script"
            }
        },{
            new : true,
            useFindAndModify : false
        });
        console.log(result);
    } catch (error) {
        console.log(error);

    }
}

====> Delete document
const result = await Playlist.deleteOne( {_id} );
const result = await Playlist.deleteMany( {_id} );
const result = await Playlist.findByIdAndDelete( {_id} );

====> Bilt-In and custom Data Validation
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // uppercase: true,
        trim : true,  // it remove space for string befor and after
        minlength:[2 , "Please Enter min length 2 "],
        maxlength:20

    },
    ctype: {
        type: String,
        // lowercase: true,
        required: true,
        enum:["Front End", "Back End" , "DataBase"]
    },
    videos: {
        type: Number,
        //custom validator
          validate(value){
            if(value < 0){
                throw new Error("You are not enter nagative vlaue ");
            }
          }
    }
})

=====> mongoose npm validator pakage
install npm pakage : npm i validator

=====> Create restfull api

=====> REST API
// "REpresentational State Transfer" Application Progrmaing InterFace

=>OPRATIONS  => REQUEST          => URL

=>CREATE         => POST                   =>  api/users
=>READ             =>GET                       =>  api/users
=>UPDATE        => PUT OR PATCH     =>  api/users
=>DELETE        => DELETE                  =>  api/users

// PUT MEASN ALL NEW
// PATCH MEANS UPDATE

install express : npm i express
install mongoose
install json File
install nodemon

// / ===>1: create a new router
// const router = new express.Router();
//2: we need to define the router
// router.get("/setu",(req,res) =>{
//     console.log('helllo');

// })
//3: we need to register our router
// app.use(router);

// 1] conn.js (connection file )
const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/students-api')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));


//2] main file code app.js
const express = require("express");
const studentRouter = require("./router/studentRouter");
// incloude connectin file
require("./db/conn");

const app = express(); //use express funciton
const port = 3000;

// use method for show data on colsole thonder boyd on jason format
app.use(express.json());

// include router data (get,post.. etc) form other file
app.use(studentRouter);

app.listen(port, () => {
    console.log(`connection is success at ${port}`);
});

// 3] Student.js (create modal)

const { default: mongoose } = require("mongoose");
// imort validator
const validate = require("validator");

// create modale
const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  // forain key
        ref :'user'//(collection Name)
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validate.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required : true,
        unique: true,
    },
    address:{
        type: String,
        required : true
    }
})

============> express validator
1]install : npm i express-validator
2]const {body,validationResult} = require("express-validator");
const err = validationResult(req);
router.post('/createuser', [
    // use express-validator
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atilist 5 character').isLength({ min: 5 })
], async (req, res) => {
    try {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ error: err.array() });
        }

        if (!err.isEmpty()) {
            success = false;
            return res.status(400).json({ error: err.array()[0].msg });

        }
    } catch (error) {
        res.status(400);
    }
})


// we will create a new collections
const Student = new mongoose.model("Student", studentSchema);
// export module
module.exports = Student;

// 4] studentRounter.js (main api file
const express = require("express");
const router = new express.Router();
// get models
const Student = require("../models/student");

//2: we need to define the router
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        // set port
        res.status(201).send(createUser);  // serve work code 201
    } catch (error) {
        // send erro
        res.status(400).send(error);
    }

})

// get students data
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.send(studentsData);
    } catch (error) {
        res.send(error);
    }

})

// get student data using id
router.get("/students/:id", async (req,res ) => {
    try {
        // it is use get id values
        const _id = req.params.id;
        // console.log(_id);

        const studentData = await Student.findById(_id);
        console.log(studentData);

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData)
        }

    } catch (error) {
        res.status(500).send(error);
    }
})

// update email using id
router.patch("/students/:id", async (req,res ) => {
    try {
        // it is use get id values
        const _id = req.params.id;
        // console.log(_id);

        const updateStudent = await Student.findByIdAndUpdate(_id , req.body,{
            // use for show cuurent update data
            new: true
        });
        console.log(updateStudent);
        res.send(updateStudent)

    } catch (error) {
        res.status(400).send(error);
    }
})

// delet data  using id
router.delete("/students/:id", async (req,res ) => {
    try {
        // it is use get id values
        const _id = req.params.id;
        // console.log(_id);


        const updateStudent = await Student.findByIdAndDelete(_id , req.body,{
            // use for show cuurent update data
            new: true
        });
        if(!_id){
            return res.status(400).send();
        }

        console.log(updateStudent);
        res.send(updateStudent)

    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;

====================> create Registartion
install hendlebar : npm i hbs

====================> iNotes application
// secaure password
install bcryptjs : npm i bcryptjs
1] import : const bcrypt = require('bcryptjs');
2] try {
    // genarat salt
    const salt = await bcrypt.genSalt(10);    // password+ssss = ssss: salt (add by default )
    const secPss =  await bcrypt.hash(req.body.password, salt);
    // insert user
    const addUser = new User({
        name : req.body.name,
        email : req.body.email,
        password : secPss
    });

    const createUser = await  addUser.save();
} catch (error) {}


=======> user verify (Login ) throw tocken genarate token
install jwt :npm i jsonwebtoken
1]const jwt = require('jsonwebtoken');      // tocken
2]const JWT_SCRET = "setuisgoodb$by";  // set string
3]   const data = {              //create data object
    user :{
        id :addUser.id    // fetch id for insert into data using by addUser
    }
}
// console.log(data);
var authToken = jwt.sign( data, JWT_SCRET);    // set Token
=========================> or (midle ware function)
1] schema file
// we are genarating token
const userSchema = new mongoose.Schema({
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
const jwt = require('jsonwebtoken');      // tocken
userSchema.methods.genrateAuthToken = async function () {
    try {
        // _id : get login user id in db
        // get id for loign user
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        // store token in tokens fild in db
        this.tokens = this.tokens.concat({token : token});
        await this.save();

        return token;
    } catch (error) {
        console.log(error);
    }

}
2]auth.js
// set token middle ware
const token = await loginUser.genrateAuthToken();
console.log(token);

==================> login endPoint
// second commit
// Autentic a User using : POST :"/api/auth/login". Doesn't require login
router.post('/login', async (req, res) => {

    // get email or password form the boyd
    const { email, password } = req.body;
    try {
        // mongo query for cheack for exist user email or not
        let findUser = await User.findOne({ email });
        // if not exist
        if (!findUser) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }

        // res.send(findUser.password);  //fetch has password exist form the database

        // match password for user enter and exist on databse has password
        const findPassword = await bcrypt.compare(password, findUser.password);
        if (!findPassword) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }

        // login then send token
        const data = {              //create data object
            user: {
                id: findUser.id    // fetch id for insert into data using by addUser
            }
        }
        // set Token
        const authToken = jwt.sign(data, JWT_SCRET);

        // // const createUser = await  addUser.save();
        res.json({ authToken });

        // set port
        // res.status(201).send(createUser);  // serve work code 201
    } catch (error) {
        // send erro
        // res.status(500).send("internal server error occured");
        res.status(400).send(error);

    }

})

==================> meddleware
// 1] fetchuser.js
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
2]auth.js
const fetchuser = require("../middleware/fetchuser");  //  includeing fetchuser meddleware
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

===========> use mongodb Atlas
// stap
1] open mongodb.com then login
2]create new project
3]Enter your project Name
4]mongodb+srv://setu:<password>@cluster0.ndupnhi.mongodb.net/?retryWrites=true&w=majority
const DB = 'mongodb+srv://setu:setupatel@cluster0.ndupnhi.mongodb.net/mernstack?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {
    console.log('connection successfull');
}).catch((err) => {
    console.log(err);
});

mernstack=db ;

==============> secure file  env
//  in env file not include semicolen and space
1]install : npm i dotenv
// secure
2]create file : fNmae.env
DATABASE = mongodb+srv://setu:setupatel@cluster0.ndupnhi.mongodb.net/mernstack?retryWrites=true&w=majority
3]app.js
const dotenv = require("dotenv");
dotenv.config({path: './config.env'});  // import env file
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {       // db connection
    console.log('connection successfull');
}).catch((err) => {
    console.log("no connection");
});

=========> store cookie
npm i cookie-parser // it  is use send data form frentend to backend
res.cookie('jwtoken' , token , {
    expires : new Date(Date.now() + 25892000000),
    httpOnly: true
})

===========> registration / Cors Error
=>error
1] cors error
=> client side json file
{
    "name": "client",
    "version": "0.1.0",
    "private": true,
    "proxy": "http://localhsot:5000",
}
=> server side app.js
1]install : npm install cors
var cors = require('cors')  // cros
// db connection ______
const app = express(); //use express funciton
const PORT = process.env.PORT;
app.use(cors())
app.use(express.json())
// Availabe routes
app.listen(PORT, () => {
    console.log(`connection is success at ${PORT}`);
});


========> index.php
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

=====================> uplode image
1]enctype="multipart/form-data" in form tag
2]npm i multer [backend]
3] create middleware
==> multermiddleware.js
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './imagesvedio');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const uploadMiddleware = multer({ storage, fileFilter });
module.exports = uploadMiddleware;
===>app.js
app.use("/imagesvedio",express.static("imagesvedio"));
===>end point

router.post('/imagevedio', (req, res, next) => {
    let img = [];
    const counter = req.header('counter1');
    const counter2 = req.header('counter2');
    for (let c = 0; c <= (counter + counter2); c++) {

        img.push({ name: `myFile${c}` })
        img.push({ name: `video${c}` })
    }

    uploadMiddleware.fields(img)
        (req, res, function (error) {
            if (error) {

                return res.status(400).json({ error: "successfully not add image  !", success: 'false' });

            } else {

                return res.status(400).json({ error: "successfully add image  !", success: 'true' });
            }
        })

    next();
}, async (req, res) => {

})


====> display image
<img src={`http://localhost:5000/imagesvedio/${imgdescitem.image}`} style={{'width' : '400px','height' : '400px','objectFit':'contain'}}

====> $and operator query, array query and find query 
const cheackpresent = await HTMLTOPIC.findOne({
    $and: 
        [
            {_id:id},{ qusans: { $elemMatch: { questions: question } } }
        ]
});
const addquestion = await HTMLTOPIC.findByIdAndUpdate({ _id: id }, {
    $push: {qusans : [{ questions: question }]}
})
====>insted array queary ,$push element arrray 

const cheackpresent2 = await HTMLTOPIC.updateOne({_id:id,"qusans.questions" : qus},
{
    $push : 
        {"qusans.$.answer":answser}
})

===================>set and get url value
import { Link, useLocation } from 'react-router-dom'
let location = useLocation();
const queryParameters = new URLSearchParams(window.location.search)
const type = queryParameters.get("type")
const name = queryParameters.get("name")

===================> how to sare mern project
1]Delete the Node Modules folder
2]convert folder in zip and then share

1] unzip the folder then copy the folder in new path
2]install the dependencies using yarn/npm install
3] simply run it

=====> cheac error
1] we are cheack spallin mestic
2] we are cheack you are send Response
2] we are cheack the method
4]Match Syntax
5]Mistice in url i write https but actully right http (http=https)
6] Error : JsonWebTokenError: jwt must be a string
    Solution :    const findUser = await  User.findOne({id:verifyToken._id,"tokens.token":token});
     if(!findUser){throw new Error("User not found!")}  // Not use this throw error
7]you are convert password in has using bcryptjs so fist genarate solt using genSalt()
8] if you store value without defien shcems in mongodb you are use array for store vlaues

const TopicsStore = new mongoose.Schema({
    items: {
        type: Array,
        require: true
    }
})
const inputValue = req.body;
const additem = await HTMLTOPIC({
    items: [{inputValue}]
})
const ress = await additem.save();

9] MulterError : this is is trow not match file name

const formData = new FormData();
formData.append('file',imgDesc);

<div className="mb-3">
<label htmlFor="img" className="form-label imgfile fs-5">Image</label>
<input type="file" className="form-control fs-5" id="fileImg" name='myFile' required onChange={handleimgdesc} />
</div>

cheack ==>  : file === myFile (Eroro)
formData.append('MyFile',imgDesc);

10] after uplode image in foleder then first send response
uploadMiddleware.fields(img)
// console.log(img);                       // not enter any
(req, res, function (error) {
    if (error) {

        console.log(error);
    }
})

11] map is not function :
=> map is only use array so need define state is array then use map function
const [state1, setState1] = useState([]);

12] to dy my error is location 
import {useLocation } from 'react-router-dom'
const location = useLocation();
const queryParameters = new URLSearchParams(window.location.search)
  const lag = queryParameters.get('lag')
  const id = queryParameters.get('id')
===> my mistice is  not import use location  