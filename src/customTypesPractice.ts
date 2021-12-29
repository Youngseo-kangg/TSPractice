class Dog {
  constructor(public name: string) {}
  sayHello(): string {
    return 'dog says hello';
  }
}
class Fish {
  constructor(public name: string) {}
  dive(howDeep: number): string {
    return `diving ${howDeep} feet`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return 'Fish cannot talk, sorry';
  }
}

const myDog = new Dog('sammy');
const myFish = new Fish('Nemo');

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
