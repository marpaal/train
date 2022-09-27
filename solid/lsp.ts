// Author: Martín
// Example Liskov Substitution Principle

abstract class Animal {
    makeNoise() {
        console.log('I am making a noise');
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log('Guau guau!');
    }
}

class Cat extends Animal {
    makeNoise() {
        console.log('Meaw meaw!');
    }
}

class Rabbit extends Animal {
    // makeNoise() {
    //     throw new Error('The rabbit have to be quiet!');
    // }
}

export { Dog, Cat, Rabbit };