# PHP Core APIs


## Super Globals

Super globals are built-in PHP variables that are available in all scopes of the scripts. It holds and provide access to various types of information. Including form data, session data, and server environment variables.

**GET Variable**:- It is used to collect form data sent with the GET method.

*Pros:*
- This can be bookmarked.

*Cons:*
- Limited data size.
- It is not suitable for sensitive data.
- Data is visible in the URL.

*Security Practices:*
- Sanitize and validate input to prevent attacks like XSS.

*Syntax: `$_GET['variable_name']`*

```php
if(isset($_GET['name'])){
  echo "Hello, " . $_GET['name'] . "!";
}
```

**POST Variable**:- It is used to collect form data sent with the POST method.

*Pros:*
- Data is not visible in the URL.
- It can handle large amounts of data.

*Cons:*
- It cannot be bookmarked.

*Security Practices:*
- Sanitize and validate input to prevent attacks like SQL injection and XSS.

*Syntax: `$_POST['variable_name']`*

```php
if(isset($_POST['name'])){
  echo "Hello, " . $_POST['name'] . "!";
}
```

**REQUEST Variable**:- It contains data from both GET and POST request methods.

*Pros:*
- It can be used to access data from both GET and POST requests.

*Cons:* 
- It is less secure than using `$_GET` and `$_POST` directly, as it can expose application to potential security risks.

*Syntax:*
```php
$name = $_REQUEST['name'];
```

**FILES Variable**:- It contains information about uploaded files after form submission.

*Pros:*
- It allows for file uploads and processing.

*Cons:* 
- It requires careful handling to prevent security vulnerabilities.

*Security Practices:*
- Validate and filters the file before and after upload. In order to, avoid any malicious file on the server. 

*Syntax:*
```php
$filename = $_FILES['file']['name'];
$tmp_name = $_FILES['file']['tmp_name'];
```

```html
<form action="upload.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>
```

**SESSION Variable**: It can stores data for a specific user session.

*Pros:*
- It can store large amounts of data.
- It can be used to track user sessions.

*Cons:*
- It requires session handling.
- Data is stored on the server.

*Security Practices:*
- Use strong session handling techniques to prevent session hijacking.

*Syntax: `$_SESSION['variable_name']`*

*Example:*
```php
session_start();
$_SESSION['user_name'] = 'Kumar';
```

**COOKIE Variable**:- It can stores data on the user's computer.

*Pros:*
- It can be used to store user preferences.

*Cons:*
- It can be manipulated by the user.
- It can store limited storage space.

*Security:*
- Set secure flags and expiration times for cookies.

*Syntax: `$_COOKIE['variable_name']`*

```php
// Cookie expires in 12 hour
setcookie("user_theme", "dark", time() + 43200); 
```

**SERVER Variable**:- It contains information about the server environment, such as headers, paths, and script locations.

*Pros:*
- It contains server informations
- Mainly used for debugging and troubleshooting purpose
- Security checks purpose such as verify that origin of requests with it

*Cons:*
- If it is not handled carefully, it will expose sensitive server information

*Security Practices:*
- Check and verify the usage of this variable, to avoid sensitive information leak

*Syntax:*
```php
// Returns server address name
$server_name = $_SERVER['SERVER_NAME']; // localhost
// Returns server software 
$server_software = $_SERVER['SERVER_SOFTWARE']; // PHP 8.1.2 Development Server
// Returns current PHP script file name
$filename = $_SERVER['PHP_SELF']; // test.php
// Returns user's ip address
$ip_address = $_SERVER['REMOTE_ADDR']; // ::1 
// Returns request method
$request_method = $_SERVER['REQUEST_METHOD']; // GET
// Returns server protocol
$server_protocol = $_SERVER['SERVER_PROTOCOL']; // HTTP/1.1
// Returns complete path of the PHP script path
$script_filename = $_SERVER['SCRIPT_FILENAME']; // C:\xampp\htdocs\test.php
```

**ENV Variable**:- It contains an associative array of variables passed to the script via the environment. These are set outside the PHP script, typically by the web server or operating system.

*Pros:*
- These are not directly exposed in the source code.
- It can easily change environment variables without modifying the script itself.
- It often used for configuration settings, allowing to switch between different environments (e.g., development, staging, production).

*Cons:*
- It might not be available in all environments, especially when running scripts locally.
- Managing environment variables become complex in large-scale applications.

*Security Practices:*
- Avoid storing highly sensitive information like API keys or passwords directly in environment variables. Consider, more secure methods like configuration files or secrets management tools.
- Ensure that only accessible to authorized users or processes.
- Keep system and libraries up-to-date to address security vulnerabilities related to environment variable handling.

*Example:*
```php
// Assuming the DATABASE_URL is set to "mysql://user:password@host/database"
$dbUrl = $_ENV['DATABASE_URL'];

// Parse the database URL
$dbConfig = parse_url($dbUrl);

// Connect to the database with PDO
$dsn = "mysql:host={$dbConfig['host']};dbname={$dbConfig['path']}";
$pdo = new PDO($dsn, $dbConfig['user'], $dbConfig['pass']);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
```


## Forms and Data Handling

PHP and web forms can be used to carry out the following tasks:
1. Pass data from a form to a PHP script
2. Validate form data
3. Work with multivalued form components
4. Take advantage of PEAR: the HTML_QuickForm2 package

**Creating Forms**:- Creating HTML forms with action and method. Which are used to collect user input and required data.

```html
<form action="process.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br>
  <button type="submit">Submit</button>
</form>
```

**Handling Forms**:- After the form submission, the user input or data need to be handled properly. First that data needs to be validated then sanitized further process.

```php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Process the data, e.g., store in a database, send an email
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email;
}
```

There are two common methods for passing data from one script to another: GET and POST.Although GET is the default, you’ll typically want to use POST because it’s capable of handling considerably more data, an important characteristic when you’re using forms to insert and modify large blocks of text. If you use POST, any posted data sent to a PHP script must be referenced using the $_POST.

For example, suppose the form contains a text-field value named email that looks like this:

```htm
<input type="text" id="email" name="email" size="20" maxlength="40" />
```

Once this form is submitted, you can reference that text-field value like so:

```php
$email = $_POST['email'];
```

**Validating and Sanitizing Data with the Filter Extension**:- Because data validation is such a commonplace task, the PHP development team added native validation features to the language in version 5.2. Known as the Filter extension, you can use these new features to not only validate data such as an e-mail addresses so it meets stringent requirements, but also to sanitize data, altering it to fit specific criteria without requiring the user to take further actions.
To validate data using the Filter extension, you’ll choose from one of seven available filter types,passing the type and target data to the filter_var() function.

For instance, to validate an e-mail address you’ll pass the FILTER_VALIDATE_EMAIL flag as demonstrated here:

```php
$email = "john@@example.com";
if (! filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "INVALID E-MAIL!";
}
```

The Filter Extension’s Validation Capabilities:-
1. Boolean values - FILTER_VALIDATE_BOOLEAN
2. E-mail addresses - FILTER_VALIDATE_EMAIL
3. Floating-point numbers - FILTER_VALIDATE_FLOAT
4. Integers - FILTER_VALIDATE_INT
5. IP addresses - FILTER_VALIDATE_IP
6. Regular Expressions - FILTER_VALIDATE_REGEXP
7. URLs - FILTER_VALIDATE_URL

You can further tweak the behavior of these seven validation filters by passing flags into the filter_var() function. For instance, you can request that solely IPV4 or IPV6 IP addresses are provided by passing in the FILTER_FLAG_IPV4 or FILTER_FLAG_IPV6 flags, respectively:

```php
$ipAddress = "192.168.1.01";
if (filter_var($ipAddress, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)){
    echo "Please provide an IPV6 address!";
}
```

*Input Validation*:
Input or Data validation ensures that user input or data meets specific criteria and is in the correct and required format.

`Techniques`:
- Client-Side Validation:
	- `HTML5 Form Validation`: use attributes like `accept`, `required`, `pattern`, `min`, `max`, etc., to enforce basic validation rules before form submit.
	- `JavaScript`: use functions or logic to validate input before it's sent to the server.

- Regular Expressions: helps to match specific patterns.
   ```php
   if (preg_match("/^[a-zA-Z ]+$/", $_POST['name'])) {
       // Name is valid
   }
   ```
- Built-in Validation Functions:
   - `is_numeric()`: Checks if a variable is numeric.
   - `is_int()`: Checks if a variable is an integer.
   - `is_float()`: Checks if a variable is a float.
   - `is_string()`: Checks if a variable is a string.
   - `ctype_alpha()`: Checks if a string contains only alphabetic characters.
   - `is_array()`: Checks if a variable is an array.
   - `is_bool()`: Checks if a variable is a boolean.
- Custom Validation Functions: custom functions to validate specific requirements, such as password strength or email format.
```php
function validateForm() {
    $name = trim($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $password = $_POST['password'];

    if (empty($name) || empty($email) || empty($password)) {
        echo "Please fill all the fields.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
    } elseif (strlen($password) < 8) {
        echo "Password must be at least 8 characters.";
    } else {
        // Process the form data
    }
}
```

*Input Sanitization*:- Input or Data sanitization involves cleaning and filtering data to remove harmful or malicious code or unwanted part from it.

`Techniques`:
- `trim()`: Removes whitespace from the beginning and end of a string.
```php
$name = trim($_POST['name']);
```
- `strip_tags()`: Removes HTML and PHP tags from a string.
```php
$comment = strip_tags($_POST['comment']);
```
- `htmlspecialchars()`: Converts special characters into HTML entities.
```php
$message = htmlspecialchars($_POST['message']);
```
- `filter_var()`: Filters a variable with a specified filteration.
```php
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
```
- `prepared statements`: Secure approach to prevent SQL injections when working with databases.
```php
// Method 1
$statement = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$statement->execute([$sanitized_name, $sanitized_email]);

// Method 2
$statement = $pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
$statement->execute(array(':name' => $sanitized_name, ':email' => $sanitized_email));
```

*Filter Variable Flags*:

- `FILTER_VALIDATE_INT`: Validates an integer.
  ```php
  $int_value = filter_var("123dfg", FILTER_VALIDATE_INT);
  ```
- `FILTER_VALIDATE_FLOAT`: Validates a floating-point number.
  ```php
  $float_value = filter_var("3.14abc", FILTER_VALIDATE_FLOAT);
  ```
- `FILTER_VALIDATE_BOOL`: Validates a boolean.
  ```php
  $bool_value = filter_var("1", FILTER_VALIDATE_BOOL);
  ```
- `FILTER_VALIDATE_URL`: Validates a URL.
  ```php
  $url_value = filter_var("http://example.com/script?param=value", FILTER_VALIDATE_URL);
  ```
- `FILTER_VALIDATE_EMAIL`: Validates an email address.
  ```php
  $email_value = filter_var("user@example.com\n", FILTER_VALIDATE_EMAIL);
  ```
- `FILTER_VALIDATE_IP`: Validates an IP address.
  ```php
  $ip_value = filter_var("192.168.1.1", FILTER_VALIDATE_IP);
  ```
- `FILTER_SANITIZE_STRING`: Removes tags and extra whitespace.
  ```php
  $sanitized_string = filter_var("<p>Hello, world!</p>", FILTER_SANITIZE_STRING);
  ```
- `FILTER_SANITIZE_SPECIAL_CHARS`: Encodes special characters.
  ```php
  $sanitized_string = filter_var("<script>alert('XSS')</script>", FILTER_SANITIZE_SPECIAL_CHARS);
  ```
- Additional Flags:
	- `FILTER_FLAG_ALLOW_FRACTION`: Allows fractional numbers for FILTER_VALIDATE_FLOAT.
	- `FILTER_FLAG_ALLOW_THOUSAND`: Allows thousands separators for numbers.
	- `FILTER_FLAG_ALLOW_SCIENTIFIC`: Allows scientific notation.
	- `FILTER_FLAG_NO_ENCODE_QUOTES`: Prevents encoding of single and double quotes.

*Prevent Duplicate Form Submission*:- When a user submit a form, that form data has processed and shows a response page. If the user resubmit the form by going back to the previous form or page again with browser back navigation option, Then it will give possibilities to resubmit the form. That be a duplicate entry and cause a problem on application. 

`Different approaches to prevent this problem`:
- Server-side Token Validation:

    Generate validation token in session array
    ```php
    session_start();

    // Generate a unique token
    if (!isset($_SESSION['token'])) {
        $_SESSION['token'] = bin2hex(random_bytes(32));
    }
    ```

    Set validation token in the page or form
    ```html
    // set a hidden input field with validation token:
    <input type="hidden" name="token" value="<?php echo $_SESSION['token']; ?>">
    ```

    Validate token when reach action page
    ```php
    // PHP action script to handle form submission
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($_POST['token'] === $_SESSION['token']) {
            // Process the form data
            unset($_SESSION['token']); // Prevent duplicate submission
        } else {
            // Handle invalid token by displaying an error message
        }
    }
    ```

- Setting a header:
    
    Server side headers:
    ```php
    // Setting an expiry
    header("Expires: Fri, 01 Jan 2010 00:00:00 GMT"); //Date in the past
    ```

    ```php
    // Setting one of the cache control below 
    header("Cache-Control: private, must-revalidate, max-age=0");
    header("Cache-Control: no-store, no-cache, must-revalidate"); //HTTP/1.1    
    header("Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0"); //HTTP/1.1
    header("Pragma: no-cache");
    ```

    Client side headers:
    ```html
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="no-cache">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="Cache-Control" content="no-cache">
    ```

- Redirect After Submission (Post-Redirect-Get Pattern):
    - To avoid these kind of double post form submission or duplicate form submission by redirect completely to the new page as response. It is simply known as post / redirect / get pattern.
    - This pattern would not allow the form or page again resubmitted by visit back using go back navigation button.

    ```php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      // Process form data
      // redirect with 303 HTTP status code
      header('Location: thank-you.php', true, 303);
      exit;
    }
    ```

- Client-side JavaScript:
    
    Disable submit button:
    ```html    
    <form action="submit.php" method="post" onsubmit="disableSubmitButton()">
      <!-- ... --->
      <button type="submit" id="submitButton">Submit</button>
    </form>

    <script>
      function disableSubmitButton() {
        document.getElementById('submitButton').disabled = true;
      }
    </script>
    ```

    Refresh page: By checking event persisted or navigation type
    ```js
    window.addEventListener( "pageshow", function ( event ) {
      var isRevisited = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
      if ( isRevisited ) {        
        window.location.reload();
      }
    });
    ```

    ```js
    (function () {
        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        };
    })();
    ```


**Processing Data**:- Once the form data validated sanitized then it can be processed in various ways:
- Storing or updating data in a Database,
- Sending an response or email,
- Redirecting to another page.


---


## Date and Time
PHP provides a robust set of functions and classes to handle date and time related operations.

