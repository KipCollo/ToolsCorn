# Files Handling

The `include` keyword will search for the file and attempt to include it in the program.If the file does not exist, the program will continue. The `include_once `keyword is similar to the include. However, it makes an additional check to discover if the file has already been imported. If it has, it ignores the request (does not produce an error). include would produce errors if the file has already been imported.
The `require` keyword is similar to the include keyword. However, if the file does not exist, an error will be produced. The `require_once` keyword is similar to the require keyword with the additional check to not load the file if it has already been loaded.

## Working with Files
