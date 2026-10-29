# OOPs(Object-Oriented Programming System)

OOPs stands for Object-Oriented Programming system. It is a programming paradigm in which software design involves around data, or objects, rather than functions and logic. In OOPs, objects are data fields that have unique attributes and properties.OOPs focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. That's why large, complex and actively updated or maintained program is well suited for OOPs paradigm of programming.

`Class` is a user-defined data type which defines its properties and its functions. Class is the only logical representation of the data.The class does not occupy any memory space till the time an object is instantiated.
`Object` is a run-time entity. It is an instance of the class. An object can operate on both data members and member functions.

Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance. Main Concepts - Inheritance, Polymorphism, Abstraction, Encapsulation.

- OOP concepts include:
  1. Classes
  2. Object
  3. Encapsulation
  4. Abstraction
  5. Inheritance
  6. Polymorphism

Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance. Main Concepts - Inheritance, Polymorphism, Abstraction, Encapsulation.

---

## Class

The class is at the core of Java. It is the logical construct upon which the entire Java language is built because it defines the shape and nature of an object. As such, the class forms the basis for object-oriented programming in Java.It's a blueprint for objects.
A class is a collection of objects. Classes don’t consume any space in the memory.It is a user defined data type that act as a template for creating objects of the identical type

Java class design is about code reusability, increased functionality, and standardization.

A class in Java can contain: Fields/ Variables/ state, methods/behavior, constructors, blocks, nested class and interface.

A class is declared by use of the `class` keyword.A simplified general form of a class definition is shown here:

class classname {
type instance-variable1;
type instance-variable2;
// ...
type instance-variableN;

    type methodname1(parameter-list) {
        // body of method
    }
    type methodnameN(parameter-list) {
        // body of method
    }

}

The data, or variables, defined within a class are called instance variables. The code is contained within methods. Collectively, the methods and variables defined within a class are called members of the class.Variables defined within a class are called instance variables because each instance of the class (that is, each object of the class) contains its own copy of these variables. Thus, the data for one object is separate and unique from the data for another.

`Class Modifiers` - Like methods and variables, a class declaration can have various modifiers.

1. final - The class may not be extended.
2. abstract - The class is an abstract,may contain abstract methods,and requires a concrete subclass to instantiate.
3. sealed - The class may only be extended by a specific list of classes.
4. non-sealed - A subclass of a sealed permits potentially unnamed subclasses.
5. static - Used for static neseted classes defined within a class.

**Constructors**:- A constructor is a special method that matches the name of the class and has no return type used to initialize the state of an object. It is called when a new instance of the class is created.It is
There are two types of constructors: with parameters and without parameters.Like method parameters, constructor parameters can be any valid class, array, or primitive type, including generics, but may not include var.

There is no copy constructor in java. But, we can copy the values of one object to another like copy constructor in C++.

A constructor can perform other tasks instead of initialization like object creation, starting a thread, calling method etc.You can perform any operation in the constructor as you perform in the method.

A class can have multiple constructors, as long as each constructor has a unique constructor signature. In this case, that means the constructor parameters must be distinct. Like methods with the same name but different signatures, declaring multiple constructors with different signatures is referred to as `constructor overloading`.The following Turtle class has four distinct overloaded constructors:

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

- _The Default Constructor_:- Every class in Java has a constructor, whether you code one or not. If you don’t include any constructors in the class, Java will create one for you without any parameters.This happens during the compile step. If you look at the file with the .java extension, the constructor will still be missing. It only makes an appearance in the compiled file with the .class extension.

This Java-­created constructor is called the default constructor and is added any time a class is declared without any constructors. We often refer to it as the default no-­argument constructor, for clarity.
The default constructor has an empty parameter list and an empty body.

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

NOTE: Having only private constructors in a class tells the compiler not to provide a default no-­argument constructor. It also prevents other classes from instantiating the class. This is useful when a class has only static methods or the developer wants to have full control of all calls to create new instances of the class.

- `Calling Overloaded Constructors with this()`:- Since a class can contain multiple overloaded constructors,these constructors can actually call one another.

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

There is a bit of duplication, as this.weight is assigned the same way in both constructors. In programming, even a bit of duplication tends to turn into a lot of duplication as we keep adding just one more thing.

Java provides a solution: this(). When this() is used with parentheses, Java calls another ­constructor on the same instance of the class.

```java
public Hamster(int weight) {// Second constructor
 this(weight, "brown");
}
```

NOTE: this vs. this():- Despite using the same keyword, this and this() are very different. The first, this,refers to an instance of the class, while the second, this(), refers to a constructor call within the class.

Calling this() has one special rule you need to know. If you choose to call it, the this() call must be the first statement in the constructor. The side effect of this is that there can be only one call to this() in any constructor.

Java does not allow cyclic constructor calls.

- `Calling Parent Constructors with super()`:- The first statement of every constructor is a call to a parent constructor using super() or another constructor in the class using this().

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

NOTE: super vs. super():- The first, super, is used to reference members of the parent class, while the second, super(), calls a parent constructor.
Like calling this(), calling super() can only be used as the first statement of the constructor.For example, the following two class definitions will not compile:

_Constructors vs Methods_ -

1. Constructor must not have return type.Method must have return type.
2. Constructor is invoked implicitly.Method is invoked explicitly.
3. Compiler provides a default constructor if you don't have any constructor.Method is not provided by compiler in any case.
4. Constructor name must be same as the class name. Method name may or may not be same as class name.

**Types of classes**:-

1. `Concrete Class/Regular class`:- A regular class is a typical class that can be instatiated to create objects.Used when you need a fully defined class to create objects.
2. `Abstract Class`:- Cannot be instatiated but can have concrete methods and abstract methods(without body).Other classes must extend it and implement abstract methods.Used when creating a base class with some default behavior and forcing subclasses to implement specific methods.
3. `Final Class`:- Cannot be extended(inherited) by other classes.Used when you want to prevent inheritance, ensuring the class remains unchanged.
4. `Static Class(nested Static Class)`:- Java does not allow standalone static class,but you can create static nested classes inside another class.
5. `Singleton class`:- Ensures that only one instance of the class exists.

_Final class_ - The final modifier prevents a class from being extended any further. For example, the following does not compile:

```java
public final class Rhinoceros extends Mammal { }
public class Clara extends Rhinoceros { }// DOES NOT COMPILE
```

_Abstract class_ - An abstract class is a class declared with the abstract modifier that cannot be instantiated directly and may contain abstract methods.
An abstract class may include non-­abstract methods. In fact, an abstract class can include all of the same members as a non-­abstract class, including variables, static and instance methods, constructors, etc.
Let’s take a look at an example based on the Canine data model:

