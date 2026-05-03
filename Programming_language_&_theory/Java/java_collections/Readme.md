# Java Collections Framework

Java's Collection framework provides a way to store and manipulate groups of objects. Java Collections can be used for searching, sorting, inserting, manipulating, and deleting data.The Java Collections framework is a set of classes in java.util package for storing collections.
In Java, a collection is a single unit of objects(A collection is a group of objects contained in a single object). ArrayList, Vector, LinkedList, PriorityQueue, HashSet, LinkedHashSet, TreeSet, and LinkedList are all classes of Java Collection framework.

Program design often requires the handling of collections of objects. The Java Collections Framework provides a set of standard utility classes for managing various kinds of collections. The core framework is provided in the java.util package and comprises three main parts:
- The core interfaces that allow collections to be manipulated independently of their implementation. These generic interfaces define the common functionality exhibited by collections and facilitate data exchange between collections.
- A set of implementations (i.e., concrete classes) that are specific implementations of the core interfaces, providing data structures that a program can readily use.
- An assortment of static utility methods found in the Collections and Arrays classes that can be used to perform various operations on collections and arrays, such as sorting and searching, or creating customized collections.


**Core Interfaces**:- generic Collection interface is a generalized interface for maintaining collections and is root of the interface inheritance hierarchy for collections.Extends Iterable interface that specifies an `iterator` to sequentially access the elements of an `Iterable` object.


```java
                        java.lang.Iterable<E>
                                |
                                |
                            Collection<E>
                                |
                                |
            ------------------------------------------
            |                   |                    |
            |                   |                    |
        List<E>               Queue<E>            Set<E>                                  Map<K,V>
                                |                    |                                         |
                                |                    |                                         |
                              Deque<E>            SortedSet<E>                            SortedMap<K,V>
                                                     |                                         |
                                                     |                                         |
                                                  NavigableSet<E>                         NavigableMap<K,V>
```

- Collection<E> - A basic interface that defines the normal operations that allow a collection of objects to be maintained or handled as a single unit.
- Set<E> - The Set interface extends the Collection interface to represent its mathematical namesake: a set of unique elements. - HashSet<E>, LinkedHashSet<E>.
- SortedSet<E> - The SortedSet interface extends the Set interface to provide the required functionality for maintaining a set in which the elements are stored in some sorted order. - TreeSet<E>.
- NavigableSet<E> - The NavigableSet interface extends and replaces the SortedSet interface to maintain a sorted set, and should be the preferred choice in new code. - TreeSet<E>.
- List<E> - The List interface extends the Collection interface to maintain a sequence of elements that can contain duplicates. - ArrayList<E>, Vector<E>, LinkedList<E>.
- Queue<E> - The Queue interface extends the Collection interface to maintain a collection whose elements need to be processed in some way, i.e., insertion at one end and removal at the other, usually as FIFO (First-In, First-Out). - PriorityQueue<E>, LinkedList<E>.
- Deque<E> - The Deque interface extends the Queue interface to maintain a queue whose elements can be processed at both ends. - ArrayDeque<E>, LinkedList<E>.
- Map<K,V> - A basic interface that defines operations for maintaining mappings of keys to values. - HashMap<K,V>, Hashtable<K,V>, LinkedHashMap<K,V>.
- SortedMap<K,V> - The SortedMap interface extends the Map interface for maps that maintain their mappings sorted in key order. - TreeMap<K,V>.
- NavigableMap<K,V> - The NavigableMap interface extends and replaces the SortedMap interface for sorted maps. - TreeMap<K,V>.

NOTE:- Map doesn't implements the Collection interface.It is considered a part of the Collection framework even though it isn't technically a Collection.It is a collection (note the lowercase), though, in that it contains a group of objects. The reason maps are treated differently is that they need different methods due to being key/value pairs.A map does not contain elements. It contains mappings (also called entries) from a set of key objects to a set of value objects. A key can, at most, be associated with one value, i.e., it must be unique. As the name implies, the SortedMap interface extends the Map interface to maintain its mappings sorted in key order. It is superseded by the NavigableMap interface which should be the preferred choice in new code.

**Implementations**:- The java.util package provides implementations of a selection of well-known abstract data types, based on the core interfaces.None of the concrete implementations inherit directly from the Collection interface. The abstract classes that provide the basis on which concrete classes are implemented.
By convention, each of the collection implementation classes provides a constructor for creating a collection based on the elements of another Collection object passed as argument. This allows the implementation of a collection to be changed by merely passing the collection to the constructor of the desired implementation.This interchangeability is also true between Map implementations. But collections and maps are not interchangeable. Note that a collection (or a map) only stores reference values of objects, and not the actual objects.
The collections framework is interface-based, meaning that collections are manipulated according to their interface types, rather than by the implementation types.By using these interfaces wherever collections of objects are used, various implementations can be used interchangeably.

All the concrete classes implement the Serializable and the Cloneable interfaces; therefore, the objects of these classes can be serialized and also cloned.
The collection and map implementations except for Vector and Hashtable, are not thread-safe, that is, their integrity can be jeopardized by concurrent access. The Java Collections Framework provides a plethora of collections and maps for use in single-threaded and concurrent applications.


-----------

## Collection

It is the root interface in the collection hierarchy. A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others do not. Some are ordered, and others are unordered. Collections that have a defined encounter order are generally subtypes of the SequencedCollection interface. The JDK does not provide any direct implementations of this interface: it provides implementations of more specific subinterfaces like Set and List. This interface is typically used to pass collections around and manipulate them where maximum generality is desired.

The Collections Framework defines several algorithms that can be applied to collections and maps. These algorithms are defined as static methods within the `Collections` class.Collection interface defines group of elements.
The Collection interface specifies the contract that all collections should implement. Some of the operations in the interface are optional, meaning that a collection may choose to provide a stub implementation of such an operation that throws an UnsupportedOperationException when invoked. The implementations of collections from the java.util package support all the optional operations in the Collection interface.
Many of the methods return a boolean value to indicate whether the collection was modified as a result of the operation.

