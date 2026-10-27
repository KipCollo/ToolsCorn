# Core APIs

## Dates and Times

Java provides a number of APIs for working with dates and times.There’s also an old java.util.Date class and Date & Time API.

**Date & Time API**:- Immutable and thread-safe classes: LocalDate,LocalTime,LocalDateTime. DateTimeFormatter for parsing and formatting.Zone-aware classes like ZonedDateTime.

You need an import a statement to work with modern date and time classes.To use it,add this import to your program.

```java
import java.time.* //import time classes
```

`Creating Dates and Times`:When working with dates and times, the first thing to do is to decide how much information you need.

1. LocalDate:- Contains just a date—­no time and no time zone. A good example of LocalDate is your birthday this year. It is your birthday for a full day, regardless of what time it is.
2. LocalTime:- Contains just a time—­no date and no time zone. A good example of LocalTime is midnight. It is midnight at the same time every day.
3. LocalDateTime:- Contains both a date and time but no time zone. A good example of LocalDateTime is “the stroke of midnight on New Year’s Eve.” Midnight on January 2 isn’t nearly as special, making the date relatively unimportant, and clearly an hour after midnight isn’t as special either.
4. ZonedDateTime:- Contains a date, time, and time zone. A good example of ZonedDateTime is “a conference call at 9:00 a.m. EST.” If you live in California,you’ll have to get up really early since the call is at 6:00 a.m. local time!

Each of the four classes has a static method called now(), which gives the current date and time. Your output is going to depend on the date/time when you run it and where you live.

```java
System.out.println(LocalDate.now());
System.out.println(LocalTime.now());
System.out.println(LocalDateTime.now());
System.out.println(ZonedDateTime.now());
```

```java
var date1 = LocalDate.of(2022, Month.JANUARY, 20);
var date2 = LocalDate.of(2022, 1, 20);
```

Both pass in the year, month, and date. Although it is good to use the Month constants (to make the code easier to read), you can pass the int number of the month directly. Just use the number of the month the same way you would if you were writing the date in real life.

The method signatures are as follows:

```java
public static LocalDate of(int year, int month, int dayOfMonth)
public static LocalDate of(int year, Month month, int dayOfMonth)
```

When creating a time, you can choose how detailed you want to be. You can specify just the hour and minute, or you can include the number of seconds. You can even include nanoseconds if you want to be very precise. (A nanosecond is a billionth of a second, although you probably won’t need to be that specific.)

```java
var time1 = LocalTime.of(6, 15); // hour and minute
var time2 = LocalTime.of(6, 15, 30); // + seconds
var time3 = LocalTime.of(6, 15, 30, 200); // + nanoseconds
```

These three times are all different but within a minute of each other. The method signatures are as follows:

```java
public static LocalTime of(int hour, int minute)
public static LocalTime of(int hour, int minute, int second)
public static LocalTime of(int hour, int minute, int second, int nanos)
```

You can combine dates and times into one object:

```java
var dateTime1 = LocalDateTime.of(2022, Month.JANUARY, 20, 6, 15, 30);
var dateTime2 = LocalDateTime.of(date1, time1);
```

There are a lot of method signatures since there are more combinations. The following method signatures use integer values:

```java
public static LocalDateTime of(int year, int month,int dayOfMonth, int hour, int minute)
public static LocalDateTime of(int year, int month,int dayOfMonth, int hour, int minute, int second)
public static LocalDateTime of(int year, int month,int dayOfMonth, int hour, int minute, int second, int nanos)
```

Others take a Month reference:

```java
public static LocalDateTime of(int year, Month month,int dayOfMonth, int hour, int minute)
public static LocalDateTime of(int year, Month month,int dayOfMonth, int hour, int minute, int second)
public static LocalDateTime of(int year, Month month,int dayOfMonth, int hour, int minute, int second, int nanos)
```

Finally, one takes an existing LocalDate and LocalTime:

```java
public static LocalDateTime of(LocalDate date, LocalTime time)
```

In order to create a ZonedDateTime, we first need to get the desired time zone. We will use US/Eastern in our examples:

```java
var zone = ZoneId.of("US/Eastern");
var zoned1 = ZonedDateTime.of(2022, 1, 20,6, 15, 30, 200, zone);
var zoned2 = ZonedDateTime.of(date1, time1, zone);
var zoned3 = ZonedDateTime.of(dateTime1, zone);
```

