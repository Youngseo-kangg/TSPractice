"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return 'dog says hello';
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    dive(howDeep) {
        return `diving ${howDeep} feet`;
    }
}
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry';
    }
}
const myDog = new Dog('sammy');
const myFish = new Fish('Nemo');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
