# Exceptions

PHP has an exception model similar to that of other programming languages. An exception can be thrown, and caught ("catched") within PHP. Code may be surrounded in a try block, to facilitate the catching of potential exceptions. Each try must have at least one corresponding catch or finally block.

If an exception is thrown and its current function scope has no catch block, the exception will "bubble up" the call stack to the calling function until it finds a matching catch block. All finally blocks it encounters along the way will be executed. If the call stack is unwound all the way to the global scope without encountering a matching catch block, the program will terminate with a fatal error unless a global exception handler has been set.

The thrown object must be an instanceof Throwable. Trying to throw an object that is not will result in a PHP Fatal Error.

As of PHP 8.0.0, the throw keyword is an expression and may be used in any expression context. In prior versions it was a statement and was required to be on its own line.

## catch
A catch block defines how to respond to a thrown exception. A catch block defines one or more types of exception or error it can handle, and optionally a variable to which to assign the exception. (The variable was required prior to PHP 8.0.0.) The first catch block a thrown exception or error encounters that matches the type of the thrown object will handle the object.

Multiple catch blocks can be used to catch different classes of exceptions. Normal execution (when no exception is thrown within the try block) will continue after that last catch block defined in sequence. Exceptions can be thrown (or re-thrown) within a catch block. If not, execution will continue after the catch block that was triggered.

When an exception is thrown, code following the statement will not be executed, and PHP will attempt to find the first matching catch block. If an exception is not caught, a PHP Fatal Error will be issued with an "Uncaught Exception ..." message, unless a handler has been defined with set_exception_handler().

As of PHP 7.1.0, a catch block may specify multiple exceptions using the pipe (|) character. This is useful for when different exceptions from different class hierarchies are handled the same.

As of PHP 8.0.0, the variable name for a caught exception is optional. If not specified, the catch block will still execute but will not have access to the thrown object.

## finally 

A finally block may also be specified after or instead of catch blocks. Code within the finally block will always be executed after the try and catch blocks, regardless of whether an exception has been thrown, and before normal execution resumes.

One notable interaction is between the finally block and a return statement. If a return statement is encountered inside either the try or the catch blocks, the finally block will still be executed. Moreover, the return statement is evaluated when encountered, but the result will be returned after the finally block is executed. Additionally, if the finally block also contains a return statement, the value from the finally block is returned.

Another notable interaction is between an exception thrown from within a try block, and an exception thrown from within a finally block. If both blocks throw an exception, then the exception thrown from the finally block will be the one that is propagated, and the exception thrown from the try block will be used as its previous exception.

## Global exception handler

If an exception is allowed to bubble up to the global scope, it may be caught by a global exception handler if set. The set_exception_handler() function can set a function that will be called in place of a catch block if no other block is invoked. The effect is essentially the same as if the entire program were wrapped in a try-catch block with that function as the catch.

