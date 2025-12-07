# Collection

It is the root interface in the collection hierarchy. A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others do not. Some are ordered, and others are unordered. Collections that have a defined encounter order are generally subtypes of the SequencedCollection interface. The JDK does not provide any direct implementations of this interface: it provides implementations of more specific subinterfaces like Set and List. This interface is typically used to pass collections around and manipulate them where maximum generality is desired.

The Collections Framework defines several algorithms that can be applied to collections and maps. These algorithms are defined as static methods within the `Collections` class.
Collection interface defines group of elements.

Methods of Collection Interface:-
1. public boolean add(Object element)- is used to insert an element in this collection.
2. public boolean addAll(Collection c)- is used to insert the specified collection elements in the invoking collection.
3. public boolean remove(Object element)- is used to delete an element from this collection.
4. public boolean removeAll(Collection c)- is used to delete all the elements of specified collection from the invoking collection.
5. public boolean retainAll(Collection c)- is used to delete all the elements of invoking collection except the specified collection.
6. public int size()- return the total number of elements in the collection.
7. public void clear()- removes the total no of element from the collection.
8. public boolean contains(Object element)- is used to search an element.
9. public boolean containsAll(Collection c)-is used to search the specified collection in this collection.
10. public Iterator iterator()- returns an iterator.
11. public Object[] toArray()- converts collection into array.
12. public boolean isEmpty()- checks if collection is empty.
13. public boolean equals(Object element) - matches two collection.
14. public int hashCode() - returns the hashcode number for collection.


`Adding Data`:-Ensures that this collection contains the specified element (optional operation). Returns true if this collection changed as a result of the call. (Returns false if this collection does not permit duplicates and already contains the specified element.)
The add() method inserts a new element into the Collection and returns whether it was successful. The method signature is as follows:

```java
public boolean add(E element)
```

```java
Collection<String> list = new ArrayList<>();
list.add("Collins");//true
list.add("Kosgei");//true

Collection<String> set = new HashSet<>();
set.add("Collins");//true
set.add("Kosgei");//false
```

`Removing Data`:- The remove() method removes a single matching value in the Collection and returns whether it was successful. The method signature is as follows:

```java
public boolean remove(Object object)
```

```java
Collection<String> list = new ArrayList<>();
list.remove("Collins");//true
list.remove("Kosgei");//true
```

`Counting Elements`:- The isEmpty() and size() methods look at how many elements are in the Collection. The method signatures are as follows:

```java
public boolean isEmpty()
public int size()
```

```java
Collection<String> list = new ArrayList<>();
list.isEmpty()//true
list.size()//0
```

`Clearing the Collection`:- The clear() method provides an easy way to discard all elements of the Collection. The method signature is as follows:

```java
public void clear()
```

```java
Collection<String> list = new ArrayList<>();
list.remove("Collins");
list.clear();
```

`Check Contents`:- The contains() method checks whether a certain value is in the Collection. The method signature is as follows:

```java
public boolean contains(Object object)
```

```java
Collection<String> list = new ArrayList<>();
list.add("Collins");
list.contains("Collins");//true
```

`Removing with Conditions`:- The removeIf() method removes all elements that match a condition. We can specify what should be deleted using a block of code or even a method reference.

```java
public boolean removeIf(Predicate<? super E> filter)
```

```java
Collection<String> list = new ArrayList<>();
list.add("Magician");
list.add("Assistant");
System.out.println(list);// [Magician, Assistant]
list.removeIf(s -­> s.startsWith("A"));
System.out.println(list);// [Magician]
```

`Iterating`:- There’s a forEach() method that you can call on a Collection instead of writing a loop. It uses a Consumer that takes a single parameter and doesn’t return anything. The method signature is as follows:

```java
public void forEach(Consumer<? super T> action)
```

`Determining Equality`:- There is a custom implementation of equals() so you can compare two Collections to compare the type and contents. The implementation will vary. For example, ArrayList checks order, while HashSet does not.

```java
boolean equals(Object object)
```

## Sorting DaTa

When working with a String, remember that numbers sort before letters, and uppercase letters sort before lowercase letters.

We use Collections.sort(). It returns void because themmethod parameter is what gets sorted.
You can also sort objects that you create yourself. Java provides an interface called Comparable. If your class implements Comparable, it can be used in data structures that require comparison. There is also a class called Comparator, which is used to specify that you want to use a different order than the object itself provides.

