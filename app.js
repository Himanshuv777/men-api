const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/db')

const PORT = process.env.PORT || 4000

//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(require('./routes'));


/* //routing
function middleware(req,res,next){
    console.log("api middleware");
    next();
}

app.get("/",(req,res)=>{
    res.send("app.js Index page");
});

app.get("/api",(req,res)=>{
    res.send("api index page");
}) */

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} ...`)
});