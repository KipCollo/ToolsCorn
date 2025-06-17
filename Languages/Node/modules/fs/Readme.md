# Working with Files

You can programmatically manipulate files in Node.js with the built-in `fs` module. The name is short for “file system,” and the module contains all the functions you need to read, write, and delete files on the local machine.

## Fs module

File System or fs module is a built in module in Node that enables interacting with the file system using JavaScript. All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules.

## path module

The `path` module provides utilities for working with file and directory paths. It's built-in to Node.js core and can simply be used by requiring it.

## process.cwd()

The `process.cwd()` method returns the current working directory of the Node.js process.

## Glob

The glob pattern is most commonly used to specify filenames, called wildcard characters, and strings, called wildcard matching.

## \_\_dirname

The `__dirname` in a node script returns the path of the folder where the current JavaScript file resides. `__filename` and `__dirname` are used to get the filename and directory name of the currently executing file.

## \_\_filename

The `__filename` in Node.js returns the filename of the executed code. It gives the absolute path of the code file. The following approach covers implementing `__filename` in the Node.js project.
