# Class

A class is a collection of a fixed number of components.The components of a class are called members.It's a blueprint for objects.
A class is a collection of objects. Classes don’t consume any space in the memory.It is a user defined data type that act as a template for creating objects of the identical type

It contains:

- Fields/ Variables/ state
- Methods /Behaviour

## Constructors

A constructor is a special method that matches the name of the class and has no return type. It is called when a new instance of the class is created.
Constructor is used to initialize the state of an object.There are two types of constructors: with parameters and without parameters.
Like method parameters, constructor parameters can be any valid class, array, or primitive type, including generics, but may not include var. For example, the following does not compile:

```java
public class Bonobo {
   public Bonobo(var food) {
 }
}
```

A class can have multiple constructors, as long as each constructor has a unique constructor signature. In this case, that means the constructor parameters must be distinct. Like methods with the same name but different signatures, declaring multiple constructors with different signatures is referred to as **constructor overloading.** The following Turtle class has four distinct overloaded constructors:

```java
public class Turtle {
   private String name;
   public Turtle() {
     name = "John Doe";
   }
   public Turtle(int age) {}
   public Turtle(long age) {}
   public Turtle(String newName, String... favoriteFoods) {
      name = newName;
   }
}
```

Constructors are used when creating a new object. This process is called instantiation because it creates a new instance of the class. A constructor is called when we write new followed by the name of the class we want to instantiate. Here’s an example:

```java
new Turtle(15)
```

When Java sees the new keyword, it allocates memory for the new object. It then looks for a constructor with a matching signature and calls it.

- `The Default Constructor`:- Every class in Java has a constructor, whether you code one or not. If you don’t include any constructors in the class, Java will create one for you without any parameters.

This Java-­created constructor is called the default constructor and is added any time a class is declared without any constructors. We often refer to it as the default no-­argument constructor, for clarity. Here’s an example:

```java
public class Rabbit {
   public static void main(String[] args) {
      new Rabbit();// Calls the default constructor
   }
}
```

In the Rabbit class, Java sees that no constructor was coded and creates one. The previous class is equivalent to the following, in which the default constructor is provided and therefore not inserted by the compiler:

```java
public class Rabbit {
   public Rabbit() {}
   public static void main(String[] args) {
   new Rabbit();// Calls the user-­defined constructor
 }
}
```

The default constructor has an empty parameter list and an empty body. It is fine for you to type this in yourself. However, since it doesn’t do anything, Java is happy to generate it for you and save you some typing.
We keep saying generated. This happens during the compile step. If you look at the file with the .java extension, the constructor will still be missing. It only makes an appearance in the compiled file with the .class extension.

NOTE: Having only private constructors in a class tells the compiler not to provide a default no-­argument constructor. It also prevents other classes from instantiating the class. This is useful when a class has only static methods or the developer wants to have full control of all calls to create new instances of the class.

- Calling Overloaded Constructors with this():- ince a class can contain multiple overloaded constructors,these constructors can actually call one another. Let’s start with a simple class containing two overloaded constructors:

```java
public class Hamster {
private String color;
private int weight;

public Hamster(int weight, String color) { // First constructor
this.weight = weight;
this.color = color;
}

public Hamster(int weight) { // Second constructor
this.weight = weight;
color = "brown";
}
}
```

There is a bit of duplication, as this.weight is assigned the same way in both constructors. In programming, even a bit of duplication tends to turn into a lot of duplication as we keep adding “just one more thing.”

Java provides a solution: this()—­yes, the same keyword we used to refer to instance members, but with parentheses. When this() is used with parentheses, Java calls another
­constructor on the same instance of the class.

```java
public Hamster(int weight) {// Second constructor
 this(weight, "brown");
}
```

NOTE: this vs. this():- Despite using the same keyword, this and this() are very different. The first, this,refers to an instance of the class, while the second, this(), refers to a constructor call within the class.

Calling this() has one special rule you need to know. If you choose to call it, the this() call must be the first statement in the constructor. The side effect of this is that there can be only one call to this() in any constructor.

```java
public Hamster(int weight) {
System.out.println("chew");
// Set weight and default color
this(weight,"brown")//DOES NOT COMPILE
}
```

Java does not allow cyclic constructor calls.

- Calling Parent Constructors with super():- The first statement of every constructor is a call to a parent constructor using super() or another constructor in the class using this().

Let’s take a look at the Animal class and its subclass Zebra and see how their constructors can be properly written to call one another:

```java
public class Animal {
private int age;
public Animal(int age) {
super();// Refers to constructor in java.lang.Object
this.age = age;
}
}
public class Zebra extends Animal {
public Zebra(int age) {
super(age); // Refers to constructor in Animal
}
public Zebra() {
this(4);// Refers to constructor in Zebra with int argument
}
}
```

NOTE: super vs. super():- The first, super, is used to reference members of the parent class, while the second, super(), calls a parent constructor. Anytime you see the keyword super on the exam, make sure it is being used properly.

Like calling this(), calling super() can only be used as the first statement of the constructor.For example, the following two class definitions will not compile:

```java
public class Zoo {
   public Zoo() {
      System.out.println("Zoo created");
      super();// DOES NOT COMPILE
   }
}
```

## Objects

An object is an instance of a class.
An object is a real world entity which have properties and functionalities.Object is also called an instance of class. Objects take
some space in memory.

**new**: Used to create an object from a class.

classname obj_reference = new classname();
classname obj_reference; // object declararion
obj_reference = new classname(); //object initialisation

You use the dot(.) operator to access members of the objects (fields and methods).

obj_reference.field;
obj_reference.method();

### Class Modifiers