Although there are other ways of creating a ZonedDateTime, you only need to know three:

```java
public static ZonedDateTime of(int year, int month,int dayOfMonth, int hour, int minute, int second,int nanos, ZoneId zone)
public static ZonedDateTime of(LocalDate date, LocalTime time,ZoneId zone)
public static ZonedDateTime of(LocalDateTime dateTime, ZoneId zone)
```

The date and time classes have private constructors along with static methods that return instances. This is known as the factory pattern.

`Manipulating Dates and Times`:- Adding to a date is easy. The date and time classes are immutable.

```java
var date = LocalDate.of(2022, Month.JANUARY, 20);// 2022–01–20
date = date.plusDays(2);// 2022–01–22
date = date.plusWeeks(1);// 2022–01–29
date = date.plusMonths(1);// 2022–02–28
date = date.plusYears(5);// 2027–02–28
```

There are also nice, easy methods to go backward in time.

```java
var date = LocalDate.of(2024, Month.JANUARY, 20);
var time = LocalTime.of(5, 15);
var dateTime = LocalDateTime.of(date, time);// 2024–01–20T05:15
dateTime = dateTime.minusDays(1);// 2024–01–19T05:15
dateTime = dateTime.minusHours(10);// 2024–01–18T19:15
dateTime = dateTime.minusSeconds(30);// 2024–01–18T19:14:30
```

It is common for date and time methods to be chained.

```java
var dateTime = LocalDateTime.of(date, time).minusDays(1).minusHours(10).minusSeconds(30);
```

`Periods`:- LocalDate and LocalDateTime have a method to convert themselves into long values, equivalent to the number of milliseconds that have passed since January 1, 1970, referred to as the epoch.

There are five ways to create a Period class:

```java
var annually = Period.ofYears(1); // every 1 year
var quarterly = Period.ofMonths(3); // every 3 months
var everyThreeWeeks = Period.ofWeeks(3); // every 3 weeks
var everyOtherDay = Period.ofDays(2);// every 2 days
var everyYearAndAWeek = Period.of(1, 0, 7); // every year and 7 days
```

`Instants`:-The Instant class represents a specific moment in time in the GMT time zone.The Instant gets rid of the time zone and turns it into an Instant of
time in GMT.You cannot convert a LocalDateTime to an Instant. Remember that an Instant is a point in time. A LocalDateTime does not contain a time zone, and it is therefore not universally recognized around the world as the same moment in time.

Suppose that you want to run a timer:

```java
var now = Instant.now();
// do something time consuming
var later = Instant.now();
var duration = Duration.between(now, later);
System.out.println(duration.toMillis()); // Returns number milliseconds
```

## Maths APIs

Java comes with powerful Math class with many methods.Defined in java.lang package,not imported it is there explicitly.

`Finding the Minimum and Maximum`:- The min() and max() methods compare two values and return one of them.
The method signatures for min() are as follows:

```java
public static double min(double a, double b)
public static float min(float a, float b)
public static int min(int a, int b)
public static long min(long a, long b)
```

There are four overloaded methods, so you always have an API available with the same type. Each method returns whichever of a or b is smaller. The max() method works the
same way, except it returns the larger value.

The following shows how to use these methods:

```java
int first = Math.max(3, 7);// 7
int second = Math.min(7, -­9);// -­9
```

`Rounding Numbers`:- The round() method gets rid of the decimal portion of the value, choosing the next higher number if appropriate. If the fractional part is .5 or higher, we round up.
The method signatures for round() are as follows:

```java
public static long round(double num)
public static int round(float num)
```

There are two overloaded methods to ensure that there is enough room to store a rounded double if needed. The following shows how to use this method:

```java
long low = Math.round(123.45);// 123
long high = Math.round(123.50);// 124
int fromFloat = Math.round(123.45f); // 123
```

`Determining the Ceiling and Floor`:- The ceil() method takes a double value. If it is a whole number, it returns the same value. If it has any fractional value, it rounds up to the next whole number. By contrast, the floor() method discards any values after the decimal.
The method signatures are as follows:

```java
public static double ceil(double num)
public static double floor(double num)
```

The following shows how to use these methods:

```java
double c = Math.ceil(3.14); // 4.0
double f = Math.floor(3.14); // 3.0
```