**Date Functions**:
- `date()` function:- It formats a local date and time.

`date(format, timestamp)`

```php
$date = date("Y-m-d H:i:s");
echo $date; // Output: 2024-11-22 12:53:00 (example)
```

- `getdate()` function:- The `getdate()` function returns an associative array of details like the year, month, day, hour, minute, second, weekday, and more for given timestamp.
- It accepts optional `timestamp` integer of Unix timestamp. If omitted, the current time is used.

```php
getdate(timestamp);
```

```php
$timestamp = time();
$date_array = getdate($timestamp);

echo "Year: " . $date_array['year'] . nl2br("\n");
echo "Month: " . $date_array['mon'] . nl2br("\n");
echo "Day: " . $date_array['mday'] . nl2br("\n");
echo "Hour: " . $date_array['hours'] . nl2br("\n");
echo "Minute: " . $date_array['minutes'] . nl2br("\n");
echo "Second: " . $date_array['seconds'] . nl2br("\n");
echo "Weekday: " . $date_array['weekday'] . nl2br("\n");
echo "Month Name: " . $date_array['month'] . nl2br("\n");
```

- `checkdate()` function:- It validates a given date.

`checkdate(month, day, year)`

```php
if (checkdate(11, 22, 2024)) {
    echo "November 22, 2024 is a valid date.";
}
```

- `idate()` function:- The `idate()` function is used to get specific parts of a date or time. It is useful for extracting individual components like the day, month, year, hour, minute, and second.
    - `format`: It accepts a single-character format specifier.
    - `timestamp`: It accepts second and optional Unix timestamp. If omitted, the current time is used.

```php
idate(format, timestamp);
```

```php
$year = idate('Y');
$month = idate('m');
$day = idate('d');

echo "Today is: " . $day . "/" . $month . "/" . $year;
```

- `gmdate()` function:- The `gmdate()` function is used to format a GMT/UTC date and time. It is similar to the `date()` function, but it always returns the time in GMT.
    - `format`: It accepts a format specifier. It uses the same format specifiers as the `date()` function.
    - `timestamp`: It accepts second and an optional integer Unix timestamp. If omitted, the current time is used.

```php
gmdate(format, timestamp);
```

```php
$gmt_date_time = gmdate("Y-m-d H:i:s");
echo $gmt_date_time; // Output: 2024-11-22 09:56:58 (GMT) (example)
```

- `getlastmod()` function:- The `getlastmod()` function is used to retrieve the last modification time of the current script. It returns a Unix timestamp and represents the elapsed seconds since the Unix epoch (January 1, 1970 00:00:00 GMT).

```php
int getlastmod(void)
```

```php
$last_modified = getlastmod();
// Format date and time
$formatted_date = date("F d, Y H:i:s", $last_modified);
echo "Last modified: " . $formatted_date; // Output: Last modified: November 22, 2024 15:29:55 (example)
```

**Time Functions**:

- `time() function`:- It returns the current Unix timestamp (seconds since the Unix epoch).

```php
$timestamp = time();
echo $timestamp; // Output: 1732260432 (example)
```

- `mktime()`:- It creates a Unix timestamp from specified date and time parameters.

`mktime(hour, minute, second, month, day, year)`

```php
$timestamp = mktime(12, 53, 00, 11, 22, 2024);
echo date("Y-m-d H:i:s", $timestamp); // Output: 2024-11-22 12:53:00 (example)
```

- `gmmktime()` function:- The `gmmktime()` function is used to get the Unix timestamp for a given GMT date. It is similar to `mktime()` function, but it always returns a GMT timestamp.

```php
int gmmktime(int $hour, int $minute, int $second, int $month, int $day, int $year, int $is_dst = -1);
```

```php
$timestamp = gmmktime(12, 30, 0, 11, 22, 2023);
echo $timestamp; // Output: 1700656200 (Unix timestamp)

// Format date and time:
$formatted_date = date('Y-m-d H:i:s', $timestamp);
echo $formatted_date; // Output: 2023-11-22 18:00:00
```

- `filemtime()` function:- The `filemtime()` function is used to retrieve the last modified time of a specified file. It returns a Unix timestamp and represents the elapsed seconds since the Unix epoch (January 1, 1970 00:00:00 GMT).
    - `filename`: The path to the file.
```php
int filemtime(string $filename)
```

```php
$filename = "article1.php";
$lastModified = filemtime($filename);
// Format date and time
$formattedDate = date("F d, Y H:i:s", $lastModified);
echo "Last modified: " . $formattedDate; // Output: Last modified: November 22, 2024 15:29:55 (example)
```

**DateTime Class**:- It represents a specific date and time. And it provides methods and features for time zones, intervals, format, compare and manipulating dates and times.

```php
$now = new DateTime();
echo $now->format('Y-m-d H:i:s'); // Output: 2024-11-22 08:28:58 (example)
```

DateTime class with timezone

```php
$datetime = new DateTime();
$datetime->setTimezone(new DateTimeZone('Asia/Kolkata'));
echo $datetime->format('Y-m-d h:i:s A'); // Output: 2024-11-22 01:22:11 PM (example)
```

Calculating date difference

```php
$date1 = new DateTime('2024-11-22');
$date2 = new DateTime('2025-01-01');
$interval = $date2->diff($date1);
echo $interval->days . " days"; // Output: 40 days
```

### &#10022; DateTimeImmutable Class:
It similar to `DateTime` class, but objects are immutable. And it is useful for preventing accidental modifications to date and time object.

*Example:*
```php
$now = new DateTimeImmutable();
echo $now->format('Y-m-d H:i:s'); // Output: 2024-11-22 08:28:58 (example)
```

### &#10022; DateInterval Class:
It represents a period of time between two dates or times. And it can be used to calculate differences between given dates.

*Example:*
```php
$Datetime = new Datetime('NOW', new DateTimeZone('Asia/Kolkata'));
$Datetime->add(DateInterval::createFromDateString('2 day'));

echo $Datetime->format("Y-m-d H:i:s"); // Output: 2024-11-24 15:44:05 (example)
```

### &#10022; DatePeriod Class:
It represents a sequence of dates and times. And it can be used to iterate over a range of dates or to create recurring events.

*Example:* Calculate Date Range
```php
$start_date = date_create("2024-12-01");
$end_date   = date_create("2025-01-01"); // If you want to include the last date or this date, add 1 day to it

// Create date interval
$interval = DateInterval::createFromDateString('1 day');
// Create date range based on start date, interval and end date
$daterange = new DatePeriod($start_date, $interval ,$end_date);

// Iterate date range
foreach($daterange as $date){
    echo $date->format('d-m-Y') . nl2br("\n");
}

// reverse the date range array
$daterange = array_reverse(iterator_to_array($daterange));

// Iterate date range
foreach($daterange as $date){
    echo $date->format('d-m-Y'). nl2br("\n");
}
```

**Formatting Dates and Times**:
- `date()` function accepts format specifiers to format dates and times.
- `DateTime` class uses `format()` method to give more flexibility and customization options.

