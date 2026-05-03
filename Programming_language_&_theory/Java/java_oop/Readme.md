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


### static Keyword

- *The static can be: variable (class variable), method (class method), block & nested class.*
- *Java static property is shared to all objects.*
- *A static method belongs to the class rather than object of a class.*
- *A static method can be invoked without the need for creating an instance of a class.**
- *A static method can access static data member and can change the value of it.*
- *The static method can not use non static data member or call non-static method directly.*
- *this and super cannot be used in static context.*
- *The main method is static because object is not required to call static method if it were non-static method, jvm create object first then call main() method that will lead the problem of extra memory allocation.*
- *A static block is used to initialize the static data member. It is executed before main method at the time of classloading.*

### this Keyword

- *In Java, this is a reference variable that refers to the current object.*
- *Call to this() must be the first statement in constructor.*
- *this can be used to: refer current class instance variable, invoke current class method and constructor.*
- *this canpassed as an argument in the method and constructor call.*
- *this can be used to return the current class instance from the method.*
- *It is better approach to use meaningful names for variables. So we use same name for instance variables and parameters in real time, and always use this keyword.*


### Method Overloading

- *If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.*
- *There are two ways to overload the method in java : by changing number of arguments, by changing the data type.*
- *In Java, Method Overloading is not possible by changing the return type of the method only because of ambiguity.*
- *Compile Time Error is better than Run Time Error. So, java compiler renders compiler time error if you declare the same method having same parameters.*
- *We can also overload Java main() method, but JVM calls main() method which receives string array as arguments only.*
- *One type is promoted to another implicitly if no matching datatype is found. eg. byte can be promoted to short, int, etc.*
- *If there are no matching type arguments method, and each method promotes similar number of arguments, there will be ambiguity.*
- *One type is not de-promoted implicitly for example double cannot be depromoted to any type implicitly.*

### Method Overriding

- *If subclass (child class) has the same method as declared in the parent class, it is known as method overriding.*
- *Method must have same name and parameters as in the parent class for overriding.*
- *Method overriding is used to provide specific implementation of a method that is already provided by its super class. Also used for runtime polymorphism.*
- *We cannot override static method (not also main method) because static method is bound with class whereas instance method is bound with object. Static belongs to class area and instance belongs to heap area.*
- *Method Overriding with Access Modifier: if you are overriding a method, overridden method (i.e. declared in subclass) must not be more restrictive.*
- *Covariant Return Type: It is possible to override method by changing the return type if subclass overrides any method whose return type is Non-Primitive but it changes its return type to subclass type.*

### super Keyword

- *The super keyword is a reference variable which is used to refer immediate parent class object.*
- *super can be used to refer immediate parent class instance variable or invoke immediate parent class method and constructor.*
- *super() is added in each class constructor automatically by compiler if there is no super() or this().*

### Instance initializer block

- *Instance Initializer block is used to initialize the instance data member.*
- *It is created when instance of the class is created.*
- *It runs each time when object of the class is created.*
- *It is invoked after the parent class constructor is invoked (i.e. after super() constructor call).*
- *The instance Initializer block comes in the order in which they appear.*
- *Instantiating means creating an instance of a class: new Customer().*

### final Keyword

- *The final keyword in java is used to restrict the user.*
- *You cannot change the value of final variable(It will be constant).*
- *If you make any  as , You cannot override a final method.*
- *If you make any class as final, you cannot extend it.*
- *Final method is inherited but you cannot override it.*
- *A final variable that is not initialized at the time of declaration is known as blank final variable.*
- *We can initialize a blank final variable only in constructor.*
- *A static final variable that is not initialized at the time of declaration is known as static blank final variable. It can be initialized only in static block.*
- *If you declare any parameter as final, you cannot change the value of it.*
- *A constructor cannot be declared final because it is never inherited.*

### Runtime Polymorphism

