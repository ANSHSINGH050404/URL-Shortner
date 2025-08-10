import express from "express"
import { nanoid } from 'nanoid'
import dotenv from "dotenv"
dotenv.config("./.env")

import connectDB from "./src/config/db.config.js"

import short_Url from "./src/routes/short_url.route.js"


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/api/create",short_Url)

// app.get("/:id",redirectFromShortUrl)



app.listen(3000,()=>{
  connectDB()
  console.log("server running on 3000");
  })



