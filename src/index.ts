const sayHi = (name:string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are the ${gender}!`;
};

console.log(sayHi("yesdoing", 28, "male"));

export {};