- `Basic Operations`:- The basic operations are used to query a collection about its contents and allow elements to be added to and removed from a collection.
    - int size()- return the total number of elements in the collection.
    - boolean isEmpty()- checks if collection is empty.
    - boolean contains(Object element)- is used to search an element.
    - boolean add(E element)- is used to insert an element in this collection.
    - boolean remove(Object element)- is used to delete an element from this collection.

The add() and remove() methods return true if the collection was modified as a result of the operation.By returning the value false, the add() method indicates that the collection excludes duplicates and that the collection already contains an object equal to the argument object.
The contains() method checks for membership of the argument object in the collection, using object value equality.
Note that we can only add an object of a specific type (E). However, a collection allows us to determine whether it has an element equal to any arbitrary object,or remove an element that is equal to any arbitrary object.

- `Bulk Operations`:- These operations perform on a collection as a single unit.
    - containsAll(Collection c)-is used to search the specified collection in this collection.
    - boolean addAll(Collection c)- is used to insert the specified collection elements in the invoking collection.
    - boolean removeAll(Collection c)- is used to delete all the elements of specified collection from the invoking collection.
    - boolean retainAll(Collection c)- is used to delete all the elements of invoking collection except the specified collection.
    - void clear()- removes the total no of element from the collection.

- `Iterators`:- A collection provides an iterator which allows sequential access to the elements of a collection. An iterator can be obtained by calling the following method of the Collection interface:
    - Iterator<E> iterator() - Returns an object which implements the Iterator interface.

- `Array Operations`:- These operations convert collections to arrays.
    - Object[] toArray()- converts collection into array.
    - <T> T[] toArray(T[] a) - stores the elements of a collection in an array of type T.

If the given array is big enough, the elements are stored in this array. If there is room to spare in the array, that is, the length of the array is greater than the number of elements in the collection, the spare room is filled with null values before the array is returned. If the array is too small, a new array of type T and appropriate size is created. If T is not a supertype of the runtime type of every element in the collection, an ArrayStoreException is thrown.

Adding Data:-Ensures that this collection contains the specified element (optional operation). Returns true if this collection changed as a result of the call. (Returns false if this collection does not permit duplicates and already contains the specified element.)
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

Removing Data:- The remove() method removes a single matching value in the Collection and returns whether it was successful. The method signature is as follows:

```java
public boolean remove(Object object)
```

```java
Collection<String> list = new ArrayList<>();
list.remove("Collins");//true
list.remove("Kosgei");//true
```

Counting Elements:- The isEmpty() and size() methods look at how many elements are in the Collection. The method signatures are as follows:

```java
public boolean isEmpty()
public int size()
```

```java
Collection<String> list = new ArrayList<>();
list.isEmpty()//true
list.size()//0
```

Clearing the Collection:- The clear() method provides an easy way to discard all elements of the Collection. The method signature is as follows:

```java
public void clear()
```

```java
Collection<String> list = new ArrayList<>();
list.remove("Collins");
list.clear();
```

Check Contents:- The contains() method checks whether a certain value is in the Collection. The method signature is as follows:

```java
public boolean contains(Object object)
```

```java
Collection<String> list = new ArrayList<>();
list.add("Collins");
list.contains("Collins");//true
```

Removing with Conditions:- The removeIf() method removes all elements that match a condition. We can specify what should be deleted using a block of code or even a method reference.

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

Iterating:- There’s a forEach() method that you can call on a Collection instead of writing a loop. It uses a Consumer that takes a single parameter and doesn’t return anything. The method signature is as follows:

```java
public void forEach(Consumer<? super T> action)
```

Determining Equality:- There is a custom implementation of equals() so you can compare two Collections to compare the type and contents. The implementation will vary. For example, ArrayList checks order, while HashSet does not.

```java
boolean equals(Object object)
```


**Sorting DaTa**:- When working with a String, remember that numbers sort before letters, and uppercase letters sort before lowercase letters.
We use Collections.sort(). It returns void because themmethod parameter is what gets sorted.
You can also sort objects that you create yourself. Java provides an interface called Comparable. If your class implements Comparable, it can be used in data structures that require comparison. There is also a class called Comparator, which is used to specify that you want to use a different order than the object itself provides.

13. public boolean equals(Object element) - matches two collection.
14. public int hashCode() - returns the hashcode number for collection.

---------------

## List Interface

The `List` interface is a child interface of the Collection interface.It extends the `Collection` interface and declares the behavior of a collection that stores a sequence of elements. Elements can be added or accessed by their position in the list, using a zero-based index. A list may also contain duplicate elements.
List is an ordered collection.It maintains the insertion order, meaning it will display elements in same order in which they got inserted.It provides control over position where you can insert element.You use a list when you want an ordered collection that can contain duplicate entries.It allows 'null' elements.

Items can be retrieved and inserted at specific positions in the list based on an int index, much like an array. Unlike an array, though, many List implementations can change in size after they are declared.Lists are commonly used because there are many situations in programming where you need to keep track of a list of objects.
The main thing all List implementations have in common is that they are ordered and allow duplicates. Beyond that, they each offer different functionality.Some implementations include: ArrayList, LinkedList, Vectors, Stack, CopyOnWriteArrayList.

*Creating a List*:-

- `Using Factory`:- When you create a List of type ArrayList or LinkedList, you know the type. There are a few special methods where you get a List back but don’t know the type.These method let you create a List including data in one line using a factory method. This is convenient, especially when testing. Some of these methods return an immutable object.
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

- `Using a Constructor`:- 

