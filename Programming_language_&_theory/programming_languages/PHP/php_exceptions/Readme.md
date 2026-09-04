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


## &#10162; Error Handling And Debugging:
Error handling is an essential practice in web applications to ensure the reliability and robustness of the applications. Error handling involves identifying and managing various levels of errors that occur during the execution of the code, while debugging involves finding and fixing the root cause of these errors.

### &#9780; Overview:
1. [Identifying Errors](#-identifying-errors)
2. [Debugging Techniques](#-debugging-techniques)
3. [Error Levels](#-error-levels)
4. [Log Levels](#-log-levels)
5. [Logging to a File](#-logging-to-a-file)
6. [Logging to a Database](#-logging-to-a-database)
7. [Error Logging Formats](#-error-logging-formats)
8. [Key Points](#-key-points)
9. [Log Rotation](#-log-rotation)

### &#10022; Identifying Errors:
- Error Reporting:
  - `error_reporting()` to control the level of errors reported.
  - `ini_set()` to configure error reporting settings in `php.ini`.
```php
error_reporting(E_ALL); // report error at all level
error_reporting(E_ERROR | E_WARNING); // report errors of warnings and severe errors
ini_set('display_errors', 1); // displays error in the browser
ini_set('log_errors', 1); // preserve logs for the error in separate files
```
- Print Statements: Use `echo`, `print_r`, or `var_dump` to display the values and messages to the browser.
- Try-Catch Blocks: It is a fundamental error handling mechanism to anticipate and handle potential exceptions.

```php
try {
    // Code that might throw an exception
    $result = 10 / 0; // This will throw a DivisionByZeroError
} catch (DivisionByZeroError $e) {
    echo "Error: " . $e->getMessage();
}
```

### &#10022; Debugging Techniques:
- `error_log()`: Function to log errors to a system log, email, or file.
- Custom error handlers: Handling errors with custom error handlers in a specific way.
  ```php
  set_error_handler("myErrorHandler");

  function myErrorHandler($errno, $errstr, $errfile, $errline) {
      // Handle the error by display an error message and or log it for debugging
  }
  ```
- `trigger_error()`: This function can be used to trigger custom errors at required places.

### &#10022; Error Levels:
PHP provides different levels of errors to categorize it based on their severity.

- Error Levels:
	- E_USER_NOTICE: A user-generated notice message that is similar to an E_NOTICE.
	- E_USER_WARNING: A user-generated warning message that is similar to an E_WARNING.
	- E_USER_ERROR: A user-generated error message that is similar to an E_ERROR.
	- E_NOTICE: A runtime notice, but the script continuously executes.
	- E_WARNING: A non-fatal error that does not halt script execution.
	- E_PARSE: A parsing error that occurs during the parsing of the script.
	- E_ERROR: A fatal error that causes a script termination.

*Example:*
```php
// Set error reporting to all levels of errors
error_reporting(E_ALL);

// Triggers an E_ERROR
$x = 10 / 0;

// Triggers an E_WARNING
$y = 10 / 0.0;

// Triggers an E_NOTICE
$z = $undefined_variable;

// Triggers a user-defined error
trigger_error("This is a custom error", E_USER_ERROR);
```

### &#10022; Log Levels:
- Debug:
	- Purpose: Detailed information for developers to troubleshoot issues.
	- Example: Logging values, function arguments, and return values.
	- Use Case: During development and testing to track the working flow.

- Info:
	- Purpose: General information about the application state.
	- Example: Logging successful login attempts, API calls, or system startup/shutdown.
	- Use Case: Monitoring the overall health and performance of the application.

- Warning:
	- Purpose: Indicates a potential problem that may not immediately cause an error.
	- Example: Logging a missing configuration file, a deprecated function usage, or a potential security vulnerability.
	- Use Case: Alerting developers to potential issues that need to be addressed.

- Error:
	- Purpose: Indicates a serious error that prevents the application from functioning correctly.
	- Example: Database connection failures, file system errors, or unexpected exceptions.
	- Use Case: Triggering alerts or notifications to system administrators.

- Critical:
	- Purpose: Indicates a critical error that requires immediate attention.
	- Example: Application crashes, data corruption, or security breaches.
	- Use Case: Triggering alerts and notifications to system administrators and developers.

### &#10022; Logging to a File:

```php
function logError($message) {
    $logFile = 'error.log';
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = $timestamp . ' - ' . $message . PHP_EOL;

    file_put_contents($logFile, $logMessage, FILE_APPEND);
}

// Example usage:
try {
    // Code that might throw an exception
} catch (Exception $e) {
    logError($e->getMessage());
}
```

### &#10022; Logging to a Database:

```php
function logErrorToDatabase($message) {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $db->prepare("INSERT INTO error_log (instant_at, message) VALUES (?, ?)");    
    $stmt->execute([date('Y-m-d H:i:s'), $message]);
    $db->close();
}
```

### &#10022; Error Logging Formats:
- Basic Format:
```
[Timestamp] [Level] [Message]
```
*Example:*
```
2023-11-07 10:23:45 INFO: Application started
```
- Detailed Format:
```
[Timestamp] [Level] [Message] [File] [Line]
[Timestamp] [Level] [Process ID] [Thread ID] [Message] [Context]
```

*Example:*
```
2024-11-07 12:24:23 ERROR: Division by zero in file: index.php on line 15
2024-11-07 12:24:23 ERROR [123] [5641] Database connection failed: Connection refused [Context: user_login]
```
- Structured Log Format (JSON):
```json
{
    "timestamp": "2024-11-07 12:24:23",
    "level": "ERROR",
    "message": "Database connection failed",
    "file": "db.php",
    "line": 53,
    "context": {
        "query": "SELECT * FROM users WHERE username=:username",
        "parameters": ["kumar"],
        "error_code": 5020
    }
}
```
- Choosing the Right Format:
	- Basic Format: Simple and easy to read, suitable for basic logging.
	- Detailed Format: Provides more context, helpful for debugging and analysis.
	- Structured Log Format: Machine-readable, ideal for log analysis tools.


### &#10022; Key Points:
When preserving a log, follow the key points for future debug.
- Timestamp: Include a timestamp in the log to identify the time of the occurrence.
- Error Level: Include a different levels of severity (e.g., debug, info, warning, error, critical) to filter and analyze logs.
- Error Message: Log a detailed error message.
- Error Context: Include additional information like the file name, function name and line number at the error occurred.
- Security: Ensure that the error log is not accessible by others.
- Rotation: Implement a log rotation strategy to manage log file size and prevent over disk space usage.

### &#10022; Log Rotation:
To manage log files and their size in disk space. To prevent them from growing indefinitely by implementing log rotation. This mechanism automatically creates new log files and deleting old logs. 

*Syntax: `rotate_log()`*

*Example:*
```php
$log_file = 'error.log';
$max_size = 1048576; // 1 MB

if (filesize($log_file) > $max_size) {
    rotate_log($log_file);
}
```

*Example: Custom rotate log function*
```php
function rotateLog($logFile) {
    $maxFileSize = 1048576; // 1 MB
    $maxLogFiles = 5;

    if (file_exists($logFile) && filesize($logFile) >= $maxFileSize) {
        // Rename the current log file to a backup
        $backupFile = $logFile . "." . date('YmdHis');
        rename($logFile, $backupFile);

        // Delete old log files
        $logDir = dirname($logFile);
        $logFiles = glob($logDir . "/*.log*");
        if (count($logFiles) > $maxLogFiles) {
            arsort($logFiles);
            array_splice($logFiles, $maxLogFiles);
            foreach ($logFiles as $file) {
                unlink($file);
            }
        }
    }
}

// Example usage:
$logFile = "error.log";
rotateLog($logFile);
```

---
[&#8682; To Top](#-error-handling-and-debugging)

[&#10094; Previous Topic](./include-and-require-statements.md) &emsp; [Next Topic &#10095;](./classes-and-objects.md)

[&#8962; Goto Home Page](../README.md)

