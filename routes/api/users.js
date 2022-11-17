//ENDPOINT:--------> http://localhost:5000/api/users
const router = require('express').Router();
const user_ctr = require('../../controllers/user')

//CRUD OPERATIONS

//CREATE :

router.post("/",user_ctr.createUser);

//READ
router.get("/",user_ctr.listAll);
router.get("/:id",user_ctr.singleUser);

//UPDATE
router.patch("/:id",user_ctr.updateUser);

//DELETE
router.delete("/",user_ctr.deleteUser);



module.exports = router;