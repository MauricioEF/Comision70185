import fs from 'fs';

const PATH = './users.json';

class UsersManager {

    async getUsers(){
        try{
            if(fs.existsSync(PATH)){//Sí puedo leer
                const data = await fs.promises.readFile(PATH,'utf-8');//Sabemos que se va a leer como una string plana
                return JSON.parse(data);//Éste sí me debería devolver el arreglo.
            }else{//La entidad de usuarios es nueva.
                return [];
            }
        }catch(error){
            console.log(error);
        }
    }
    async createUser(user){
        try{      
            //Yo no puedo agregar un usuario sin saber de mis otros usuarios.
            const users = await this.getUsers();
            //A partir de ahora, YO SÉ que si users viene vacía, es porque será mi primer usuario
            if(users.length===0){
                user.id = 1
            }else{
                user.id = users[user.length-1].id + 1;
            }
            users.push(user);
            //Ahora sí, escribo en el archivo.
            await fs.promises.writeFile(PATH,JSON.stringify(users,null,'\t'));
        }catch(error){
            console.log(error);
        }
    }
}

const env = async() =>{
    const userManager = new UsersManager();
    // const newUser = {
    //     firstName:"Diego",
    //     lastName:"Volpe",
    //     age:38,
    //     course:"Backend"
    // }
    // await userManager.createUser(newUser);
    const users = await userManager.getUsers();
    console.log(users);
}
env();