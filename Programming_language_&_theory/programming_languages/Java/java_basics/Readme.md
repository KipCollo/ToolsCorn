# Java Fundamentals

## Comments

Comments help programmers to communicate and understand the program. They are not programming statements and thus are ignored by the compiler.
There are 3 types of comments in Java:-

- `Single-line comment`:- It begins with two slashes.The compiler ignores anything you type after that on the same line.

```java
//comment
```

- `Multiple-line comments` - It includes anything starting from the symbol /_ until the symbol _/.People often type an aesterik(\*) at the beginning of each line of a multiline comment to make it easier to read,but you don't have to.

```java
/*
* Multiline comments
*/
```

- `Javadoc Comment`- Starts with /\*\*.This special syntax tells the javadoc tool to pay attention to the comment.Javadoc comments have a specific structure that the javadoc tool knows how to read.

```java
/**
 * Javadoc comment
 * @author Collins
*/
```

---

## Java Main Method

A Java program begins execution with its `main()` method.The main() method is often called an entry point into the program, because it is the starting point that the JVM looks for when it begins running a new program.
The main() method lets the JVM call our code.

```java
public static void main(String[] args) {
   System.out.println("Hello World");
}
```

The main() method’s parameter list, represented as an array of java.lang.String objects. You can use any valid variable name along with any of these three formats:

- String[] args
- String options[]
- String... friends

The compiler accepts any of these. The variable name args is common because it hints that this list contains values that were read in (arguments) when the JVM started. The characters [] are brackets and represent an array. An array is a fixed-­size list of items that are all of the same type. The characters ... are called varargs (variable argument lists).
The main method is static,so JVM can call the main() method directly without allocating any extra memory for object creation.

To compile Java code with the javac command, the file must have the extension .java.The name of the file must match the name of the public class. The result is a file of bytecode with the same name but with a .class filename extension. Remember that bytecode consists of instructions that the JVM knows how to execute.
The rules for what a Java file contains:-

1. Each file can contain only one public class.
2. The filename must match the class name, including case, and have a .java extension.
3. If the Java class is an entry point for the program, it must contain a valid main() method.

- _Passing Parameters to a Java Program_ - String args[] are array of string objects we need to pass from command line arguments.Every Java application must have atleast one main method.

```java
public static void main(String[] args) {
   System.out.println(args[0]);//Zoo
}
```

To run it, type this:

```sh
javac Zoo.java
java Zoo Bronx Zoo
```

## Data Types in Java

Java applications contain two types of data:-

1. Primitive types- For storing simple values.They are defined in Java Language.They are saved on Stack memory and values assigned to them using equal(=) operator.When declaring primitive types,we do not need to allocate memory.Memories are allocated and released by Java run time environments.
2. Reference types- For storing complex objects E.g date objects,mail messages.when declaring reference types,we should allocate the memory,Java runtime automatically release the memory.

- _Primitive Types_:- They are grouped into 4 categories:

1. Boolean Type: They can only have one of two accepted values: `true or false`.Used in conditions.Default value is false.When field is of boolean,the getter for it has different syntax,are not prefixed with get but is.
2. The Char Type: Represents characters.Its values are 16-bit unsigned integers i.e UTF-16 code units.The representation of character is numeric i.e we can convert int values to char values.
3. Integer Primitives: Java defines six numeric types and each of them has specific internal representation on certain number of bits- minimum and maximum values.It includes bytes,int,short and long
4. Real primitives: Contains decimal point and decimal after it.two floating-point types are defined- float and double.

- byte - default is 0 - 1 byte
- short - default 0 - 2 byte
- int - default 0 - 4 byte
- long - default value 0L - 8 byte
- float - default 0.0f - 4 bytes
- double - default is 0.0d - 8 byte
- char - default '\u0000' - 2 byte
- boolean - default value is false - 1 bit

NOTE : UTF-8 is the most popular unicode character encoding with 90% websites using it.

```Java
byte age =21;
int viewsCount=10_000_000;
long views = 100_000_000_000L;
double price=10.99;
float discount = 10.99F;
char letter ='A';
boolean isEligable = false;
```

