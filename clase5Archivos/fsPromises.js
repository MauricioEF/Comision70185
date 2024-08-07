import fs from 'fs';

const env = async() =>{
    const mockUsers = [
        {
            id:1,
            firstName:"Lucas",
            lastName:"Gimenez"
        },
        {
            id:2,
            firstName:"Federico",
            lastName:"Cubesino"
        }
    ]
    try{
        await fs.promises.writeFile('./firstPromisesFile.json',JSON.stringify(mockUsers));
        const content = await fs.promises.readFile('./firstPromisesFile.json','utf-8');
        const user = JSON.parse(content);
        console.log(user);
    }catch(error){
        console.log(error);
    }
}

env();