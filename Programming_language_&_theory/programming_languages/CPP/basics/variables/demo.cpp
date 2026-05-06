# include<stdio.h>
#include <string>

using namespace std;

class Demo
{
private:
    int myNum = 5;               // Integer (whole number without decimals)
    double myFloatNum = 5.99;    // Floating point number (with decimals)
    char myLetter = 'D';         // Character
    string myText = "Hello";     // String (text)
    bool myBoolean = true;       // Boolean (true or false) 
public:
    Demo(/* args */);
    ~Demo();
};

Demo::Demo(/* args */)
{
}

Demo::~Demo()
{
}