`Calculating Exponents`:- The pow() method handles exponents.
The method signature is as follows:

```java
public static double pow(double number, double exponent)
```

The following shows how to use this method:

```java
double squared = Math.pow(5, 2); // 25.0
```

Notice that the result is 25.0 rather than 25 since it is a double.

`Generating Random Numbers`:- The random() method returns a value greater than or equal to 0 and less than 1.
The method signature is as follows:

```java
public static double random()
```

The following shows how to use this method:

```java
double num = Math.random();
int result = (int) Math.round(Math.random() * 100)// result is random e.g 66
int result = (int) Math.random() * 100;// result = 0
int result = (int) (Math.random() * 100)// result is random e.g 67
```

Since it is a random number, we can’t know the result in advance. However, we can rule out certain numbers. For example, it can’t be negative because that’s less than 0. It can’t be 1.0 because that’s not less than 1.

## Arrays

An array is a data structure that defines an indexed collection of a fixed number of homogeneous data elements. This means that all elements in the array have the same data type. A position in the array is indicated by a non-negative integer value called the index. An element at a given position in the array is accessed using the index. The size of an array is fixed and cannot be changed.
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.An array is a collection of a fixed number of elements, wherein the elements are of same data types.

In Java, arrays are objects. Arrays can be of primitive data types or reference types.In the former case, all elements in the array are of a specific primitive data type. In the latter case, all elements are references of a specific reference type. References in the array can then denote objects of this reference type or its subtypes. Each array object has a final field called length, which specifies the array size, i.e., the number of elements the array can accommodate. The first element is always at index 0 and the last element at index n-1, where n is the value of the length field in the array.

- Properties
  1.  Stores data of specified type.
  2.  Elements are located in contiguous memory.
  3.  Each elements has unique index.
  4.  Size of array is defined.

Types of Arrays - Simple arrays are `one-dimensional arrays`, that is, a simple list of values. Since arrays can store reference values, the objects referenced can also be array objects. Thus, `multi-dimensional arrays` are implemented as array of arrays.

1. One Dimensional: An array with a bunch of values having been declared with single index.i.e a[i]->i btwn 0 and N.
2. Multi Dimensional- Two dimensional, Three dimensional..N dimensional: 2D array with bunch of values declared with double index.i.e `a[i(Row)][j(Column)]`->i and j btwn 0 and N.

- Declare: Create reference to Array.
- Instantiate: Creates an array
- Initialization: Assigns value to cells in array.

_Declaring Array Variables (O(1))_ - To declare an array, define the variable type with square brackets:

dataType arrayName[]; OR dataType[] arrayName;

The array variable `arrayName` has the type `datatype[]`. Note that the array size is not specified. This means that the array variable arryName can be assigned the reference value of an array of any length, as long as its elements have datatype.
Declaration does not actually create an array.It only declares a reference that can refer to an array object.

```Java
String[] cars;
```

An array variable that is declared as a member of a class, but is not initialized to any array, will be initialized to the default reference value null. This default initialization does not apply to local reference variables and, therefore, does not apply to local array variables either.

_Insatiating array.(O(1))_ - In Java array is an object, `arrayName` is a reference variable.To store data we must initiate the array object.An array can be constructed for a fixed number of elements of a specific type, using the new operator. The reference value of the resulting array can be assigned to an array variable of the corresponding type. The syntax of the array creation expression is shown on the right-hand side of the following assignment statement:

arrayName = new datatype[array_size];

The minimum value of <array size> is 0, in other words, zero-length arrays can be constructed in Java. If the array size is negative, a NegativeArraySizeException is thrown.

```Java
cars = new String[10];
```

The array declaration and construction can be combined.When the array is constructed, all its elements are initialized to the default value for `dataType`. This is true for both member and
local arrays when they are constructed.

dataType[] arrayName = new datatype[array_size];

The array elements are implicitly initialized to their default value. For example, all elements of the array of integers get the value 0, and all element of the array objects get the value
null when the arrays are constructed.

```Java
int[] anIntArray = new int[10];// Default element value: 0.
Eatable[] eatables = new Pizza[2];// Default element value: null.
String[] cars = new String[10];
```

_Initializing Array_ - When array is initialised, Java automatically initialises it's components to their default values.e.g numeric are initialised to 0.
Java provides the means of declaring, constructing, and explicitly initializing an array in one declaration statement:

