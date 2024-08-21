import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/',(req,res)=>{
    res.send("Products")
})
productsRouter.post('/',(req,res)=>{
    res.send("Products")
})
productsRouter.put('/',(req,res)=>{
    res.send("Products")
})

productsRouter.delete('/',(req,res)=>{
    res.send("Products")
})

export default productsRouter;