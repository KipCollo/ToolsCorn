# Java Fundamentals and Object Oriented Programming

Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance. Main Concepts - Inheritance, Polymorphism, Abstraction, Encapsulation.


## Data Types in Java

<table class="alt"> 
<tbody><tr> 
  <th id="table_dvpt_datatype"><strong>Data Type</strong></th> 
  <th id="table_dvpt_defaultvalue"><strong>Default Value</strong></th> 
  <th id="table_dvpt_defaultsize"><strong>Default size</strong></th> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">boolean</td> 
<td headers="table_dvpt_defaultvalue">false</td> 
<td headers="table_dvpt_defaultsize">1 bit</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">char</td> 
<td headers="table_dvpt_defaultvalue">'\u0000'</td> 
<td headers="table_dvpt_defaultsize">2 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">byte</td> 
<td headers="table_dvpt_defaultvalue">0</td> 
<td headers="table_dvpt_defaultsize">1 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">short</td> 
<td headers="table_dvpt_defaultvalue">0</td> 
<td headers="table_dvpt_defaultsize">2 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">int</td> 
<td headers="table_dvpt_defaultvalue">0</td> 
<td headers="table_dvpt_defaultsize">4 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">long</td> 
<td headers="table_dvpt_defaultvalue">0L</td> 
<td headers="table_dvpt_defaultsize">8 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">float</td> 
<td headers="table_dvpt_defaultvalue">0.0f</td> 
<td headers="table_dvpt_defaultsize">4 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">double</td> 
<td headers="table_dvpt_defaultvalue">0.0d</td> 
<td headers="table_dvpt_defaultsize">8 byte</td> 
</tr> 
</tbody></table>

NOTE : UTF-8 is the most popular unicode character encoding with 90% websites using it.

## Data Type Promotion in Java :