```java
public abstract class Canine {}
public class Wolf extends Canine {}
```

In this example, other developers can create instances of Wolf but not Canine. Sure, they can pass a variable reference as a Canine, but the underlying object must be a subclass of Canine at runtime.

An abstract class can have data member, abstract method, method body, constructor and even main() method.
If there is any abstract method in a class, that class must be abstract.\_
If extending any abstract class that have abstract method, we must either provide the implementation of the method or make this class abstract.
Abstract class can also be used to provide some implementation of an interface. Then, the end user extending thtis abstract class is free to skip implementing that method while overriding all the methods of the interface.

Abstract class is not required to include any abstract methods.Even without abstract methods, the class cannot be directly instantiated.Like the final modifier, the abstract modifier can be placed before or after the access modifier in class and method declarations.
An abstract class can extend a non-­abstract class and vice versa. Anytime a concrete class is extending an abstract class, it must mplement all of the methods that are inherited as abstract.

`Abstract Methods` - An abstract method is a method declared with the abstract modifier that does not define a body. An abstract method forces subclasses to override the method.It is always declared without a body. It also includes a semicolon (;) after the method declaration.
Abstarct is used to implement Polymorphism.By declaring a method abstract, we can guarantee that some version will be available on an instance without having to specify what that version is in the abstract parent class.

With abstract methods,Instead of defining the method, we can declare the method.If we put a semicolon at the end of a method, it means that you only declare the method.

```java
public abstract class Canine {
   public abstract String getSound();
   public void bark() { System.out.println(getSound()); }
}
public class Wolf extends Canine {
   public String getSound() {
      return "Wooooooof!";
} }

//creating an instance
public static void main(String[] args){
   Canine w = new Wolf()
   w.bark()//wooof
}
```

NOTE: It is not possible to define an abstract method that has a body or default implementation. You can still define a default method with a body—­you just can’t mark it as abstract. As long as you do not mark the method as final, the subclass has the option to override the inherited method.

Abstract Rules:-

1. Abstract methods can only be defined in an abstract class.
2. Only instance methods can be marked abstract within a class, not variables, constructors, or static methods.
3. A non-­abstract class that extends an abstract class must implement all inherited abstract methods.
4. Overriding an abstract method follows the existing rules for overriding methods. If you are extending an abstract class, then it is compulsory to define all abstract methods.
5. It is not necessary that an abstract class should have an abstract method.
6. Abstract class can have an abstract or a normal method or both.
7. An abstract class can have more than one abstract method.

_Concrete class_ - A class other than an abstract class is known as a concrete class.An object of a concrete class can be created.
An abstract class becomes usable when it is extended by a concrete subclass. A concrete class is a non-­abstract class. The first concrete subclass that extends an abstract class is required to implement all inherited abstract methods. This includes implementing any inherited abstract methods from inherited interfaces.

_Sealed Class_ - A sealed class is a class that restricts which other classes may directly extend it.A sealed class declares a list of classes that can extend it, while the subclasses declare that they extend the sealed class.

Sealed Class Keywords:-

- `sealed`: Indicates that a class or interface may only be extended/implemented by named classes or interfaces.
- `permits`: Used with the sealed keyword to list the classes and interfaces allowed
- `non-­sealed`: Applied to a class or interface that extends a sealed class, indicating that it can be extended by unspecified classes

```java
public sealed class Bear permits Kodiak,Panda{}
public final class Kodiak extends Bear{}
public non-sealed class Panda extends Bear{}
```

**Nested Classes** - A nested class is a class that is defined within another class.A nested class can come in one of four flavors.

1. Inner class: A non-­static type defined at the member level of a class
2. Static nested class: A static type defined at the member level of a class
3. Local class: A class defined within a method body
4. Anonymous class: A special case of a local class that does not have a name

Nested classes can define helper classes and restrict them to the containing class, thereby improving encapsulation. They can make it easy to create a class that will be used in only one place. They can even make the code cleaner and easier to read.

_Inner Class_:- An inner class, also called a member inner class, is a non-­static type defined at the member level of a class (the same level as the methods, instance variables, and constructors). Because they are not top-­level types, they can use any of the four access levels, not just public and package access.

Inner classes have the following properties:

- Can be declared public, protected, package, or private
- Can extend a class and implement interfaces
- Can be marked abstract or final
- Can access members of the outer class, including private members

```java
public class Home{
   private String greeting = "Hi"; // Outer class instance variable
   protected class Room{// Inner class declaration
      private static void greet(String message){
         System.out.println(message);
      }
      public void enter(){
         greet(greeting);
      }
   }
   public void enterRoom(){// Instance method in outer class
      var room = new Room();// Create the inner class instance
      room.enter();
   }
}
```

Instantiating an Instance of an Inner Class - There is another way to instantiate Room that looks odd at first.

```java
public static void main(String[] args) {
   var home = new Home();
   Room room = home.new Room(); // Create the inner class instance
   room.enter();

   new Home().new Room().enter();//shortening
}
```

NOTE:- Compiling the Home.java class with which we have been working creates two class files. You should be expecting the Home.class file. For the inner class, the compiler creates Home$Room.class.

_Static nested class_:- is a static type defined at the member level. Unlike an inner class, a static nested class can be instantiated without an instance of the enclosing class. The trade-­off, though, is that it can’t access instance variables or methods declared in the outer class.
In other words, it is like a top-­level class except for the following:

1. The nesting creates a namespace because the enclosing class name must be used to refer to it.
2. It can additionally be marked private or protected.
3. The enclosing class can refer to the fields and methods of the static nested class.

```java
class Outer{
    static class Inner{
        void display(){
            //
        }
    }
}

Outer.Inner obj = new Outer.Inner();
obj.display();
```

_local class_ is a nested class defined within a method. Like local variables, a local class declaration does not exist until the method is invoked, and it goes out of scope when the method returns. This means you can create instances only from within the method. Those instances can still be returned from the method. This is just how local variables work.

Local classes are not limited to being declared only inside methods. For example, they can be declared inside constructors and initializers.

Local classes have the following properties:

1. They do not have an access modifier.
2. They can be declared final or abstract.
3. They have access to all fields and methods of the enclosing class (when defined in an instance method).
4. They can access final and effectively final local variables.

```java
public class PrintNumbers {
   private int length = 5;
   public void calculate() {
      final int width = 20;
      class Calculator {
         public void multiply() {
            System.out.print(length * width);
         }
      }
      var calculator = new Calculator();
      calculator.multiply();
   }
   public static void main(String[] args) {
      var printer = new PrintNumbers();
      printer.calculate(); // 100
   }
}
```

