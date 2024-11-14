const express = require("express");
const route = express.Router();


const empController = require("../Controllers/employeeController");

route.post("/employeeSave",empController.empdataSave);
route.get("/employeeDisplay",empController.empdataDisplay)
route.post("/employeeSearch",empController.empdataSearch)
route.get("/employeeUpdate",empController.empdataUpdate)
route.post("/employeeDelete",empController.empdataDelete)
route.post("/employeeEdit",empController.empdataEdit)
route.post("/employeeEditSave",empController.empdataEditsave)
route.get("/employeeSearchName",empController.empdataSearchName)

module.exports=route;