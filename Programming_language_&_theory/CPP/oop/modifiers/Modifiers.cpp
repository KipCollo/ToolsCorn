#include<iostream>

using namespace std;

class Circle{

    public:
        const double PI = 3.14;
        double radius;

        double area(){
            return PI * radius * radius;
        }
};

int main(){

    Circle c1,c2;

    c1.radius= 7;
    c2.radius = 27;
 
    cout<<"Radius is "<< c2.radius<< endl;
    cout<<"Area is "<< c2.area();
    
    return 0;
};