_Anonymous class_ is a specialized form of a local class that does not have a name. It is declared and instantiated all in one statement using the new keyword, a type name with parentheses, and a set of braces {}. Anonymous classes must extend an existing class or implement an existing interface. They are useful when you have a short implementation that will not be used anywhere else.

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

### Interface

An `interface` is an abstract data type that declares a list of abstract methods that any class implementing the interface must provide.
We can write main method inside interface.
Interface does not have its own memory in the heap.

In an abstract class, we can have both abstract methods as well as normal or concrete methods.Since classes can only extend one class, they had limited use for inheritance. On the other hand, a class may implement any number of interfaces.
Over time, the precise definition of an interface has changed, as new method types are now supported.

We cannot instantiate an interface.It only shows the design and it does not provide any implementation.To provide an implementation of methods, you need to create a class and instantiate it also.
If your class has only abstract methods then instead of using class, you can simply use an interface in place of it.

- _An interface in java is a blueprint of a class. It has static constants and abstract methods._
- _Since Java 8, we can have method body in interface. But we need to make it default or static method._
- _The interface is a mechanism to achieve abstraction. It represents IS-A relationship._
- _By using interface, we can support multiple inheritance._
- _It can be also used to achieve loose coupling (coupling is degree of direct knowledge that one element has of another)._
- _The Java compiler adds public & abstract before the interface method. Adds public, static & final before data members._
- _A class extends another class, an interface extends another interface but a class implements an interface._
- _Multiple inheritance is not supported by class because of ambiguity. But, supported by interface because there is no ambiguity as implementation is provided by the implementation class._
- _An interface with no member is called marker/tagged interface. For example: Serializable, Cloneable, Remote etc._
- _An interface can have another interface i.e. known as nested interface._

**Declaring and Using an Interface** - In Java, an interface is defined with the interface keyword, analogous to the class keyword used when defining a class.

```java
public interface Demo{}
```

_implements keyword_:-To implement an interface, we use the keyword `implements`.If you use the implements keyword with class, then it is compulsory to give an implementation of all the methods that are defined in an interface.

If you do not give an implementation of all methods then it will make your class an abstract class by default.So, to make a concrete class, you have to give the implementation of all methods present in an interface.

```Java
class B implements A,B{}
```

Variables in an interface:-

- We can call the methods of an interface by creating an object of the class that implements an interface.
- We can also declare variables in an interface.
- All the variables in an interface are final and static by default.
- As a variable is static in an interface, then you do not need to create an object for it. You can directly call the variable by using the interface name.
  e.g., A.area; (here, area is a variable initialized in an interface)
- As the variable is final, you can not change the value of that variable after initializing it once.

_Extending an Interface_ - Like a class, an interface can extend another interface using the extends keyword.

```java
public interface A extends B {}
```

Types of Interface:-

1. Normal interface - an interface having two or more methods
2. Functional interface (SAM)- SAM => Single Abstract Method interface
3. Marker interface - an interface that as no methods (blank interface)

**Methods In Interfaces**:-

_Default/Concrete Methods_:- They are concrete methods.A default method is a method defined in an interface with the default keyword and includes a method body. It may be optionally overridden by a class implementing the interface.Introduced in Java 8.
One use of default methods is for backward compatibility. You can add a new default method to an interface without the need to modify all of the existing classes that implement the interface. The older classes will just use the default implementation of the method defined in the interface.

```java
@FunctionalInterface
public interface MyInterface
{
   public void funMethod();
   public default void myDefaultMethod(){
      System.out.println("Default Method");
    }
}
```

Default Interface Method Definition Rules

1. A default method may be declared only within an interface.
2. A default method must be marked with the default keyword and include a method body.
3. A default method is implicitly public.
4. A default method cannot be marked abstract, final, or static.
5. A default method may be overridden by a class that implements the interface.
6. If a class inherits two or more default methods with the same method signature, then the class must override the method.

- `Default methods in multiple inheritance`:- If multiple interaces provide same default method,The class must override the method to resolve the conflict.

```java
public interface A{
public default void myDefaultMethod(){
      System.out.println("Default Method A ");
   }
}

public interface B{
 public default void myDefaultMethod(){
      System.out.println("Default Method B");
   }
}

public class Test implements A,B{
   //ambiguity - we will get ambiguity
}
```

To override ambigutiy:

```java
public class Test implements A,B{
    public default void myDefaultMethod(){
     A.super.myDefaultMethod();
   }
}
```

Functional Interface with default methods is not equal to abstract classes.

- Abstract class can't refer Lambda expression whereas Functional Interface with default methods can refer Lambda Expression
- Inside Abstract class we can override Object class methods but can't do in Functional Interface
- Inside Abstract class we can declare constructors methods but can't declare in Functional Interface

_Static methods_:- Are used to define general utility methods.Utility methods are codes that will be used in many places.Static methods will not be inherited into impl class,so we directly call it from className.

Static Interface Method Definition Rules

1. A static method must be marked with the static keyword and include a method body.
2. A static method without an access modifier is implicitly public.
3. A static method cannot be marked abstract or final.
4. A static method is not inherited and cannot be accessed in a class implementing the interface without a reference to the interface name.
5. There is no static method overriding.

```java
public interface Hop {
   static int getJumpHeight() {
      return 8;
   }
}
public class Skip {
   public int skip() {
      return Hop.getJumpHeight();
   }
}
```

**Marker interface**- Marker interface are used to provide essential information to JVM, so that JVM may perform some useful operation.

**Abstract Class vs Interface** -

1. Abstract class can have abstract and non-abstract methods.Interface can have only abstract methods. Since Java8, it can have default & static methods also.
2. Abstract class doesn't support multiple inheritance.Interface supports multiple inheritance.
3. Abstract class can have final, non-final, static and non-static variables.Interface has only static and final variables.
4. Abstract class can provide the implementation of interface.Interface can't provide the implementation of abstract class.
5. The abstract keyword is used to declare abstract class.The interface keyword is used to declare interface.

### Enumeration(Enums)

An enumeration, or enum for short, is like a fixed set of constants.
Using an enum is much better than using a bunch of constants because it provides type-­safe checking. With numeric or String constants, you can pass an invalid value and not find out until runtime. With enums, it is impossible to create an invalid enum value without introducing a compiler error.

To create an enum, declare a type with the enum keyword, a name, and a list of values.

```java
public enum Days {

   MONDAY,
   TUESDAY,
   WEDNESDAY;

}
```