datatype[] arrayname = { <array_initialize_list> };

This form of initialization applies to member as well as local arrays. The <array_initialize_list> is a comma-separated list of zero or more expressions. Such an array initialization block results in the construction and initialization of the array.

```java
int[] anIntArray = {13, 49, 267, 15, 215};//(O(1))
Object[] objArray = { new Pizza(), new Pizza(), null };
```

The expressions in the <array_initialize_list> are evaluated from left to right.The list can also be legally terminated by a comma.

```java
Topping[] pizzaToppings = { new Topping("cheese"), new Topping("tomato"), };
```

_Array Insertion_ - To add components to array you use:

```Java
cars[0]="Volvo";
cars[1]="Toyota";// all sum to (O(N))
```

_Accessing Array Components_:- The array object is referenced by the array name, but individual array elements are accessed by specifying an index with the [] operator. The array element access expression has the following syntax:

arrayName[indexExp]

Each individual element is treated as a simple variable of the element type. The index is specified by the <indexExp>, which can be any expression that evaluates to a non-negative int value. Since the lower bound of an array is always 0, the upper bound is one less than the array size, that is, <arrayName>.length-1. The ith element in the array has index (i-1). At runtime, the index value is automatically checked to ensure that it is within the array index bounds. If the index value is less than 0, or greater than or equal to <array name>.length, an ArrayIndexOutOfBoundsException is thrown.

```Java
myNum[1];
```

The [] operator is called `array subscripting operator`. It is used to declare array types, specify array size and to access array elements.This operator is not used when the array reference is manipulated or when the array reference is passed as an actual parameter in a method call.

```java
Topping[]
new Topping[3]
toppings[1]
```

**Anonymous Arrays** - Java has another array creation expression, called anonymous array, which allows the concept of the array creation expression and the array initializer block to be combined, to create and initialize an array object:

new dataType[] { <array_initialize_list> }

```java
new int[] {3, 5, 2, 8, 6}
```

The construct has enough information to create a nameless array of a specific type. Neither the name of the array nor the size of the array is specified. The construct returns the reference value of the newly-created array, which can be assigned to references and passed as argument in method calls.

```java
int[] daysInMonth;
daysInMonth = new int[] {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}; // ok.
daysInMonth = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}; // Not ok.
```

**Arrays class** - This class contains various methods for manipulating arrays (such as sorting and searching). This class also contains a static factory that allows arrays to be viewed as lists.The methods in this class all throw a NullPointerException, if the specified array reference is null, except where noted.

Arrays requires an import. To use it, you must have either of the following two statements in your class:

```java
import java.util.Arrays;// import just Arrays
```

_Convert to list_ - Returns a fixed-size list backed by the specified array. Changes made to the array will be visible in the returned list, and changes made to the list will be visible in the array. The returned list is Serializable and implements RandomAccess.
The returned list implements the optional Collection methods, except those that would change the size of the returned list. Those methods leave the list unchanged and throw UnsupportedOperationException.
If the specified array's actual component type differs from the type parameter T, this can result in operations on the returned list throwing an ArrayStoreException.

This method acts as bridge between array-based and collection-based APIs, in combination with Collection.toArray().
This method provides a way to wrap an existing array:

```java
Integer[] numbers = ...

List<Integer> values = Arrays.asList(numbers);
```

This method also provides a convenient way to create a fixed-size list initialized to contain several elements:

```java
List<String> stooges = Arrays.asList("Larry", "Moe", "Curly");
```

The list returned by this method is modifiable. To create an unmodifiable list, use Collections.unmodifiableList or Unmodifiable Lists.

_Sorting_:- Java makes it easy to sort an array by providing a sort method—­or rather, a bunch of sort methods. Sorts the specified array into ascending numerical order.You can pass almost any array to Arrays.sort().

```java
int[] numbers = { 6, 9, 1 };
Arrays.sort(numbers);
```

_toString_ - Returns a string representation of the contents of the specified array. The string representation consists of a list of the array's elements, enclosed in square brackets ("[]"). Adjacent elements are separated by the characters ", " (a comma followed by a space). Elements are converted to strings as by String.valueOf(dataType). Returns "null" if a is null.
Printing the array variable directly would give the annoying hash of `[I@2bd9c3e7]`.

```java
double[] prices = { 10.7, 9.8, 10.0 };
Arrays.toString(prices);
```

