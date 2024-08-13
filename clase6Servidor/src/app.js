import express from 'express';

const app = express(); //Inicializada mi app

const PORT = 8080;

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

//Cuando yo reciba un GET 

app.get('/',(request,response)=>{ //ENDPOINT
    response.send("Hola Express");
})

const users = [
    {
        id:1,
        firstName:"Diego",
        lastName:"Volpe"
    },
    {
        id:2,
        firstName:"Diego",
        lastName:"Almonte"
    },
    {
        id:3,
        firstName:"Anna",
        lastName:"Gomez"
    },
    {
        id:4,
        firstName:"Federico",
        lastName:"Gomez"
    }
]

app.get('/users',(req,res)=>{
    console.log(req.query);
    const {name} = req.query;
    if(!name){ //No estoy buscando nada, así que devuelvo a todos
        return res.send({
            users:users
        });
    }
    else{
        //En caso de que sí, tengo que FILTRAR mis usuarios acorde con el nombre
        const filteredUsers = users.filter(u=>u.firstName === name)
        return res.send({
            users:filteredUsers
        })
    }
})

//uid = userId
app.get('/users/:uid/',(req,res)=>{
    try{
        console.log(req.params)
        const {uid} = req.params;
        const userId = parseInt(uid);
        const user = users.find(u=>u.id === userId);
        if(user){
            res.send(user);
        }else {
            res.send("Usuario no encontrado");
        }
    }catch(error){
        res.send("Algo tronó");
    }
})


app.get('/pets',(request,response)=>{
    return response.send("Aquí te devolveré una mascota")
})

app.get('/movies',(request,response)=>{
    return response.send("Devolviendo películas...")
})