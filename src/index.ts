interface Human {
    name: string;
    age: number;
    gender: string;
}


const person = {
    name: "yesdoing",
    age: 28,
    gender: "male"
};



const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are the ${person.gender}!`;
};

console.log(sayHi(person));

export {};