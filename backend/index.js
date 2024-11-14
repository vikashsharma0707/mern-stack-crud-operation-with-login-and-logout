const express = require("express");
const app = express()

const bodyparser = require('body-parser')
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();
const empRoute = require("./Routes/employeeRoute");

mongoose.connect(process.env.DBCONNECTION).then(()=>{
  console.log("db connected sucessfully")
})

const port = process.env.PORT || 3000
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/employee",empRoute);

app.listen(port,()=>{
  console.log(`server is running in : ${port}`  )
})