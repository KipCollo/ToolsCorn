#include <iostream>

using namespace std;

namespace SquareOne{
     double length =18;

     void area(){
        cout << "Area of square 1: " << length*length << endl;
        }
}

namespace SquareTwo{
     double length =7;

     void area(){
        
        cout << "Area of square 2: " << length*length << endl;
        }
}

int main(){
  // Accessing members of SquareOne
    cout << "SquareOne variable: " << SquareOne::length << endl;
    SquareOne::area();

    // Accessing members of SquareTwo
    std::cout << "SquareTwo variable: " << SquareTwo::length << std::endl;
    SquareTwo::area();

    return 0;
}