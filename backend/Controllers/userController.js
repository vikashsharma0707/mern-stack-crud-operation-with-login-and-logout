const userModel = require("../Models/userModel");


const userRegistration = async(req,res)=>{
    const {username,email,password} = req.body;

    const userSave = await userModel.create({
        username:username,
        email:email,
        password:password
    })

    res.send("sucessfully added")

}


const userLogin = async(req,res)=>{
    const {email,password} = req.body;

    const userData = await userModel.find({email:email})

    if(userData.length<1){
        res.status(404).json("invalid password")
    }

    else{
        if(userData[0].password!=password){
            res.status(404).json("invalid password")
        }

        else{
            res.status(200).send(userData)
        }
    }
}

module.exports={
    userRegistration,
    userLogin
}