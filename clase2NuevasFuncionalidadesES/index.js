//ES7

// console.log(2**4); // 2 x 3    -> 2 x 2 x 2 x 2 ... n veces

// console.log([1,2,3,4,5].includes(6));

// ES8
// const product = {   // key : value
//     title:'Producto feliz',
//     description:'Es un producto muy feliz',
//     price:200,
//     code:"Aasd67c9A9d",
// }

// const requiredPropertiesForEmail = {
//     title:true,
//     description:true,
//     offer:true
// }



// console.log(Object.keys(product)); // Más utilizada.
// console.log(Object.values(product));
// console.log(Object.entries(product));



// Object.keys(requiredPropertiesForEmail).map(property=>{
//     if(product[property]){

//     }else{
//         console.log(`Falta ${property} En el producto`)
//     }
// })


//ES9

// const fruits = ['apple','banana'];
// const otherProducts = ['bread','meat','pan'];

// const cart = [...fruits, ...otherProducts];

// let personalProperties = {
//     firstName:'Rodolfo',
//     lastName:'Perez',
//     age:39,
// }

// const otherProperties = {
//     hobby:'MTB',
//     job:'Backend Developer'
// }

// personalProperties = { ...personalProperties, ...otherProperties};


// console.log(personalProperties);

// const person = {
//     firstName:"Matías",
//     lastName:"Facetti",
//     aeg:28,
//     friends: {
//         exists:true
//     }
// }
// const {firstName,lastName, age,...rest} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(rest);


// ES10

// const address = " Calle feliz etc etc           a";

// console.log(address.trim().length);


// const coordinates = 
// [
//     12,
//     13,
//     196,
//     [12,2,3],
//     1,
//     [1,3],
//     5
// ]
// console.log(coordinates.flat());

// ES11

// const comments = ""; //Si está en false significa CASADO

// const result = comments ?? "OPCION SELECCIONADA INVALIDA"; // Respeta falseys, Sólo rechaza null o undefined

// console.log(result);

class Person {
    firstName;
    #fee = 1.05; //Estas variables únicamente viven en la instancia y sólo pueden ser
    //Colocadas o usadas mediante algún método

    getEarnings(){
        //Validar si sí le puedo devolver las ganancias o no.
        return this.#fee;
    }
}

const person = new Person();

console.log(person);