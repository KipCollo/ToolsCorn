# Classes

It is a blueprint or template for creating objects

To create a class,use the keyword class.

```py
class Car:
    #body
```

## Attributes

1. Class Attributes -Are variables that have same value for all class instance
2. Instance Attributes -Defined within .init() method.Its specific to particular instance of class.

```py
class Shape:
    shape ='Circle'# class attribute

    def __init__(self,radius):
        self.radius=radius # instance attribute
        self.height = 0
```

## Constructor

Constructor is a special method that is called when new object is being created.

**self** is a reference to current object.

```py
class Shape:
    def __init__(self,param)
        self.param = param
```

## Methods

They should have atleast one parameter i.e **self**

1. Class Method/Factory method -Declared with @Classmethod decorator
2. Instance method-Invoked by instance object
3. Static method-Declared with @staticmethod decorator

```py
class car:

    @classmethod
    def classMethod(cls):
        cls(0)# initial class attribute value
        #body

    def instanceMethod(self):
        # body

    @staticmethod
    def statMethod():
        # body
```

## Magic methods

*Guide to magic method* reference to learn magic methods

```py
__init__() method
__new__() method
__str__() method
```

## Modifiers

In Python, you can use different modifiers to control the access level of class attributes and methods. Here are the common modifiers:

1. Public: Accessible from anywhere.
2. Protected: Accessible within the class and its subclasses (conventionally prefixed with a single underscore _).
3. Private: Accessible only within the class (prefixed with double underscores __).

```py
class Shape:
    def __init__(self, value):
        self.value = value  # public attribute

    def public_method(self):
        return self.value  # public method

    def _protected_method(self):
        return self._value  # protected method

    def __private_method(self):
        return self.__value  # private method
```

## Object

It is an instance of a class.

To create an object:-

```py
obj = ClassName()
```

To check if object belongs to a method:-

```py
isinstance(obj,ClassName)
```

### Comparing objects

To compare betwween two objects you use some magic methods

```py
def __eq__(self,other):
    return self.x == other.x and self.y == other.y

def __gt__(self,other):
    return self.x > other.x and self.y > other.y
```

## Performing Arithmetic operations

There are magic methods to implement operators

```py
def __add__(self,other):
    return self.x +  other.x, self.y + other.y
```
