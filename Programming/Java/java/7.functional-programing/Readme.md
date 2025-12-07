# Functional Programming

Functional programming is a way of writing code more declaratively.You specify what you want to do rather than dealing with state of objects.it uses lambdas expressions to write code.

A lambda expression is a block of code that gets passed around. You can think of a lambda expression as an unnamed method existing inside an anonymous class.Lambda expressions are often referred to as lambdas for short.

## Lambdas

A lambda expression is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.The main objective of Lambda expression is to get functional interface benefits.
Lambdas allow you to specify code that will be run later in the program.Lambda expressions was introduce in 1930 and was big change in mathematics world.It was started to be used in programming kanguages.

Lambda expressions can access static variables, instance variables, effectively final method parameters, and effectively final local variables.
Lambda expression is an anonymous function.

1. It doesn't have a name.
2. It doesn't have modifiers
3. No return type.

- Normal Functions

```java

public int sum(int a,int b){
    int result= a+b;
    return result;
}

public void fun(){
    System.out.Println("Lambda")
}

public int getLenth(int side){
    return side.length()
}
```

- Lambda Expression

```java
(int a,int b)->{int result = a+b}//(a,b)->int result =a+b;(This is Type Inference i.e The data type is determined during Runtime)
()->{System.out.Println("Lambda")}//()->System.out.Println("Lambda")
(int side)->{return side.length()}//side->side.length()
```

- Characteristics
    1. Lambda Expressions can take any no. of parameters.
    2. If multiple parameters are present then it shuld be separated with comma.
    3. If only one parameter is present then paranthesis are optional.
    4. Type Inference- We do not need to pass data type in parameters,based on context compiler can detect the type automatically.
    5. If Lambda method has one statement,then no need of curl braces
    6. If Lambda returns something then we can remove return keyword.

Functinal Interfaces are used to call Lambda expressions even if has no name.

Lambda expression is essentially an object.

```java
Printer printer = message -> System.out.println("lambda expression can be defined and stored as objects");
```

## Method References

Method references are another way to make the code easier to read, such as simply mentioning the name of the method. Like lambdas, it takes time to get used to the new syntax.

NOTE:- Remember that :: is like a lambda, and it is used for deferred execution with a functional interface. You can even imagine the method reference as a lambda if it helps you.

A method reference and a lambda behave the same way at runtime. You can pretend the compiler turns your method references into lambdas for you.
There are four formats for method references:

1. static methods
2. Instance methods on a particular object
3. Instance methods on a parameter to be determined at runtime
4. Constructors

- Calling static Methods
For the first example, we use a functional interface that converts a double to a long:

```java
interface Converter {
long round(double num);
}
```

We can implement this interface with the round() method in Math. Here we assign a method reference and a lambda to this functional interface:

```java
Converter methodRef = Math::round;
Converter lambda = x -­> Math.round(x);
System.out.println(methodRef.round(100.1));// 100
```

- Calling Instance Methods on a Parameter
This time, we are going to call the same instance method that doesn’t take any parameters.The trick is that we will do so without knowing the instance in advance. We need a different functional interface this time since it needs to know about the String:

```java
interface StringParameterChecker {
boolean check(String text);
}
```

We can implement this functional interface as follows:

```java
StringParameterChecker methodRef = String::isEmpty;
StringParameterChecker lambda = s -­> s.isEmpty();
System.out.println(methodRef.check("Zoo")); // false
```

- Calling Constructors
A constructor reference is a special type of method reference that uses new instead of a method and instantiates an object. For this example, our functional interface will not take any parameters but will return a String:

```java
interface EmptyStringCreator {
String create();
}
```

To call this, we use new as if it were a method name:

```java
EmptyStringCreator methodRef = String::new;
EmptyStringCreator lambda = () -­> new String();

var myString = methodRef.create();
System.out.println(myString.equals("Snake")); // false
```

## Functional interfaces

Functional interfaces is an interface with single abstract method(SAM).It is used to invoke Lambda Expressions.

It can have any no. of default methods and static methods.

Example

```java
public interface Demo{
    public void fun();//abstract method
    default void fun1(){
        //body of default method
    };
    public static void fun2(){
        //body of static
    };
}
```

```java
public interface Demo1{
    public void fun();
    public void fun1();
}
```

Demo is functional interface coz it has one abstract method while Demo1 is not.

@FunctionalInterface annotation is used to indicate that the interface is functional interface.It helps in detection of more than one abstract method.It gives error incase of zero or more than one abstract method.

The `@FunctionalInterface` annotation tells the compiler that you intend for the code to be a functional interface. If the interface does not follow the rules for a functional interface, the compiler will give you an error.

Java includes @FunctionalInterface on some, but not all, functional interfaces. This annotation means the authors of the interface promise it will be safe to use in a lambda in the future. However, just because you don’t see the annotation doesn’t mean it’s not a functional interface. Remember that having exactly one abstract method is what makes it a functional interface, not the annotation.

```java
@FunctionalInterface
public interface Demo{
    public void fun();
}
```

Runnable--run()-One abstract method
Callable--call()
Comparable--compareTo()
ActionListener--actionPerformed()

UseCase:

- If any interface extends Functional Interface and child interface does not contain abstract methods then the child is also an Functional Interface.

```java
@FunctionalInterface
public interface Demo{
    public void fun();
}
```

```java
public interface Demo1 extends Demo{//valid Functional interface but not necessarily FI.

}
```

