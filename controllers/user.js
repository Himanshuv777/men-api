const User = require('../models/users');

exports.index=(req,res)=>{
    res.send("Users Index");
}


//CRUD OPERATIONS:

//create
exports.createUser = async (req,res)=>{
    const user = new User({
        name:req.body.name,
        title:req.body.title,
        bio:req.body.bio,
    });
    try{
        const createUser = await user.save();
        if(!createUser){
            res.status(400).json({msg:"Error in creating a user"});
        }
        else{
            res.status(200).json(user);
        }

    }
    catch(err){
        res.status(400).json({msg:err});
    }

   /*  user.save().then((data)=>{
        
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(400).json({msg:err})
    }) */
};


//--------------------------------------------------------------------------------
//READ
exports.listAll = async (req,res)=>{
   
    try{
        const query = await User.find();
        if(!query){
            res.status(400).json({msg:"Error no user found"});
        }
        else{
            res.status(200).json(query);
        }

    }
    catch(err){
        res.status(400).json({msg:err});
    }
};

exports.singleUser = async (req,res)=>{
    try{
        const query = await User.findById(req.params.id);
        if(!query){
            res.status(400).json({msg:"Invalid User"});
        }
        else{
            res.status(200).json(query);
        }

    }
    catch(err){
        res.status(400).json({msg:err});
    }
};
//--------------------------------------------------------------------------------
//UPDATE
exports.updateUser = async (req,res)=>{
   
    try{
        const query = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{
            new: true
        });
        if(!query){
            res.status(400).json({msg:"invalid user"});
        }
        else{
            res.status(200).json(query);
        }

    }
    catch(err){
        res.status(400).json({msg:err});
    }
};

//--------------------------------------------------------------------------------
//DELETE
exports.deleteUser = async (req,res)=>{
   
    try{
        if(req.body.id){
            const query = await User.findByIdAndDelete(req.body.id);
            if(!query){
                res.status(400).json({msg:"invalid user"});
            }
            else{
                res.status(200).json(query);
            }

        }
        else{
            res.status(400).json({msg:"invalid request"});
        }
        
    }
    catch(err){
        res.status(400).json({msg:err});
    }
};