*Common Format Specifiers:*
| Specifier | Description |
|---|---|
| `d` | Day of the month, 2 digits with leading zeros |
| `D` | Day of the week, textual, 3 letters (textual, Mon-Sun) |
| `j` | Day of the month without leading zeros |
| `l` | Day of the week, textual, full length (full textual, Sunday-Saturday) |
| `N` | ISO-8601 numeric representation of the day of the week (1 (Monday) to 7 (Sunday)) |
| `w` | Day of the week (0 (Sunday) to 6 (Saturday)) |
| `z` | Day of the year (0-365) |
| `W` | ISO-8601 week number of year, week starting on Monday (01-53) |
| `F` | Month name, full |
| `m` | Month number, with leading zeros |
| `M` | Month name, 3 letters (textual, Jan-Dec) |
| `n` | Month number without leading zeros |
| `t` | Number of days in the given month |
| `L` | Whether it's a leap year (1 if it is a leap year, 0 otherwise) |
| `Y` | Year with century (e.g., 2024) |
| `y` | Year without century (e.g., 24) |
| `a` | Lowercase AM or PM |
| `A` | Uppercase AM or PM |
| `B` | Swatch Internet Time (000 to 999) |
| `g` | 12-hour format of an hour without leading zeros (1-12) |
| `G` | 24-hour format of an hour without leading zeros (0-23) |
| `h` | 12-hour format of an hour with leading zeros (01-12) |
| `H` | 24-hour format of an hour with leading zeros (00-23) |
| `i` | Minutes |
| `s` | Seconds |
| `u` | Microseconds |
| `e` | Timezone identifier (e.g., UTC, EST, MST) |
| `T` | Timezone abbreviation (e.g., UTC, EST, MST) |
| `O` | Timezone offset in hours (+0200) |
| `Z` | Timezone offset in seconds (+07200) |

### &#10022; Parsing Relative Dates and Times:
*Example:*
```php
$now = strtotime('now');
$specificDate = strtotime('22 November 2024');
$tomorrow = strtotime('tomorrow');
$yesterday = strtotime('-1 day');
$nextWeek = strtotime('+1 week');
$lastMonth = strtotime('-1 month');
$lastSpecificDay = strtotime('last Tuesday');
$specificDay = strtotime('next Thursday')
$specificInterval = strtotime('+1 week 3 days 6 hours 50 seconds');
```

**Date and Time Constants**:
PHP provides built-in constants to represent common date and time format and values. Date and time constants are useful for various calculations and comparisons.

*Date and Time Constants:*
- `DATE_ATOM`: Atom format (YYYY-MM-DDTHH:MM:SS+00:00)
- `DATE_COOKIE`: Cookie format (Friday, 22-Nov-2024 14:48:45 GMT)
- `DATE_ISO8601`: ISO-8601 format (YYYY-MM-DDTHH:MM:SS+00:00)
- `DATE_RFC822`: RFC 822 format (Fri, 22 Nov 2024 14:48:45 +0100)
- `DATE_RFC850`: RFC 850 format (Friday, 22-Nov-24 14:48:45 GMT)
- `DATE_RFC1036`: RFC 1036 format (Friday, 22-Nov-24 14:48:45 GMT)
- `DATE_RFC1123`: RFC 1123 format (Fri, 22 Nov 2024 14:48:45 GMT)
- `DATE_RSS`: RSS format (Fri, 22 Nov 2024 14:48:45 +0100)
- `DATE_W3C`: W3C format (2024-11-22T14:48:45+01:00)

Use cases:
| Constant | Format | Use Case |
|---|---|---|
| `DATE_ATOM` | YYYY-MM-DDTHH:MM:SS+00:00 | Used in RSS feeds, Atom feeds, and other XML-based formats. |
| `DATE_COOKIE` | Friday, 22-Nov-2024 14:48:45 GMT | Used in HTTP cookies. |
| `DATE_ISO8601` | YYYY-MM-DDTHH:MM:SS+00:00 | International standard date and time format. |
| `DATE_RFC822` | Fri, 22 Nov 2024 14:48:45 +0100 | Used in email headers and other RFC 822 compliant formats. |
| `DATE_RFC850` | Friday, 22-Nov-24 14:48:45 GMT | Older RFC format. |
| `DATE_RFC1036` | Friday, 22-Nov-24 14:48:45 GMT | Older RFC format. |
| `DATE_RFC1123` | Fri, 22 Nov 2024 14:48:45 GMT | More recent RFC format. |
| `DATE_RSS` | Fri, 22 Nov 2024 14:48:45 +0100 | Used in RSS feeds. |
| `DATE_W3C` | 2024-11-22T14:48:45+01:00 | W3C standard date and time format. |

```php
$date = date(DATE_RFC822);
echo $date; // Output: Fri, 22 Nov 24 14:51:58 +0530 (example)

$now = time();
echo date(DATE_ATOM, $now) . nl2br("\n"); // Output: 2024-11-22T14:55:24+05:30 (example)
echo date(DATE_COOKIE, $now) . nl2br("\n"); // Output: Friday, 22-Nov-2024 14:55:24 IST (example)
echo date(DATE_ISO8601, $now) . nl2br("\n"); // Output: 2024-11-22T14:55:24+0530 (example)
```

**Timezones**:- Time zones are geographic regions that has uniform standard time on the region. PHP has built-in functions and classes to handle time zones.

- Setting Timezone: 

It sets default timezone for all date and time functionalities.

*Syntax:*

`date_default_timezone_set()`

*Example:*
```php
date_default_timezone_set('Asia/Kolkata');
```

- Get list of timezones: 

It returns a list of all supported timezones.
*Syntax:*

`timezone_identifiers_list()`

*Example:*
```php
$timezones = timezone_identifiers_list();
print_r($timezones);
```

- Represent a timezone: 

It represents a specific timezone. It can be used to create `DateTime` objects with specific timezones.

*Syntax:*

`DateTimeZone('Timezone')`

*Example:*
```php
$timezone = new DateTimeZone('Asia/Kolkata');
$dateTime = new DateTime('now', $timezone);
echo $dateTime->format('Y-m-d h:i:s A'); // Output: 2024-11-22 01:22:11 PM (example)
```
- Converting Between Timezones:

```php
$dateTime = new DateTime('now', new DateTimeZone('America/Los_Angeles'));
echo $dateTime->format('Y-m-d h:i:s A'); // Output: 2024-11-21 11:56:23 PM (example)
echo nl2br('\n');
$dateTime->setTimezone(new DateTimeZone('Asia/Kolkata'));
echo $dateTime->format('Y-m-d h:i:s A'); // Output: 2024-11-22 01:26:23 PM (example)
```

- Daylight Saving Time (DST): 

Handles DST transitions for specific timezone using the `getOffset()` method.

*Example:*
```php
$dateTime = new DateTime('now', new DateTimeZone('Asia/Kolkata'));
$offset = $dateTime->getOffset();
echo $offset; // Output: 19800 (in seconds)
```

- Time Difference between Two Timezones:

*Example:*
```php
// Timezone 1
$timezone1 = new DateTimeZone('Asia/Kolkata');
$datetime1 = new DateTime('now', $timezone1);

// Timezone 2
$timezone2 = new DateTimeZone('America/Los_Angeles');
$datetime2 = new DateTime('now', $timezone2);

// Calculate the difference
$interval = $datetime1->diff($datetime2);

// Extract hours and minutes
$hours = $interval->h;
$minutes = $interval->i;

echo "Time difference: $hours hours $minutes minutes";
```

### &#10022; Key Points:
- Explicit Timezone Setting: Always set the default timezone or specify timezones when handling date and time related process to avoid unexpected behavior.
- Consider Daylight Saving Time (DST): Use DST transitions and their impact on calculations.
- Use Appropriate Timezone Identifiers:Refer IANA Time Zones for accurate timezone identifiers.
- Validate User Input: When working with user-provided dates, time and timezones, Validate data to prevent any unexpected imperfections and vulnerabilities.


## Numbers and Currencies

PHP can handle and format numbers as well as currencies in different ways.