We refer to an enum that only contains a list of values as a simple enum. When working with simple enums, the semicolon at the end of the list is optional.

Enum values are considered constants and are commonly written using snake case. For example, an enum declaring a list of ice cream flavors
might include values like VANILLA, ROCKY_ROAD, MINT_CHOCOLATE_CHIP, and so on.

The values in an enum are fixed. You cannot add more by extending the enum.

_Calling the values(), name(), and ordinal() Methods_

An enum provides a `values()` method to get an array of all of the values. You can use this like any normal array, including in a for-­each loop:

```java
for(var season: Season.values()) {
   System.out.println(season.name() + " " + season.ordinal());
}
```

`ordinal()`:- Returns the ordinal of this enumeration constant (its position in its enum declaration, where the initial constant is assigned an ordinal of zero). Most programmers will have no use for this method. It is designed for use by sophisticated enum-based data structures, such as java. util. EnumSet and java. util. EnumMap.

_Adding Constructors, Fields, and Methods_ -

While a simple enum is composed of just a list of values, we can define a complex enum with additional elements.

```java
public enum Season{
   WINTER("Low"),
   SPRING("Medium"),
   SUMMER("High"),
   AUTUMN("Medium"),
   FALL;

   private String visitors;

   private Season(String visitors){
      this.visitors = visitors;
   }

   private Season(){
      visitors = "Medium"//Default when no visitors is specified
   }

   public void printExpectedVisitors() {
      System.out.println(visitors);
   }
}
```

All enum constructors are implicitly private, with the modifier being optional. This is reasonable since you can’t extend an enum and the constructors can be called only within the enum itself. In fact, an enum constructor will not compile if it contains a public or protected modifier.

The parentheses are constructor calls, but without the new keyword normally used for objects. The first time we ask for any of the enum values, Java constructs all of the enum values. After that, Java just returns the already constructed enum values.

To call an enum method we just use the enum value followed by the method call.

```java
Season.SUMMER.printExpectedVisitors();
```

### Records

A record is a special type of data-­oriented class in which the compiler inserts boilerplate code for you.They remove a ton of boilerplate code.
The compiler also inserts useful implementations of the Object methods equals(), hashCode(), and toString().

`Members Automatically Added to Records`:-

1. Constructors - A constructor with the parameters in the same order as the record declaration.
2. Accessor method - One accessor for each field.
3. equals() - A method to compare two elements that returns true if each field is equal in terms of equals().
4. hashCode() - A consistent hashCode() method using all of the fields.
5. toString() - A toString() implementation that prints each field of the record in a convenient, easy-­to-­read format.

NOTE:- The compiler will not insert a constructor if you define one with the same list of parameters in the same order. Since each field is final, the constructor must set every field.

`Compact Constructors` - A compact constructor is a special type of constructor used for records to process validation and transformations succinctly. It takes no parameters and implicitly sets all fields.

```java
public record Crane(int numberEggs, String name){
   public Crane{
      if(numberEggs < 0) throw new IllegalArgumentException();
      name = name.toUpperCase();
   }
}
```

Java will execute the full constructor after the compact constructor.

`Transforming Parameters`:- Compact constructors give you the opportunity to apply transformations to any of the input values.

```java
public record Crane(int numberEggs, String name) {
   public Crane {
      if (name == null || name.length() < 1) throw new IllegalArgumentException();
      name = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
   }
}
```

While compact constructors can modify the constructor parameters, they cannot modify the fields of the record.While compact constructors can modify the constructor parameters, they cannot modify the fields of the record. For example, this does not compile:

```java
public record Crane(int numberEggs, String name) {
   public Crane {
      this.numberEggs = 10; // DOES NOT COMPILE
}
}
```

Removing the this reference allows the code to compile, as the constructor parameter is modified instead.

`Overloaded Constructors`:- You can also create overloaded constructors that take a completely different list of parameters. They are more closely related to the long-­form constructor and don’t use any of the syntactical features of compact constructors.

```java
public record Crane(int numberEggs, String name) {
public Crane(String firstName, String lastName) {
this(0, firstName + " " + lastName);
}
}
```

### packages

Packages are containers for classes. They are used to keep the class name space compartmentalized.
A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer. You might keep HTML pages in one folder, images in another, and scripts or applications in yet another. Because software written in the Java programming language can be composed of hundreds or thousands of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages.

`Defining a Package`:- To create a package is quite easy: simply include a package command as the first statement in a Java source file. Any classes declared within that file will belong to the specified package.
The package statement defines a name space in which classes are stored. If you omit the package statement, the class names are put into the default package, which has no name.(This is why you haven’t had to worry about packages before now.) While the default package is fine for short, sample programs, it is inadequate for real applications.
This is the general form of the package statement:-

package pkg;

Here, pkg is the name of the package. For example, the following statement creates a package called MyPackage:

```java
package mypackage;
```

Java uses file system directories to store packages. For example, the .class files for any classes you declare to be part of MyPackage must be stored in a directory called MyPackage.
Remember that case is significant, and the directory name must match the package name exactly.

More than one file can include the same package statement. The package statement simply specifies to which package the classes defined in a file belong. It does not exclude
other classes in other files from being part of that same package. Most real-world packages are spread across many files.

You can create a hierarchy of packages. To do so, simply separate each package name from the one above it by use of a period. The general form of a multileveled package statement is shown here:

package pkg1[.pkg2[.pkg3]];

A package hierarchy must be reflected in the file system of your Java development system. For example, a package declared as

```java
package java.awt.image;
```

- _Java package is used to categorize the classes and interfaces, provides access protection and removes naming collision._
- _The package keyword is used to create a package. Package inside the package is called the subpackage._
- _If you import a package (package._ ), subpackages will not be imported.\*
- _To import subpackage, use import package.classname._
- _Use fully qualified name to access only the declared class of a package._
- _Sequence of the program must be package then import then class._
- _The standard of defining package is domain.company.package. eg - com.oracle.database_
- _There can be only one public class in a java source file and it must be saved by the public class name._

Packages may include:

- `java.lang` :Provides classes that are fundamental to the design of the Java programming language.
- `java. util`: Contains the collections framework, legacy collection classes, event model, date and time facilities, internationalization, and miscellaneous utility classes (a string tokenizer, a random-number generator, and a bit array).Contains the collections framework, some internationalization support classes, a service loader, properties, random number generation, string parsing and scanning classes, base64 encoding and decoding, a bit array, and several miscellaneous utility classes. This package also contains legacy collection classes and legacy date and time classes.
- `java.awt`: Contains all of the classes for creating user interfaces and for painting graphics and images.
- java.sql: Provides the API for server side data source access and processing from the JavaTM programming language.
- java.net: Provides classes for networking applications
- java.io: Provides for system input and output through data streams, serialization and the file system.

