# Encapsulation

It is a mechanism of binding member data(variabes) and member function(methods) that operate on the daa together into a single unit i.e. class.Encapsulation is an striking feature of OOPs that provides data security.
The main advantage of encapsulation is that data is hidden and protected from access by outside non-member methods of a class. In other words, only member functions defined in a class will have access to the data.

Encapsulation is a way to protect class members by restricting access to them. In Java, it is commonly implemented by declaring all instance variables private. Callers are required to use methods to retrieve or modify instance variables.
Encapsulation is about protecting a class from unexpected use. It also allows us to modify the methods and behavior of the class later without someone already having direct access to an instance variable within the class. For example, we can change the data type of an instance variable but maintain the same method signatures. In this manner, we maintain full control over the internal workings of a class.

In encapsulation, data(variables) are declared as private and methods are declared as public.

```java
public class Person{
    private int id;
    private String name;

    public void setId(int id){
        this.id=id;
    }
    public int getId(){
        return id;
    }
    public void setName(String name){
        this.name=name;
    }
    public void getName(){
        return name;;
    }
}
```
