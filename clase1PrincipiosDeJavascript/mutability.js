const person = {
     firstName: "Renzo",
     lastName: "Ferreira"
}

Object.freeze(person);

person.firstName = "Renzito";

person.age = 24;

// person = {
//     firstName:"Lucas",
//     lastName:"Gimenez"
// }

console.log(person);