- The byte, short, int, and long types are used for integer values without decimal points.
- Each numeric type uses twice as many bits as the smaller similar type. For example, short uses twice as many bits as byte does.
- All of the numeric types are signed and reserve one of their bits to cover a negative range. For example, instead of byte covering 0 to 255 (or even 1 to 256) it actually covers -­128 to 127.
- A float requires the letter f or F following the number so Java knows it is a float.Without an f or F, Java interprets a decimal value as a double.
- A long requires the letter l or L following the number so Java knows it is a long.Without an l or L, Java interprets a number without a decimal point as an int in most scenarios.

`literals`:- It is a synthetic representation of boolean,numeric,character or string data.It is a medium of expressing particular values in a program.

```java
int x = 100_000;//100_000 is a literal
```

- Integral literals - It can be specified in 4 ways:-
  1.  Decimal literals(Base 10): Allowed digits are 0-9.
  2.  Octal literals(Base 8): Allowed digits are 0-7.Should be prefixed with 0.
  3.  Hexa-decimal literals(Base 16): Allowed digits are 0-9 and characters are a-f.We can use both uppercase and lowercase characters.
  4.  Binary literals: Allowed digits are 0 and 1.Should be prefixed with 0b or 0B.

```java
int x = 101;//decimal literal
int x = 0146;//octal literal
int x = OX123Face//hexa-decimal literal
int x = 0b1111;//binary literal
```

- Floating-Point literal - We can specify literals in only decimal form. - decimal literals: Allowed digits are 0-9.

```java
double d = 123.333;
double d = 12e3;
```

- Char literals - can be specified in 4 ways:
  1.  Single quote: Rep as a single character within single quote.
  2.  Char literal as Integral literal: It will represent the Unicode value of the character,The integral literal xan be represented in Decimal,Octal and Hexadecimal forms.
  3.  Unicode Representations: Can be represented in Unicode rep. '\uxxxx'.Here xxxx rep 4 hexadecimal numbers.
  4.  Escape Sequence: Every escape sequence can be specified as char literals.

```java
char ch = 'a';
char ch = 062;
char ch ='\u0061';
char ch = '\n';
```

- Boolean literals - Only two values are allowed i.e true and false.

- _Reference Types_ -

```Java
Date date = new Date();
date.getTime();
```

- _new_ keyword allocates memory.

- Reference type are copied by their reference while primitive are copied by their value hence independent.The primitive values are stored in different memory locations while the primitive values holds the memory address of object in memory.

**Wrapper Classes in Java** - Each primitive type has a wrapper class, which is an object type that corresponds to the primitive.
If you want to store integer value, you store it in _int_ data type.Java provides primitive data types that's why Java is 99.9% OOP.Primitive helps us improve the performance(saves data directly) but certain feature work only with objects i.e collection framework.

- boolean - Boolean class
- char - Character class
- byte - Byte class
- short - Short class
- int - Integer class
- long - Long class
- float - Float class
- double - Double class

```java
Boolean.valueOf(true)
Boolean.valueOf(isLoggedIn)
Double.valueOf(1.0)
```

There is also a valueOf() variant that converts a String into the wrapper class.For example:

```java
String y = "23";
int y = Integer.parseInt(y)
Integer wrapper = Integer.valueOf(y);
```

The first line converts a String to an int primitive. The second converts a String to an Integer wrapper class.

All of the numeric classes above extend the Number class, which means they all come with some useful helper methods: byteValue(), shortValue(), intValue(), longValue(), floatValue(), and doubleValue(). The Boolean and Character wrapper classes include booleanValue() and charValue(), respectively.
Some of the wrapper classes contain additional helper methods for working with numbers.For example, Integer has:

- max(int num1, int num2), which returns the largest of the two numbers
- min(int num1, int num2), which returns the smallest of the two numbers
- sum(int num1, int num2), which adds the two numbers

## Variables

Variables are names for a piece of memory given to data that we need to store and manipulate in our programs.They are used to temporarily store data in computer's memory.
Java is a strongly typed language i.e you need to specify the data type hold by variables.

