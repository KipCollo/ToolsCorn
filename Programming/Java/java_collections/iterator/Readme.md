# Iterator

An iterator over a collection. Iterator takes the place of Enumeration in the Java Collections Framework. Iterators differ from enumerations in two ways:
1. Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics.
2. Method names have been improved.

`boolean hasNext()`:- Returns true if the iteration has more elements. (In other words, returns true if next would return an element rather than throwing an exception.)
`E next()`:-Returns the next element in the iteration.
