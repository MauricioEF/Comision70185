import { Router } from "express";

const viewsRouter = Router();
const users = [
    {
        firstName:"Magali",
        lastName:"Moyano"
    },
    {
        firstName:"asda",
        lastName:"Moya1231no"
    },
    {
        firstName:"asdas",
        lastName:"Mzxcxcno"
    },
    {
        firstName:"M5757656ali",
        lastName:"yty"
    }
]
viewsRouter.get('/',(req,res)=>{
    
    res.render("Home",{
        css:'home.css',
        username: `Illeana`,
        users
    });
})

viewsRouter.get('/product',(req,res)=>{
    const product = {
        title:"producto triste :(",
        price:3000,
        code:"AZXC8A",
        offer:true
    }
    res.render("ProductDetails",{
        css:'product.css',
        product
    });
})

export default viewsRouter;