```java
public interface Demo2 extends Demo{
 public void fun1();//Not Functional interface
}
```

```java
@FunctionalInterface
public interface Demo3 extends Demo{//Functional interface

}
```

There is no implementation class for Functional interface.i.e replace implementation class with lambda expressions.Functional Interface contains one abstract method becase Lambda Expression only provides implementation for one method.

There is one exception to the single abstract method rule that you should be familiar with. If a functional interface includes an abstract method with the same signature as a public method found in Object, those methods do not count toward the single abstract method test. The motivation behind this rule is that any class that implements the interface will inherit from Object, as all classes do, and therefore always implement these methods.


## Predifined Functional Interface

It would be inconvenient to write your own functional interface any time you want to write a lambda. Luckily, a large number of general-­purpose functional interfaces are provided for you.
The core functional interfaces are provided in the java.util.function package.

1. Supplier<T> T get()
2. Predicate<T> boolean test(T)
3. BiPredicate<T,U> boolean test(T,U)
4. UnaryOperator<T> T apply(T)
5. BinaryOperator<T> T appy(T,T)
6. Consumers<T> void accept(T)
7. BiConsumer<T,U> void accept(T,U)
8. Function<T,R> R apply(T)
9. BiFunction<T,U,R> R apply(T,U)

- `Supplier`:- A Supplier is used when you want to generate or supply values without taking any input.It does not have any default and static methods.It does not have chaining concept and two argument concepts.
The Supplier interface is defined as follows:

```java
@FunctionalInterface
public interface Supplier<T> {
T get();
}
```

```java
Supplier<String> sup = () -> "Hello World";
var result = sup.get();
System.out.println(result);
```

There are primitive specialization of Supplier e.g BooleanSupplier,DoubleSupplier..

- `Consumer and BiConsumer`:- You use a Consumer when you want to do something with a parameter but not return anything. BiConsumer does the same thing, except that it takes two parameters. The interfaces are defined as follows:

```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
// omitted default method
}

@FunctionalInterface
public interface BiConsumer<T, U> {
void accept(T t, U u);
// omitted default method
}
```

```java
List<Integer> items = List.of(1, 2, 3, 4, 5);
Consumer<List<Integer>> item = System.out::println;
item.accept(items);

Consumer<String> c1 = System.out::println;
Consumer<String> c2 = x -­> System.out.println(x);
c1.accept("Collins");
```


- `Predicate and BiPredicate`:- Predicate is often used when filtering or matching. Both are common operations. A BiPredicate is just like a Predicate, except that it takes two parameters instead of one. The interfaces are defined as follows:
- Predicate It is boolean value function.Used to perform some conditional cheks. i.e wherever conditional checks are there use prediacte instead of writing more codes.It will replace the if statements.Represents a predicate (boolean-valued function) of one argument.This is a functional interface whose functional method is test(Object).


```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
    // omitted default and static methods
}

@FunctionalInterface
public interface BiPredicate<T, U> {
    boolean test(T t, U u);
    // omitted default methods
}
```

```java

public boolean test(String s){
    if(String.length > 6){
        return true;
    } else{
        return false;
    }
}
```

```java
()->{
    if(String.length > 6){
        return true;
    } else{
        return false;
    }
}
```

```java
Predicate<String s> p = s-> s.lenght>6;
    p.test("Collins");
```


- `Function and BiFunction` - A Function is responsible for turning one parameter into a value of a potentially different type and returning it. Similarly, a BiFunction is responsible for turning two parameters into a value and returning it. The interfaces are defined as follows:

```java
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
    // omitted default and static methods
}

@FunctionalInterface
public interface BiFunction<T, U, R> {
    R apply(T t, U u);
    // omitted default method
}
```

```java
Function<String, Integer> f1 = String::length;
Function<String, Integer> f2 = x -­> x.length();

System.out.println(f1.apply("cluck"));// 5
System.out.println(f2.apply("cluck"));// 5
```

The first two types in the BiFunction are the input types. The third is the result type.


- `UnaryOperator and BinaryOperator`:- UnaryOperator and BinaryOperator are special cases of a Function. They require all type parameters to be the same type. A UnaryOperator transforms its value into one of the same type. For example, incrementing by one is a unary operation. In fact, UnaryOperator extends Function. A BinaryOperator merges two values into one of the same type. Adding two numbers is a binary operation. Similarly, BinaryOperator extends BiFunction.
The interfaces are defined as follows:

```java
@FunctionalInterface
public interface UnaryOperator<T> extends Function<T, T> {
// omitted static method
}
@FunctionalInterface
public interface BinaryOperator<T> extends BiFunction<T, T, T> {
// omitted static methods
}
```

```java
UnaryOperator<String> u1 = String::toUpperCase;
UnaryOperator<String> u2 = x -­> x.toUpperCase();

System.out.println(u1.apply("chirp"));// CHIRP
System.out.println(u2.apply("chirp"));// CHIRP
```

```java
BinaryOperator<String> b1 = String::concat;
BinaryOperator<String> b2 = (string, toAdd) -­> string.concat(toAdd);
System.out.println(b1.apply("baby ", "chick"));// baby chick
System.out.println(b2.apply("baby ", "chick"));// baby chick
```


Functional interfaces are used to call Lambda expressions.Lambda expressions is used to reduce no. of lines of code.

           calls                         calls

Stream API-------->Functional Interface--------->Lambda Expressions
