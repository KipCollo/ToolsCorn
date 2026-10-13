# Deployment

There are 2 methods:-

1. Copy/paste Deployment - Large sizes of node_modules and bundlers.
2. Using Angular CLI to build app for production.

Optimization Techniques:

1. Minification - Removing comments and white spaces.
2. Uglification - Renaming long descriptive variables and methods to short names.
3. Bundling - Combining multile files into one large file.
4. Dead code elimination - Removing any code not useful in application,third party libraries not used.
5. Ahead-of-time(AOT) compilation - Precompiling components and their templates.

We can use `ng build --prod` produces highly optimized bundles, following the above optimization techniques.

`ng build` - Compiles an Angular application or library into an output directory named dist/ at the given output path.


## Linting

Linter - A program that can be configured with various rules and the perfomes static anlysis of your code to see if you've violated the rules.Ensures your code is claen and consistent.Useful when in a team.
In angular,`tslint` is used for linting.

```bash
ng lint
ng lint --fix
```

You can also install extension on vscode for linting- TSLint.


`ng deploy`:-