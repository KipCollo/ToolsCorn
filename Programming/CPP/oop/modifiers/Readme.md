# Access Modifiers

Access modifiers are used to implement an important aspect of Object-Oriented Programming known as Data Hiding.

There are 3 types of access modifiers available in C++:

- Public
- Private
- Protected

- Public: All the class members declared under the public specifier will be available to everyone. The data members and member functions declared as public can be accessed by other classes and functions too. The public members of a class can be accessed from anywhere in the program using the direct member access operator (.) with the object of that class.

```cpp
// C++ program to demonstrate public access modifier

#include<iostream>
using namespace std;

class Circle
{
    public: 
        double radius;
        
        double  compute_area()
        {
            return 3.14*radius*radius;
        }
    
};

int main()
{
    Circle obj;
    
    // accessing public datamember outside class
    obj.radius = 5.5;
    
    cout << "Radius is: " << obj.radius << "\n";
    cout << "Area is: " << obj.compute_area();
    return 0;
}

//Radius is: 5.5
//Area is: 94.985
```

- Private: The class members declared as private can be accessed only by the member functions inside the class. They are not allowed to be accessed directly by any object or function outside the class. Only the member functions or the friend functions/ friend class are allowed to access the private data members of the class.

```cpp
// C++ program to demonstrate private
// access modifier

#include<iostream>
using namespace std;

class Circle
{   
    // private data member
    private: 
        double radius;
     
    // public member function    
    public:    
        double  compute_area()
        {   // member function can access private 
            // data member radius
            return 3.14*radius*radius;
        }
    
};

// main function
int main()
{   
    // creating object of the class
    Circle obj;
    
    // trying to access private data member
    // directly outside the class
    obj.radius = 1.5;
    
    cout << "Area is:" << obj.compute_area();
    return 0;
}

//  In function 'int main()':
// 11:16: error: 'double Circle::radius' is private
//          double radius;
//                 ^
// 31:9: error: within this context
//      obj.radius = 1.5;
//          ^
```

- Protected: The protected access modifier is similar to the private access modifier in the sense that it can’t be accessed outside of its class unless with the help of a friend class. The difference is that the class members declared as Protected can be accessed by any subclass (derived class) of that class as well.

Note: This access through inheritance can alter the access modifier of the elements of base class in derived class depending on the mode of Inheritance.

```cpp
Example: 
// C++ program to demonstrate
// protected access modifier
#include <bits/stdc++.h>
using namespace std;

// base class
class Parent
{   
    // protected data members
    protected:
    int id_protected;
   
};

// sub class or derived class from public base class
class Child : public Parent
{
    public:
    void setId(int id)
    {
        
        // Child class is able to access the inherited 
        // protected data members of base class
        
        id_protected = id;
        
    }
    
    void displayId()
    {
        cout << "id_protected is: " << id_protected << endl;
    }
};

// main function
int main() {
    
    Child obj1;
    
    // member function of the derived class can
    // access the protected data members of the base class
    
    obj1.setId(81);
    obj1.displayId();
    return 0;
}
//id_protected is: 81
```
