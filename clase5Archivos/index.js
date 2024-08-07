import fs from 'fs';

//Write
//  const a = "Hola";
//  fs.writeFileSync('./firstFile.txt',""+a);

//Read
// const content = fs.readFileSync('./firstFile.txt','utf-8');
// console.log(content);

//Update
// fs.appendFileSync('./firstFile.txt',"hola mamá");

//Convención de actualización: Leo, actualizo DESDE UNA VARIABLE, luego escribo todo
// let content = fs.readFileSync('./firstFile.txt','utf-8');
// content+= " mundo";

// fs.writeFileSync('./firstFile.txt',content);

//Delete
// fs.unlinkSync('./firstFile.txt');