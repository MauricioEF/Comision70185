class TicketManager {
    #ticketFee = 0.15;
    constructor(){
        this.events = [];
    }

    getEvents = () =>{
        return this.events;
    }
    
    addEvent = (title,place,price,capacity=50,date = new Date().toLocaleDateString()) =>{
        const newEvent = {
            title,
            place,
            price: price+price*this.#ticketFee,
            capacity,
            date,
            participants: []
        }
        if(this.events.length===0){
            newEvent.id = 1;
        }
        else {
            newEvent.id = this.events[this.events.length-1].id + 1;
        }
        this.events.push(newEvent);
        return newEvent.id;
    }

    addParticipant = (eventId,userId) => { //Supongamos que ya hay un manager de usuarios creando usuarios
        const eventIndex = this.events.findIndex(e=>e.id == eventId);
        //Si findIndex no encuentra algo, devuelve -1
        if(eventIndex == -1){ //Significa que el evento no existe
            console.log("Evento no existe");
            return false;
        }
        const userRegistered = this.events[eventIndex].participants.includes(userId);
        if(userRegistered){
            console.log("El usuario ya está registrado");
            return false;
        }
        //Sólo aquí agrego al participante
        this.events[eventIndex].participants.push(userId);
        return true;
    }
}

const manager = new TicketManager();
console.log(manager.getEvents());
manager.addEvent("Evento feliz","Lugar feliz",200);
manager.addEvent("Nuevo evento","Nuevo lugar",500,100,'06/22/2025');
manager.addParticipant(1,1);
console.log(manager.getEvents());