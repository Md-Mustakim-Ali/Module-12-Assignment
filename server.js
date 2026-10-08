const express=require('express')
const mongoose=require('mongoose')

const app=express()

app.use(express.json())

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://mdmustakimali97_db_user:97PgIHRLGuC53vms@cluster0.urcmapm.mongodb.net/studentDB")
        console.log("MongoDB connected")
    }
    catch(error){
        console.log(error)
    }
}
connectDB()


const studentSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    department:String
})

const studentModel=mongoose.model("Student",studentSchema)

//create student api
app.post("/students",async(req,res)=>{
    try{
        const student=await studentModel.create(req.body)
        res.status(201).json({
            message:"Student created succesfully",
            student:student
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error creating student",
            error: error.message
        })
    }
}) 


//get students api
app.get("/students",async(req,res)=>{
    try{
        const students=await studentModel.find()
        res.status(200).json(students)
    }
    catch(error){
        res.status(500).json({
            message:"Error getting students",
            error:error.message
        })
    }
})


//Get single student api



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})