- *Polymorphism is a concept by which we can perform a single action by different ways.*
- *There are two types of polymorphism in java: compile time polymorphism and runtime polymorphism.*
- *We can perform polymorphism in java by method overloading and method overriding.*
- *If you overload static method in java, it is the example of compile time polymorphism.*
- *In Runtime polymorphism (Dynamic Method Dispatch), an overridden method is resolved at runtime rather than compile-time.*
- *A Virtual Method is an inheritable and overridable method for which dynamic dispatch is facilitated.*
- *All non-static, non-final and non-private methods are Virtual Methods by default.*
- *When reference variable of Parent class refers to the object of Child class, it is known as upcasting.*
- *Method is overridden not the datamembers, so runtime polymorphism can't be achieved by data members.*
- *Connecting a method call to the method body is known as binding.*
- *There are two types of binding : Static binding (early binding) and Dynamic binding (late binding).*

### instanceof Keyword

- *instanceof operator is used to test whether the object is an instance of the specified type (class/subclass/interface).*
- *When Subclass type refers to the object of Parent class, it is known as downcasting.*
- *If we perform downcasting directly, there is compile error.*
- *If we perform downcasting by typecasting, ClassCastException is thrown at runtime.*
- *If we use instanceof operator, downcasting is possible!*

### Abstract Class

- *A class that is declared as abstract (keyword) is abstract class. It can have abstract and non-abstract methods.*
- *Abstraction is a process of hiding the implementation details and showing only functionality to the user.*
- *There are two ways to achieve abstraction in java : Abstract class (0 to 100%) and Interface (100%).*
- *A method that is declared as abstract and does not have implementation is abstract method.*
- *Any method with a body is non-abstract method.*
- *An abstract class can have data member, abstract method, method body, constructor and even main() method.*
- *If there is any abstract method in a class, that class must be abstract.*
- *If extending any abstract class that have abstract method, we must either provide the implementation of the method or make this class abstract.*
- *Abstract class can also be used to provide some implementation of an interface. Then, the end user extending thtis abstract class is free to skip implementing that method while overriding all the methods of the interface.*

### Interface

- *An interface in java is a blueprint of a class. It has static constants and abstract methods.*
- *Since Java 8, we can have method body in interface. But we need to make it default or static method.*
- *The interface is a mechanism to achieve abstraction. It represents IS-A relationship.*
- *By using interface, we can support multiple inheritance.*
- *It can be also used to achieve loose coupling (coupling is degree of direct knowledge that one element has of another).*
- *The Java compiler adds public & abstract before the interface method. Adds public, static & final before data members.*
- *A class extends another class, an interface extends another interface but a class implements an interface.*
- *Multiple inheritance is not supported by class because of ambiguity. But, supported by interface because there is no ambiguity as implementation is provided by the implementation class.*
- *An interface with no member is called marker/tagged interface. For example: Serializable, Cloneable, Remote etc.*
- *Marker interface are used to provide essential information to JVM, so that JVM may perform some useful operation.*
- *An interface can have another interface i.e. known as nested interface.*

### Package

- *A java package is a group of similar types of classes, interfaces and sub-packages.*
- *Java package is used to categorize the classes and interfaces, provides access protection and removes naming collision.*
- *The package keyword is used to create a package. Package inside the package is called the subpackage.*
- *If you import a package (package.* ), subpackages will not be imported.*
- *To import subpackage, use import package.classname.*
- *Use fully qualified name to access only the declared class of a package.*
- *Sequence of the program must be package then import then class.*
- *The standard of defining package is domain.company.package. eg - com.oracle.database*
- *There can be only one public class in a java source file and it must be saved by the public class name.*

### Encapsulation

- *Encapsulation is a process of wrapping code and data together into a single unit.*
- *To create a fully encapsulated class, make all data members of the class private, & use setter/getter methods to access data.*
- *By providing only setter or getter method, you can make the class read-only or write-only.*

### Miscellaneous

- *The Object class is the parent class of all the classes in java by default.*
- *The Cloneable interface must be implemented by the class if we want to create a clone of an object.*
- *Wrapper class is used to convert primitive into object and object into primitive.*
- *Autoboxing and unboxing feature converts primitive into object and object into primitive automatically.*
- *There is only call by value in java, not call by reference.*
- *A method in java that calls itself is called recursive method.*

