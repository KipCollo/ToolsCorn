# OOP(Object-oriented programming)

PHP includes a complete object model. Some of its features are: visibility, abstract and final classes and methods, additional magic methods, interfaces, and cloning.
PHP treats objects in the same way as references or handles, meaning that each variable contains an object reference rather than a copy of the entire object.
Includes:- classes, class inheritance,visibility modifiers,magic methods.

OOP features were added in PHP v5.0
Uses of OOP in PHP:-
1. For simple site,OOP adds unnecessary complexity.
2. For complex site,OOP adds necessary simplicity.
3. Database-driven sites generally benefit from OOP.



---------


## Class

A `class` describes the `characteristics (properties)` of the module of code and the `actions (methods or functions)` that can occur in that code. However, it does not physically exist (within memory) until an instance of the class (called an `object`) is created. Once an instance is created, the characteristics and actions can be accessed.Classes and objects (when created properly) protect the characteristics (properties) from direct access. This provides the object the opportunity to verify that any request to change a value in a property is valid before the change occurs. This is commonly called `encapsulation`. To protect properties from direct access to the outside world,they should be declared using the `private` access type. Private access will only allow methods within the class the ability to change the values in the properties.`Set` methods are used to change properties. `Get` methods are normally used to retrieve property values.

PHP supports object-oriented programming, offering a multi-paradigm way of coding through classes and objects. A class is like a blueprint for creating objects that encapsulate all faculties, properties and methods. An object, on the other hand, is an instance of a class where you can interact with the class's methods and change its properties. PHP lets you define a class using the keyword 'class', set properties and methods within it, and then create an object of that class using 'new'.

Visit the following resources to learn more:

- [@official@Classes](https://www.php.net/manual/en/language.oop5.php)

To create a PHP class, we use the class keyword and encapsulate all code within the class in {}.
Basic class definitions begin with the keyword class, followed by a class name, followed by a pair of curly braces which enclose the definitions of the properties and methods belonging to the class. 

A class may contain its own constants, variables (called "properties"), and functions (called "methods"). 

```php

<?php
class SimpleClass
{
    // property declaration
    public $var = 'a default value';

    // method declaration
    public function displayVar() {
        echo $this->var;
    }
}
?>
```

The class keyword is lowercase. However, the name of the class begins with an uppercase letter(Capitaliza and camelCase the class names). PHP will allow you to create a class with a lowercase first letter. However, it is common practice to easily identify classes by the use of the uppercase first letter. The actual file name containing your class (dog.php) should also match the class name (Dog).

Class contains `properties`   . Properties are also called variables. Properties include characteristics of the class. When an instance of a class is created, the properties are unique for that object. The operating system reserves a space in memory to hold the properties. The operating system handles memory management for us, including cleaning up properties that are no longer needed. In PHP, anytime a closing bracket (}) is reached, properties that have been created are scheduled for removal by the garbage collector of the operating system. The program can no longer access the property at that point.
Properties are created with an initial $ and the name of the property. Property names can include alphabetic characters, numbers, and the underscore (_). The underscore can be used at the beginning of the property (after the $) or between words. No spaces are allowed. Properties are commonly created with lowercase letters. However, PHP does allow uppercase letters. PHP is case-sensitive and will consider a lowercase property (speak) and an uppercase property (Speak) as two different properties.

Functions for properties:-
- get_class_vars($string)
- get_object_vars($object)
- property_exists($mixed,$string)


`This pointer`—The $this pointer is used to gain access to properties contained in an object. This indicates that the code wants to retrieve the value contained in a property that exists in the particular object (instance of the class).The $this pointer will tell the operating system that it wants the value in the property that exists in the instance only. Note that the format of the statement includes a $ sign for the $this pointer but not for the variable ($this->dog_weight).

PHP allows us to place properties within strings (quotes). This allows us to use fewer periods and quotes.

```php
print "Dog weight is $this->dog_weight. Dog breed is $this->dog_breed.
       Dog color is $this->dog_color.";
```

**Constructors and Destructors**:- When an instance of a class (object) is created in memory, the operating system executes a `constructor method` that builds the object with any existing properties and methods. The system also builds tables in memory to keep track of the location of the object and the values that exist in the properties of the object. When the object is no longer needed, the operating system’s garbage collector will be called by the object’s `destructor method`, which will remove it from memory.
You can also include a constructor method that will automatically be called when the object is placed in memory.

The `constructor method` is a generic format with a function name __construct (note there are two underscores before the word construct).*__construct(mixed ...$values = ""): void*.
PHP allows developers to declare constructor methods for classes. Classes which have a constructor method call this method on each newly-created object, so it is suitable for any initialization that the object may need before it is used. 

```php
<?php
class ClassName {
    // ----------------------------- Constructor ------------------------------
    function __construct() {
        print "In BaseClass constructor\n";
    }

    //---------------------------------toString--------------------------------
    public function __toString(){
      return $this->error_message;
    }
}
```

