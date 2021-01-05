// import * as cors from "cors"
// import * as express from "express"
const express=require('express');
const app=express();
var cors = require('cors')
const PORT = process.env.PORT || 4000;
app.use(cors())
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("famous blog server");
});

app.use((req,res,next) =>{
  // next(createError(404));
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});