---

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

**Java Object class**:- In Java,the Object class is the parent class of all classes in Java.It is part of java.lang package and is implicitly the superclass of every class in Java i.e every class in Java inherits from Object class,either directly or indirectly.
The Object class provides a set of basic methods that all Java Object inherit.These methods are fundamental for interacting with objects,such as comparing,cloning or converting them into strings.
Key methods:-

- `String toString()` - Returns a String representation of the Object.Default implementation returns class name followed by Hash code of the object.Can be overridden for custom String representation.
- `boolean equals(Object obj)`:- Compares current object with specified object for equality.Default implementation checks reference equality(if both objects point to the same memory location).Can be overridden to provide custom equality logic.
- `Object clone()`:- Creates and returns a copy of the object.The Cloneable interface must be implemented by the class;otherwise, it throws CloneNotSupportedException.
- `int hashCode()`:- Returns an interger hash code for the object.Used in hash-based collections like HashMap and HashSet.Should be consistent with equals method when overridden.
- `void finalize()`:- Called by garbage collector before an object is destroyed.Used to release system resources or perform cleanup tasks.It's generally discouraged to rely on this method for resource management.
- `final Class<?> getClass()`:- Returns the runtime class of te object.Useful for reflection.returns the Class class object of this object. The Class class can further be used to get the metadata of this class.
- `void notify()`:- Wakes up a single thread that is waiting on the object's monitor.Used in synchronization.
- `void notifyAll()`:- Wakes up all threads that are waiting on object's monitor.
- `void wait(long timeout)`:- Causes current thread to wait for the specified milliseconds, until another thread invokes notify or notifyAll on same object.It throws InterruptedException.
- `void wait(long timeout,int nanos)` - causes the current thread to wait for the specified milliseconds and nanoseconds, until another thread notifies (invokes notify() or notifyAll() method).It throws InterruptedException.
- `void wait()` - causes the current thread to wait, until another thread notifies (invokes notify() or notifyAll() method).It throws InterruptedException.
- `void finalize()` - is invoked by the garbage collector before object is being garbage collected.

**Object vs Class** -

1. Object is an instance of a class.Class is a blueprint or template from which objects are created.
2. Object is a real world entity such as pen, laptop, mobile, bed, keyboard, mouse, chair etc.Class is a group of similar objects.
3. Object is a physical entity.Class is a logical entity.
4. Object is created through new keyword mainly e.g. Student s1=new Student();Class is declared using class keyword e.g. class Student{}.
5. Object is created many times as per requirement.Class is declared once.
6. Object allocates memory when it is created.Class doesn't allocated memory when it is created.
7. There are many ways to create object like new keyword, newInstance() method, clone() method, factory method & deserialization.There is only one way to define class in java using class keyword.

---

## Inheritance

Inheritance is the process by which a subclass automatically includes certain members of the class, including primitives, objects, or methods, defined in the parent class.
Inheritance is one of the cornerstones of object-oriented programming because it allows the creation of hierarchical classifications.
When creating a new class in Java, you can define the class as inheriting from an existing class. Inheritance is the process by which a subclass automatically includes certain members of the class, including primitives, objects, or methods, defined in the parent class.

Inheritance (IS-A) is a mechanism in which one object acquires all the properties and behaviors of parent object.The extends keyword indicates that you are making a new class that derives from an existing class.Multiple inheritance is not supported in Java through class. We can use Interface to perform it.To reduce the complexity and simplify the language, multiple inheritance is not supported in java.If a class have an entity reference, it is known as Aggregation (HAS-A relationship).\*
Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of the objects involved; otherwise, aggregation is the best choice.

Is a type of feature through which we can copy properties to a class from upper class.
It rep the IS-A relationship also known as parent-child relationship.In inheritance there are two classes:

We refer to any class that inherits from another class as a subclass or child class or derived class, as it is considered a descendant of that class. Alternatively, we refer to the class that the child inherits from as the superclass or base or parent class, as it is considered an ancestor of the class.

NOTE: When working with other types, like interfaces, we tend to use the general terms subtype and supertype.

To inherit a class, you simply incorporate the definition of one class into another by using the extends keyword.We don’t need to declare anything in the superclass other than making sure it is not marked final.

```java
public class Mammal{}//superclass
public final class Rhinoceros extends Mammal{}//subclass
```

One key aspect of inheritance is that it is transitive. Given three classes [X, Y, Z], if X extends Y, and Y extends Z, then X is considered a subclass or descendant of Z. Likewise,Z is a superclass or ancestor of X. We sometimes use the term direct subclass or descendant to indicate the class directly extends the parent class. For example, X is a direct descendant only of class Y, not Z.
When one class inherits from a parent class, all public and protected members are automatically available as part of the child class. If the two classes are in the same package, then package members are available to the child class. Last but not least, private members are restricted to the class they are defined in and are never available via inheritance. This doesn’t mean the parent class can’t have private members that can hold data or modify an object; it just means the subclass doesn’t have direct access to them.

```java
public class BigCat {
protected double size;
}

public class Jaguar extends BigCat {
public Jaguar() {
size = 10.2;
}

public void printDetails() {
System.out.print(size);
}
}

public class Spider {
public void printDetails() {
System.out.println(size);
}
}
```

The final modifier prevents a class from being extended any further. For example, the following does not compile:

```java
public final class Rhinoceros extends Mammal { }
public class Clara extends Rhinoceros { }// DOES NOT COMPILE
```

`Single vs. Multiple Inheritance`:- Java supports single inheritance, by which a class may inherit from only one direct parent class. Java also supports multilevel levels of inheritance, by which one class may extend another class, which in turn extends another class. You can have any number of levels of inheritance, allowing each descendant to gain access to its ancestor’s members.
By design, Java doesn’t support multiple inheritance - by which a class may have multiple direct parents - in the language because multiple inheritance can lead to complex, often difficult-­to-­maintain data models. Java does allow one exception to the single inheritance rule,­a class may implement multiple interfaces.

Diamond problem - When two parent classes inherit from a common ancestor and override the same method, the child class faces ambiguity.This leads to confusion and maintenance challenges.Java philosophy design:-

1.  Simplicity over complexity : Java was designed to be simple, clear, and easy to maintain.
2.  Avoiding ambiguity : Multiple inheritance introduces ambiguity, which conflicts with Java’s goal of being straightforward
3.  “Write Once, Run Anywhere”: Complex inheritance hierarchies could hinder portability and predictability.

