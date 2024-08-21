import { Router } from "express";

import uploader from "../middlewares/uploader.js";
const usersRouter = Router();

usersRouter.get('/',(req,res)=>{
    //req.query
    console.log(req);
    res.send("Users");
})
usersRouter.get('/:uid',(req,res)=>{
    //req.params
    res.send("Users");
})

usersRouter.post('/',uploader.single('file'),(req,res)=>{
    //req.body
    console.log(req.file)
    console.log(req.body);
    res.send("Users");
})

usersRouter.put('/:uid',(req,res)=>{
    res.send("Users");
})
usersRouter.delete('/',(req,res)=>{
    res.send("Users");
})

export default usersRouter;