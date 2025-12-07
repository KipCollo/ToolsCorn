# Abstraction

Abstraction in object-oriented programming is the concept of hiding the complex implementation details and showing only the essential features of the object. In Python, abstraction can be achieved using abstract classes and methods provided by the abc module.

```py

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

    def perimeter(self):
        return 2 * 3.14 * self.radius

class Rectangle(Shape):
    def __init__(self, length, breadth):
        self.length = length
        self.breadth = breadth

    def area(self):
        return self.length * self.breadth

    def perimeter(self):
        return 2 * (self.length + self.breadth)
```

Abstract Class: Shape is an abstract class that inherits from ABC (Abstract Base Class). It contains abstract methods area and perimeter which must be implemented by any subclass.

Concrete Classes: Circle and Rectangle are concrete classes that inherit from Shape and provide implementations for the abstract methods area and perimeter.