`Inheriting Object`:- In Java, all classes inherit from a single class:java.lang.Object, or Object for short. Furthermore, Object is the only class that doesn’t have a parent class.The compiler automatically inserts the code into any class you write that doesn’t extend a specific class. For example, the following two are equivalent:

```java
public class Zoo { }
public class Zoo extends java.lang.Object { }
```

The key is that when Java sees you define a class that doesn’t extend another class, the compiler automatically adds the syntax extends java.lang.Object to the class definition. The result is that every class gains access to any accessible methods in the Object class.For example, the toString() and equals() methods are available in Object; therefore,they are accessible in all classes. Without being overridden in a subclass, though, they may not be particularly useful.

On the other hand, when you define a new class that extends an existing class, Java does not automatically extend the Object class. Since all classes inherit from Object, extending an existing class means the child already inherits from Object by definition. If you look at the inheritance structure of any class, it will always end with Object on the top of the tree.Primitive types such as int and boolean do not inherit from Object, since they are not classes.Through autoboxing they can be assigned or passed as an instance of an associated wrapper class, which does inherit Object.

---

## Abstraction

Abstraction is a process of hiding the implementation details and showing only functionality to the user.
Encapsulation is an attribute of an object,and it contains all data which is hidden.That hidden data can be restricted to members of that class.

There are two ways to achieve abstraction in java : Abstract class (0 to 100%) and Interface (100%).

---

## Encapsulation

It is a mechanism of binding member data(variabes) and member function(methods) that operate on the daa together into a single unit i.e. class.Encapsulation is an striking feature of OOPs that provides data security.
The main advantage of encapsulation is that data is hidden and protected from access by outside non-member methods of a class. In other words, only member functions defined in a class will have access to the data.

Encapsulation is a process of wrapping code and data together into a single unit.To create a fully encapsulated class, make all data members of the class private, & use setter/getter methods to access data.By providing only setter or getter method, you can make the class read-only or write-only.

Encapsulation is a way to protect class members by restricting access to them. In Java, it is commonly implemented by declaring all instance variables private. Callers are required to use methods to retrieve or modify instance variables.
Encapsulation is about protecting a class from unexpected use. It also allows us to modify the methods and behavior of the class later without someone already having direct access to an instance variable within the class. For example, we can change the data type of an instance variable but maintain the same method signatures. In this manner, we maintain full control over the internal workings of a class.

In encapsulation, data(variables) are declared as private and methods are declared as public.

```java
public class Person{
    private int id;
    private String name;

    public void setId(int id){
        this.id=id;
    }
    public int getId(){
        return id;
    }
    public void setName(String name){
        this.name=name;
    }
    public void getName(){
        return name;;
    }
}
```

**Access Modifiers** - Encapsulation provides another important attribute: access control. Through encapsulation, you can control what parts of a program can access the members of a class. By controlling access, you can prevent misuse.For example, allowing access to data only through a well-defined set of methods, you can prevent the misuse of that data.Java supplies a rich set of access modifiers. Some aspects of access control are related mostly to inheritance or packages. (A package is, essentially, a grouping of classes.)

There are two types of modifiers in java: `access modifiers` and `non-access modifiers`.There are 4 types of java access modifiers: private, default, protected & public.There are many non-access modifiers such as static, abstract, synchronized, native, volatile, transient etc.

The private access modifier is accessible only within class.If you make any class constructor private, you cannot create the instance of that class from outside the class.\*
package-private modifier- When you remove an access modifier in field of a class,it is public inside the same package but private outside the package.If we don't use any modifier, it is treated as default. Default modifier is accessible only within package.

A Class cannot be private or protected except nested class.
The protected access modifier is accessible within package and outside the package but through inheritance only.
The public access modifier is accessible everywhere. It has the widest scope among all other modifiers.

If you are overriding any method, overridden method (i.e. declared in subclass) must not be more restrictive.
final The class may not be extended.
abstract The class is abstract, may contain abstract methods,and requires a concrete subclass to instantiate.
sealed The class may only be extended by a specific list of classes.
non-­sealed A subclass of a sealed class permits potentially unnamed subclasses.
static Used for static nested classes defined within a class.

Java’s access modifiers are public, private, and protected. Java also defines a default access level. protected applies only when inheritance is involved.

---

## Polymorphism

The meaning of the word polymorphism is something like one name, many forms.
Polymorphism is a concept by which we can perform a single action by different ways

Polymorphism manifests itself in Java in the form of multiple methods having the same name.In some cases, multiple methods have the same name, but different formal argument lists(overloaded methods).In other cases, multiple methods have the same name, same return type, and same formal argument list (overridden methods).
Polymorphism can be performed in 3 distinct forms in java:-

1. Method overloading.
2. Method overriding through inheritance.
3. Method overriding through java interface.

There are two types of polymorphism in java: compile time polymorphism and runtime polymorphism

1. method overloading, sometimes referred to as compile-time polymorphism.
2. runtime polymorphism.

- _If you overload static method in java, it is the example of compile time polymorphism._
- _In Runtime polymorphism (Dynamic Method Dispatch), an overridden method is resolved at runtime rather than compile-time._
- _A Virtual Method is an inheritable and overridable method for which dynamic dispatch is facilitated._
- _All non-static, non-final and non-private methods are Virtual Methods by default._
- _When reference variable of Parent class refers to the object of Child class, it is known as upcasting._
- _Method is overridden not the datamembers, so runtime polymorphism can't be achieved by data members._
- _Connecting a method call to the method body is known as binding._
- _There are two types of binding : Static binding (early binding) and Dynamic binding (late binding)._

**Method Overloading**:- Overloaded methods may all be defined in the same class, or may be defined in different classes as long as those classes have a superclass-subclass relationship.
Java allows you to have two or more method definitions in the same scope with the same name, provided that they have different formal argument lists.

Method overloading occurs when methods in the same class have the same name but different method signatures, which means they use different parameter lists.
Everything other than the method name can vary for overloading methods. This means there can be different access modifiers, optional specifiers (like static), return types, and exception lists.

A valid overload differs in the number or type of its arguments. Differences in argument names are not significant. A different return type is permitted, but is not suficient by itself to distinguish an overloading method.
A valid override has identical argument types and order, identical return type, and is not less accessible than the original method. The overriding method must not throw any checked exceptions that were not declared for the original method.

`Compile-time polymorphism`:- Some authors refer to method overloading as a form of compile-time polymorphism,as distinguished from
run-time polymorphism.
This distinction comes from the fact that, for each method call, the compiler determines which method (from a group of overloaded methods) will be executed, and this decision is made when the program is compiled.
In practice, the compiler simply examines the types, number, and order of the parameters being passed in a method call, and selects the overloaded method having a matching formal argument list.

