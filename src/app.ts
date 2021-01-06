import * as cors from "cors"
import * as express from "express"
import Router from "./Routers/index";
// const Router=require("./Routers/index.js");

// const express=require('express');
const app=express();
// var cors = require('cors')
const PORT = process.env.PORT || 4000;
const connectDB = require("./Module/connectDB")
connectDB();
app.use(cors())
app.use(express.json());

app.use("/", Router);

app.get("/",(req,res)=>{
  res.send("famous blog server");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});