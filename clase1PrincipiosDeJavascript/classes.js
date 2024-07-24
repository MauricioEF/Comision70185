class Person {
    constructor(firstName,lastName,age,likesVegetables){
        //Todo esto se llaman "PROPIEDADES"
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.alive = true;//Hardcoded;
        this.likesVegetables = likesVegetables;
        this.friends = ['Roberto Carlo'];
    }

    //Métodos
    getName = () => {
        return `${this.firstName} ${this.lastName}`;
    }

    getFriends(){
        return this.friends;
    }

    addFriend(friend){
        if(friend=="Roberto Carlo") {
            console.log("Roberto ya es amigo de todos");
            return;
        }
        this.friends.push(friend);
        console.log("Nuevo amigo agregado");
    }

    introduce = () =>{
        console.log(`Hola, soy ${this.firstName} ${this.lastName}`)
    }
    eat = (meal) => {
        if(meal==="vegetables" && !this.likesVegetables){
            console.log(`Yo no como vegetales`)
        }else{
            console.log(`Comiendo ${meal}`)
        }
    }
}

const person1 = new Person("Julian","Diaz",20,true);
const person2 = new Person("Gisela","Calderón",25,false);

// person1.introduce();
// person2.introduce();

// person1.eat('vegetables');
// person2.eat('vegetables');


// let nameResult = person1.getName();
// nameResult = "papa"
// console.log(nameResult);
// person1.introduce();

person1.addFriend('Roberto Carlo');
person2.addFriend('Santiago Bertoli');
const person2Friends =  person2.getFriends();


console.log(person2Friends);

const person1Friends = person1.getFriends();

console.log(person1Friends);