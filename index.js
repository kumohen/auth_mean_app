const express =  require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://mahen:12345a@ds259347.mlab.com:59347/auth_mean_7",{ useNewUrlParser: true })
        .then(()=>{
    console.log("mongodb is connected")
})

const router = require("./router");

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));

router(app);

const port = process.env.PORT || 5000 ;

app.listen(port ,()=>{
    console.log("everything is okk");
})