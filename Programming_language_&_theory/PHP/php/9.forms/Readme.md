# Proccessing Forms

PHP and web forms can be used to carry out the following tasks:
1. Pass data from a form to a PHP script
2. Validate form data
3. Work with multivalued form components
4. Take advantage of PEAR: the HTML_QuickForm2 package

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