- `List Methods`:- In addition to the operations inherited from the Collection interface, the List interface also defines operations that work specifically on lists: position-based access of the list elements, searching in a list, operations on parts of a list (called open range-view operations), and creation of customized iterators.
    - E get(int index)- Returns element at specified index.
    - E set(int index, E e) - Replaces element at index and returns original element.Throws IndexOutOfBoundsException if index is invalid.
    - void add(int index,E element) - Adds element at index and moves the rest toward the end.The inherited method add(E) from the Collection interface will append the specified element to the end of the list.
    - boolean addAll(int index, Collection<? extends E> c) - inserts the elements from the specified collection at the specified index, using an iterator of the specified collection, i.e. the method splices the elements of the specified collection into the list at the specified index. The method returns true if any elements were added.
    - E remove(int index) - Removes element at index and moves the rest toward the front.The inherited method remove(E) from the Collection interface will remove the first occurrence of the element from the list.
    - int indexOf(Object o) - return the index of the first occurrence of the element that is the same as the specified argument if such an element exists in the list; otherwise, the value –1 is returned.
    - int lastIndexOf(Object o) - return the index of the last occurrence of the element that is the same as the specified argument if such an element exists in the list; otherwise, the value –1 is returned.
    - List<E> subList(int fromIndex, int toIndex) - This method returns a view of the list, which consists of the sublist of the elements from the index fromIndex to the index toIndex-1, i.e. a half-open interval. A view allows the range it represents in the underlying list to be manipulated. Any changes in the view are reflected in the underlying list, and vice versa. Views can be used to perform operations on specific ranges of a list.
    - ListIterator<E> listIterator() - traverses the elements consecutively, starting with the first element of the list.
    - ListIterator<E> listIterator(int index) - tarts traversing the list from the element indicated by the specified index.

The ListIterator interface is a bidirectional iterator for lists. It extends the Iterator interface and allows the list to be traversed in either direction. When traversing lists, it can be helpful to imagine a cursor moving forward or backward between the elements when calls are made to the next() and the previous() methods, respectively. The element that the cursor passes over is returned.When the remove() method is called, the element last passed over is removed from the list.

5. public default void replaceAll( UnaryOperator<E> op) - Replaces each element in list with result of operator.
7. public default void sort( Comparator<? super E> c) - Sorts list.


- **LinkedList**:- A `LinkedList` is special because it implements both List and Deque. It has all the methods of a List. It also has additional methods to facilitate adding or removing from the beginning and/or end of the list.The main benefits of a LinkedList are that you can access, add to, and remove from the beginning and end of the list in constant time. The trade-­off is that dealing with an arbitrary index takes linear time. This makes a LinkedList a good choice when you’ll be using it as Deque.

A LinkedList is a linear data structure where elements are stored in non-contiguous memory locations.More intuitively, a linked list is a linear chain of nodes, where each node contains the data and the memory location of the next or previous or both the next and previous nodes. 
Internally, the elements are stored in a doubly linked list.In LinkedList, the manipulation is fast because no shifting is required.

The 'LinkedList' class extends the 'AbstractSequentialList' class and implements the 'List', 'Queue' and 'Deque' interfaces.
		
- *Constructors*
    - LinkedList() : Creates empty list containing all defaults.
    - LinkedList(Collection c):- Constructs a list containing the elements of the specified collection, in the order they are returned by the collection's iterator.

- *Methods In List*:-

- `Adding elements to LinkedList`:-
	- boolean add(E obj) : Declared in the Collection interface. Adds object to the collection. Returns true if object was added, otherwise returns false.
	- void add(int index, E obj) : Declared in the List interface. Adds object obj to the invoking list at the index passed. Any preexisting element at or beyond the index are shifted up. Thus no elements are overwritten.
	- boolean addAll(Collection c) : Declared in the Collection interface. Adds all the elements of c to the invoking collection. Returns true if elements were added to the invoking collection. Otherwise, returns false.		
    - boolean addAll(int index, Collection c) : Declared in the List interface.Adds all the elements of c to the invoking list at the index passed. Any preexisting element at or beyond the index are shifted up. Thus no elements are overwritten. Returns true if elements were added to the invoking list.Otherwise, returns false.
- `Removing elements from LinkedList`:-
    - boolean remove(Object obj) : Declared in the Collection interface. Removes one instance of obj from the invoking collection. Returns true if the element was removed. Otherwise, returns false.	 
    - boolean removeAll(Collection c) : Declared in the Collection interface. Removes all elements of c from the invoking collection. Returns true if elements were removed from the invoking collection. Otherwise, returns false.
    - E remove(int index) : Declared in the List interface. Removes the element at the specified index from the invoking list, returning the element in the process. The indexes of the subsequent elements are decremented by one.		
    - boolean retainAll(Collection c) : Declared in the Collection interface.Removes all elements from the invoking collection except those in c. Returns true if elements were removed from the invoking collection. Otherwise,returns false.
- `Check if LinkedList contains an object`:-
	- boolean contains(Object obj) : Declared in the Collection interface. Returns true if obj is an element of the invoking collection. Otherwise, returns false.
	- boolean containsAll(Collection c) : Declared in the Collection interface.Returns true if the invoking collection contains all elements of c.Otherwise, returns false.
- `Get the element at an index in LinkedList`:-
	- E get(int index) : Declared in the List interface. Returns the object stored at the specified index within the invoking collection.	
- `Get the index of an element in LinkedList`:-
	- int indexOf(Object obj) : Declared in the List interface. Returns the index of the first instance of obj in the invoking list. If obj is not present in the list, -1 is returned.
	- int lastIndexOf(Object obj) : Declared in the List interface. Returns the index of the last instance of obj in the invoking list. If obj is not present in the list, -1 is returned.
- `Set the element at an index in LinkedList`
	- E set(int index, E obj) : Declared in the List interface. Assigns obj to the location specified by index within the invoking list. Returns the old va