When you _declare a variable_, you need to state the variable type along with giving it a name. Giving a variable a value is called _initializing a variable_. To initialize a variable, you just type the variable name followed by an equal sign, followed by the desired value.

```java
String zooName = "The Best Zoo";
```

`Identifiers`: An identifier is a name for something. The identifier’s meaning can change from one program to another, but some identifiers’ ­meanings tend to change more.

- Identifiers can be created by a Java programmer, you create new names for classes and other things that you describe in your programs. Of course,you may name something Prime, and the guy writing code two cubicles down the hall can name something else Prime. That’s okay because Java doesn’t have a predetermined meaning for Prime. In your program, you can make Prime stand for the Federal Reserve’s prime rate. And the guy down the hall can make Prime stand for the “bread, roll, preserves, and prime rib.” A conflict ­doesn’t arise, because you and your co-worker are writing two ­different Java programs.
- Identifiers from the API: The JCP members have created names for many things and thrown almost 40,000 of these names into the Java API. The API comes with each version of Java, so these names are available to anyone who writes a Java program. Examples of such names are String, Integer, JWindow, JButton, JTextField, and File.

Identifies tend to name variables,functions,arrays,classes e.t.c.

`Java Naming Conventions` -

1. Variables name - It should be camelCase i.e myAge = 20;
2. Method name - Should be camelcase i.e setColor();
3. Class & Interface names - It should be Pascal naming case i.e begin with capital letter. class Person{}
4. Constants names - They are all in uppercase letters.E.g String BANK = "KCB"
5. package name - should be in lowercase letter.

```Java
final float PI =3.14F;
```

An identifier is the name of a variable, method, class, interface, or package. Luckily, the rules for identifiers for variables apply to all of the other types that you are free to name.
There are only four rules to remember for legal identifiers:

1. Identifiers must begin with a letter, a currency symbol, or a \_symbol. Currency symbols include dollar ($), yuan (¥), euro (€), and so on.
2. Identifiers can include numbers but not start with them.
3. A single underscore \_ is not allowed as an identifier.
4. You cannot use the same name as a Java reserved word. A reserved word is a special word that Java has held aside so that you are not allowed to use it. Remember that Java
   is case sensitive, so you can use versions of the keywords that only differ in case.

`Initializing Variables`:-Before you can use a variable, it needs a value. Some types of variables get this value set automatically, and others require the programmer to specify it.

- Local Variables:- A local variable is variable defined within a constructor,method or initializer block.

```java
public int localVariable(){
   final int y = 10;//initialized variable
   int x;//uninitialized variable
}
```

Variables passed to a constructor or method is called _constructor parameter_ or _method parameters_ respectively.They are like local variables that has been pre-initialized.

```java
public void find(boolean check){}
```

- Instance variable(field):- Is a value defined within a specific instance of an object.Declared inside class but outside a method.
- class variable:- it is the one that is defined on the class level and shared among all instances of a class.It can be even be publicly accessible to classes outside the class and doesn't require instances to use.

NOTE:-Instance and class variables does not require you to initialize them.as soon as you declare these variables,they are given default value.The compiler doesn't know what value to use and so wants the simplest value it can give the type `null for object,zero for numeric types,false for boolean,char is NUL`.

`Inferring Type with var`:- You can use the keyword `var` instead of the type when declaring local variables under certain conditions.

```java
public class Zoo{
   public void whatAnimal(){
      var name = "Name";
      var size = 6;
   }
}
```

The formal name of this feature is _local variable type inference_.You can only use this feature for local variables.

Rules on scope include:

- Local variables: In scope from declarations to the end of the block.
- Method parameters: In scope for duration of the method.
- Instance variables: In scope from declaration until objects is eligible for garbage collections.
- class variables: In scope from declarations until the program ends.

## Type conversions and Casting

Java provides different ways to convert data from one type to another. Understanding these conversions helps in handling data efficiently and avoiding type mismatch errors.

