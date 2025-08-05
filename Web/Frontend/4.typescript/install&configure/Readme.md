# Install and Configure

To install and configure TypeScript in your project, you need to perform the following steps:

- Initialize npm in your project directory by running the following command:

```bash
npm init
```

- Install TypeScript as a project dependency by running the following command:

```bash
npm install --save-dev typescript
```

- Create a `tsconfig.json` file in your project directory to specify the compiler options for building your project. For example:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "exclude": ["node_modules"]
}
```

- Compile your TypeScript code using the following command:

```bash
npx tsc
```

Note: You can also compile individual TypeScript files by specifying the file path after the tsc command. For example:

```bash
npx tsc ./src/index.ts
```

## tsconfig.json

tsconfig.json is a configuration file in TypeScript that specifies the compiler options for building your project. It helps the TypeScript compiler understand the structure of your project and how it should be compiled to JavaScript. Some common options include:

- `target`: the version of JavaScript to compile to.
- `module`: the module system to use.
- `strict`: enables/disables strict type checking.
- `outDir`: the directory to output the compiled JavaScript files.
- `rootDir`: the root directory of the TypeScript files.
- `include`: an array of file/directory patterns to include in the compilation.
- `exclude`: an array of file/directory patterns to exclude from the compilation.

Given below is the sample `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

## Compiler Options

TypeScript compiler accepts a number of command line options that allow you to customize the compilation process. These options can be passed to the compiler using the `--` prefix, for example:

```bash
tsc --target ES5 --module commonjs
```

## Running TypeScript

To run TypeScript code, you'll need to have a TypeScript compiler installed. Here's a general process to run TypeScript code:

- Write TypeScript code in a `.ts` file (e.g. `app.ts`)
- Compile the TypeScript code into JavaScript using the TypeScript compiler:

```bash
tsc app.ts
```

- Run the generated JavaScript code using a JavaScript runtime environment such as Node.js:

```bash
node app.js
```

## tsc

`tsc` is the command line tool for the TypeScript compiler. It compiles TypeScript code into JavaScript code, making it compatible with the browser or any JavaScript runtime environment.

You can use the `tsc` command to compile your TypeScript code by running the following command in your terminal or command prompt:

```bash
tsc
```

This command will compile all TypeScript files in your project that are specified in your `tsconfig.json` file. If you want to compile a specific TypeScript file, you can specify the file name after the `tsc` command, like this:

```bash
tsc index.ts
```

The `tsc` command has several options and flags that you can use to customize the compilation process. For example, you can use the `--target` option to specify the version of JavaScript to compile to, or the `--outDir` option to specify the output directory for the compiled JavaScript files.

You can run `tsc --help` to see a list of all the available options and flags.

## ts-node

ts-node is a TypeScript execution and REPL for node.js, with source map and native ESM support. Learn more from the following links:

## TS Playground

The TypeScript Playground is a great tool to learn TypeScript. It allows you to write TypeScript code and see the JavaScript output. It also allows you to share your code with others.