- *Methods declared by the 'Queue', 'Deque' interfaces*:-
- `Adding elements to LinkedList`:-
    - boolean offer(E obj) : Declared in the Queue interface. Adds object to the queue. Returns true if object was added, otherwise returns false.
	- void addFirst(E obj) : Declared in the Deque interface. Adds obj to the head of the deque. Throws an IllegalStateException if a capacity-restricted deque is out of space.
    - void addLast(E obj) : Declared in the Deque interface. Adds obj to the tail of the deque. Throws an IllegalStateException if a capacity-restricted deque is out of space.
    - boolean offerFirst(E obj) : Declared in the Deque interface. Attempts to add obj to the head of the deque. Returns true if obj was added and false otherwise.
	- boolean offerLast(E obj) : Declared in the Deque interface. Attempts to add obj to the tail of the deque. Returns true if obj was added and false otherwise.
    - void push(E obj) : Declared in the Deque interface. Adds obj to the head of the deque. Throws an IllegalStateException if a capacity-restricted deque is out of space.
- `Removing elements from LinkedList`:-
    - E remove() : Declared in the Queue interface. Removes the element at the hef the queue returning the element in the process. It throws NoSuchElementException if the queue is empty.
    - E removeFirst() : Declared in the Deque interface. Removes the element at the head of the deque returning the element in the process. It throws NoSuchElementException if the deque is empty.
    - E removeLast() : Declared in the Deque interface. Removes the element at the tail of the deque returning the element in the process. It throws NoSuchElementException if the deque is empty.
    - boolean removeFirstOccurrence(Object obj) : Declared in the Deque interface. Removes the first occurrence of obj from the deque. Returns true if successful and false if the deque did not contain obj.
    - boolean removeLastOccurrence(Object obj) : Declared in the Deque interface. Removes the last occurrence of obj from the deque. Returns true if successful and false if the deque did not contain obj.
- `Get the head / tail element of LinkedList`:-
    - E peek() : Declared in the Queue interface. Returns the element at the head of the queue. It returns null if the queue is empty.
	- E peekFirst() : Declared in the Deque interface. Returns the element at the head of the deque. It returns null if the deque is empty. The object is not removed.
    - E peekLast() : Declared in the Deque interface. Returns the element at the tail of the deque. It returns null if the deque is empty. The object is not removed.
    - E getFirst() : Declared in the Deque interface. Returns the first element in the deque. The object is not removed from the deque. It throws NoSuchElementException if the deque is empty.
    - E getLast() : Declared in the Deque interface. Returns the last element in the deque. The object is not removed from the deque. It throws NoSuchElementException if the deque is empty.
- `Get & remove the head / tail element of LinkedList`:-
	- E poll() : Declared in the Queue interface. Returns the element at the head of the queue, removing the element in the process. It returns null if the queue is empty.
	- E pop() : Declared in the Deque interface. Returns the element at the head of the deque, removing it in the process. It throws NoSuchElementException if the deque is empty.		  
    - E pollFirst() : Declared in the Deque interface. Returns the element at the head of the deque, removing the element in the process. It returns null if the deque is empty.
	- E pollLast() : Declared in the Deque interface. Returns the element at the tail of the deque, removing the element in the process. It returns null if the deque is empty.
- `Reverse order iteration over the contents of a LinkedList`:-
	- Iterator<E> descendingIterator(): Declared in the Deque interface. Returns an iterator that moves from the tail to the head (reverse iterator) of the deque.
	

- **ArrayList**:- Resizable-array implementation of the List interface.An ArrayList is a dynamic-sized array. It grows and shrinks in size dynamically as we keep on adding or removing elements. The 'ArrayList' class extends the 'AbstractList' class and implements the 'List' interface.

It uses a dynamic array to store the duplicate element of different data types.The ArrayList class maintains the insertion order and is non-synchronized. The elements stored in the ArrayList class can be randomly accessed.It internally uses an array to store elemnts. Just like array it allows you to retreive elements by their index.
Allows duplicate and null values.Is an ordered collection and maintains order. Cannot create an ArrayList of primitives type.You use boxed types e.g Integer,Boolean

Java Arraylist is not synchronized. If multiple threads is required try to modify then outcome wil be non-deterministicYou must explicitly sysnchronize access if multiple threads gonna modify it.
When you aren’t sure which collection to use, use an ArrayList.The main benefit of an ArrayList is that you can look up any element in constant time.Adding or removing an element is slower than accessing an element. This makes an ArrayList a good choice when you are reading more often than (or the same amount as) writing to the ArrayList.

- *Constructors*:-
    - ArrayList() : Creates empty list with initial capacity of ten.
    - ArrayList(initialCapacity) : Creates empty list with initial capacity specified.
    - ArrayList(Collection c):- Constructs a list containing the elements of the specified collection, in the order they are returned by the collection's iterator.

- *Methods*:-
- `Adding elements to ArrayList`:-
    - boolean add(E obj) : Declared in the Collection interface. Adds object to the collection. Returns true if object was added, otherwise returns false.
    - void add(int index, E obj) : Declared in the List interface. Adds object obj to the invoking list at the index passed. Any preexisting element at or beyond the index are shifted up. Thus no elements are overwritten.
    - boolean addAll(Collection c) : Declared in the Collection interface. Adds all the elements of c to the invoking collection. Returns true if elements were added to the invoking collection. Otherwise, returns false.
    - boolean addAll(int index, Collection c) : Declared in the List interface. Adds all the elements of c to the invoking list at the index passed. Any preexisting element at or beyond the index are shifted up. Thus no elements are overwritten. Returns true if elements were added to the invoking list.Otherwise, returns false.
