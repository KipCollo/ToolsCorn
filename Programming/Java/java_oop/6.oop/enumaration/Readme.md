# Enumeration(Enums)

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

## Calling the values(), name(), and ordinal() Methods

An enum provides a `values()` method to get an array of all of the values. You can use this like any normal array, including in a for-­each loop:

```java
for(var season: Season.values()) {
   System.out.println(season.name() + " " + season.ordinal());
}
```

`ordinal()`:- Returns the ordinal of this enumeration constant (its position in its enum declaration, where the initial constant is assigned an ordinal of zero). Most programmers will have no use for this method. It is designed for use by sophisticated enum-based data structures, such as java. util. EnumSet and java. util. EnumMap.

## Adding Constructors, Fields, and Methods

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

