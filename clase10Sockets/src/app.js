import express from 'express';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io';

import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();

const PORT = process.env.PORT||8080;

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`)); //Devuelve la config del servidor levantado

app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.static(`${__dirname}/public`))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',viewsRouter);


const socketServer = new Server(server);

socketServer.on('connection',(socketClient)=>{
    //¿Qué cosas ocurrirán con este socket? ¿Qué cosas le configuro?
    console.log(`Conectado un nuevo socket con id: ${socketClient.id}`)
})