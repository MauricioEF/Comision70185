const socket = io();
const chatBox = document.getElementById('chatbox');

chatBox.addEventListener('keyup',(event)=>{
    if(event.key==="Enter"){
        //si sí, puedo enviar el mensaje!!! 
        socket.emit("message",chatBox.value);
        chatBox.value="";
    }
})




//Listener
socket.on('log',data=>{
    const p = document.getElementById('log');
    p.innerHTML = data;
})








//Enviar evento al servidor.
socket.emit('saludito',"Holaaaaa");

//Socket events
socket.on('respuesta',data =>{
    console.log(data);
})


//POR CADA ON, HAY UN EMIT, POR CADA EMIT, HAY UN ON DEL OTRO LADO.

//PARA UN EMIT -> EQUIVALENTE ON