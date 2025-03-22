class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age;    
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an Object (Instance)
const person1 = new Person("John", 25);
// const person2 = new Person("Alice", 30);

person1.greet();