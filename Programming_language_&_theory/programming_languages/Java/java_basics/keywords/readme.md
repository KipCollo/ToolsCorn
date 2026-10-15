# Keywords

Words that has its own special meaning in Java and doesn't change from one program to another.i.e if, else

## package

Package is a container that can contain class files, interfaces and subpackages.
package keyword is used to specify a package to which the current file belongs to.

```java
package pack1;

class A
{
     //...
}
```

## enum

enum keyword is used to define enum types.Enum type is special data type that enables a variable to be a set of pre-defined constants.The variable must be equal to one of values that has been predefined.

```java
public enum Color
{
    RED, GREEN, BLUE;
}

public class Main
{
    public static void main(String[] args)
    {
        Color c1 = Color.RED;
        System.out.println(c1);
    }
}
```

## interface

interface keyword is used to define the interfaces in java. It is a mechanism to achieve abstraction. There can be only abstract methods in the Java interface, not method body.

```java
interface MyInterface
{
    void myMethod();
}
```

## transient

transient keyword is used in serialization. A variable which is declared as transient will not be eligible for serialization.

```java
class MyClass implements Serializable
{
    int a;

    transient String s;   //This will not be serialized

    double d;
}
```

## extends

extends keyword is used in inheritance. It is used when a class extends another class or an interface extends another interface.

```java
class SuperClass
{
    //Super Class
}

class SubClass extends SuperClass
{
    //Sub Class
}
```

## implements

implements keyword is used while implementing an interface.Used when a class implements an interface.

```java
interface MyInterface
{
    void myMethod();
}

class MyClass implements MyInterface
{
    public void myMethod()
    {
        System.out.println("My Method");
    }
}
```

## import

import keyword is used to import the members of a particular package into current java file.

```java
import java.sql.*;
import java.util.Arrays;
import java.util.Scanner;
```

## class

class keyword is used when defining a class

```java
class Book{

}
```

## new

new keyword is used while creating the instances of a class.

```java
class Animal
{
     //...
}

public class MainClass
{
    public static void main(String[] args)
    {
        Animal animal = new Animal();
    }
}
```

## this

this keyword is used to access other members of the same class.

- _In Java, this is a reference variable that refers to the current object._
- _Call to this() must be the first statement in constructor._
- _this can be used to: refer current class instance variable, invoke current class method and constructor._
- _this canpassed as an argument in the method and constructor call._
- _this can be used to return the current class instance from the method._
- _It is better approach to use meaningful names for variables. So we use same name for instance variables and parameters in real time, and always use this keyword._

```java
class AnyClass
{
    int i;

    AnyClass()
    {
        System.out.println("First Constructor");
    }

    AnyClass(int j)
    {
        this();    //calling statement to First Constructor
        System.out.println("Second Constructor");
    }

    void methodOne(int i)
    {
        this.i=i;
        System.out.println("From method one");
    }

    void methodTwo()
    {
        System.out.println(this.i);  //Accessing same class field
        this.methodOne();      //Accessing same class method
    }
}
```

## abstract

abstract keyword is used to implement the abstraction in java. A method which doesn’t have method definition must be declared as abstract and the class containing it must be declared as abstract. You can’t instantiate abstract classes. Abstract methods must be implemented in the sub classes. You can’t use abstract keyword with variables and constructors.

```java
abstract class AbstractClass
{
    abstract void abstractMethod();
}
```

## break

The break keyword is used to stop the execution of a loop(for, while, switch-case) based on some condition.

```java
for (int i = 0; i < 100; i++)
{
    System.out.println(i);

    if(i == 50) break;
}
```

## switch case

Both switch and case keywords are used in the switch-case statement.

```java
Scanner sc = new Scanner(System.in);

System.out.println("Enter Day :");

int day = sc.nextInt();

switch (day)
{
    case 1:
        System.out.println("SUNDAY");
        break;

    case 2:
        System.out.println("MONDAY");
        break;

    //...

    case 7:
        System.out.println("SATURDAY");
        break;

    default:
        System.out.println("Invalid");
        break;
}
```

## default

default keyword is used to define the default methods in an interface (From Java 8). default keyword is also used in the switch-case statements.

```java
interface MyInterface
{
    public default void myDefaultMethod()
    {
        System.out.println("Default Method");
    }
}
```

## if else

if and else keywords are used in if-else block.

```java
Scanner sc = new Scanner(System.in);

System.out.println("Enter a string :");

String input = sc.next();

if(input.equalsIgnoreCase("JAVA"))
{
    System.out.println("It's JAVA");
}
else
{
    System.out.println("It's not JAVA");
}
```

TODO## Var

## static Keyword

- _The static can be: variable (class variable), method (class method), block & nested class._
- _Java static property is shared to all objects._
- _A static method belongs to the class rather than object of a class._
- \*A static method can be invoked without the need for creating an instance of a class.\*\*
- _A static method can access static data member and can change the value of it._
- _The static method can not use non static data member or call non-static method directly._
- _this and super cannot be used in static context._
- _The main method is static because object is not required to call static method if it were non-static method, jvm create object first then call main() method that will lead the problem of extra memory allocation._
- _A static block is used to initialize the static data member. It is executed before main method at the time of classloading._

## super Keyword

- _The super keyword is a reference variable which is used to refer immediate parent class object._
- _super can be used to refer immediate parent class instance variable or invoke immediate parent class method and constructor._
- _super() is added in each class constructor automatically by compiler if there is no super() or this()._

## final Keyword

- _The final keyword in java is used to restrict the user._
- _You cannot change the value of final variable(It will be constant)._
- _If you make any as , You cannot override a final method._
- _If you make any class as final, you cannot extend it._
- _Final method is inherited but you cannot override it._
- _A final variable that is not initialized at the time of declaration is known as blank final variable._
- _We can initialize a blank final variable only in constructor._
- _A static final variable that is not initialized at the time of declaration is known as static blank final variable. It can be initialized only in static block._
- _If you declare any parameter as final, you cannot change the value of it._
- _A constructor cannot be declared final because it is never inherited._

## instanceof Keyword

- _instanceof operator is used to test whether the object is an instance of the specified type (class/subclass/interface)._
- _When Subclass type refers to the object of Parent class, it is known as downcasting._
- _If we perform downcasting directly, there is compile error._
- _If we perform downcasting by typecasting, ClassCastException is thrown at runtime._
- _If we use instanceof operator, downcasting is possible!_
