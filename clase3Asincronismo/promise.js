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

console.log("Ejecutando una división");
console.log("Ejecutando una división");
console.log("Ejecutando una división");
console.log("Ejecutando una división");
console.log("Ejecutando una división");
console.log("Ejecutando una división");
console.log("Ejecutando una división");
console.log("Ejecutando una división");

divide(100,2)
.then(result=>{
    //Aquí me llega.
    console.log(result);
    /**
     * 
     * 
     * 
     * 
     * 
     */
    return result + 1; // Cada cosa que devuelva en una promesa, se convierte en otra
})
.then(result2=>{
    console.log(result2);
    return "papa";
})
.then(result3=>{
    throw new Error("OOPS algo salió mal hasta")
})
.catch((error)=>{
    //unico catch para n - thens
    console.log(error);
})

console.log("División finalizada");