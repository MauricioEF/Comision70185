//clave = key
//valor = value
/**
 * obj = {
 * key : value
 * }
 * [1,2,1,3,3,1,4,1,1,5]
 * 
 * result = {
 *   1 : 5,
 *   2 : 1,
 *   3 : 2,
 *   4 : 1,
 *   5 : 5
 * }
 */

const obj = {};

for(let i = 0;i<10000;i++){
    let randomNumber = Math.floor(Math.random()*20 + 1);
    if(!obj[randomNumber]){//Entra, si la clave no existe
        obj[randomNumber] = 1;
    }else{ // El objeto ya contaba con esa clave
        obj[randomNumber]++;
    }
}
console.log(obj);
let max = obj['1'];
console.log(max);

Object.keys(obj).forEach(number=>{
    if(obj[number]>max){
        max = obj[number]
    }
})

console.log(max);


const firstName = "Nombre";

export default firstName;