- `Removing elements from ArrayList`:-
    - boolean remove(Object obj) : Declared in the Collection interface. Removes one instance of obj from the invoking collection. Returns true if the element was removed. Otherwise, returns false.
    - boolean removeAll(Collection c) : Declared in the Collection interface. Removes all elements of c from the invoking collection. Returns true if elements were removed from the invoking collection. Otherwise, returns false.
	- E remove(int index) : Declared in the List interface. Removes the element at the specified index from the invoking list, returning the element in the process. The indexes of the subsequent elements are decremented by one.
	- boolean retainAll(Collection c) : Declared in the Collection interface. Removes all elements from the invoking collection except those in c. Returns true if elements were removed from the invoking collection. Otherwise,returns false.
- `Check if ArrayList contains an object`:-
    - boolean contains(Object obj) : Declared in the Collection interface. Returns true if obj is an element of the invoking collection. Otherwise, returns false.
    - boolean containsAll(Collection c) : Declared in the Collection interface. Returns true if the invoking collection contains all elements of c. Otherwise, returns false.
- `Get the element at an index in ArrayList`:-
    - E get(int index) : Declared in the List interface. Returns the object stored at the specified index within the invoking collection.
- `Get the index of an element in ArrayList`:-
    - int indexOf(Object obj) : Declared in the List interface. Returns the index of the first instance of obj in the invoking list. If obj is not present in the list, -1 is returned.
    - int lastIndexOf(Object obj) : Declared in the List interface. Returns the index of the last instance of obj in the invoking list. If obj is not present in the list, -1 is returned.
- `Set the element at an index in ArrayList`:-
    - E set(int index, E obj) : Declared in the List interface. Assigns obj to the location specified by index within the invoking list. Returns the old value.
- `Check if ArrayList is empty or not`:-
    - boolean isEmpty() : Declared in the Collection interface. Returns true if the invoking collection is empty. Otherwise, returns false.
- `Get the count of elements present in the ArrayList`:-
    - int size() : Declared in the Collection interface. Returns the number of elements held in the invoking collection.		
- `Get sub-list from an ArrayList`:-
    - List<E> subList(int startIndex, int endIndex) : Declared in the List interface. Returns a list that includes elements from startIndex to (endIndex- 1) in the invoking list Elements in the returned list are also referenced by the invoking object.
- `Clear the ArrayList`:-
	- void clear() : Declared in the Collection interface. Removes all elementsfrom the invoking collection.
- `Iterating over the contents of a ArrayList`:-
	- Iterator<E> iterator() : Declared in the Collection interface. Returns an iterator for the invoking collection.


---------------

## Set Interface

A set is an unordered collection of elements allowing no duplicates, i.e. all the elements in a set are unique.The main thing that all Set implementations have in common is that they do not allow duplicates.This also means that a set can contain at most one null value.
The Set interface does not define any new methods, and its add() and addAll() methods will not store duplicates. If an element is not currently in the set, two consecutive calls to the add() method to insert the element will first return true, then false.

Multisets (also called bags) that allow duplicate elements cannot be implemented using the Set interface, since this interface requires that elements are unique in the collection.
You can create an immutable Set in one line or make a copy of an existing one.

```java
Set<Character> letters = Set.of('z', 'o', 'o');
Set<Character> copy = Set.copyOf(letters);
```

- **HashSet**:- A `HashSet` stores its elements in a hash table, which means the keys are a hash and the values are an Object. This means that the HashSet uses the hashCode() method of the objects to retrieve them more efficiently. Remember that a valid hashCode() doesn’t mean every object will get a unique value, but the method is often written so that hash values are spread out over a large range to reduce collisions.A HashSet relies on the implementation of the hashCode() and equals() methods of its elements. The hashCode() method is used for hashing the elements, and the equals() method is needed for comparing elements. In fact, the equality and the hash codes of HashSets are defined in terms of the equality and the hash codes of their elements.
The main benefit is that adding elements and checking whether an element is in the set both have constant time. The trade-­off is that you lose the order in which you inserted the elements. Most of the time, you aren’t concerned with this in a Set anyway, making HashSet the most common set.


- **LinkedHashSet** - The LinkedList implementation of the Set Interface is represented by the LinkedHashSet class.It implements the Set interface and extends the HashSet class. It has distinctive components just like HashSet. It permits null elements and preserves insertion order.


- **TreeSet**:- A `TreeSet` stores its elements in a sorted tree structure. The main benefit is that the set is always in sorted order. The trade-­off is that adding and checking whether an element exists takes longer than with a HashSet, especially as the tree grows larger.The Set interface, which uses a tree for storage, is implemented by the Java TreeSet class.TreeSet has distinct components, just as HashSet. However, TreeSet has fairly quick access and retrieval time. The TreeSet stores its elements in ascending order.


- **SortedSet Interface** - The alternative to the Set interface, known as SortedSet, offers a complete ordering of its items.The SortedSet's elements are organized in ascending (increasing) order. The SortedSet offers extra methods that prevent the elements' default sorting.


--------------

## Queue Interface

The 'Queue' interface extends 'Collection' interface and declares the behaviour of a queue. 'Queue' being an interface needs a class which provides implementation to its methods and also that we can create objects of that class. 'LinkedList' and 'PriorityQueue' are the most commonly used classes used while creating a queue object.
The order of first-in, first-out is maintained through the queue interface. It can be characterized as an ordered list used to store pieces that are scheduled to undergo processing.
There are many classes that implement the Queue interface, including PriorityQueue, Deque, and ArrayDeque.

A queue is an ordered list of objects which are processed in a first-in, first-out (FIFO) manner, i.e. elements are inserted at the tail or rear-end of the queue whereas removal of elements occur at the head or front-end of the queue.

The Queue interface contains 6 methods.There are three pieces of functionality and versions of the methods that throw an exception or use the return type, such as null, for all information.

1. public boolean add(E e) - Add to back.
2. public boolean offer(E e) - Add to back.
3. public E element() - Read from front.
4. public E peek() - Read from front
5. public E remove() - Get and remove from front.
6. public E poll() - Get and remove from front.