Object-Oriented Programming
•1. What are the Object Oriented Features supported by Java?
•2. What are the different access specifiers used in Java?
•3. What is the difference between composition and inheritance?
•4. What is the purpose of an abstract class?
•5. What are the differences between constructor and method of a class in Java?
•6. What is the diamond problem in Java and how is it solved?
•7. What is the difference between local and instance variables in Java?
•8. What is a Marker interface in Java?

## Difference btwn OOP and SOP

1. It stands for Object-Oriented Programming.It stands for Structural Programming.
2. It is based on objects.It is based on functions.
3. It follows Bottom-up programming approach.It follows Top-down programming approach.
4. It is based on real world.It is based on unreal world.
5. It provides data hiding so it is very secure .It doesn't provide data hiding so it is less secure.
6. It provides reusability feature.It doesn't provide reusability feature.
7. Eg. C++, Java, python etc.Eg. C, Pascal, Basic etc.

## Programming Paradigm

1. Procedural
2. Functional
3. Object-Oriented
4. Event-driven
5. Logic
6. Aspect-Oriented


-----------

- Object is an instance of a class.
- If there is no constructor in a class, compiler automatically creates a default constructor.
- There is no copy constructor in java. But, we can copy the values of one object to another like copy constructor in C++.
- A constructor can perform other tasks instead of initialization like object creation, starting a thread, calling method etc.
- You can perform any operation in the constructor as you perform in the method.

## Class

The class is at the core of Java. It is the logical construct upon which the entire Java language is built because it defines the shape and nature of an object. As such, the class forms the basis for object-oriented programming in Java.

A class is a collection of a fixed number of components.The components of a class are called members.It's a blueprint for objects.
A class is a collection of objects. Classes don’t consume any space in the memory.It is a user defined data type that act as a template for creating objects of the identical type
A class in Java can contain: Fields/ Variables/ state, methods/behavior, constructors, blocks, nested class and interface.

Types of classes:-
1. `Concrete Class/Regular class`:- A regular class is a typical class that can be instatiated to create objects.Used when you need a fully defined class to create objects.
2. `Abstract Class`:- Cannot be instatiated but can have concrete methods and abstract methods(without body).Other classes must extend it and implement abstract methods.Used when creating a base class with some default behavior and forcing subclasses to implement specific methods.
3. `Final Class`:- Cannot be extended(inherited) by other classes.Used when you want to prevent inheritance, ensuring the class remains unchanged.
4. `Static Class(nested Static Class)`:- Java does not allow standalone static class,but you can create static nested classes inside another class.
5. `Singleton class`:- Ensures that only one instance of the class exists.

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


**Constructors**:- A constructor is a special method that matches the name of the class and has no return type. It is called when a new instance of the class is created.
Constructor is used to initialize the state of an object.There are two types of constructors: with parameters and without parameters.Constructor in java is a special type of method that is used to initialize the object.
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

---------------


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
- `final Class<?> getClass()`:- Returns the runtime class of te object.Useful for reflection.
- `void notify()`:- Wakes up a single thread that is waiting on the object's monitor.Used in synchronization.
- `void notifyAll()`:- Wakes up all threads that are waiting on object's monitor.
- `void wait()`:- Causes current thread to wait until another thread invokes notify or notifyAll on same object.


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

-------

## Access Modifiers

Encapsulation provides another important attribute: access control. Through encapsulation, you can control what parts of a program can access the members of a class. By controlling access, you can prevent misuse.For example, allowing access to data only through a well-defined set of methods, you can prevent the misuse of that data.Java supplies a rich set of access modifiers. Some aspects of access control are related mostly to inheritance or packages. (A package is, essentially, a grouping of classes.)

There are two types of modifiers in java: `access modifiers` and `non-access modifiers`.There are 4 types of java access modifiers: private, default, protected & public.There are many non-access modifiers such as static, abstract, synchronized, native, volatile, transient etc.

