import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get('/',(req,res)=>{
    res.render('Home');
})

export default viewsRouter;