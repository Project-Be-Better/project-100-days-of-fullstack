#### Initialize the npm repo

```bash
npm init -y
```

#### Install code dependencies

```bash
npm install --save-dev typescript @types/node
npx tsc --init
```

#### Install vitest

```bash
npm install --save-dev vitest
```

#### Setting the package.json file and running the test

Add these to the package.json files. We can use the `test:watch` command to run the vitest in continuous mode so that it will run every time a file is changed in the dev environment

```json
"scripts": {
"build": "tsc",
"test": "vitest",
"test:watch": "vitest --watch"
},
```
