class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const yesdoing = new Human("yesdoing", 28, "male");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are the ${person.gender}!`;
};

console.log(sayHi(yesdoing));

export {};