- `Type Casting`:-A data type is converted into another data type by the programmer using casting operator `()` during program design.The destination data type may be smaller than source data type when converting the data type to another data type,that's why it's called _narrowing conversion_.If the number is bigger i.e from integer to byte;the value is divided by the maximum value in byte and remainder is given.

```java
destination_datatype = (target_datatype)variable;

byte x;
float y;

x = (byte)y;
```

- `Type conversion`:- A data type is automatically converted into another data type by compiler at compilation time.The destination type cannot be smaller than the source type,that's why it's called _widening conversion_.Can only be applied to compatible data types.Can be `byte > short > int > long >float> double`.

```java
byte x = 30;
int y;

y = x;
```

- `Type Promotion`: A small size of data type can be promoted to a large size of datatype.i.e a byte can be promoted to integer.It is done when any method which accepts a higher size data type argument is called with smaller data type. int -> long -> float -> double

```java
byte a =10;
byte b =100;

int result = a * b;
```

- `Boxing` - It is manual method to convert primitive type data into non-primitive type.

```Java
int num=2;
Integer num1 =new integer(8);
```

- `Unboxing` - It is manual method to convert non-primitive data type to primitive types.

```Java
int num2=num1.intValue(); //unboxing
```

- `AutoBoxing` - It is automatic conversion of primitive type data into non-primitive data type.

```Java
int num3=5;
Integer num4=num3; //autoboxing
```

`AutoUnBoxing`:It is automatic conversion of non primitive type data into primitive data type.

```java
int num5=num4; //autounboxing
```

int num=7;

- how to store data as Object

```Java
Integer num1=new Integer(8); //this syntax is depreciated
Integer num1=Integer.valueOf(8); //Now we use this syntax
Integer num1=8; //autoboxing
int num2=num1.intValue();//unboxing
int num3=num1; //autounboxing
```

- convert string into int type using parseInt

```java
String str="12";
int num4=Integer.parseInt(str);
```

- Convert number into String

```Java
String str1=Integer.toString(23); //convert number into string
```

---

## Operators

A java `operator` is a special symbol that can be applied to a set of variables,values,or literals and that returns a result.`Operand` refers to the value or variable the operator is being applied to.The result of the operation is referred to as a `result`.

**Type of operators** - Java supports three flavors of operators: unary, binary, and ternary. These types of operators can be applied to one, two, or three operands, respectively.

Operator Precedence:- In mathematics, certain operators can override other operators and be evaluated first. Determining which operators are evaluated in what order is referred to as `operator precedence`.The multiplication operator (\*) has a higher precedence than the addition operator (+).The assignment operator (=) has the lowest order of precedence

Adding Parentheses - The order of operation changes explicitly by wrapping parentheses around the sections you want evaluated first.

- `Arithmetic Operators`:- Arithmetic operators are those that operate on numeric values.
  1.  Addition a + b Adds two numeric values
  2.  Subtraction c -­ d Subtracts two numeric values
  3.  Multiplication e \* f Multiplies two numeric values
  4.  Division g / h Divides one numeric value by another
  5.  Modulus i % j Returns the remainder after division of one numeric value by another

All of the arithmetic operators may be applied to any Java primitives, with the exception of boolean. Furthermore, only the addition operators + and += may be applied to String values, which results in String concatenation.”

- `Assignment Operator`:-An assignment operator is a binary operator that modifies, or assigns, the variable on the left side of the operator with the result of the value on the right side of the equation. Unlike most other Java operators, the assignment operator is evaluated from right to left.
  Java will automatically promote from smaller to larger data types, as you saw in the previous section on arithmetic operators, but it will throw a compiler exception if it detects that you are trying to convert from larger to smaller data types without casting.

The simplest assignment operator is the = assignment

- `Unary` - postfix - expr++ ,expr--
  - prefix - ++expr, --expr, +expr,-expr

