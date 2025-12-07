# Records

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