- *There are two types of modifiers in java: access modifiers and non-access modifiers.*
- *There are 4 types of java access modifiers: private, default, protected & public.*
- *There are many non-access modifiers such as static, abstract, synchronized, native, volatile, transient etc.*
- *The private access modifier is accessible only within class.*
- *If you make any class constructor private, you cannot create the instance of that class from outside the class.*
- *If we don't use any modifier, it is treated as default. Default modifier is accessible only within package.*
- *A Class cannot be private or protected except nested class.*
- *The protected access modifier is accessible within package and outside the package but through inheritance only.*
- *The public access modifier is accessible everywhere. It has the widest scope among all other modifiers.*
- *If you are overriding any method, overridden method (i.e. declared in subclass) must not be more restrictive.*
- *final The class may not be extended.*
- *abstract The class is abstract, may contain abstract methods,and requires a concrete subclass to instantiate.*
- *sealed The class may only be extended by a specific list of classes.*
- *non-­sealed A subclass of a sealed class permits potentially unnamed subclasses.*
- *static Used for static nested classes defined within a class.*
- *package-private modifier- When you remove an access modifier in field of a class,it is public inside the same package but private outside the package*

Like variables and methods, you can apply access modifiers to classes. A top-­level class is one not defined inside another class. Also remember that a .java file can have at most one top-­level class.
While you can only have one top-­level class, you can have as many classes (in any order) with package access as you want. In fact, you don’t even need to declare a public class! The following declares three classes, each with package access:

```java
// Bear.java
class Bird {}
class Bear {}
class Fish {}
```

Trying to declare a top-­level class with protected or private class will lead to a compiler error, though:

```java
// ClownFish.java
protected class ClownFish{} // DOES NOT COMPILE
// BlueTang.java
private class BlueTang {} // DOES NOT COMPILE
```

The final modifier prevents a class from being extended any further. For example, the following does not compile:

```java
public final class Rhinoceros extends Mammal { }
public class Clara extends Rhinoceros { }// DOES NOT COMPILE
```

On the exam, pay attention to any class marked final. If you see another class extending it, you know immediately the code does not compile.An example of final class is the String class since it is immutable.

## Sealed Class

A sealed class is a class that restricts which other classes may directly extend it.
A sealed class declares a list of classes that can extend it, while the subclasses declare that they extend the sealed class.

Sealed Class Keywords:-
`sealed`: Indicates that a class or interface may only be extended/implemented by named classes or interfaces.
`permits`: Used with the sealed keyword to list the classes and interfaces allowed
`non-­sealed`: Applied to a class or interface that extends a sealed class, indicating that it can be extended by unspecified classes

```java
public sealed class Bear permits Kodiak,Panda{}
public final class Kodiak extends Bear{}
public non-sealed class Panda extends Bear{}
```


## Nested Classes

A nested class is a class that is defined within another class.A nested class can come in one of four flavors.
1. Inner class: A non-­static type defined at the member level of a class
2. Static nested class: A static type defined at the member level of a class
3. Local class: A class defined within a method body
4. Anonymous class: A special case of a local class that does not have a name

Nested classes can define helper classes and restrict them to the containing class, thereby improving encapsulation. They can make it easy to create a class that will be used in only one place. They can even make the code cleaner and easier to read.

`Inner Class`:- An inner class, also called a member inner class, is a non-­static type defined at the member level of a class (the same level as the methods, instance variables, and constructors). Because they are not top-­level types, they can use any of the four access levels, not just public and package access.

Inner classes have the following properties:
- Can be declared public, protected, package, or private
- Can extend a class and implement interfaces
- Can be marked abstract or final
- Can access members of the outer class, including private members

A `static nested class`:- is a static type defined at the member level. Unlike an inner class, a static nested class can be instantiated without an instance of the enclosing class. The trade-­off, though, is that it can’t access instance variables or methods declared in the outer class.
In other words, it is like a top-­level class except for the following:

1. The nesting creates a namespace because the enclosing class name must be used to
refer to it.
2. It can additionally be marked private or protected.
3. The enclosing class can refer to the fields and methods of the static nested class.

A `local class` is a nested class defined within a method. Like local variables, a local class declaration does not exist until the method is invoked, and it goes out of scope when the method returns. This means you can create instances only from within the method. Those instances can still be returned from the method. This is just how local variables work.

Local classes have the following properties:
1. They do not have an access modifier.
2. They can be declared final or abstract.
3. They have access to all fields and methods of the enclosing class (when defined in an instance method).
4. They can access final and effectively final local variables.

An `anonymous class` is a specialized form of a local class that does not have a name. It is declared and instantiated all in one statement using the new keyword, a type name with parentheses, and a set of braces {}. Anonymous classes must extend an existing class or implement an existing interface. They are useful when you have a short implementation that will not be used anywhere else.

Prior to Java 8, anonymous classes were frequently used for asynchronous tasks and event handlers.

```java
public class Gift{
   abstract class TodaySales{
      abstract int cash();
   }

   public int admission(int price){
      TodaySales sale =new TodaySales(){
         int cash(){return 3;}
      };
      return price - sale.cash();
   }
}
```

## Anonymous Inner classes

```java
@FunctionalInterface
public interface Demo{
    public void fun();
}
```

```java
public class DemoImpl implements Demo{
    public void fun(){
        System.out.println("DemoImp printing..");
    }
}
```

```java
public class Show{

    // public static void show(){
    //     demo(new DemoImpl());
    // }

    public static void show(){ //inner class
        demo(new Demo(){
          public void fun(){
           System.out.println("InnerClass printing..");
          }
        });
    }

    public static void demo(Demo demo){
        demo.fun()
    }
}
```
