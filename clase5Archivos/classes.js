class User {
    firstName;
    lastName;
    age;
    email;
}

class UserManager {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return this.users;
    }

    getUserById(userId) {
        //Buscar usuario y devolverlo.
    }

    createUser(user){
        //le asigno un id basado en los otros usuarios
    }
    updateUser(userId,user){
        //el usuario de userId, cámbiale el nombre
    }
    deleteUser(userId){

    }
}