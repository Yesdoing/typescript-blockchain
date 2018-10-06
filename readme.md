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