![data type promotion small](https://user-images.githubusercontent.com/2780145/34364362-403e9db4-eaab-11e7-914b-7acc9007cf41.png)

## Wrapper Classes in Java

<table class="alt">
<tbody><tr><th>Primitive Type</th><th>Wrapper class</th></tr>
<tr><td>boolean</td><td>Boolean</td></tr>
<tr><td>char</td><td>Character</td></tr>
<tr><td>byte</td><td>Byte</td></tr>
<tr><td>short</td><td>Short</td></tr>
<tr><td>int</td><td>Integer</td></tr>
<tr><td>long</td><td>Long</td></tr>
<tr><td>float</td><td>Float</td></tr>
<tr><td>double</td><td>Double</td></tr>
</tbody></table>

## Operators in Java

<table class="alt"> 
<tbody><tr><th>Operator Type</th><th>Category</th><th>Precedence</th></tr> 
<tr> 
<td rowspan="2">Unary</td><td>postfix</td><td><code><em>expr</em>++ <em>expr</em>--</code></td> 
</tr>  
<tr> 
<td>prefix</td><td headers="precedence"><code>++<em>expr</em> --<em>expr</em> +<em>expr</em> -<em>expr</em> ~ !</code></td> 
</tr> 
<tr> 
<td rowspan="2">Arithmetic</td><td>multiplicative</td><td headers="precedence"><code>* / %</code></td> 
</tr> 
<tr> 
<td>additive</td><td headers="precedence"><code>+ -</code></td> 
</tr> 
<tr> 
<td>Shift</td><td>shift</td><td headers="precedence"><code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></td>  
</tr> 
<tr> 
<td rowspan="2">Relational</td><td>comparison</td><td headers="precedence"><code>&lt; &gt; &lt;= &gt;= instanceof</code></td> 
</tr> 
<tr> 
<td>equality</td><td headers="precedence"><code>== !=</code></td> 
</tr>  
<tr> 
<td rowspan="3">Bitwise</td><td>bitwise AND</td><td headers="precedence"><code>&amp;</code></td> 
</tr> 
<tr> 
<td>bitwise exclusive OR</td><td headers="precedence"><code>^</code></td> 
</tr> 
<tr> 
<td>bitwise inclusive OR</td><td headers="precedence"><code>|</code></td> 
</tr>  
<tr> 
<td rowspan="2">Logical</td><td>logical AND</td><td headers="precedence"><code>&amp;&amp;</code></td> 
</tr> 
<tr> 
<td>logical OR</td><td headers="precedence"><code>||</code></td> 
</tr> 
<tr> 
<td>Ternary</td><td>ternary</td><td headers="precedence"><code>? :</code></td> 
</tr> 
<tr> 
<td>Assignment</td><td>assignment</td><td headers="precedence"><code>= += -= *= /= %= &amp;= ^= |= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;=</code></td> 
</tr> 
</tbody></table>

## Java Naming Conventions :

<table class="alt">
<tbody><tr><th>Name</th><th>Convention</th></tr>
<tr><td>class name</td><td> should start with uppercase letter and be a noun 
<br>e.g. String, Color, Button, System, Thread etc.</td></tr>
<tr><td>interface name</td><td>should start with uppercase letter and be an adjective 
<br>e.g. Runnable, Remote, ActionListener etc.</td></tr>
<tr><td>method name</td><td>should start with lowercase letter and be a verb 
<br>e.g. actionPerformed(), main(), print(), println() etc.
</td></tr>
<tr><td>variable name</td><td>should start with lowercase letter
<br>e.g. firstName, orderNumber etc.</td></tr>
<tr><td>package name</td><td>should be in lowercase letter 
<br>e.g. java, lang, sql, util etc.
</td></tr>
<tr><td>constants name</td><td>should be in uppercase letter.
<br>e.g. RED, YELLOW, MAX_PRIORITY etc.</td></tr>
</tbody></table>

## Object vs Class

<table class="alt">
<tbody><tr><th>Object</th><th>Class</th></tr>
<tr><td>Object is an <strong>instance</strong> of a class.</td><td>Class is a <strong>blueprint or template</strong> from which objects are created.</td></tr>
<tr><td>Object is a <strong>real world entity</strong> such as pen, laptop, mobile, bed, keyboard, mouse, chair etc.</td><td>Class is a <strong>group of similar objects</strong>.</td></tr>
<tr><td>Object is a <strong>physical</strong> entity.</td><td>Class is a <strong>logical</strong> entity.</td></tr>
<tr><td>Object is created through <strong>new keyword</strong> mainly e.g. Student s1=new Student();</td><td>Class is declared using <strong>class keyword</strong> e.g. class Student{}</td></tr>
<tr><td>Object is created <strong>many times</strong> as per requirement.</td><td>Class is declared <strong>once</strong>.</td></tr>
<tr><td>Object <strong>allocates memory when it is created</strong>.</td><td>Class <strong>doesn't allocated memory when it is created</strong>.</td></tr>
<tr><td>There are <strong>many ways to create object</strong> like new keyword, newInstance() method, clone() method, factory method & deserialization.</td><td>There is only <strong>one way to define class</strong> in java using class keyword.</td></tr>
</tbody></table>

## Constructors vs Methods

<table class="alt">
<tbody><tr><th>Java Constructor</th><th>Java Method</th></tr>
<tr><td>  </td><td>Method is used to expose behaviour of an object.</td></tr>
<tr><td>Constructor must not have return type.</td><td>Method must have return type.</td></tr>
<tr><td>Constructor is invoked implicitly.</td><td>Method is invoked explicitly.</td></tr>
<tr><td>Compiler provides a default constructor if you don't have any constructor.</td><td>Method is not provided by compiler in any case.</td></tr>
<tr><td>Constructor name must be same as the class name.</td><td> Method name may or may not be same as class name.</td></tr>
</tbody></table>

## Types of Inheritance (Supported through Class)

![single inheritance](https://user-images.githubusercontent.com/2780145/34364364-40b6b646-eaab-11e7-8c92-2c4cd9d0b2ca.png)

## Types of Inheritance (Supported through Interface only)

![multiple inheritance](https://user-images.githubusercontent.com/2780145/34364363-407486b8-eaab-11e7-94e2-5c1876f414d3.png)

## Association vs Aggregation vs Composition

![association-aggregation-composition](https://user-images.githubusercontent.com/2780145/34364371-5db00694-eaab-11e7-8ef2-bf56d3394f15.png)

## Aggregation vs Composition

<table class="alt">
<tbody><tr><th>Aggregation</th><th>Composition</th></tr>
<tr><td>Aggregation is a weak Association.</td><td>Composition is a strong Association.</td></tr>
<tr><td>Class can exist independently without owner.</td><td>Class can not meaningfully exist without owner.</td></tr>
<tr><td>Have their own Life Time.</td><td>Life Time depends on the Owner.</td></tr>
<tr><td>A uses B.</td><td>A owns B.</td></tr>
<tr><td>Child is not owned by 1 owner.</td><td>Child can have only 1 owner.</td></tr>
<tr><td>Has-A relationship. A has B.</td><td>Part-Of relationship. B is part of A.</td></tr>
<tr><td>Denoted by a empty diamond in UML.</td><td>Denoted by a filled diamond in UML.</td></tr>
<tr><td>We do not use "final" keyword for Aggregation.</td><td>"final" keyword is used to represent Composition.</td></tr>
<tr><td>Examples:<br>- Car has a Driver.<br>- A Human uses Clothes.<br>- A Company is an aggregation of People.<br>- A Text Editor uses a File.<br>- Mobile has a SIM Card.</td><td>Examples:<br>- Engine is a part of Car.<br>- A Human owns the Heart.<br>- A Company is a composition of Accounts.<br>- A Text Editor owns a Buffer.<br>- IMEI Number is a part of a Mobile.</td></tr>
</tbody></table>

NOTE : "final" keyword is used in Composition to make sure child variable is initialized.

## Polymorphism - Method Overloading vs Method Overriding

<table class="alt">
<tbody><tr><th>Method Overloading </th><th>Method Overriding</th></tr>
<tr><td>Method overloading is used <em>to increase the readability</em> of the program.</td><td>Method overriding is used <em>to provide the specific implementation</em> of the method that is already provided by its super class.</td></tr>
<tr><td>Method overloading is performed <em>within class</em>.</td><td>Method overriding occurs <em>in two classes</em> that have IS-A (inheritance) relationship.</td></tr>
<tr><td>In case of method overloading, <em>parameter must be different</em>.</td><td>In case of method overriding, <em>parameter must be same</em>.</td></tr>
<tr><td>Method overloading is the example of <em>compile time polymorphism</em>.</td><td>Method overriding is the example of <em>run time polymorphism</em>.</td></tr>
<tr><td>In java, method overloading can't be done by changing only the return type of method. <em>Return type can be same/different</em> in overloading, but you must change the parameter.</td><td><em>Return type must be same or covariant (changing return type to subclass type)</em> in method overriding.</td></tr>
</tbody></table>

## Abstract Class vs Interface

<table class="alt">
<tbody><tr><th>Abstract class</th><th>Interface</th></tr>
<tr><td>Abstract class can <strong>have abstract and non-abstract</strong> methods.</td><td>Interface can have <strong>only abstract</strong> methods. Since Java8, it can have <strong>default & static methods</strong> also.</td></tr>
<tr><td>Abstract class <strong>doesn't support multiple inheritance</strong>.</td><td>Interface <strong>supports multiple inheritance</strong>.</td></tr>
<tr><td>Abstract class <strong>can have final, non-final, static and non-static variables</strong>.</td><td>Interface has <strong>only static and final variables</strong>.</td></tr>
<tr><td>Abstract class <strong>can provide the implementation of interface</strong>.</td><td>Interface <strong>can't provide the implementation of abstract class</strong>.</td></tr>
<tr><td>The <strong>abstract keyword</strong> is used to declare abstract class.</td><td>The <strong>interface keyword</strong> is used to declare interface.</td></tr>
<tr><td><strong>Example:</strong><br> public abstract class Shape{<br>public abstract void draw();}</td><td><strong>Example:</strong><br> public interface Drawable{<br>void draw();}</td></tr>
</tbody></table>

## Java Access Modifiers

<table class="alt">
<tbody><tr><th>Access Modifier</th><th>within class</th><th>within package</th><th>outside package by subclass only</th><th>outside package</th></tr>
<tr><td><b>Private</b></td><td>Y</td><td>N</td><td>N</td><td>N</td></tr>
<tr><td><b>Default</b></td><td>Y</td><td>Y</td><td>N</td><td>N</td></tr>
<tr><td><b>Protected</b></td><td>Y</td><td>Y</td><td>Y</td><td>N</td></tr>
<tr><td><b>Public</b></td><td>Y</td><td>Y</td><td>Y</td><td>Y</td></tr>
</tbody></table>

## Abstraction vs Encapsulation

<table class="alt">
<tbody><tr><th>Abstraction</th><th>Encapsulation</th></tr>
<tr><td>Abstraction is a process of hiding the implementation details and showing only functionality to the user.</td>
<td> Encapsulation is a process of wrapping code and data together into a single unit</td></tr>
<tr><td>Abstraction lets you focus on what the object does instead of how it does it.</td>
<td>Encapsulation provides you the control over the data and keeping it safe from outside misuse.</td></tr>
<tr><td>Abstraction solves the problem in the Design Level.</td>
<td>Encapsulation solves the problem in the Implementation Level.</td></tr>
<tr><td>Abstraction is implemented by using Interfaces and Abstract Classes.</td>
<td>Encapsulation is implemented by using Access Modifiers (private, default, protected, public)</td></tr>
<tr><td>Abstraction means hiding implementation complexities by using interfaces and abstract class.</td>
<td>Encapsulation means hiding data by using setters and getters.</td></tr>
</tbody></table>

## Methods of Object Class
The Object class is the parent class of all the classes in java by default.

<table class="alt">
<tbody><tr><th>Method</th><th>Description</th></tr>
<tr><td>public final Class getClass()</td><td>returns the Class class object of this object. The Class class can further be used to get the metadata of this class.</td></tr>
<tr><td>public int hashCode()</td><td> returns the hashcode number for this object.</td></tr>
<tr><td>public boolean equals(Object obj)</td><td> compares the given object to this object.</td></tr>
<tr><td>protected Object clone() throws CloneNotSupportedException</td><td> creates and returns the exact copy (clone) of this object.</td></tr>
<tr><td>public String toString()</td><td> returns the string representation of this object.</td></tr>
<tr><td>public final void notify()</td><td> wakes up single thread, waiting on this object's monitor.</td></tr>
<tr><td>public final void notifyAll()</td><td> wakes up all the threads, waiting on this object's monitor.</td></tr>
<tr><td>public final void wait(long timeout)throws InterruptedException</td><td> causes the current thread to wait for the specified milliseconds, until another thread notifies (invokes notify() or notifyAll() method).</td></tr>
<tr><td>public final void wait(long timeout,int nanos)throws InterruptedException</td><td>causes the current thread to wait for the specified milliseconds and nanoseconds, until another thread notifies (invokes notify() or notifyAll() method).</td></tr>
<tr><td>public final void wait()throws InterruptedException</td><td> causes the current thread to wait, until another thread notifies (invokes notify() or notifyAll() method).</td></tr>
<tr><td>protected void finalize()throws Throwable</td><td> is invoked by the garbage collector before object is being garbage collected.</td></tr>
</tbody></table>


## Comments

Comments help programmers to communicate and understand the program. They are not programming statements and thus are ignored by the compiler.
There are 3 types of comments in Java:-

- `Single-line comment`:- It begins with two slashes.The compiler ignores anything you type after that on the same line.

```java
//comment
```

- `Multiple-line comments` - It includes anything starting from the symbol /* until the symbol */.People often type an aesterik(*) at the beginning of each line of a multiline comment to make it easier to read,but you don't have to.

```java
/*
* Multiline comments
*/
```

- `Javadoc Comment`- Starts with /**.This special syntax tells the javadoc tool to pay attention to the comment.Javadoc comments have a specific structure that the javadoc tool knows how to read.

```java
/**
 * Javadoc comment
 * @author Collins
*/
```

--------


## Variables

Variables are names for a piece of memory given to data that we need to store and manipulate in our programs.They are used to temporarily store data in computer's memory.
Java is a strongly typed language i.e you need to specify the data type hold by variables.

When you *declare a variable*, you need to state the variable type along with giving it a name. Giving a variable a value is called *initializing a variable*. To initialize a variable, you just type the variable name followed by an equal sign, followed by the desired value.

```java
String zooName = "The Best Zoo";
```

`Identifiers`: An identifier is a name for something. The identifier’s meaning can change from one program to another, but some identifiers’ ­meanings tend to change more.

• Identifiers can be created by a Java programmer, you create new names for classes and other things that you describe in your programs. Of course,you may name something Prime, and the guy writing code two cubicles down the hall can name something else Prime. That’s okay because Java doesn’t have a predetermined meaning for Prime. In your program, you can make Prime stand for the Federal Reserve’s prime rate. And the guy down the hall can make Prime stand for the “bread, roll, preserves, and prime rib.” A conflict ­doesn’t arise, because you and your co-worker are writing two ­different Java programs.

• Identifiers from the API: The JCP members have created names for many things and thrown almost 40,000 of these names into the Java API. The API comes with each version of Java, so these names are available to anyone who writes a Java program. Examples of such names are String, Integer, JWindow, JButton, JTextField, and File.

Identifies tend to name variables,functions,arrays,classes e.t.c.

1. Variables name - It should be camelCase i.e myAge = 20;
2. Functions name - Should be camelcase i.e setColor();
3. Class & Interface names - It should be Pascal naming case i.e begin with capital letter. class Person{}
4. Constants names - They are all in capital.E.g String BANK = "KCB"

An identifier is the name of a variable, method, class, interface, or package. Luckily, the rules for identifiers for variables apply to all of the other types that you are free to name.
There are only four rules to remember for legal identifiers:

1. Identifiers must begin with a letter, a currency symbol, or a _symbol. Currency symbols include dollar ($), yuan (¥), euro (€), and so on.
2. Identifiers can include numbers but not start with them.
3. A single underscore _ is not allowed as an identifier.
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

Variables passed to a constructor or method is called *constructor parameter* or *method parameters* respectively.They are like local variables that has been pre-initialized.

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

The formal name of this feature is *local variable type inference*.You can only use this feature for local variables.

Rules on scope include:

- Local variables: In scope from declarations to the end of the block.
- Method parameters: In scope for duration of the method.
- Instance variables: In scope from declaration until objects is eligible for garbage collections.
- class variables: In scope from declarations until the program ends.


----------


## Data Types

Java types can split into two categories:-

1. Primitive types- for storing simple values.They are defined in Java Language.They are saved on Stack memory and values assigned to them using equal(=) operator.When declaring primitive types,we do not need to allocate memory.Memories are allocated and released by Java run time environments.
2. Reference types- for storing complex objects E.g date objects,mail messages.when declaring reference types,we should allocate the memory,Java run time automatically release the memory.

- **Primitive Types**:- They are grouped into 4 categories:

1. Boolean Type: They can only have one of two accepted values: `true or false`.Used in conditions.Default value is false.When field is of boolean,the getter for it has different syntax,are not prefixed with get but is.

2. The Char Type: Represents characters.Its values are 16-bit unsigned integers i.e UTF-16 code units.The representation of character is numeric i.e we can convert int values to char values.

3. Integer Primitives: Java defines six numeric types and each of them has specific internal representation on certain number of bits- minimum and maximum values.It includes bytes,int,short and long

4. Real primitives: Contains decimal point and decimal after it.two floating-point types are defined- float and double.

- byte(1 Byte)- [-128 - 127]
- short(2 Bytes) - [-32K - 32K]
- int(4 Bytes) - {-2B -2B}
- long(8 Bytes)
- float(4 Bytes)
- double(8 Bytes)
- char(2 Bytes)
- boolean(1 Byte)

```Java
byte age =21;
int viewsCount=10_000_000;
long views = 100_000_000_000L;
double price=10.99;
float discount = 10.99F;
char letter ='A';
boolean isEligable = false;
```

`literals`:- It is a synthetic representation of boolean,numeric,character or string data.It is a medium of expressing particular values in a program.

```java
int x = 100_000;//100_000 is a literal
```

- Integral literals - It can be specified in 4 ways:-
   1. Decimal literals(Base 10): Allowed digits are 0-9.
   2. Octal literals(Base 8): Allowed digits are 0-7.Should be prefixed with 0.
   3. Hexa-decimal literals(Base 16): Allowed digits are 0-9 and characters are a-f.We can use both uppercase and lowercase characters.
   4. Binary literals: Allowed digits are 0 and 1.Should be prefixed with 0b or 0B.

```java
int x = 101;//decimal literal
int x = 0146;//octal literal
int x = OX123Face//hexa-decimal literal
int x = 0b1111;//binary literal
```

- Floating-Point literal - We can specify literals in only decimal form.
      - decimal literals: Allowed digits are 0-9.

```java
double d = 123.333;
double d = 12e3;
```

- Char literals - can be specified in 4 ways:
   1. Single quote: Rep as a single character within single quote.
   2. Char literal as Integral literal: It will represent the Unicode value of the character,The integral literal xan be represented in Decimal,Octal and Hexadecimal forms.
   3. Unicode Representations: Can be represented in Unicode rep. '\uxxxx'.Here xxxx rep 4 hexadecimal numbers.
   4. Escape Sequence: Every escape sequence can be specified as char literals.

```java
char ch = 'a';
char ch = 062;
char ch ='\u0061';
char ch = '\n';
```

- Boolean literals - Only two values are allowed i.e true and false.

- **Reference Types**

```Java
Date date = new Date();
date.getTime();
```

- **new** keyword allocates memory.

- Reference type are copied by their reference while primitive are copied by their value hence independent.The primitive values are stored in different memory locations while the primitive values holds the memory address of object in memory.

## Type conversions and Casting

- `Type Casting`:-A data type is converted into another data type by the programmer using casting operator during program design.The destination data type may be smaller than source data type when converting the data type to another data type,that's why it's called *narrowing conversion*.If the number is bigger i.e from integer to byte;the value is divided by the maximum value in byte and remainder is given.

 `()` is a casting operator.

```java
destination_datatype = (target_datatype)variable;

byte x;
float y;

x = (byte)y;
```

- `Type conversion`:- A data type is automatically converted into another data type by compiler at compilation time.The destination type cannot be smaller than the source type,that's why it's called *widening conversion*.Can only be applied to compatible data types.Can be `byte > short > int > long >float> double`.

```java
byte x = 30;
int y;

y = x;
```

- `Type Promotion`: A small size of data type can be promoted to a large size of datatype.i.e a byte can be promoted to integer.It is done when any method which accepts a higher size data type argument is called with smaller data type.

```java
byte a =10;
byte b =100;

int result = a * b;
```

TODO Using wrapper classes for conversion.

```java

String y = "23";
int y = Integer.parseInt(y)
```

## Constants

```Java
final float PI =3.14F;
```

## Java Garbage Collections

Java provides a garbage collector to automatically look for objects that aren't needed anymore.Java code exists inside off a JVM,which includes numerous processes independent from your application code.One of the most important of those is a built-in garbage collector.

All java objects are stored in the program memory's heap.The heap,also referred as free store,represents a large pool of unused memory allocated to your java application.If your program keeps instantiating objects and leaving them on the heap, eventually it will run out of memory and crash.Garbage collection solves this problem.

`Garbage collection` refers to the process of automatically freeing memory on the heap by deleting objects that are no longer reachable in your program.There are many different algorithms for garbage collections

In Java and other languages, `eligible for garbage collection` refers to an object’s state of no longer being accessible in a program and therefore able to be garbage collected.
Java includes a built-­in method to help support garbage collection where you can suggest that garbage collection run.

```java
System.gc();
```

**Tracing Eligibility**:-The JVM waits patiently and monitors each object until it determines that the code no longer needs that memory. An object will remain on the heap until it is no longer reachable. An object is no longer reachable when one of two situations occurs:

1. The object no longer has any references pointing to it.
2. All references to the object have gone out of scope.


## Stack and Heap

Stack is used for storing primitive types (numbers, boolean and character) and variables that store references to objects in the heap.Variables stored in the stack are immediately cleared when they go out of scope (eg when a method finishes execution). Objects stored in the heap get removed later on when they’re no longer references. This is done by Java’s garbage collector.



------------

# OPERATORS

A java `operator` is a special symbol that can be applied to a set of variables,values,or literals and that returns a result.`Operand` refers to the value or variable the operator is being applied to.The result of the operation is referred to as a `result`.

## Type of operators

Java supports three flavors of operators: unary, binary, and ternary. These types of operators can be applied to one, two, or three operands, respectively.

Operator Precedence:- In mathematics, certain operators can override other operators and be evaluated first. Determining which operators are evaluated in what order is referred to as `operator precedence`.The multiplication operator (*) has a higher precedence than the addition operator (+).The assignment operator (=) has the lowest order of precedence

Adding Parentheses - The order of operation changes explicitly by wrapping parentheses around the sections you want evaluated first.

- `Arithmetic Operators`:- Arithmetic operators are those that operate on numeric values.
   1. Addition a + b Adds two numeric values
   2. Subtraction c -­ d Subtracts two numeric values
   3. Multiplication e * f Multiplies two numeric values
   4. Division g / h Divides one numeric value by another
   5. Modulus i % j Returns the remainder after division of one numeric value by another

All of the arithmetic operators may be applied to any Java primitives, with the exception of boolean. Furthermore, only the addition operators + and += may be applied to String values, which results in String concatenation.”

- `Assignment Operator`:-An assignment operator is a binary operator that modifies, or assigns, the variable on the left side of the operator with the result of the value on the right side of the equation. Unlike most other Java operators, the assignment operator is evaluated from right to left.

Java will automatically promote from smaller to larger data types, as you saw in the previous section on arithmetic operators, but it will throw a compiler exception if it detects that you are trying to convert from larger to smaller data types without casting.

The simplest assignment operator is the = assignment

- `compound assignment operators.`:- Compound operators are really just glorified forms of the simple assignment operator, with a built-­in arithmetic or logical operation that applies the left and right sides of the statement and stores the resulting value in the variable on the left side of the statement.
   1. Addition assignment  a += 5  Adds the value on the right to the variable on the left and assigns the sum to the variable
   2. Subtraction assignment b -­= 0.2 Subtracts the value on the right from the variable on the left and assigns the difference to the variable
   3. Multiplication assignment c *= 100 Multiplies the value on the right with the variable on the left and assigns the product to the variable
   4. Division assignment d /= 4 Divides the variable on the left by the value on the right and assigns the quotient to the variable

- `Relational Operators`:- Relational operators compares two expressions and return a boolean value.
   1. Less than a < 5 Returns true if the value on the left is strictly less than the value on the right
   2. Less than or equal to b <= 6 Returns true if the value on the left is less than or equal to the value on the right
   3. Greater than c > 9 Returns true if the value on the left is strictly greater than the value on the right
   4. Greater than or equal to 3 >= d Returns true if the value on the left is greater than or equal to the value on the right
   5. Type comparison e instanceof String Returns true if the reference on the left side is an instance of the type on the right side (class, interface,record, enum, annotation)

- `Equality Operators`:- The equals operator (==) and not equals operator (!=) compare two operands and return a boolean value determining whether the expressions or values are equal or not equal, respectively.
   1. Equality a == 10 Returns true if the two values represent the same value.Returns true if the two values reference the same object.
   2. Inequality b != 3.14 Returns true if the two values represent different values.Returns true if the two values do  not reference the same object.

- `Logical Operators`:-The logical operators, (&), (|), and (^), may be applied to both numeric and boolean data types.When they’re applied to boolean data types, they’re
referred to as logical operators. Alternatively, when they’re applied to numeric data types,they’re referred to as bitwise operators, as they perform bitwise comparisons of the bits that compose the number.
   1. Logical AND a & b Value is true only if both values are true.
   2. Logical inclusive OR c | d Value is true if at least one of the values is true.
   3. Logical exclusive OR e ^ f Value is true only if one value is true and the other is false.(!)

- `Conditional Operators`:-The conditional operators, often called short-­circuit operators, are nearly identical to the logical operators, & and |, except that the right side of the expression may never be evaluated if the final result can be determined by the left side of the expression.
   1. Conditional AND a && b Value is true only if both values are true. If the left side is false, then the right side will not be evaluated.
   2. Conditional OR c || d Value is true if at least one of the values is true. If the left side is true, then the right side will not be evaluated.
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


------------


# Decision-Making Statements

Java operators allow you to create a lot of complex expressions, but they’re limited in the manner in which they can control program flow.

- Statements and Blocks:- a Java statement is a complete unit of execution in Java, terminated with a semicolon (;).Control flow statements break up the flow of execution by
using decision-­making, looping, and branching, allowing the application to selectively execute particular segments of code.A block of code in Java is a group of zero or more statements between balanced braces ({}) and can be used anywhere a single statement is allowed.

- Helps in controlling the flow of execution.
   1. Comparison operators
   2. Logical operators
   3. conditional statements
   4. loops

## Conditional statements

- `The if Statement`:- Often, we want to execute a block only under certain circumstances. The if statement accomplishes this by allowing our application to execute a particular block of code if and only if a boolean expression evaluates to true at runtime.

```java
if (booleanExpression){

}
```

```java
if(hourOfDay < 11)
   System.out.println("Good Morning");

if(hourOfDay < 11) {
   System.out.println("Good Morning");
   morningGreetingCount++;
}
```

NOTE:-

```java
if(hourOfDay < 11)
   System.out.println("Good Morning");
   morningGreetingCount++;
```

Based on the indentation, you might be inclined to think the variable morningGreetingCount is only going to be incremented if hourOfDay is less than 11,but that’s not what this code does. It will execute the print statement only if the condition is met, but it will always execute the increment operation.

Remember that in Java, unlike some other programming languages, tabs are just whitespace and are not evaluated as part of the execution. When you see a control flow
statement in a question, be sure to trace the open and close braces of the block, ignoring any indentation you may come across.

- `The else Statement`:- Let’s expand our example a little. What if we want to display a different message if it is 11 a.m. or later? Can we do it using only the tools we have? Of course we can!

```java
if(hourOfDay < 11) {
   System.out.println("Good Morning");
}
if(hourOfDay >= 11) {
   System.out.println("Good Afternoon");
}
```

This seems a bit redundant, though, since we’re performing an evaluation on hourOfDay twice. Luckily, Java offers us a more useful approach in the form of an else statement.
Now our code is truly branching between one of the two possible options, with the boolean evaluation happening only once. The else operator takes a statement or block of
statements, in the same manner as the if statement. Similarly, we can append additional if statements to an else block to arrive at a more refined example:

```java
if(hourOfDay < 11) {
   System.out.println("Good Morning");
} else if(hourOfDay < 15) {
   System.out.println("Good Afternoon");
} else {
   System.out.println("Good Evening");
}
```

- *Pattern Matching*:-Java 16 officially introduced pattern matching with if statements and the instanceof operator.Pattern matching is a technique of controlling program flow that only executes a section of code that meets certain criteria. It is used in conjunction with if statements for greater program control.

- `Switch`:- It is a multibranch statement that allows a variable to be tested for equality against a list of values.Each values is called a case, and the variable being switched on is checked for each switch case.It can be used with byte, char,short and int primitive data types.Can also be used with enumerated types, String class and few wrapper classes.

Switch Data Types- switch statement has a target variable that is not evaluated until runtime. The type of this target can include select primitive data types (int, byte, short, char)and their associated wrapper classes (Integer, Byte, Short, Character). The following is a list of all data types supported by switch statements:

1. int and Integer
2. short and Short
3. byte and Byte
4. char and Character
5. String
6. enum values
7. var (if the type resolves to one of the preceding types)

```Java
int value;// values can be strings,floats...

 switch(value){
    case value1:
      //statements
      break;

    case value2:
     //statements
     break;

    case value3:
     //statements
     break;

    default:
     // statement
 }
 ```

Break statements is necessary coz without them, statements in switch block fall through: all statements after matching case label are executed in sequence, regardless of the expression of subsequent case labels, until a break statement is encountered.

- New Switch statement

```java
int value;// values can be strings,floats...

 switch(value){
    case value1 ->
     //statements

    case value2 ->
     //statements

    case value3->
     //statements

    default->
     // statement
 }
```

```java

int value=null;// values can be strings,floats...

 switch(value){
    case value1 -> value =1
    case value2 -> value =2
    case value3-> value=3
    default->value =4

 }

  system.out.println(value);
 ```

```java

int value=null;// values can be strings,floats...

 switch(value){
    case value1: yield value =1
    case value2: yield value =2
    case value3: yield value=3
    default: yield value =4

 }

  system.out.println(value);
```

## Loops

- `The for loop`:- A basic for loop has the same conditional boolean expression and statement as well as an initialization block and an update statement.Each of the three sections is separated by a semicolon. In addition, the initialization and update sections may contain multiple statements, separated by commas.

Variables declared in the initialization block of a for loop have limited scope and are accessible only within the for loop.

It is entry-controlled loop and is used when action is to be repeated for a predetermined no. of times.

```java
for(initialization; booleanExpression; updateStatement){
   //body
}
```

```java
for(int i = 0; i < 5; i++) {
   System.out.print(i + " ");
}
```

Alternatively, variables declared before the for loop and assigned a value in the initialization block may be used outside the for loop because their scope precedes the creation of the for loop.

```java
int i;
for(i=0; i < 10; i++)
System.out.println("Value is: "+i);
System.out.println(i);
```

**Working with for loops**:-

- Creating infinite loop-

```java
for( ; ; )
System.out.println("Hello World");
```

Although this for loop may look like it does not compile, it will in fact compile and run without issue. It is actually an infinite loop that will print the same statement repeatedly.This example reinforces the fact that the components of the for loop are each optional.Note that the semicolons separating the three sections are required, as for( ) without any semicolons will not compile.

- Adding Multiple Terms to the for Statement

```java
int x = 0;
for(long y = 0, z = 4; x < 5 && y < 10; x++, y++) {
   System.out.print(y + " "); }
System.out.print(x + " ");
```

This code demonstrates three variations of the for loop you may not have seen.First, you can declare a variable, such as x in this example, before the loop begins and
use it after it completes. Second, your initialization block, boolean expression, and update statements can include extra variables that may or may not reference each other. For example, z is defined in the initialization block and is never used. Finally, the update statement can modify multiple variables.

- Redeclaring a Variable in the Initialization Block

```java
int x = 0;
for(int x = 4; x < 5; x++)// DOES NOT COMPILE
   System.out.print(x + " ");
```

This example looks similar to the previous one, but it does not compile because of the initialization block. The difference is that x is repeated in the initialization block after already being declared before the loop, resulting in the compiler stopping because of a duplicate variable declaration. We can fix this loop by removing the declaration of x from the for loop as follows:

```java
int x = 0;
for(x = 0; x < 5; x++)
System.out.print(x + " ");
```

Note that this variation will now compile because the initialization block simply assigns a value to x and does not declare it.

- Using Incompatible Data Types in the Initialization Block

```java
int x = 0;
for(long y = 0, int z = 4; x < 5; x++)// DOES NOT COMPILE
   System.out.print(y + " ");
```

This code will not compile, although this time for a different reason. The variables in the initialization block must all be of the same type. In the multiple-­terms example, y and z were both long, so the code compiled without issue; but in this example, they have different types, so the code will not compile.

- Using Loop Variables Outside the Loop

```java
for(long y = 0, x = 4; x < 5 && y < 10; x++, y++)
   System.out.print(y + " ");
System.out.print(x);// DOES NOT COMPILE
```

If you notice, x is defined in the initialization block of the loop and then used after the loop terminates. Since x was only scoped for the loop, using it outside the loop will cause a compiler error.

- `The for-­each Loop`:- The for-­each loop is a specialized structure designed to iterate over arrays and various ­Collections Framework classes

```java
for(datatype instance: collection){
   //body
}
```

The for-­each loop declaration is composed of an initialization section and an object to be iterated over. The right side of the for-­each loop must be one of the following:

1. A built-­in Java array
2. An object whose type implements java.lang.Iterable

```java
public void printNames(String[] names) {
   for(int counter=0; counter<names.length; counter++)
      System.out.println(names[counter]);
}
public void printNames(String[] names) {
   for(var name : names)
      System.out.println(name);
}
```

- `while Loops`:-The syntax is:

```java
while(logical expression){
   //statements
}
```

`The for-­each Loop`:- The for-­each loop is a specialized structure designed to iterate over arrays and various ­Collections Framework classes.
The for-each loop is a syntactical sugar over the iterator object.The compiler converts it to use an iterator object.

```java
for(datatype instance: collection){
   //Body
}
```

The for-­each loop declaration is composed of an initialization section and an object to be iterated over. 

The right side of the for-­each loop must be one of the following:
1. A built-­in Java array
2. An object whose type implements java.lang.Iterable

The left side of the for-­each loop must include a declaration for an instance of a variable whose type is compatible with the type of the array or collection on the right side of the statement. On each iteration of the loop, the named variable on the left side of the statement is assigned a new value from the array or collection on the right side of the statement.



-------------

# Wrapper class

If you want to store integer value, you store it in **int** data type.Java provides primitive data types that's why Java is 99.9% OOP.Primitive helps us improve the performance(saves data directly) but certain feature work only with objects i.e collection framework.

- int: Integer class
- char: Character class
- long: Long class
- boolean: Boolean class
- float: Float class

## Boxing
It is manual mrthod to convert primitive type data into non-primitive type.

```Java
int num=2;
Integer num1 =new integer(8);
```
## Unboxing
It is manual method to convert non-primitive data type to primitive types.
```Java
int num2=num1.intValue(); //unboxing
```

## AutoBoxing
AutoBoxing:It is automatic conversion of primitive type data into non-primitive data type.
```Java
int num3=5;
Integer num4=num3; //autoboxing
```
## AutoUnBoxing:
It is automatic conversion of non primitive type data into primitive data type.
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


--------

## Interface Cloneable

    All Known Subinterfaces:
        AclEntry, Attribute, AttributedCharacterIterator, Attributes, CertPathBuilderResult, CertPathParameters, CertPathValidatorResult, CertSelector, CertStoreParameters, CharacterIterator, CRLSelector, Descriptor, GSSCredential, Name


    public interface Cloneable

    A class implements the Cloneable interface to indicate to the Object.clone() method that it is legal for that method to make a field-for-field copy of instances of that class.

    Invoking Object's clone method on an instance that does not implement the Cloneable interface results in the exception CloneNotSupportedException being thrown.

    By convention, classes that implement this interface should override Object.clone (which is protected) with a public method. See Object.clone() for details on overriding this method.

    Note that this interface does not contain the clone method. Therefore, it is not possible to clone an object merely by virtue of the fact that it implements this interface. Even if the clone method is invoked reflectively, there is no guarantee that it will succeed.


-------

# UUID

A class that represents an immutable universally unique identifier (UUID). A UUID represents a 128-bit value.

There exist different variants of these global identifiers. The methods of this class are for manipulating the Leach-Salz variant, although the constructors allow the creation of any variant of UUID (described below). 

 The variant field contains a value which identifies the layout of the UUID. The bit layout described above is valid only for a UUID with a variant value of 2, which indicates the Leach-Salz variant.

The version field holds a value that describes the type of this UUID. There are four different basic types of UUIDs: time-based, DCE security, name-based, and randomly generated UUIDs. These types have a version value of 1, 2, 3 and 4, respectively. 

Used for creating random files name,session id in web applications, transactions id

## constructor

```java
    public UUID(long mostSigBits,
                long leastSigBits)
```

Constructs a new UUID using the specified data. mostSigBits is used for the most significant 64 bits of the UUID and leastSigBits becomes the least significant 64 bits of the UUID.

Parameters:

* mostSigBits - The most significant bits of the UUID
* leastSigBits - The least significant bits of the UUID

