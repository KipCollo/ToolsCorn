# Variables

Variables are containers that hold data, like names or numbers. Python figures out the type of data automatically.

## Typing

Python is a dynamic language and it's datatype is determined during runtime.

1. Static:- C++, C#, Java
2. Dynamic:- Javascript,Ruby, Python

```java
int students_count = 1000
```

```py
student_count = 1000
```

To check the type of variable in python you use the type method:-

```py
type(student_count)# <class 'int'>
```

## Type Annotation

```py
age: int = 20
```

The new linter **mypy** cn be used to detect the data types.
