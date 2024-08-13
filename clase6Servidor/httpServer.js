import http from 'http';

const server = http.createServer((request,response)=>{
    console.log("Nueva petición recibida de algún cliente")
    response.end("Hola Backend");
});

server.listen(8080,()=>console.log("Listo el servidor en el puerto 8080"))