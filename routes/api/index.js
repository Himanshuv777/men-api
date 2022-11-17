const router = require('express').Router();

router.use('/users',require('./users'))

router.get("/",(req,res)=>{
    res.send("app.js api index page");
});


module.exports = router;