// try-catch
// async - await 
//Solicita que una promesa ocurra dentro de un ENTORNO ASÍNCRONO
const divide = (numerator,denominator) => {
    return new Promise((resolve,reject)=>{
        //me puede pasar letras u otras cosas
        if(typeof numerator !=="number" ||typeof denominator !== "number"){
            reject("Ambos valores tienen que ser numéricos");
        }
        if(denominator === 0) {
            reject("No se puede dividir por 0");
        }
        resolve(numerator/denominator);
    })
}

const context = async() => {
//Que un contexto sea asíncrono, signifca que todas las tareas las voy a poder ESPERAR
//de manera explícita.
    try{
        const result = await divide(100,50);

    }catch(error){
        console.log(error);
    }
}


context();


// async function b(){
    
// }