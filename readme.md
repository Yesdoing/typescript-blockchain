### What is this project?
- Making TypeChain

#### How to start typescript?
1. yarn init
2. yarn add typescript
3. yarn tsc --init  // create tsconfig.json
4. if you don't exist "compilerOptions", "include", "exclude" in tsconfig.json, you add below code
    ```json
        {
            "compilerOptions": {
                "module": "commonjs",
                "target": "ES2015",
                "sourceMap": true
            },
            "include": [
                "index.ts"
            ],
            "exclude": [
                "node_modules"
            ]
        }
    ```
5. also, you add this code in package.json
    ```json
        // ...
        "dependencies": {
            "typescript": "^3.1.1"
        },
        "scripts": {
            "start": "node index.js",
            "prestart": "yarn tsc"
        },
        // ...
    ```

    1. if you wanna add tsc-watch --dev, ```yarn add tsc-watch --dev``` and write below code in package.json and tsconfig.json
        ```json
            // package.json
            // ...
            "dependencies": {
                "typescript": "^3.1.1"
            },
            "scripts": {
                "start": "yarn tsc-watch --onSuccess \" node dist/index.js\" "
            },
            // ...
        ```

        ```json
            // tsconfig.json
            {
                "compilerOptions": {
                    "module": "commonjs",
                    "target": "ES2015",
                    "sourceMap": true,
                    "outDir": "dist",
                },
                "include": [
                    "src/**/*"
                ],
                "exclude": [
                    "node_modules"
                ]
            }
        ```

    2. Before you start yarn, you have to make dir structure. ex) mkdir src and dist, also all ts file will exist src folder.


#### Typescript type && grammer
- assign parameter type 
```typescript
    const sayHi = (name:stirng, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are the ${gender}!`;
    };
```

- assign object type in interface
```typescript
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
```

- if you show interface in .js, you can use class.
```
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
```

#### I'm gonna make Blockchain!!
```
    class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor( index: number,
         hash: string,
         previousHash: string,
         data: string,
        timestamp: number) {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
        }
    }

    const genesisBlock:Block = new Block(0, "202020202020", "", "hello", 123456);

    let blockchain:[Block] = [genesisBlock];

    console.log(blockchain);

    export {};
```

- block chain is linked block like Array of Block

- making calculateBlockHash function 
    1. yarn add crypto-js && import crypto-js
    2. create function to use cryto-js
        ```
            static calculateBlockHash = (
                index: number,
                previousHash: string,
                timestamp: number, 
                data: string
            ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); 
        ```