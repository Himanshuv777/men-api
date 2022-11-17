const mongoose = require('mongoose');
db = mongoose.connection;
mongoose
.connect(process.env.DB_URI,
{
dbname:process.env.DB_NAME,
user:process.env.DB_USER,
pass:process.env.DB_PASS,
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(()=>{
console.log("connected to Mongodb");
})
.catch((err)=>{
console.log(err.message);
})

db.on('error',()=>{
console.log("Error occured from the database");
})

db.on('open',()=>{
console.log("Successfully accessed the database");
})