- **PriorityQueue** - The Queue interface is implemented by the PriorityQueue class.It contains the substances or things that must be handled according to their priority. Null values cannot be saved in the queue using PriorityQueue.


----------------


## Deque

A deque (double-ended queue) functions as queues (first-in, first-out) or as stacks (last-in, first-out).Deque interface supports double-­ended queues, it inherits all Queue methods and adds more so that it is clear if we are working with the front or back of the queue.
The 'Deque' interface extends 'Queue' interface and declares the behaviour of a double-ended queue. 'Deque' being an interface needs a class which provides implementation to its methods and also that we can create objects of that class. 'ArrayDeque' class is used used while creating a deque object.

The 'ArrayDeque' class extends 'AbstractCollection' class and implements the 'Deque' interface. 'ArrayDeque' creates a dynamic array and has no capacity restrictions.

The Queue interface is expanded by the Deque interface. In Deque, we have the ability to remove and add parts from either side.A double-ended queue known by the abbreviation DEQUE allows us to conduct operations at both ends.

Deque methods includes:-

1. public void addFirst(E e) - Add to front.
2. public boolean offerFirst(E e)
3. public boolean addLast(E e) - Add to back.
4. public boolean offerLast(E e)
5. public E getFirst() - Read from front.
6. public E peekFirst()
7.  public E getLast() - Read from back.
8. public E peekLast()
9. public E removeFirst() - Get and remove from front.
10. public E pollFirst()
11. public E removeLast() - get and remove from back.
12. public E pollLast()

- `Adding elements to deque`:-
    - boolean add(E obj) : Declared in the Collection interface. Adds object to the collection. Returns true if object was added, otherwise returns false.
    - boolean offer(E obj) : Declared in the Queue interface. Adds object to the queue. Returns true if object was added, otherwise returns false.
    - void addFirst(E obj) : Declared in the Deque interface. Adds obj to the head of the deque. Throws an IllegalStateException if a capacity-restricted deque is out of space.
    - void addLast(E obj) : Declared in the Deque interface. Adds obj to the tail of the deque. Throws an IllegalStateException if a capacity-restricted deque is out of space.
    - boolean offerFirst(E obj) : Declared in the Deque interface. Attempts to add obj to the head of the deque. Returns true if obj was added and false otherwise.
    - boolean offerLast(E obj) : Declared in the Deque interface. Attempts to add obj to the tail of the deque. Returns true if obj was added and false otherwise.
    - void push(E obj) : Declared in the Deque interface. Adds obj to the head of the deque. Throws an IllegalStateException if a capacity-restricted deque is out of space.
- `Removing elements from deque`:- 
    - E remove() : Declared in the Queue interface. Removes the element at the head of the queue returning the element in the process. It throws NoSuchElementException if the queue is empty.
    - boolean remove(Object obj) : Declared in the Collection interface. Removes one instance of obj from the queue. Returns true if the element was removed.Otherwise, returns false.
    - E removeFirst() : Declared in the Deque interface. Removes the element at the head of the deque returning the element in the process. It throws NoSuchElementException if the deque is empty.
    - E removeLast() : Declared in the Deque interface. Removes the element at the tail of the deque returning the element in the process. It throws NoSuchElementException if the deque is empty.
    - boolean removeFirstOccurrence(Object obj) : Declared in the Deque interface.Removes the first occurrence of obj from the deque. Returns true if successful and false if the deque did not contain obj.
    - boolean removeLastOccurrence(Object obj) : Declared in the Deque interface.Removes the last occurrence of obj from the deque. Returns true if successful and false if the deque did not contain obj.
- `Get the head / tail element of deque`:-
    - E peek() : Declared in the Queue interface. Returns the element at the head of the queue. It returns null if the queue is empty.
    - E peekFirst() : Declared in the Deque interface. Returns the element at the head of the deque. It returns null if the deque is empty. The object is not removed.
    - E peekLast() : Declared in the Deque interface. Returns the element at the tail of the deque. It returns null if the deque is empty. The object is nremoved.
    - E getFirst() : Declared in the Deque interface. Returns the first element in the deque. The object is not removed from the deque. It throws NoSuchElementException if the deque is empty.
    - E getLast() : Declared in the Deque interface. Returns the last element in the deque. The object is not removed from the deque. It throws NoSuchElementException if the deque is empty.


- **ArrayDeque** - ArrayDeque class implements the Deque interface. It facilitates us to use the Deque.Unlike queue, we can add or delete the elements from both ends.ArrayDeque is faster than ArrayList and Stack and has no capacity restrictions.


------------------


## Map Interface

The Map interface maps unique keys to values(stores key-value pairs). Both key and values are objects. Using a key you can find its value. Keys must be unique, but the values may contain duplicates.A key is an object that can be used to retrieve its corresponding value. 
The 'AbstractMap' class implements most of the 'Map' interface and serves as a superclass for all concrete map implementations.

Map.of() and Map.copyOf() - Just like List and Set, there is a factory method to create a Map. You pass any number of pairs of keys and values.

```java
Map.of("key1", "value1", "key2", "value2");
```

Map also provides a method that lets you supply key/value pairs.

```java
Map.ofEntries(
Map.entry("key1", "value1"),
Map.entry("key2", "value2"));
```

Now we can’t forget to pass a value. If we leave out a parameter, the entry() method won’t compile. Conveniently, Map.copyOf(map) works just like the List and Set inter-
face copyOf() methods.

*Working with Map Methods*:- Given that Map doesn’t extend Collection, more methods are specified on the Map interface.Since there are both keys and values, we need generic type parameters for both. The class uses K for key and V for value

