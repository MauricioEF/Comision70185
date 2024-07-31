//Sync : Una tarea no puede comenzar hasta que haya finalizado la tarea anterior.
//Operación Bloqueante.

function a() {
    console.log(1); // :D
    b();
    console.log(2);//:D //3.5sec
}

function b(){
    console.log(3); // :D 
    c();
    console.log(4); //:D 2.2sec
}

function c(){
    console.log(5); // :D 1.2
}


a();