Method overloading can occur both within a class definition, and vertically within the class inheritance hierachry.(In other words, an overloaded method can be inherited into a class that defines other overloaded versions of the method.)

```java
class A extends Object{
    public void m(){
       System.out.println("m()");
    }
}

//---------------------------------//
class B extends A{
    public void m(int x){
        System.out.println("m(int x)");
    }

    public void m(String y){
        System.out.println("m(String y)");
    }
}

//---------------------------------//
public class Poly01{
    public static void main(String[] args){
        B var = new B();
        var.m();
        var.m(3);
        var.m("String");
    }
}
```

Overloaded methods have the same name and different formal argument lists.They may or may not have the same return type.

**Runtime polymorphism through method overriding and class inheritance**:- The reason that this type of polymorphism is often referred to as runtime polymorphism is because the decision as to which version of the method to execute cannot be made until runtime. The decision cannot be made at compile time.
The decision cannot be made at compile time because the compiler has no way of knowing(when the program is compiled) the actual type of the object whose reference will be stored in reference variable.

With runtime polymorphism based on method overriding,The decision as to which version of a method will be executed is based on the actual type of the object whose reference is stored in the reference variable, and not on the type of the reference variable on which the method is called.

`Late binding`:- The decision as to which version of the method to call cannot be made at compile time. That decision must be deferred and made at runtime. This is sometimes referred to as late binding.

```java
class A extends Object{
    public void m(){
        System.out.println("m in class A");
    }
}

//===================================//
class B extends A{
    public void m(){
        System.out.println("m in class B");
    }
}

//===================================//
public class Poly03{
    public static void main(String[] args){
        Object var = new B();
    //Following will compile and run
    ((B)var).m();
    //Following will also compile and run due to polymorphic behavior.
    ((A)var).m();
    //Following will not compile var.m(); Instantiate obj of class A
    var = new A();
    //Call the method on it
    ((A)var).m();
    }
}
```

**Runtime polymorphism as implemented using method overriding and the Java interface**:-

If a class implements an interface, it must provide a concrete definition for all the methods declared by that interface, and all the methods inherited by that interface. Otherwise, the class must be declared abstract and the definitions must be provided by a class that extends the abstract class.
If a class inherits one or more abstract methods from its superclasses, it must provide concrete definitions for all the inherited abstract methods. Otherwise, the class must be declared abstract and the concrete definitions must be provided by a class that extends the abstract class.

_Method Overloading vs Method Overriding_ -

1. Method overloading is used to increase the readability of the program.Method overriding is used to provide the specific implementation of the method that is already provided by its super class.
2. Method overloading is performed within class.Method overriding occurs in two classes that have IS-A (inheritance) relationship.
3. In case of method overloading, parameter must be differentIn case of method overriding, parameter must be same.
4. Method overloading is the example of compile time polymorphism.Method overriding is the example of run time polymorphism.
5. In java, method overloading can't be done by changing only the return type of method.Return type can be same/different in overloading, but you must change the parameter.Return type must be same or covariant (changing return type to subclass type) in method overriding.

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

---

## Annotations (Metadata)

Since JDK 5, Java has supported a feature that enables you to embed supplemental information into a source file. This information, called an `annotation`, does not change the actions of a program. Thus, an annotation leaves the semantics of a program unchanged.However, this information can be used by various tools during both development and deployment. For example, an annotation might be processed by a source-code generator. The term `metadata` is also used to refer to this feature, but the term `annotation` is the most descriptive and more commonly used.

An annotation is created through a mechanism based on the interface.

```java
// A simple annotation type.
@interface MyAnno {
   String str();
   int val();
}
```

The `@` that precedes the keyword interface tells the compiler that an annotation type is being declared. Next, notice the two members str( ) and val( ). All annotations consist solely of method declarations. However, you don’t provide bodies for these methods. Instead, Java implements these methods. Moreover, the methods act much like fields.
An annotation cannot include an extends clause. However, all annotation types automatically extend the Annotation interface. Thus, Annotation is a super-interface of all annotations. It is declared within the java.lang.annotation package. It overrides hashCode( ), equals( ), and toString( ), which are defined by Object. It also specifies annotationType( ), which returns a Class object that represents the invoking annotation.

Once you have declared an annotation, you can use it to annotate something. Prior to JDK 8, annotations could be used only on declarations.(JDK 8 adds the ability to annotate type.However, the same basic techniques apply to both kinds of annotations.) Any type of declaration can have an annotation associated with it. For example, classes, methods, fields,parameters, and enum constants can be annotated. Even an annotation can be annotated.In all cases, the annotation precedes the rest of the declaration.

```java
// Annotate a method.
@MyAnno(str = "Annotation Example", val = 100)
public static void myMeth() { // ...
}
```

To give a member a value, that member’s name is assigned a value.

**Specifying a Retention Policy**:- A retention policy determines at what point an annotation is discarded. Java defines three such policies, which are encapsulated within the java.lang.annotation.RetentionPolicy enumeration. They are SOURCE, CLASS, and RUNTIME.

- An annotation with a retention policy of SOURCE is retained only in the source file and is discarded during compilation.
- An annotation with a retention policy of CLASS is stored in the .class file during compilation. However, it is not available through the JVM during run time.
- An annotation with a retention policy of RUNTIME is stored in the .class file during compilation and is available through the JVM during run time. Thus, RUNTIME retention offers the greatest annotation persistence.

NOTE An annotation on a local variable declaration is not retained in the .class file.

A retention policy is specified for an annotation by using one of Java’s built-in annotations: @Retention. Its general form is shown here: @Retention(retention-policy).
If no retention policy is specified for an annotation, then the default policy of CLASS is used.

```java
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnno {
   String str();
   int val();
}
```

**Obtaining Annotations at Run Time by Use of Reflection**:- Although annotations are designed mostly for use by other development or deployment tools, if they specify a retention policy of RUNTIME, then they can be queried at run time by any Java program through the use of reflection. Reflection is the feature that enables information about a class to be obtained at run time. The reflection API is contained in the java.lang.reflect package. There are a number of ways to use reflection.

The first step to using reflection is to obtain a Class object that represents the class whose annotations you want to obtain. Class is one of Java’s built-in classes and is defined in java.lang.

There are various ways to obtain a Class object.One of the easiest is to call getClass( ), which is a method defined by Object. Its general form is shown here:

```java
final Class<?> getClass( )
```

