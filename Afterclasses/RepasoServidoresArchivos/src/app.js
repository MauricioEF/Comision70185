import express from "express";
import StudentsManager from "./managers/StudentsManager.js";

const app = express();

const PORT = process.env.PORT||8080;

const studentsManager = new StudentsManager();

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));


app.get('/students',async (req,res)=>{
    try{
        const query = req.query;
        console.log(query);
        const students = await studentsManager.getStudents(query);
        return res.send({students})
    }catch(error){
        console.log(error);
        return res.send("Cannot get Students")
    }
})

app.get('/students/:sid',async (req,res)=>{
    try{
        const {sid} = req.params;
        const parsedId = parseInt(sid);
        if(isNaN(parsedId)){//Me están tratando de hacer trampa
            return res.send("invalid Id")
        }
        const student = await studentsManager.getStudentById(parsedId)
        if(!student){
            return res.send("Student Not Found");
        }
        
        return res.send({student})
    }catch(error){
        console.log(error);
        return res.send("Cannot get student")
    }
})