You can use the existing set methods in the constructor to update the properties.
Constructor methods are not allowed to return information (by default). The return statement cannot be used within the constructor.In order to return messages created in the constructor to the calling program, you must trick the program. The `__toString method` allows the programmer to decide what will occur if an attempt is made to use the print (or echo) method with the object name. This can be overridden by including a __toString method with a statement that returns a string. You can overcome this problem of being able to return the error messages by allowing the value in the $error_message property to be returned if the print $lab; statement is executed.


**Constructors in inheritance**:- Parent constructors are not called implicitly if the child class defines a constructor. In order to run a parent constructor, a call to parent::__construct() within the child constructor is required. If the child does not define a constructor then it may be inherited from the parent class just like a normal class method (if it was not declared as private). 

```php
<?php
class BaseClass {
    function __construct() {
        print "In BaseClass constructor\n";
    }
}

class SubClass extends BaseClass {
    function __construct() {
        parent::__construct();
        print "In SubClass constructor\n";
    }
}

class OtherSubClass extends BaseClass {
    // inherits BaseClass's constructor
}
```

constructor arguments - Constructor arguments are called by placing the arguments in parentheses after the class name. 

```php
<?php
class Point {
    protected int $x;
    protected int $y;

    public function __construct(int $x, int $y = 0) {
        $this->x = $x;
        $this->y = $y;
    }
}
```

**Constructor Promotion**:- As of PHP 8.0.0, constructor parameters may also be promoted to correspond to an object property. It is very common for constructor parameters to be assigned to a property in the constructor but otherwise not operated upon. Constructor promotion provides a short-hand for that use case.

```php
<?php
class Point {
    public function __construct(protected int $x, protected int $y = 0) {
    }
}
```

When a constructor argument includes a modifier, PHP will interpret it as both an object property and a constructor argument, and assign the argument value to the property.


**new keyword**:- To create an instance of a class, the new keyword must be used. An object will always be created unless the object has a constructor defined that throws an exception on error. Classes should be defined before instantiation (and in some cases this is a requirement).
If a variable containing a string with the name of a class is used with new, a new instance of that class will be created. If the class is in a namespace, its fully qualified name must be used when doing this. 

```php
$instance = new SimpleClss;
$instance = new SimpleClss();

// This can also be done with a variable:
$className = 'SimpleClass';
$instance = new $className(); // new SimpleClass()
?>
```

Functions for instances:-

- get_class($object) - Returns the name of the class of an object Gets the name of the class of the given object.
- is_a($object, $string)

```php
class Student {}

$student1 = new Student;
$student2 = new Student;

echo get_class($student1)//Student

$class_names = ['Product', 'Student', 'student'];
foreach($class_names as $class_name) {
  if(is_a($student1, $class_name)) {
    echo "student1 is a {$class_name}.<br />";
  } else {
    echo "student1 is not a {$class_name}.<br />";
  }
}
```


**Functions for classes**:-
- get_declared_classes() - Returns an array with the name of the defined classes. Gets the declared classes.Returns an array of the names of the declared classes in the current script.
- class_exists($string) - Checks if the class has been defined.This function checks whether or not the given class has been defined. Returns true if class is a defined class, false otherwise.It is not case sensitive

```php
class Student {

}

$classes = get_declared_classes();
echo "Classes: " . implode(', ', $classes);

$class_names = ['Product', 'Student', 'student'];
foreach($class_names as $class_name) {
  if(class_exists($class_name)) {
    echo "{$class_name} is a declared class.";
  } else {
    echo "{$class_name} is not a declared class.";
  }
}
// Product is a declared class.
// Student is a declared class.
// student is a declared class.
```


-----------

## Visibility/ Access Specifiers

Access specifiers, also known as access modifiers, in PHP are keywords used in the class context which define the visibility and accessibility of properties, methods and constants. PHP supports three types of access specifiers: public, private, and protected. 'Public' specified properties or methods can be accessed from anywhere, 'private' ones can only be accessed within the class that defines them, while 'protected' ones can be accessed within the class itself and by inherited and parent classes. Here's an illustrative example:

Visit the following resources to learn more:

- [@official@Access Specifiers & Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)


The visibility of a property, a method or (as of PHP 7.1.0) a constant can be defined by prefixing the declaration with the keywords public, protected or private. Class members declared public can be accessed everywhere. Members declared protected can be accessed only within the class itself and by inheriting and parent classes. Members declared as private may only be accessed by the class that defines the member. 

1. Property Visibility - Class properties may be defined as public, private, or protected. Properties declared without any explicit visibility keyword are defined as public. 

2. Method Visibility - Class methods may be defined as public, private, or protected. Methods declared without any explicit visibility keyword are defined as public. 