The private access modifier is accessible only within class.If you make any class constructor private, you cannot create the instance of that class from outside the class.*
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


---------

## Interface

In an abstract class, we can have both abstract methods as well as normal or concrete methods.

- If your class has only abstract methods then instead of using class, you can simply use an interface in place of it.
- Interface is not any class.
- Every method in an interface is public and abstract by default.
- Even if you do not use two keywords (public and abstract) with methods then also it will not give an error in an interface. By default, it will consider all methods as public and abstract.
- We cannot instantiate an interface.
- Interface only shows the design and it does not provide any implementation.
- To provide an implementation of methods, you need to create a class and instantiate it also.
e.g,

```Java
 interface A
 {
  methods()----
 }
```

## implements keyword:-

To implement an interface, we use the keyword **implements**.

- If you use the implements keyword with class, then it is compulsory to give an implementation of all the methods that are defined in an interface.
- If you do not give an implementation of all methods then it will make your class an abstract class by default.
- So, to make a concrete class, you have to give the implementation of all methods present in an interface.
e.g., 

```Java
 class B implements A
 {
  methods() {
   statement;
  }
  ------
 }
```

## Variables in an interface:-

- We can call the methods of an interface by creating an object of the class that implements an interface.
- We can also declare variables in an interface.
- All the variables in an interface are final and static by default.
- As a variable is static in an interface, then you do not need to create an object for it. You can directly call the variable by using the interface name.
e.g., A.area;    (here, area is a variable initialized in an interface)
- As the variable is final, you can not change the value of that variable after initializing it once.

-Interface does not have its own memory in the heap.

## Types of Interface:-

1. Normal interface - an interface having two or more methods
2. Functional interface (SAM)- SAM => Single Abstract Method interface
3. Marker interface - an interface that as no methods (blank interface)

## Methods

`Default Methods`:- They are concrete methods.They are used to replace implementation classes.default keyword is used to define the default methods in an interface.

```java

@FunctionalInterface
public interface MyInterface 
{
    public void funMethod();
    public default void myDefaultMethod() 
    {
        System.out.println("Default Method");
    }
}
```

- Default methods in multiple inheritance:

```java
public interface A{
public default void myDefaultMethod() 
    {
        System.out.println("Default Method A ");
    }
}
```

```java
public interfce B{
 public default void myDefaultMethod() 
    {
        System.out.println("Default Method B");
    }
}
```

```java
public class Test implements A,B{
    //ambiguity - we will get ambiguity
}
```

To override ambigutiy:

```java
public class Test implements A,B{
    public default void myDefaultMethod() 
    {
     A.super.myDefaultMethod();
    }
}
```

Functional Interface with default methods is not equal to abstract classes.

- Abstract class can't refer Lambda expression whereas Functional Interface with default methods can refer Lambda Expression
- Inside Abstract class we can override Object class methods but can't do in Functional Interface
- Inside Abstract class we can declare constructors methods but can't declare in Functional Interface

`Static methods`:- Are used to define general utility methods.Utility methods are codes that will be used in many places.
Static methods will not be inherited into impl class,so we directly call it from className.

There is no static method overriding.
We can write main method inside interface.

Functional interfaces are of types:

1. User-defined Functional interface- Developer writes using @FunctionalInterface
2. Predefined Functional Interface- Includes (Predicate,Function,Consumer,supplier,BiPrediacte,BiFunction,BiConsumer,UnaryOperator,BinaryOperator)


-----------

## Records

A record is a special type of data-­oriented class in which the compiler inserts boilerplate code for you.
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


---------


## Inheritance

Inheritance is one of the cornerstones of object-oriented programming because it allows the creation of hierarchical classifications.
When creating a new class in Java, you can define the class as inheriting from an existing class. Inheritance is the process by which a subclass automatically includes certain members of the class, including primitives, objects, or methods, defined in the parent class.

