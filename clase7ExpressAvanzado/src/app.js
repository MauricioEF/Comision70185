import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.use(express.json());

const users = [];

app.get('/users',(req,res)=>{
    //¿Cuál sería su intención? : Obtener usuarios
    res.send({users});
})

app.post('/users',(req,res)=>{
    //¿Cuál sería su intención? : Añadir o Crear un usuario
    const {firstName,lastName,id} = req.body;
    //Valido el cuerpo de la petición
    if(!firstName||!lastName){
        return res.status(400).send({status:"error",error:"Incomplete values"});
    }
    const newUser = {
        id,
        firstName,
        lastName
    }
    users.push(newUser);
   // res.send({status:"success",message:"User created", id});
    res.sendStatus(201); //Created
})

app.put('/users/:uid',(req,res)=>{
    //¿Cuál sería su intención? : Actualizar un usuario
    const {uid} = req.params;
    const {firstName, lastName} = req.body;
    const userIndex = users.findIndex(u=>u.id===uid);
    if(userIndex === -1){
        return res.status(400).send({status:"error",error:"User doesn't exist"})
    }
    users[userIndex] = {...users[userIndex],firstName,lastName};

    res.send({status:"success",message:"User updated"});
})

app.delete('/users/:uid',(req,res)=>{
    //¿Cuál sería su intención? : Borrar un usuario
    const {uid} = req.params;
    const userIndex = users.findIndex(u=>u.id===uid);
    if(userIndex === -1){
        return res.status(400).send({status:"error",error:"User doesn't exist"})
    }
    users.splice(userIndex,1);
    res.sendStatus(204);
})