### &#10022; Number Formats:
PHP provides various functions to format the numbers.

- `number_format()` function:

This function formats a number with grouped thousands separators.

*Syntax:*

`number_format(number, decimal_places, decimal_separator, thousands_separator);`
- `number`: It is a first parameter as a number to format.
- `decimal_places`: It is second and optional parameter as a number of decimal places.
- `decimal_separator`: It is third and optional parameter as a decimal separator character.
- `thousands_separator`: It is fourth and optional parameter as a thousands separator character.

*Example:*
```php
$number = 1234567.89;
$formatted_number = number_format($number, 2, '.', ',');
echo $formatted_number; // Output: 1,234,567.89
```

- `sprintf()` function:

This function provides more flexible with various formatting options using format specifiers.

*Example:*
```php
$number = 1234567.89;
$formatted_number = sprintf("%.2f", $number);
echo $formatted_number; // Output: 1234567.89
```

Refer format specifier in [display statements](./display-statements.md).

### &#10022; Currency Formats:
PHP provides various functions to format the currencies.

- `money_format()` function:

This function formats a number as a currency value by considering the locale settings. But it remove after PHP version `7.0`.

- `NumberFormatter` class:

This provides more advanced formatting capabilities for numbers including currency formatting.

*Example:*
```php
$formatter = new NumberFormatter('en_US', NumberFormatter::CURRENCY);
$formatted_amount = $formatter->formatCurrency(1234.56, 'USD');
echo $formatted_amount; // Output: $1,234.56
```


## Headers

Headers are pieces of information sent from the server to the client browser before the actual content. It control and decides how the browser to react and displays the content.

### &#10022; Setting a Header:
PHP provides the `header()` function to send headers. It is important to set and sent headers before any output is sent to the browser.

### &#10022; Common Headers:
PHP provides common and different usages of header:
- Content-Type: Specifies the MIME type of the content is sent.
  ```php
  header('Content-Type: text/html');
  ```
- Location: Redirects the user browser to a specified URL. and Important to add exit statement at end of the header for redirect to avoid continuous execution of the script. 
  ```php
  // redirect to page1 
  header('Location: page1.php');
  exit;
  // redirect to external site
  header('Location: https://www.example-host.com');
  exit;
  ```
- Set-Cookie: Sets a cookie.
  ```php
  header('Set-Cookie: name=value; expires=Wed, 01 Jan 2025 00:00:00 GMT; path=/');
  ```
- Cache-Control: Controls browser caching.
  ```php
  header('Cache-Control: no-cache, no-store, must-revalidate');
  ```
- Expires: Sets an expiration date for the content.
  ```php
  header('Expires: Wed, 01 Jan 2025 00:00:00 GMT');
  ```

*Example:*
```php
header('Content-Type: text/html');
header('Cache-Control: no-cache, no-store, must-revalidate');

echo '<h1>Welcome, User!</h1>';
```

- Important Considerations:
	- `Header Sending Order`: Headers must be set and sent before any output is sent to the user browser. Because, it throws an error that headers are already sent.
	- `Output Buffering`: Send headers correctly when using `ob_start()` and `ob_end_flush()`.
	- `HTTP Status Codes`: Send appropriate HTTP status codes to indicate the status of the request.
	- `Security Headers`: Implement required security headers such as `X-Frame-Options`, `X-XSS-Protection`, and `Content-Security-Policy` to prevent and protect application from attacks.

### &#10022; Content Type:
This headers are used to specify the MIME media type of the resource being sent to the user browser. This information allows the browser to control and interpret to display the content correctly.

- Text-based Content:
	- Plain Text:
   ```php
   header('Content-Type: text/plain');
   ```
	- HTML:
   ```php
   header('Content-Type: text/html');
   ```
	- CSS:
   ```php
   header('Content-Type: text/css');
   ```
	- JavaScript:
   ```php
   header('Content-Type: text/javascript');
   ```

- Application-based Content:
	- JSON:
   ```php
   header('Content-Type: application/json');
   ```
	- PDF:
   ```php
   header('Content-Type: application/pdf');
   ```
	- XML:
   ```php
   header('Content-Type: application/xml');
   ```

- Image-based Content:
	- JPEG:
   ```php
   header('Content-Type: image/jpeg');
   ```
	- PNG:
   ```php
   header('Content-Type: image/png');
   ```
	- GIF:
   ```php
   header('Content-Type: image/gif');
   ```

- Additional Considerations:
	- Character Encoding: To specify the character encoding using the `charset` parameter:
  ```php
  header('Content-Type: text/html; charset=utf-8');
  ```
	- File Download: To force the browser to download a content as file using the `Content-Disposition` header:
  ```php
  header('Content-Type: application/pdf');
  header('Content-Disposition: attachment; filename="document.pdf"');
  ```
  - Caching: Set `Cache-Control` and `Expires` headers to control browser caching.
  ```php
  header('Cache-Control: max-age=3600');
  header('Expires: ' . gmdate('D, d M Y H:i:s \G\M\T', time() + 3600));
  ```

### &#10022; Redirection:
To redirect user browser to a specified URL. This is achieved by setting the `Location` property in header. and It is important to set exit statement after header statement.

- Basic Redirection:
```php
header("Location: page2.php"); // it redirect via relative URL
exit;
header("Location: https:// ". $_SERVER["HTTP_HOST"] ."/page2.php"); // it redirect via absolute URL
exit;
header('Location: https://www.example-host.com'); // redirect to external URL
exit;
```

- Temporary and Permanent Redirects:
To specify the type of redirect using different status codes:
	- Temporary redirect can be possible by set and send `302 Found` status code. The original URL is still accessible.
	- Permanent redirect can be possible by set and send `301 Moved Permanently` status code. The original URL is no longer accessible.

```php
// Temporary redirect
header('Location: https://www.example-host.com', true, 302);

// Permanent redirect
header('Location: https://www.example-host.com', true, 301);
```

- Redirecting Based on Conditions:

```php
if ($userIsLoggedIn) {
    header('Location: dashboard.php');
} else {
    header('Location: login.php');
}
```

- Redirecting After Form Submission:

```php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form data
    header('Location: success.php');
    exit;
}
```

- Best Practices for Redirects:
	- `Exit Statement`: Important to add `exit` statement, When using redirect Location type in header.
	- `Status Code`: Send the correct status code based on the nature of the redirect. When redirect it sends `302` status code to the browser by default, but use redirect with `303` status code that has cacheable never and always prefers `get` request method. Which is used to avoid double entry problem with resubmission of form.
	- `Avoid unnecessary redirects`: Too many redirects that can affects the application performance.
	- `Test redirects`: Ensure that redirects that works as expected to point correctly in different browsers and environments.
	- `Consider user experience`: Provide clear informative messages before and during redirects.
	- `Security`: Be cautious with redirects to avoid security vulnerabilities like open redirects.

### &#10022; Cache Control:
These are HTTP headers that control cache resources on the browsers. It is crucial for optimizing website performance and reducing server load.

- Common Cache Control Headers:
	- *Cache-Control:*
	   	- max-age: It specifies the expiry of a resource in seconds.
	   	- s-maxage: It specifies the expiry of a resource for shared caches.
	   	- public: It allows any cache to store the resource.
	   	- private: It allows only the user browser to cache the resource.
	   	- no-cache: It prevents caching of the resource.
	   	- no-store: It prevents the resource to stored on any cache.
	   	- must-revalidate: The cache should validate the resource with the origin server before use it.
		
	- *Expires:* It sets content expiry, It specifies an absolute expiration date for the resource.
	- *Last-Modified:* It sets content modified, It specifies the last modification date of the resource.