It returns the Class object that represents the invoking object.

`Obtaining All Annotations`:- You can obtain all annotations that have RUNTIME retention that are associated with an item by calling getAnnotations( ) on that item. It has this general form:

```java
Annotation[ ] getAnnotations( )
```

It returns an array of the annotations. getAnnotations( ) can be called on objects of type Class, Method, Constructor, and Field, among others.

`Using Default Values` - You can give annotation members default values that will be used if no value is specified when the annotation is applied. A default value is specified by adding a default clause to a member’s declaration. It has this general form:

```java
type member( ) default value ;
```

```java
// An annotation type declaration that includes defaults.
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnno {
   String str() default "Testing";
   int val() default 9000;
}
```

**Marker Annotations**:- A marker annotation is a special kind of annotation that contains no members. Its sole purpose is to mark an item. Thus, its presence as an annotation is sufficient. The best way to determine if a marker annotation is present is to use the method isAnnotationPresent( ), which is defined by the AnnotatedElement interface.

```java
// A marker annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MyMarker { }
```

**Single-Member Annotations**:- A single-member annotation contains only one member. It works like a normal annotation except that it allows a shorthand form of specifying the value of the member. When only one member is present, you can simply specify the value for that member when the annotation is applied—you don’t need to specify the name of the member. However,in order to use this shorthand, the name of the member must be value.

```java
// A single-member annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MySingle {
   int value(); // this variable name must be value
}
```

## The Built-In Annotations

Java defines many built-in annotations. Most are specialized, but nine are general purpose.
Of these, four are imported from java.lang.annotation: @Retention, @Documented,@Target, and @Inherited. Five—@Override, @Deprecated, @FunctionalInterface,@SafeVarargs, and @SuppressWarnings—are included in java.lang.

NOTE:- To java.lang.annotation, JDK 8 adds the annotations Repeatable and Native. Repeatable supports repeatable annotations, as described later in this chapter. Native annotates a field that can be accessed by native code.

`@Retention`:- @Retention is designed to be used only as an annotation to another annotation. It specifies the retention policy.
`@Documented`:- The @Documented annotation is a marker interface that tells a tool that an annotation is to be documented. It is designed to be used only as an annotation to an annotation declaration.
`@Deprecated`:- @Deprecated is a marker annotation. It indicates that a declaration is obsolete and has been replaced by a newer form.
`@FunctionalInterface`:- @FunctionalInterface is a marker annotation added by JDK 8 and designed for use on interfaces. It indicates that the annotated interface is a functional interface. A functional interface is an interface that contains one and only one abstract method. Functional interfaces are used by lambda expressions.
`@SafeVarargs`:- @SafeVarargs is a marker annotation that can be applied to methods and constructors. It indicates that no unsafe actions related to a varargs parameter occur. It is used to suppress unchecked warnings on otherwise safe code as it relates to non-reifiable vararg types and parameterized array instantiation. (A non-reifiable type is, essentially, a generic type.)
`@Inherited`:- @Inherited is a marker annotation that can be used only on another annotation declaration.Furthermore, it affects only annotations that will be used on class declarations. @Inherited causes the annotation for a superclass to be inherited by a subclass. Therefore, when a request for a specific annotation is made to the subclass, if that annotation is not present in the subclass, then its superclass is checked. If that annotation is present in the superclass,and if it is annotated with @Inherited, then that annotation will be returned.
`@Target`:- The @Target annotation specifies the types of items to which an annotation can be applied.It is designed to be used only as an annotation to another annotation. @Target takes one argument, which is an array of constants of the ElementType enumeration. This argument specifies the types of declarations to which the annotation can be applied. The constants are shown here along with the type of declaration to which they correspond:

- ANNOTATION_TYPE - Another annotation
- CONSTRUCTOR - Constructor
- FIELD - Field
- LOCAL_VARIABLE - Local variable
- METHOD - Method
- PACKAGE - Package
- PARAMETE - Parameter
- TYPE - Class, interface, or enumeration
- TYPE_PARAMETER - Type parameter (Added by JDK 8.)
- TYPE_USE - Type use (Added by JDK 8.)

### Method Overloading

- _If a class has multiple methods having same name but different in parameters, it is known as Method Overloading._
- _There are two ways to overload the method in java : by changing number of arguments, by changing the data type._
- _In Java, Method Overloading is not possible by changing the return type of the method only because of ambiguity._
- _Compile Time Error is better than Run Time Error. So, java compiler renders compiler time error if you declare the same method having same parameters._
- _We can also overload Java main() method, but JVM calls main() method which receives string array as arguments only._
- _One type is promoted to another implicitly if no matching datatype is found. eg. byte can be promoted to short, int, etc._
- _If there are no matching type arguments method, and each method promotes similar number of arguments, there will be ambiguity._
- _One type is not de-promoted implicitly for example double cannot be depromoted to any type implicitly._

### Method Overriding

- _If subclass (child class) has the same method as declared in the parent class, it is known as method overriding._
- _Method must have same name and parameters as in the parent class for overriding._
- _Method overriding is used to provide specific implementation of a method that is already provided by its super class. Also used for runtime polymorphism._
- _We cannot override static method (not also main method) because static method is bound with class whereas instance method is bound with object. Static belongs to class area and instance belongs to heap area._
- _Method Overriding with Access Modifier: if you are overriding a method, overridden method (i.e. declared in subclass) must not be more restrictive._
- _Covariant Return Type: It is possible to override method by changing the return type if subclass overrides any method whose return type is Non-Primitive but it changes its return type to subclass type._

### Instance initializer block

- _Instance Initializer block is used to initialize the instance data member._
- _It is created when instance of the class is created._
- _It runs each time when object of the class is created._
- _It is invoked after the parent class constructor is invoked (i.e. after super() constructor call)._
- _The instance Initializer block comes in the order in which they appear._
- _Instantiating means creating an instance of a class: new Customer()._

### Miscellaneous

- _The Object class is the parent class of all the classes in java by default._
- _The Cloneable interface must be implemented by the class if we want to create a clone of an object._
- _Wrapper class is used to convert primitive into object and object into primitive._
- _Autoboxing and unboxing feature converts primitive into object and object into primitive automatically._
- _There is only call by value in java, not call by reference._
- _A method in java that calls itself is called recursive method._

Object-Oriented Programming
•1. What are the Object Oriented Features supported by Java?
•2. What are the different access specifiers used in Java?
•3. What is the difference between composition and inheritance?
•4. What is the purpose of an abstract class?
•6. What is the diamond problem in Java and how is it solved?
•7. What is the difference between local and instance variables in Java?
