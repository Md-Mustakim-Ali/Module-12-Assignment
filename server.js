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


app.