```php
<?php
class MyClass
{
    // Declare a public constructor
    public function __construct() { }

    // Declare a public method
    public function MyPublic() { }

    // Declare a protected method
    protected function MyProtected() { }

    // Declare a private method
    private function MyPrivate() { }

    // This is public
    function Foo()
    {
        $this->MyPublic();
        $this->MyProtected();
        $this->MyPrivate();
    }
}
```

3. Constant Visibility - As of PHP 7.1.0, class constants may be defined as public, private, or protected. Constants declared without any explicit visibility keyword are defined as public. 

```php
<?php
class MyClass
{
    // Declare a public constant
    public const MY_PUBLIC = 'public';

    // Declare a protected constant
    protected const MY_PROTECTED = 'protected';

    // Declare a private constant
    private const MY_PRIVATE = 'private';

    public function foo()
    {
        echo self::MY_PUBLIC;
        echo self::MY_PROTECTED;
        echo self::MY_PRIVATE;
    }
}
```

## Static Keyword

Declaring class properties or methods as static makes them accessible without needing an instantiation of the class. These can also be accessed statically within an instantiated class object. 

1. Static methods - Because static methods are callable without an instance of the object created, the pseudo-variable $this is not available inside methods declared as static. 

```php
<?php
class Foo {
    public static function aStaticMethod() {
        // ...
    }
}
```

2. Static properties - Static properties are accessed using the Scope Resolution Operator (::) and cannot be accessed through the object operator (->). 

```php
<?php
class Foo
{
    public static $my_static = 'foo';

    public function staticValue() {
        return self::$my_static;
    }
}
```

## Scope Resolution Operator (::) 

The Scope Resolution Operator (also called Paamayim Nekudotayim) or in simpler terms, the double colon, is a token that allows access to a constant, static property, or static method of a class or one of its parents. Moreover, static properties or methods can be overriden via late static binding. 

1. :: from outside the class definition

```php
<?php
class MyClass {
    const CONST_VALUE = 'A constant value';
}

$classname = 'MyClass';
echo $classname::CONST_VALUE;

echo MyClass::CONST_VALUE;
?>
```

2. :: from inside the class definition

```php
<?php
class OtherClass extends MyClass
{
    public static $my_static = 'static var';

    public static function doubleColon() {
        echo parent::CONST_VALUE . "\n";
        echo self::$my_static . "\n";
    }
}

$classname = 'OtherClass';
$classname::doubleColon();

OtherClass::doubleColon();
?>
```

3. Calling a parent's method

```php
<?php
class MyClass
{
    protected function myFunc() {
        echo "MyClass::myFunc()\n";
    }
}

class OtherClass extends MyClass
{
    // Override parent's definition
    public function myFunc()
    {
        // But still call the parent function
        parent::myFunc();
        echo "OtherClass::myFunc()\n";
    }
}

$class = new OtherClass();
$class->myFunc();
?>
```


------

## Enumerations

Enumerations, or "Enums", allow a developer to define a custom type that is limited to one of a discrete number of possible values.

Enums are a special kind of object. The Enum itself is a class, and its possible cases are all single-instance objects of that class. That means Enum cases are valid objects and may be used anywhere an object may be used, including type checks.

Enums are similar to classes, and share the same namespaces as classes, interfaces, and traits. They are also autoloadable the same way. An Enum defines a new type, which has a fixed, limited number of possible legal values.

```php
<?php

enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}
?>
```

This declaration creates a new enumerated type named Suit, which has four and only four legal values: Suit::Hearts, Suit::Diamonds, Suit::Clubs, and Suit::Spades. Variables may be assigned to one of those legal values. A function may be type checked against an enumerated type, in which case only values of that type may be passed.

```php
<?php

function pick_a_card(Suit $suit)
{
    /* ... */
}

$val = Suit::Diamonds;

// OK
pick_a_card($val);

// OK
pick_a_card(Suit::Clubs);

// TypeError: pick_a_card(): Argument #1 ($suit) must be of type Suit, string given
pick_a_card('Spades');
?>
```

--------


# Abstract classes

Abstract classes in PHP are those which cannot be instantiated on their own. They are simply blueprints for other classes, providing a predefined structure. By declaring a class as abstract, you can define methods without having to implement them. Subsequent classes, when inheriting from an abstract class, must implement these undefined methods.

Visit the following resources to learn more:

- [@official@Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)

Abstract classes, another feature introduced in PHP 5.An abstract method is really just a declaration of a method signature that can be used by child classes.
Making a class abstract is as simple as using abstract class instead of just class.

```php
abstract class Foo {
    abstract protected function createAdapter();//abstract method
}
```

Technically, the relationship between abstract methods and abstract classes is that if you declare a method abstract, the class containing it must also be declared abstract.
In other words, a concrete class cannot have abstract methods, but an abstract class can have concrete methods.
