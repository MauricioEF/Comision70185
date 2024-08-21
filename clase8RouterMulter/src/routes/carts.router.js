import { Router } from "express";

const cartsRouter = Router();

cartsRouter.post('/',async (req,res)=>{
    //EL BODY DEBE VENIR VACÍO
    //EL CARRITO SIEMPRE SE CREARÁ VACÍO
    //id autogenerado
    //[]
})

cartsRouter.post('/:cid/product/:pid',async(req,res)=>{
    //Extraer los parámetros
    const {cid,pid} = req.params;
    const {quantity} = req.body;
    //Supongamos el producto pid:4

    /**
     * Pregúntate:
     * 
     *¿Debería dejar pasar...?
     * 1. Un carrito que no existe
     * 2. Un producto que no existe
     * 3. Si el producto ya existe. ¿Cómo lo vas a controlar?
     */
})