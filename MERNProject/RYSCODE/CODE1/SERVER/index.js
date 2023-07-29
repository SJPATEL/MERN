const express = require('express');
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('./db/conn');
 
const app = express();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use("/imagesvedio",express.static("imagesvedio"));



app.use(require('./Client/router/Autentication'));
app.use(require('./Admin/Router/TopicsStore'));
app.use(require('./Client/router/GetContent'));
app.use(require('./Client/router/QusAns'));


app.listen(port, () => {
    console.log(`Connection successfully on port ${port} `);
})