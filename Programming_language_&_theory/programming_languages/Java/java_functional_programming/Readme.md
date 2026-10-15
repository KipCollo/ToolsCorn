# Functional Programming

Functional programming is a way of writing code more declaratively with high-order-function.You specify what you want to do rather than dealing with state of objects.it uses lambdas expressions to write code.
Introduced in Java 8 API.

A lambda expression is a block of code that gets passed around. You can think of a lambda expression as an unnamed method existing inside an anonymous class.Lambda expressions are often referred to as lambdas for short.

Before Java 8, Java used to be imperative and object-oriented.In OOP we encapsulate moving part;In Functional Programming we eliminate the moving parts.
After Java 8, there is imperative + functional + oop.
TODO Imperative --How, Declarative --What(e.g SQL)

```java
//imperative programming - Tells computer what to do and how to do
int count = 0;
for(var movie: movies)
   if (movies.getLikes()>10)
    count ++

//declarative(Functional) Programming - Tells computer what to do.
var count2 = movies
      .stream()
      .filter(movie -> movie.getLikes() > 10)
      .count();
```

functional programming = functional composition + Lazy Evaluation.