```php
header('Cache-Control: public, max-age=3600'); // Cache for 1 hour
header('Expires: ' . gmdate('D, d M Y H:i:s \G\M\T', time() + 3600));
```

### &#10022; Order of Usage:
Once PHP sends output to the browser, it cannot possible to send headers. This lead to unexpected behavior and errors. It may able to send multiple headers to the browsers. 

- General Order:
	- `Status Code Header`: Sets the HTTP status code, such as 200 OK, 404 Not Found, or 302 Found.
	- `General Headers`: Provide general information about the resource, such as `Date`, `Server`, and `Connection`. Example: `header('Date: ' . gmdate('D, d M Y H:i:s \G\M\T'));`
	- `Request Headers`: Provide information about the request, such as `Accept`, `User-Agent`, and `Referer`. These are usually sent by the client, not the server.
	- `Response Headers`: Provide information about the response, such as `Content-Type`, `Content-Length`, `Cache-Control`, and `Expires`.
	- `Cookie Headers`: Set cookies for the browser.

- Common Mistakes:
	- `Accidental Output`: Even a single space or newline space before the `header()` function can lead error and prevent it from working.
	- `Including Files`: Including files with output content before the header send can cause error.
	- `Incorrect use of output buffers`: If it is not used correctly, output buffering can interfere with header.

- Best Practices:
	- `Send Headers Early`: Send headers as soon as possible in the script, before any output is generated.	   
	- `Check for Output`: Use the `headers_sent()` function to check if any output has been sent.
	- `Header Order`: Use multiple headers in the proper order.

*Example:*
```php
// Send headers before any output send
header('Content-Type: text/html');
header('Cache-Control: no-cache');

// output content
echo 'Welcome, user!';
```

### &#10022; Headers with Output Buffers:
It is important to use header correctly in output buffers.

- Start Output Buffering:
   ```php
   ob_start();
   ```
- Send Headers:
   ```php
   header('Content-Type: text/html');
   header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
   ```
- Generate Content:
   ```php
   echo '<h1>Welcome, user!</h1>';
   ```
- Flush Output Buffer:
   ```php
   ob_end_flush();
   ```

*Example:*
```php
ob_start();

// Set headers
header('HTTP/1.1 200 OK');
header('Content-Type: text/html');

// Generate HTML content
include 'page1.php'

ob_end_flush();
```

### &#10022; Security Headers:
It sent to a browser to enhance the security of a web application. By setting these headers, To mitigate various security vulnerabilities, such as cross-site scripting (XSS), clickjacking, and others.

- Common Security Headers:
	-	Content-Security-Policy (CSP): It restricts a browser to load the resources and It helps to prevent XSS attacks.
   ```php
   header('Content-Security-Policy: default-src \'self\'; script-src \'self\'');
   ```
	- X-Frame-Options: It controls a page to load in an iframe or not and It helps to prevent clickjacking attacks.
   ```php
   header('X-Frame-Options: DENY'); // Disallow iframes
   // or
   header('X-Frame-Options: SAMEORIGIN'); // Allow iframes from the same origin
   ```
	- X-XSS-Protection: It controls the browser to enable built-in XSS protection mechanisms.
   ```php
   header('X-XSS-Protection: 1; mode=block');
   ```
	- Strict-Transport-Security (HSTS): It forces the browsers to only connect to the website using HTTPS.
   ```php
   header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
   ```
	- Referrer-Policy: It controls how much referrer information to sent with requests.
   ```php
   header('Referrer-Policy: no-referrer'); // Don't send any referrer information
   ```

