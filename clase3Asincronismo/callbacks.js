// const botoncito = document.getElementById('botoncito');

// const sayHi = ()=>{
//     console.log("Hola");
// }
// const sayBye = () =>{
//     console.log("Adiós");
// }

// botoncito.addEventListener('click',sayBye)
// //En cuanto yo doy click, el botón EJECUTA la función que yo le paso por parámetro, no importa cuál sea

const array = [1,2,3,4,5];

// const multiplyByTwo = val=>val*2
// const result = array.map(multiplyByTwo);
// console.log(result);

const customMapFunction = (array,callback) => {
    let resultArray = [];
    for(let i=0;i<array.length;i++){
        resultArray.push(callback(array[i]))
    }
    return resultArray;
}

const resultArray = customMapFunction(array,(val)=>val*2);
console.log(resultArray);