_Searching_:- Java also provides a convenient way to search, but only if the array is already sorted. Default search is `Binary search`.Searches the specified array of elements for the specified value using the binary search algorithm.

1. Target element found in sorted array - Index of match
2. Target element not found in sorted array - Negative value showing one smaller than the negative of the index, where a match needs to be inserted to preserve sorted order
3. Unsorted array - A surprise; this result is undefined.

```java
int[] numbers = {2,4,6,8};
System.out.println(Arrays.binarySearch(numbers, 4)); // 1
System.out.println(Arrays.binarySearch(numbers, 1)); // -­
```

_Comparing_:- Java also provides methods to compare two arrays to determine which is smaller.This methods is overloaded to take a variety of parameters.
Using compare():- There are a bunch of rules you need to know before calling compare().

1. A negative number means the first array is smaller than the second.
2. A zero means the arrays are equal.
3. A positive number means the first array is larger than the second.

```java
System.out.println(Arrays.compare(new int[] {1}, new int[] {2}));
```

Now that you know how to compare a single value, let’s look at how to compare arrays of different lengths:

- If both arrays are the same length and have the same values in each spot in the same order, return zero.
- If all the elements are the same but the second array has extra elements at the end, return a negative number.
- If all the elements are the same, but the first array has extra elements at the end, return a positive number.
- If the first element that differs is smaller in the first array, return a negative number.
- If the first element that differs is larger in the first array, return a positive number.

```java
Integer[] marks = {60, 90, 65, 78};
Integer[] marks2 = {60, 90, 65, 78};
Arrays.sort(marks);
Arrays.sort(marks2);
System.out.println(Arrays.compare(marks,marks2));
```

_Using mismatch()_ - If the arrays are equal, mismatch() returns -­1. Otherwise, it returns the first index where they differ.

```java
System.out.println(Arrays.mismatch(new int[] {1}, new int[] {1}));
System.out.println(Arrays.mismatch(new String[] {"a"},new String[] {"A"}));
System.out.println(Arrays.mismatch(new int[] {1, 2}, new int[] {1}));
```

In the first example, the arrays are the same, so the result is -­1. In the second example, the entries at element 0 are not equal, so the result is 0. In the third example, the entries at element 0 are equal, so we keep looking. The element at index 1 is not equal. Or, more specifically, one array has an element at index 1, and the other does not. Therefore, the result is 1.

_Streaming arrays_ - Returns a sequential Stream with the specified array as its source.

```java
double[] price = new double[]{10.5, 80.7, 67.5};
Arrays.stream(price)
```

**Multidimensional Arrays**:- Arrays are objects, and of course, array components can be objects and it can hold other arrays

- `Creating a Multidimensional Array`:- Multiple array separators are all it takes to declare arrays with multiple dimensions. You can locate them with the type or variable name in the declaration, just as before:

```java
int[][] vars1;// 2D array
int vars2 [][];// 2D array
int[] vars3[];// 2D array
int[] vars4 [], space [][]; // a 2D AND a 3D array
```

You can specify the size of your multidimensional array in the declaration if you like:

```java
String [][] rectangle = new String[3][2];
```

Result of this statement is an array rectangle with three elements, each of which refers to an array of two elements. You can think of the addressable range as `[0][0]`through `[2][1]`, but don’t think of it as a structure of addresses like [0,0] or [2,1].

`Using a Multidimensional Array` - The most common operation on a multidimensional array is to loop through it. This example prints out a 2D array:

```java
var twoD = new int[3][2];
for(int i = 0; i < twoD.length; i++) {
  for(int j = 0; j < twoD[i].length; j++)
    System.out.print(twoD[i][j] + " "); // print element
    System.out.println(); // time for a new row
}
```

We have two loops here. The first uses index i and goes through the first subarray for twoD. The second uses a different loop variable, j. It is important that these be different variable names so the loops don’t get mixed up. The inner loop looks at how many elements are in the second- level array. The inner loop prints the element and leaves a space for readability. When the inner loop completes, the outer loop goes to a new line and repeats the process for the next element.

This entire exercise would be easier to read with the enhanced for loop.

```java
for(int[] inner : twoD) {
  for(int num : inner)
    System.out.print(num + " ");
    System.out.println();
}
```

## Iterable

It represents an object that is iterable i.e we can iterate or loop over it without knowing its implementation details.
