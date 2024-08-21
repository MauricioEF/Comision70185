//Este middleware va a mostrar en consola TODAS las peticiones que caigan
//Además, guardará los datos en req.

const receptorMiddleware = (req,res,next) =>{
    console.log(`Método ${req.method} en URL: ${req.url}`)
    //Prohibir la llegada
    //return res.send("PROHIBIDO")
    req.choripan = `Método ${req.method} en URL: ${req.url}`;
    next(); //Siempre que necesite avanzar al siguiente middleware
}

export default receptorMiddleware;