1. public void clear() - Removes all keys and values from map.
2. public boolean containsKey(Object key) - Returns whether key is in map.
3. public boolean containsValue(Object value) - Returns whether value is in map.
4. public Set<Map.Entry<K,V>> entrySet() - Returns Set of key/value pairs.
5. public void forEach( BiConsumer<K key, V value>) - Loops through each key/value pair.
6. public V get(Object key) - Returns value mapped by key or null if none is mapped.
7. public V getOrDefault(Object key,V defaultValue) - Returns value mapped by key or default value if none is mapped.
8. public boolean isEmpty() - Returns whether map is empty.
9. public Set<K> keySet() - Returns set of all keys.
10. public V merge(K key, V value,Function(<V, V, V> func)) - Sets value if key not set. Runs function if key is set, to determine new value.Removes if value is null.
11. public V put(K key, V value) - Adds or replaces key/value pair. Returns previous value or null.
12. public V putIfAbsent(K key, V value) - Adds value if key not present and returns null. Otherwise, returns existing value.
13. public V remove(Object key)Removes and returns value mapped to key. Returns null if none.
14. public V replace(K key, V value)Replaces value for given key if key is set.Returns original value or null if none.
15. public void replaceAll(BiFunction<K, V, V> func)Replaces each value with results of function.
16. public int size()Returns number of entries (key/value pairs) in map.
17. public Collection<V> values()Returns Collection of all values.

- **HashMap**:- A HashMap stores the keys in a hash table. This means that it uses the hashCode() method of the keys to retrieve their values more efficiently.
The main benefit is that adding elements and retrieving the element by key both have constant time. The trade-­off is that you lose the order in which you inserted the elements.Most of the time, you aren’t concerned with this in a map anyway. If you were, you could use LinkedHashMap.

- **TreeMap**:- A TreeMap stores the keys in a sorted tree structure. The main benefit is that the keys are always in sorted order. Like a TreeSet, the trade-­off is that adding and checking whether a key is present takes longer as the tree grows larger.


--------------------


## Vector

Vector stores the data elements in a dynamic array. It resembles an array list.
It is synchronized, though, and has a lot of methods that are not included in the Collection framework.

```java
Vector<String> vec = new Vector<String>();
vec.add("Java");
vec.add("PHP");
```


## Stack

A subtype of the vector is the stack. It uses the stack data structure, or last-in, first-out.
The stack offers the methods of the Vector class, including boolean push(), boolean peek(), and boolean push(object o), which specify the class's properties.

```java
Stack<String> stack = new Stack<String>();
stack.push("PHP");
stack.push("Java");
stack.pop();
```

There are five main interfaces:-

1. `Map` :An object that maps keys to values. A map is not ordered and cannot contain duplicate keys (but can contain duplicate values). Each key can map to at most one value.
2. `Collection` :A collection represents a group of objects, known as its elements. The JDK provides implementations of more specific subinterfaces like Set and List.
3. `List` :A list is an ordered list of objects, where the same object may well appear more than once. For example: [1, 7, 1, 3, 1, 1, 1, 5]. You can add an element anywhere in the list, change an element anywhere in the list, or remove an element from any position in the list.Elements in a list can be accessed by an int index.
4. `Queue` :A queue is a collection that orders its elements in a specific order for processing.A Deque is a subinterface of Queue that allows access at both ends.A queue is also ordered, but you'll only ever touch elements at one end. All elements get inserted at the "end" and removed from the "beginning" (or head) of the queue. You can find out how many elements are in the queue,.
5. `Set` :A set is not ordered and cannot contain duplicates. Any given object either is or isn't in the set. {7, 5, 3, 1} is the exact same set as {1, 7, 3, 5}. You can add or remove elements, and you can find out if a certain element exists.


<table class="alt">
<tbody>
<tr><th> </th><th>List</th><th>Set</th><th>Queue</th><th>Map</th></tr>
<tr><th>Order</th><th>Yes</th><th>No</th><th>Yes</th><th>No</th></tr>
<tr><th>Duplicates</th><th>Yes</th><th>No</th><th>Yes</th><th>No (Allow duplicate values not keys)</th></tr>
<tr><th>Null Values</th><th>Yes</th><th>Single Null</th><th>Yes (LinkedList Queue). No (Priority Queue).</th><th>Single null key and many null values</th></tr>
</tbody></table>


Methods of Iterator Interface :-

1. public boolean hasNext()- It returns true if iterator has more elements.
2. public Object next()- It returns the element and moves the cursor pointer to the next element.
3. public void remove() - It removes the last elements returned by the iterator. It is rarely used.

## ArrayList vs LinkedList :

<table class="alt">
<tbody><tr><th>ArrayList</th><th>LinkedList</th></tr>
<tr><td>1) ArrayList internally uses <strong>dynamic array</strong> to store the elements.</td><td>LinkedList internally uses <strong>doubly linked list</strong> to store the elements.</td></tr>
<tr><td>2) Manipulation with ArrayList is <strong>slow</strong> because it internally uses array. If any element is removed from the array, all the bits are shifted in memory.</td><td>Manipulation with LinkedList is <strong>faster</strong> than ArrayList because it uses doubly linked list so no bit shifting is required in memory.</td></tr>
<tr><td>3) ArrayList class can <strong>act as a list</strong> only because it implements List only.</td><td>LinkedList class can <strong>act as a list and queue</strong> both because it implements List and Deque interfaces.</td></tr>
<tr><td>4) ArrayList is <strong>better for storing and accessing</strong> data.</td><td>LinkedList is <strong>better for manipulating</strong> data.</td></tr>
</tbody></table>

## ArrayList vs Vector :

