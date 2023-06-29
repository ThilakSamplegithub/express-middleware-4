const {Router}=require("express")
const teacher=Router()
teacher.get("/",(req,res)=>{
    console.log("Teacher")
    res.send("Teacher list")
 })
 teacher.post("/addTeacher",(req,res)=>{
     console.log("adding")
      console.log(req.body)
     res.send("Teacher added")
 })
 module.exports={teacher}