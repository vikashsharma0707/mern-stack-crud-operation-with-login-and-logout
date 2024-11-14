const stuModel = require("../Models/employeeModel");


const empdataSave = async(req,res)=>{
    const {eno,name,designation,salary} = req.body;

    try{
        const empSave = await stuModel.create({
            empno:eno,
            empname:name,
            designation:designation,
            salary:salary
        })

        res.status(200).json(empSave)
    }catch(err){
      res.status(404).json("data not save")
    }
}


const empdataDisplay = async(req,res)=>{
    try{
        const empdata = await stuModel.find();
        res.status(200).json(empdata)
    }catch(err){
     res.status(404).json("data not save")
    }
}


const empdataSearch = async(req,res)=>{
    const {empno} =req.body;
    const empSearch = await stuModel.find({empno:empno});
    res.send(empSearch)
}


const empdataUpdate = async(req,res)=>{
   try{
    const empupdate = await stuModel.find();
    res.status(200).json(empupdate)
   }catch(err){
     res.status(404).json("data not found")
   }
}

const empdataDelete = async(req,res)=>{
    const myid = req.body.id;
    const empDelete = await stuModel.findByIdAndDelete(myid);
    res.send("record delete sucessfully")
}

const empdataEdit = async(req,res)=>{
    const id = req.body.id;
    const empedit = await stuModel.findById(id);
    res.send(empedit)
}


const empdataEditsave = async(req,res)=>{
  const {_id,empno,empname,designation,salary} = req.body;

  const empsave = await stuModel.findByIdAndUpdate(_id,{
    empno:empno,
    empname:empname,
    designation:designation,
    salary:salary
  })

  res.send("data sucessfully updated")
}


const empdataSearchName = async(req,res)=>{
    let empnm = req.query.empname
    console.log(req.query)

    const empsearchname = await stuModel.find({empname:{$regex:empnm}})
    res.send(empsearchname)
}

module.exports={
    empdataSave,
    empdataDisplay,
    empdataSearch,
    empdataUpdate,
    empdataDelete,
    empdataEdit,
    empdataEditsave,
    empdataSearchName
}