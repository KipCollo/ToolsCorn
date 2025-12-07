# List Interface

The `List` interface extends the `Collection` interface and declares the behavior of a collection that stores a sequence of elements. Elements can be added or accessed by their position in the list, using a zero-based index. A list may also contain duplicate elements.
List is an ordered collection.It maintains the insertion order, meaning it will display elements in same order in which they got inserted.It provides control over position where you can insert element.

You use a list when you want an ordered collection that can contain duplicate entries.
You can access elements by their index and also search elements in list.It allows duplicate items, allows 'null' elements.

Items can be retrieved and inserted at specific positions in the list based on an int index, much like an array. Unlike an array, though, many List implementations can change in size after they are declared.Lists are commonly used because there are many situations in programming where you need to keep track of a list of objects.

The main thing all List implementations have in common is that they are ordered and allow duplicates. Beyond that, they each offer different functionality.

Some implementations include: ArrayList, LinkedList, Vectors, Stack, CopyOnWriteArrayList.

An `arrayList` is like resizable array. When elements are added, the ArrayList automatically grows. When you aren’t sure which collection to use, use an ArrayList.The main benefit of an ArrayList is that you can look up any element in constant time.Adding or removing an element is slower than accessing an element. This makes an ArrayList
a good choice when you are reading more often than (or the same amount as) writing to the ArrayList.

A `LinkedList` is special because it implements both List and Deque. It has all the methods of a List. It also has additional methods to facilitate adding or removing from the beginning and/or end of the list.The main benefits of a LinkedList are that you can access, add to, and remove from the beginning and end of the list in constant time. The trade-­off is that dealing with an arbitrary index takes linear time. This makes a LinkedList a good choice when you’ll be using it as Deque.

## Creating a List

`Using Factory`:- When you create a List of type ArrayList or LinkedList, you know the type. There are a few special methods where you get a List back but don’t know the type.
hese method let you create a List including data in one line using a factory method. This is convenient, especially when testing. Some of these methods return an immutable object.

1. Arrays.asList(varargs) - Returns fixed size list backed by an aaray.Cannot add or delete elements but can replace elements.
2. List.of(varargs) - Returns immutable list.Cannot add,replace or delete elements.
3. List.copyof(collection ) - Returns immutable list with copy of original collection's values.Cannot add,replace or delete elements.

```java
String[] array = new String[] {"a", "b", "c"};
List<String> asList = Arrays.asList(array); // [a, b, c]
List<String> of = List.of(array);// [a, b, c]
List<String> copy = List.copyOf(asList);// [a, b, c]

array[0] = "z";

System.out.println(asList);// [z, b, c]
System.out.println(of);// [a, b, c]
System.out.println(copy);// [a, b, c]

asList.set(0, "x");
System.out.println(Arrays.toString(array)); // [x, b, c]

copy.add("y");// UnsupportedOperationException
```


`Using a Constructor`:- 

## List Methods

The methods in the List interface are for working with indexes.

1. public boolean add(E element) - Adds element to end (available on all Collection APIs).
2. public void add(int index,E element) - Adds element at index and moves the rest toward the end.
3. public E get(int index)- Returns element at index.
4. public E remove(int index) - Removes element at index and moves the rest toward the front.
5. public default void replaceAll( UnaryOperator<E> op) - Replaces each element in list with result of operator.
6. public E set(int index, E e) - Replaces element at index and returns original.Throws IndexOutOfBoundsException if index is invalid.
7. public default void sort( Comparator<? super E> c) - Sorts list.