- `compound assignment operators.`:- Compound operators are really just glorified forms of the simple assignment operator, with a built-­in arithmetic or logical operation that applies the left and right sides of the statement and stores the resulting value in the variable on the left side of the statement.
  1.  Addition assignment a += 5 Adds the value on the right to the variable on the left and assigns the sum to the variable
  2.  Subtraction assignment b -­= 0.2 Subtracts the value on the right from the variable on the left and assigns the difference to the variable
  3.  Multiplication assignment c \*= 100 Multiplies the value on the right with the variable on the left and assigns the product to the variable
  4.  Division assignment d /= 4 Divides the variable on the left by the value on the right and assigns the quotient to the variable

- `Relational Operators`:- Relational operators compares two expressions and return a boolean value.
  1.  Less than a < 5 Returns true if the value on the left is strictly less than the value on the right
  2.  Less than or equal to b <= 6 Returns true if the value on the left is less than or equal to the value on the right
  3.  Greater than c > 9 Returns true if the value on the left is strictly greater than the value on the right
  4.  Greater than or equal to 3 >= d Returns true if the value on the left is greater than or equal to the value on the right
  5.  Type comparison e instanceof String Returns true if the reference on the left side is an instance of the type on the right side (class, interface,record, enum, annotation)

- `Equality Operators`:- The equals operator (==) and not equals operator (!=) compare two operands and return a boolean value determining whether the expressions or values are equal or not equal, respectively.
  1.  Equality a == 10 Returns true if the two values represent the same value.Returns true if the two values reference the same object.
  2.  Inequality b != 3.14 Returns true if the two values represent different values.Returns true if the two values do not reference the same object.

- `Logical Operators`:-The logical operators, (&), (|), and (^), may be applied to both numeric and boolean data types.When they’re applied to boolean data types, they’re
  referred to as logical operators. Alternatively, when they’re applied to numeric data types,they’re referred to as bitwise operators, as they perform bitwise comparisons of the bits that compose the number.
  1.  Logical AND a & b Value is true only if both values are true.
  2.  Logical inclusive OR c | d Value is true if at least one of the values is true.
  3.  Logical exclusive OR e ^ f Value is true only if one value is true and the other is false.(!)

- `Conditional Operators`:-The conditional operators, often called short-­circuit operators, are nearly identical to the logical operators, & and |, except that the right side of the expression may never be evaluated if the final result can be determined by the left side of the expression.
  1.  Conditional AND a && b Value is true only if both values are true. If the left side is false, then the right side will not be evaluated.
  2.  Conditional OR c || d Value is true if at least one of the values is true. If the left side is true, then the right side will not be evaluated.
      For example, consider the following statement:

```java
int hour = 10;
boolean zooOpen = true || (hour < 4);
System.out.println(zooOpen); // true
```

A more common example of where conditional operators are used is checking for null objects before performing an operation. In the following example, if duck is null, the program
will throw a NullPointerException at runtime:

```java
if(duck!=null & duck.getAge()<5) { // Could throw a NullPointerException
// Do something
}
```

The issue is that the logical AND (&) operator evaluates both sides of the expression. We could add a second if statement, but this could get unwieldy if we have a lot of variables to check. An easy-­to-­read solution is to use the conditional AND operator (&&):

```java
if(duck!=null && duck.getAge()<5) {
// Do something
}
```

In this example, if duck is null, the conditional prevents a NullPointerException from ever being thrown, since the evaluation of duck.getAge() < 5 is never reached.

TODO increment and decrement operators.

`Making Decisions with the Ternary Operator`:-The conditional operator(? :), otherwise known as the ternary operator. It is notable in that it is the only operator
that takes three operands. The ternary operator has the following form:

booleanExpression ? expression1 : expression2

The first operand must be a boolean expression, and the second and third operands can be any expression that returns a value. The ternary operation is really a condensed form of a combined if and else statement that returns a value.
For example, consider the following code snippet that calculates the food amount for an owl:

```java
int owl = 5;
int food;
if(owl < 2) {
   food = 3;
} else {
   food = 4;
}
System.out.println(food);// 4
```

Compare the previous code snippet with the following ternary operator code snippet:

```java
int owl = 5;
int food = owl < 2 ? 3 : 4;
System.out.println(food); // 4
```
