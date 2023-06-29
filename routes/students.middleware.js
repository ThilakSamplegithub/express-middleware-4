const {Router}=require("express")
const students=Router()
students.get("/",(req,res)=>{
    console.log("student")
    res.send("student list")
 })
 students.post("/addStudent",(req,res)=>{
     console.log("adding")
      console.log(req.body)
     res.send("student added")
 })
module.exports={students}