<table class="alt">
<tbody><tr><th>ArrayList</th><th>Vector</th></tr>
<tr><td>1) ArrayList is <strong>not synchronized</strong>.</td><td>Vector is <strong>synchronized</strong>.</td></tr>
<tr><td>2) ArrayList <strong>increments 50%</strong> of current array size if number of element exceeds from its capacity.</td><td>Vector <strong>increments 100%</strong> means doubles the array size if total number of element exceeds than its capacity.</td></tr>
<tr><td>3) ArrayList is <strong>not a legacy</strong> class, it is introduced in JDK 1.2.</td><td>Vector is a <strong>legacy</strong> class.</td></tr>
<tr><td>4) ArrayList is <strong>fast</strong> because it is non-synchronized.</td><td>Vector is <strong>slow</strong> because it is synchronized i.e. in multithreading environment, it will hold the other threads in runnable or non-runnable state until current thread releases the lock of object.</td></tr>
<tr><td>5) ArrayList uses <strong>Iterator</strong> interface to traverse the elements.</td><td>Vector uses <strong>Enumeration</strong> interface to traverse the elements. But it can use Iterator also.</td></tr>
</tbody></table>


## Useful Methods of Map Interface :

<table class="alt">
<tbody><tr><th>Method</th><th>Description</th></tr>
<tr><td> Object put(Object key, Object value)</td><td>It is used to insert an entry in this map.</td></tr>
<tr><td>void putAll(Map map)</td><td>It is used to insert the specified map in this map.</td></tr>
<tr><td>Object remove(Object key)</td><td>It is used to delete an entry for the specified key.</td></tr>
<tr><td>Object get(Object key)</td><td>It is used to return the value for the specified key.</td></tr>
<tr><td>boolean containsKey(Object key)</td><td>It is used to search the specified key from this map.</td></tr>
<tr><td>Set keySet()</td><td>It is used to return the Set view containing all the keys.</td></tr>
<tr><td>Set entrySet()</td><td>It is used to return the Set view containing all the keys and values.</td></tr>
</tbody></table>

## Methods of Map.Entry Interface :
<table class="alt">
<tbody><tr><th>Method</th><th>Description</th></tr>
<tr><td> Object getKey()</td><td>It is used to obtain key.</td></tr>
<tr><td>Object getValue()</td><td>It is used to obtain value.</td></tr>
</tbody></table>

## HashMap vs HashTable :

<table class="alt">
<tbody><tr><th>HashMap</th><th>Hashtable</th></tr>
<tr><td>1) HashMap is <strong>non synchronized</strong>. It is not-thread safe and can't be shared between many threads without proper synchronization code.</td><td>Hashtable is <strong>synchronized</strong>. It is thread-safe and can be shared with many threads.</td></tr>
<tr><td>2) HashMap <strong>allows one null key and multiple null values</strong>.</td><td>Hashtable <strong>doesn't allow any null key or value</strong>.</td></tr>
<tr><td>3) HashMap is a <strong>new class introduced in JDK 1.2</strong>.</td><td>Hashtable is a <strong>legacy class</strong>.</td></tr>
<tr><td>4) HashMap is <strong>fast</strong>.</td><td>Hashtable is <strong>slow</strong>.</td></tr>
<tr><td>5) We can make the HashMap as synchronized by calling this code<br> Map m = Collections.synchronizedMap(hashMap);</td><td>Hashtable is internally synchronized and can't be unsynchronized.</td></tr>
<tr><td>6) HashMap is <strong>traversed by Iterator</strong>.</td><td>Hashtable is <strong>traversed by Enumerator and Iterator</strong>.</td></tr>
<tr><td>7) Iterator in HashMap is <strong>fail-fast</strong>.</td><td>Enumerator in Hashtable is <strong>not fail-fast</strong>.</td></tr>
<tr><td>8) HashMap inherits <strong>AbstractMap</strong> class.</td><td>Hashtable inherits <strong>Dictionary</strong> class.</td></tr>
</tbody></table>

## Collections Framework Implementation Classes Summary :

## Comparable vs Comparator Interfaces :

<table class="alt">
<tbody><tr><th>Comparable</th><th>Comparator</th></tr>
<tr><td>1) Comparable provides <strong>single sorting sequence</strong>. In other words, we can sort the collection on the basis of single element such as id or name or price etc.</td><td> Comparator provides <strong>multiple sorting sequence</strong>. In other words, we can sort the collection on the basis of multiple elements such as id, name and price etc.</td></tr>
<tr><td>2) Comparable <strong>affects the original class</strong> i.e. actual class is modified.</td><td>Comparator <strong>doesn't affect the original class</strong> i.e. actual class is not modified.</td></tr>
<tr><td>3) Comparable provides <strong>compareTo() method</strong> to sort elements.</td><td>Comparator provides <strong>compare() method</strong> to sort elements.</td></tr>
<tr><td>4) Comparable is found in <strong>java.lang</strong> package.</td><td>Comparator is found in <strong>java.util</strong> package.</td></tr>
<tr><td>5) We can sort the list elements of Comparable type by <strong>Collections.sort(List)</strong> method.</td><td>We can sort the list elements of Comparator type by <strong>Collections.sort(List,Comparator)</strong> method.</td></tr>
</tbody></table>

## Legacy Data Structures in Java

Legacy classes and interfaces are the classes and interfaces that formed the collections framework in the earlier versions of Java and has now been restructured or re-engineered. They are fully compatible with the framework.All legacy classes were re-engineered to support generic in JDK5.Legacy = heritage of old java version.
Legacy classes and interfaces - Enumeration, Vector, Stack, Dictionary, HashTable, Properties...

The collections framework consists of:

Collection interfaces - The primary means by which collections are manipulated.
Collection - A group of objects. No assumptions are made about the order of the collection (if any) or whether it can contain duplicate elements.
Set - The familiar set abstraction. No duplicate elements permitted. May or may not be ordered. Extends the Collection interface.
List - Ordered collection, also known as a sequence. Duplicates are generally permitted. Allows positional access. Extends the Collection interface.
Queue - A collection designed for holding elements before processing. Besides basic Collection operations, queues provide additional insertion, extraction, and inspection operations.
Deque - A double ended queue, supporting element insertion and removal at both ends. Extends the Queue interface.


## Need For Collection Framework

- It solves the limitations of arrays
- Are global in nature
