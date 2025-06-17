# Variables

A Dart variable is a piece of memory that can contain a data value.Used to store information which your Dart program needs to do its job.These variables are case sensitive.

To declare a variable,write `var` before variable.

```dart
var x = 1;
```

## Dart Data types

`String` - Usec to store words or sentences.can be represented using single or double quotes.

```dart
String name = 'collins`;
```

`Booleans`- are used in decision making statements which you can control in the program work flow.Can have two possible values:- true or false.

```dart
bool isComplete = true;
```

`Numbers`- Has two types:-
   1. Int - The integer type is a 32-bit signed integer.
   2. Double - Is a double-precision 64-bit floating value.

You can also use `num` to declare an integer or double number.

```dart
int x = 3;
double width = 3.67;
num y =4;
num l = 4.5;
```

`List` - Dart represents arrays in the form of List objects.Used to store a group of values, all which have same data type.

```dart
var scores = [23,45,19,90,65];
List<int> scores = [23,45,19,90,65]; 

scores.add(29);//add value at end of list.
scores[1]//accessing values.
scores.length//List length
scores.forEach(x);
print(x);
```

`Maps` - Is an object that associates keys to value.It is an interface designed to manipulate a collection of keys which points to values.Can be declared in two ways,using maps literals and using map constructors.

1. Usin Map literals - You enclose the key-value pairs within a pair of braces.
2. Using Map comstructor

```dart
//using Map literals
var info = { 'name':'Collins', 'passwoerd': 'pass12'}

//Using Map comstructor
var info = new Map();
info['name'] = 'Collins';
info['password'] = 'padss12';
info['country'] = 'Kenya';
```

## Explicitly and Implicitly Data type

```dart
var x = 10; //Implicitly Integer number
int x = 20; // explicoitly Integer number
var city = "Nakuru";
```

## Data conversion

Use the toDataType() function.

```dart
int x = 3
var y = x.toString();
var z = x.toDouble();
```