Inheritance (IS-A) is a mechanism in which one object acquires all the properties and behaviors of parent object.The extends keyword indicates that you are making a new class that derives from an existing class.Multiple inheritance is not supported in Java through class. We can use Interface to perform it.To reduce the complexity and simplify the language, multiple inheritance is not supported in java.If a class have an entity reference, it is known as Aggregation (HAS-A relationship).*
Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of the objects involved; otherwise, aggregation is the best choice.

Is a type of feature through which we can copy properties to a class from upper class.
It rep the IS-A relationship also known as parent-child relationship.In inheritance there are two classes:

- Parent/ Superclass/ Base class
- Child/ Subclass/ Derived class

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
   1. Simplicity over complexity : Java was designed to be simple, clear, and easy to maintain.
   2. Avoiding ambiguity : Multiple inheritance introduces ambiguity, which conflicts with Java’s goal of being straightforward
   3. “Write Once, Run Anywhere”: Complex inheritance hierarchies could hinder portability and predictability.

`Inheriting Object`:- In Java, all classes inherit from a single class:java.lang.Object, or Object for short. Furthermore, Object is the only class that doesn’t have a parent class.The compiler automatically inserts the code into any class you write that doesn’t extend a specific class. For example, the following two are equivalent:

```java
public class Zoo { }
public class Zoo extends java.lang.Object { }
```

The key is that when Java sees you define a class that doesn’t extend another class, the compiler automatically adds the syntax extends java.lang.Object to the class definition. The result is that every class gains access to any accessible methods in the Object class.For example, the toString() and equals() methods are available in Object; therefore,they are accessible in all classes. Without being overridden in a subclass, though, they may not be particularly useful.

On the other hand, when you define a new class that extends an existing class, Java does not automatically extend the Object class. Since all classes inherit from Object, extending an existing class means the child already inherits from Object by definition. If you look at the inheritance structure of any class, it will always end with Object on the top of the tree.Primitive types such as int and boolean do not inherit from Object, since they are not classes.Through autoboxing they can be assigned or passed as an instance of an associated wrapper class, which does inherit Object.

TODO Object class --hashcode(),equals(),toString()--


## Abstraction

Abstraction is a process of hiding the implementation details and showing only functionality to the user.
Encapsulation is an attribute of an object,and it contains all data which is hidden.That hidden data can be restricted to members of that class.


## Encapsulation

It is a mechanism of binding member data(variabes) and member function(methods) that operate on the daa together into a single unit i.e. class.Encapsulation is an striking feature of OOPs that provides data security.
The main advantage of encapsulation is that data is hidden and protected from access by outside non-member methods of a class. In other words, only member functions defined in a class will have access to the data.

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

## Polymorphism

The meaning of the word polymorphism is something like one name, many forms.

Polymorphism manifests itself in Java in the form of multiple methods having the same name.In some cases, multiple methods have the same name, but different formal argument lists(overloaded methods).In other cases, multiple methods have the same name, same return type, and same formal argument list (overridden methods).
Polymorphism manifests itself in 3 distinct forms in java:-
1. Method overloading.
2. Method overriding through inheritance.
3. Method overriding through java interface.


Includes:-
1. method overloading, sometimes referred to as compile-time polymorphism.
2. runtime polymorphism.

**Method Overloading**:- Overloaded methods may all be defined in the same class, or may be defined in different classes as long as those classes have a superclass-subclass relationship.
Java allows you to have two or more method definitions in the same scope with the same name, provided that they have different formal argument lists.

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


**runtime polymorphism through method overriding and class inheritance**:- The reason that this type of polymorphism is often referred to as runtime polymorphism is because the decision as to which version of the method to execute cannot be made until runtime. The decision cannot be made at compile time.
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

**runtime polymorphism as implemented using method overriding and the Java interface**:-

If a class implements an interface, it must provide a concrete definition for all the methods declared by that interface, and all the methods inherited by that interface. Otherwise, the class must be declared abstract and the definitions must be provided by a class that extends the abstract class.
If a class inherits one or more abstract methods from its superclasses, it must provide concrete definitions for all the inherited abstract methods. Otherwise, the class must be declared abstract and the concrete definitions must be provided by a class that extends the abstract class.