---
[&#8682; To Top](#-headers)

[&#10094; Previous Topic](./numbers-and-currencies.md) &emsp; [Next Topic &#10095;](./http-status-code.md)

[&#8962; Goto Home Page](../README.md)



## Sessions:
A session is a way to store information about a user interaction with a website across multiple page requests. It allows to maintain information and state between requests, such as user preferences, login status, or temporary items such as a shopping cart, a wish list.

### &#10022; Need and Usage:
- Authentication and Authorization: Keep track of user login status and permissions.
- Personalized Experience: Tailor the website content and layout based on the user preferences.
- Temporary Items: Maintain a user wish such as a shopping cart items.
- User Tracking: Keep track of a user activity across multiple pages.

### &#10022; Creating Session:
To create session in PHP by start a session, this initiates a session and associates it with the current user browser.

```php
session_start();
```

### &#10022; Storing Data In Session:
To store data in the session using, `$_SESSION` [super global](./super-globals.md):

```php
$_SESSION['username'] = 'Kumar';
$_SESSION['user_id'] = 64156487876;
```

### &#10022; Retrieving Data From Session:
To Access the stored data in session using, `$_SESSION` [super global](./super-globals.md):

```php
echo "Welcome, " . $_SESSION['username'];
```

### &#10022; Removing Session Data:
To remove data from session use, `unset()` function:

```php
unset($_SESSION['username']);
```

### &#10022; Destroying Session:
To destroy session use, `session_destroy()` function:

```php
session_destroy();
```

But before destroying session, That require some important steps for secure session destruction. First, Empty or clean the session array variable. Second, Remove session cookie for the current session. Finally, use `session_destroy()` function.
```php
// mention the session_name("name") if initially, it was created.
// start session
session_start();

// Unset the session array
$_SESSION = array();

// If it need to destroy the session, then it required to delete the session cookie as well.
// It removes cookie related to current session
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finally, destroy the session
session_destroy();
```

### &#10022; Pros:
 - User Tracking
 - Personalized Experience
 - Secure Authentication

### &#10022; Cons:
 - Security Risks: If session is not handled properly, then it can be vulnerable to attacks like session hijacking.
 - Performance Overhead: Sessions can add overhead to the application, especially for large-scale applications make some difference.

### &#10022; Functions Related To Session:
- `session_start()`: Initiates a new session or resumes an existing one.
- `session_regenerate_id()`: Regenerates the session ID.
- `session_name()`: Gets or sets the session name.
- `session_id()`: Gets or sets the session ID.
- `session_save_path()`: Gets or sets the session save path.
- `session_cache_limiter()`: Sets the session cache limiter.
- `session_cache_expire()`: Sets the session cache expire time.
- `session_unset()`: Removes all session variables.
- `session_destroy()`: Destroys the current session.

### &#10022; Constants Related To Session:
- `SID`: Constants that contains the session ID.

### &#10022; Configuration Flags Related To Session:
- `session.auto_start`: Determines if the session is automatically started at the beginning of each script.
- `session.name`: Sets the session name.
- `session_save_path`: Sets the directory path where session data is stored.
- `session.cookie_path`: Sets the path for the session cookie.
- `session.cookie_domain`: Sets the domain for the session cookie.
- `session.cookie_secure`: Sets whether the session cookie should only be transmitted over HTTPS.
- `session.cookie_lifetime`: Sets the expiry time of the session cookie in seconds.
- `session.use_only_cookies`: Prevents the session ID transmission through URL parameters.

### &#10022; Different Session Handling Techniques
- Built-in PHP Session Handling:
   - Simple to use and widely supported.
   - Configure session settings using `session_start()` and `session_set_cookie_params()`.

- Database based Sessions Handling:
   - More secure as session data is stored in a database.
   - Complex implementation.

- Custom Session Handling:
   - Provides greater flexibility but requires careful session handling implementation.
   - Involves storing session data in a different storage mechanism (e.g., database, file system).

### &#10022; Secure Session Handling:
```php
session_start();

// Regenerate session ID on each page load as required
session_regenerate_id(true);

// Set secure cookie parameters
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);

// Check if the user is logged in
if (isset($_SESSION['user_id'])) {
    // User is logged in
    echo "Welcome, " . $_SESSION['username'];
} else {
    // User is not logged in
    header("Location: login.php");
    exit;
}

// ... rest of the code
```

### &#10022; Strong Session Name:
This is a unique identifier for session variables that makes it harder for attackers to guess or brute-force the session ID. This is a crucial and important security measure in session handling to protect user sessions.

*Example:*
```php
session_name('my_secure_session_name');
// strong unpredictable random name that used to create session in the name mentioned
session_start();
```

### &#10022; Session Handlers:
It is a mechanism that allows to customize session data handling. By default, PHP uses files to store session data on the server, but it can be customized to use databases, memcached, or other storage systems.

- Need for session handler:
	- Scalability: For high-traffic websites, database-based sessions can offer better performance and scalability.
 	- Security: Custom handlers can be robust security measures, such as encryption and token-based authentication.
	- Flexibility: It gives possibilities to tailor the session handling to the specific needs, such as implementing custom session expiration policies or data retention strategies.

### &#10022; Example For Custom Session Handlers:

- Define the Handler Functions: Define following functions to handle session operations,
   - `session_open()`
   - `session_close()`
   - `session_read()`
   - `session_write()`
   - `session_destroy()`
   - `session_gc()`

- Register the Handler: using the function `session_set_save_handler()`.

*Example: Database-Based Session Handler*

```php
function session_open() {
		try {
	    // Connect to the database
	    $dsn = "mysql:host=" . $dbhost . ";dbname=" . $dbname;            
	    $db =  new PDO($dsn, $dbusername, $dbpassword);
	    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
		} catch (PDOException $e) {
			print "Error " . $e->getMessage() . PHP_EOL;
      die(); 
    }

    return true;
}

function session_close() {
    $GLOBALS['db']->close();
    return true;
}

function session_read($id) {
    $query = "SELECT session_data FROM sessions WHERE session_id = :session_id";
    $stmt = $GLOBALS['db']->prepare($query);
    $stmt->execute(array(':session_id' => $id));
    if ($GLOBALS['db']->rowCount() > 0) {
    		$row = $GLOBALS['db']->fetchAll();        
        return $row['session_data'];
    }
    return '';
}

function session_write($id, $data) {
    $query = "INSERT INTO sessions (session_id, session_data) VALUES (:session_id, :session_data_old) ON DUPLICATE KEY UPDATE session_data = :session_data";
    $stmt = $GLOBALS['db']->prepare($query);
    $stmt->execute(array(':session_id' => $id, ':session_data_old' => $data, ':session_data' => $data));
    return true;
}

function session_destroy($id) {
    $query = "DELETE FROM sessions WHERE session_id = :session_id";
    $stmt = $GLOBALS['db']->prepare($query);
    $stmt->execute(array(':session_id' => $id));
    return true;
}

function session_gc($maxlifetime) {
    $query = "DELETE FROM sessions WHERE session_time < :session_time";
    $time = time() - $maxlifetime;
    $stmt = $GLOBALS['db']->prepare($query);
    $stmt->execute(array(':session_time' => $time));
    return true;
}

// Register the custom session handler
session_set_save_handler(
    "session_open",
    "session_close",
    "session_read",
    "session_write",
    "session_destroy",
    "session_gc"
);

// Start the session
session_start();
```

*Example: Class based session handler* 
Create a class that implements the `SessionHandlerInterface`. This interface defines required methods for a session handler:
 ```php
class CustomSessionHandler implements SessionHandlerInterface {
   public function open($save_path, $session_name) {
       // Connect to the storage system (e.g., database, file)
       // ...
       return true;
   }

   public function close() {
       // Close the connection to the storage system
       // ...
       return true;
   }

   public function read($session_id) {
       // Retrieve session data from the storage system
       // ...
       return $data;
   }

   public function write($session_id, $session_data) {
       // Store session data in the storage system
       // ...
       return true;
   }

   public function destroy($session_id) {
       // Delete session data from the storage system
       // ...
       return true;
   }

   public function gc($maxlifetime) {
       // Clean up expired sessions
       // ...
       return true;
   }
}
 
// Register the Handler:
session_set_save_handler(new CustomSessionHandler());
session_start();
```
*Example: Class based session handler with database based storage system.* 

```php
class DatabaseSessionHandler implements SessionHandlerInterface {
    private $pdo;

    public function __construct($dsn, $username, $password) {
        $this->pdo = new PDO($dsn, $username, $password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    // Implement the remaining and required methods (open, close, read, write, destroy, gc)
    // using PDO to interact with the database. For example:

    public function read($session_id) {
        $stmt = $this->pdo->prepare('SELECT data FROM sessions WHERE session_id = ?');
        $stmt->execute([$session_id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row['data'] ?? '';
    }

    // ... other methods ...
}

// Register the database session handler
$dsn = 'mysql:host=localhost;dbname=my_database';
$handler = new DatabaseSessionHandler($dsn, $username, $password);
session_set_save_handler($handler);
session_start();
```

### &#10022; Protecting Against Session Fixation:
It is a type of attack where an attacker tricks a user with a specific session ID, allowing them to hijack the user session.

*Some techniques to mitigate the risk:*
- Session Regeneration:
	Regularly regenerate the session ID: This makes harder to predict and exploit the session ID. Implement it after user authentication to further strengthen security.
	
*Example:*
```php
session_start();
// Regenerate session ID after login
if ($logged_in) {
    session_regenerate_id(true);
}
```

- Secure Cookie Settings:
	`HttpOnly` Flag prevents client-side scripts from accessing the session cookie, prevents attackers to steal or manipulate it. `Secure` Flag ensures that the cookie is only sent over HTTPS connections.

*Example:*
```php
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
```

- Strong Session IDs:
	Use a strong random alpha numeric generator for generate custom session IDs. To avoid predictable patterns in session IDs.

---


## Cookies:
It is a small text file stored on a users computer by a web server. It contains information about the user interaction and preferences with the website, such as login status, theme and shopping cart items.

### &#10022; Need and Usage:
- Authentication and authorization: Track user login status and sessions.
- Shopping Cart: Maintaining of items added to a shopping cart.
- Tracking User Behavior: Collect anonymous user data for analytics and personalization.
- User Preferences: Store user preferences like theme, language, or font size.

### &#10022; Creating a cookie:
To create a cookie in PHP, use `setcookie()` function:

*Parameters of `setcookie()`:*
- `name`: The name of the cookie.
- `value`: Sets value.
- `expire`: The expiration time of the cookie in seconds.
- `path`: Sets the path that cookie will available on the server.
- `domain`: Sets domain for that cookie is valid.
- `secure`: Whether the cookie should be transmitted over HTTPS only.
- `httponly`: Whether the cookie should be accessible through the HTTP protocol only.

```php
setcookie("username", "Kumar", time() + 43200); // Cookie expires in 12 hour
```

### &#10022; Accessing a cookie:
To access the value of a cookie using `$_COOKIE` [super global](./super-globals.md):

```php
echo $_COOKIE['username'];
```

### &#10022; Modifying a cookie:
To modify a cookie, by set a new value for it using `setcookie()` function.

```php
setcookie("username", "Kumaran", time() + 50000);
```

### &#10022; Deleting a cookie:
To delete a cookie, set the expiration time to the past date:

```php
setcookie("username", "", time() - 3600);
```

### &#10022; Pros:
- User Experience: It is used for personalize the user experience.
- Session Management: It is used for maintain user sessions.

### &#10022; Cons:
- Browser Limitations: Some browsers have limits on the number and size of cookies to be stored.
- Security Risks: Cookies can be vulnerable to attacks and modified on the user computers.
- User Privacy Concerns: Cookies are used to track users across multiple sites.

---


## Files Handling

File handling in PHP involves working with files on the server, such as creating, reading, writing, and manipulating files with their contents. This is essential tasks on server like storing and retrieving data, generating dynamic content, and managing file uploads.

The `include` keyword will search for the file and attempt to include it in the program.If the file does not exist, the program will continue. The `include_once `keyword is similar to the include. However, it makes an additional check to discover if the file has already been imported. If it has, it ignores the request (does not produce an error). include would produce errors if the file has already been imported.
The `require` keyword is similar to the include keyword. However, if the file does not exist, an error will be produced. The `require_once` keyword is similar to the require keyword with the additional check to not load the file if it has already been loaded.

### &#10022; Handling Directory:
- Creating a Directory: using `mkdir()` function.
```php
mkdir("new_directory");
```

- Renaming a Directory: using `rename()` function.
```php
rename("old_directory", "new_directory");
```

- Removing a Directory: remove an empty directory using `rmdir()` function.
```php
rmdir("empty_directory");
```

### &#10022; Handling File:
- Creating a File: using `fopen()` with `w` write flag.
```php
$file = fopen("new_file.txt", "w");
fwrite($file, "Hello, world!");
fclose($file);
```

- File Pointer: When open a file, the handler has pointer that indicates the current position within a file.

- File Modes: Different modes for opening a file, such as "r" for reading, "w" for writing, "a" for appending, etc.

- Editing a File:
```php
$file = fopen("existing_file.txt", "r+");
$contents = fread($file, filesize("existing_file.txt"));
$contents = str_replace("old_text", "new_text", $contents);
rewind($file);
fwrite($file, $contents);
fclose($file);
```

- Reading a File:
```php
$file = fopen("existing_file.txt", "r");
while (!feof($file)) {
    $line = fgets($file);
    echo $line;
}
fclose($file);
```

- Replacing a File:
```php
$file = fopen("existing_file.txt", "w");
fwrite($file, "New content");
fclose($file);
```

- Removing a File:
```php
unlink("file_to_delete.txt");
```

### &#10022; Uploading a File:
To store the uploaded file in server using, `move_uploaded_file()` function.

```php
if (isset($_FILES['fileToUpload'])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);
    move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile);
}
```

### &#10022; Downloading a File:

```php
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($file) . '"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
readfile($file);
exit;
```

### &#10022; File Handling Flags:
These flags are passed as the second argument to the `fopen()` function.
- `r`: Open a file for reading only.
- `w`: Open a file for writing only. If the file doesn't exist, it creates a new one. If it exists, it truncates its contents.
- `a`: Open a file for appending. If the file doesn't exist, it creates a new one.
- `x`: Create a new file for exclusive access. If the file already exists, the function fails.
- `r+`: Open a file for reading and writing.
- `w+`: Open a file for reading and writing. If the file doesn't exist, it creates a new one. If it exists, it truncates its contents.
- `a+`: Open a file for reading and appending.
- `b`: Open the file in binary mode.
- `t`: Open the file in text mode (default).
- `FILE_USE_INCLUDE_PATH`: Search for the file in the include path.
- `FILE_IGNORE_NEW_LINES`: Omit newlines at the end of each array element when reading lines.
- `FILE_SKIP_EMPTY_LINES`: Skip empty lines when reading lines.

*Example:*
```php
// Open a file for reading
$handle = fopen("myfile.txt", "r");

// Open a file for writing, creating it if it doesn't exist
$handle = fopen("newfile.txt", "w");

// Open a file for appending, creating it if it doesn't exist
$handle = fopen("log.txt", "a");
```

### &#10022; Common File Handling Functions:
- `fopen()`: Opens a file and returns a file pointer.
   ```php
   $handle = fopen("myfile.txt", "r"); // Opens a file for reading
   ```
- `fclose()`: Closes an open file.
   ```php
   fclose($handle);
   ```
- `fread()`: Reads a specified number of bytes from a file.
   ```php
   $data = fread($handle, 1024);
   ```
- `fgets()`: Reads a line from a file.
   ```php
   $line = fgets($handle);
   ```
- `file_get_contents()`: Reads an entire file into a string.
   ```php
   $contents = file_get_contents("myfile.txt");
   ```
- `fwrite()`: Writes data to a file.
   ```php
   fwrite($handle, "Hello, world!");
   ```
- `file_put_contents()`: Writes data to a file.
   ```php
   file_put_contents("myfile.txt", "Hello, world!");
   ```
- `file_exists()`: Checks if a file exists.
   ```php
   if (file_exists("myfile.txt")) {
       // File exists
   }
   ```
- `filesize()`: Gets the size of a file in bytes.
   ```php
   $size = filesize("myfile.txt");
   ```
- `unlink()`: Deletes a file.
   ```php
   unlink("myfile.txt");
   ```
- `is_dir()`:Checks if a file is a directory.
   ```php
   $filename = 'myfile.txt';
   is_dir($filename);
   ```
- `is_file()`:Checks if a file is a regular file.
   ```php
   $filename = 'myfile.txt';
   is_file($filename);
   ```
- `mkdir()`: Creates a directory.
   ```php
   mkdir("new_directory");
   ```
- `rmdir()`: Deletes a directory.
   ```php
   rmdir("old_directory");
   ```
- `copy()`: Copies a file.
   ```php
   copy($sourcefile, $destination);
   ```
- `scandir()`: Lists files and directories in a directory.
   ```php
   scandir("directory_name");
   ```
- `flock()`: Acquires an exclusive lock on a file.
   ```php
   flock($handle, 'w');
   ```
- `feof()`: Checks if the end of a file has been reached.
   ```php
   feof($handle);
   ```
- `rewind()`: Rewinds the position of the file pointer to the beginning.
   ```php
   rewind($handle);
   ```

### &#10022; Security Considerations:
- Validate and sanitize files: files, names and paths are sanitized to prevent security vulnerabilities like directory traversal attacks.
- Secure File Uploads: Validate files with their types, sizes, and destinations to prevent malicious uploads.
- File Permissions: Set appropriate file permissions to restrict access to sensitive files.
- Error Handling: Implement error handling to prevent information disclosure and security vulnerabilities.
- Regular Security Audits: Conduct regular security audits to identify and fix malicious files and vulnerabilities.

---


## Include and Require Statements:
These statements are used to add the content of one PHP file into another. It is essential for organizing and reusing the code in larger projects.

### &#10022; Include Statement:
It can includes and executes the specified file in the PHP script. If the specified file is missing, a warning will be issued, but it would not interrupt execution of the script.

```php
include 'header.php'; // Include the header file
```

### &#10022; Require Statement:
It is similar to include statement, but it generates a fatal error, If the file is missing. It can be used to add essential files that are crucial and important for the script execution.

```php
require 'configuration.php'; // Require the configuration file
```

### &#10022; Differences Between Statements:
| Feature | include | require |
|---|---|---|
| Error Handling | Generates a warning that would not stop execution of the script | Generates a fatal error that interrupts the execution of script |
| File Inclusion | It adds the file at the point of the statement execution | It adds the file before execution of the script |
| Place of use | It can be used any where that file to be added | It is preferable to use at top level of the script |

