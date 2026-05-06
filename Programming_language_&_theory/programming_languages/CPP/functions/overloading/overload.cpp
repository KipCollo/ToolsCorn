#include<iostream>

class Maths{
    public:
      int add(int num1,int num2){
          return num1 + num2;
         };

      int add(int num1,int num2,int num3){
         return num1 + num2 + num3;
          };
};

int main(){

    Maths maths;

    std::cout<<maths.add(2,3)<<std::endl;
    std::cout<<maths.add(2,3,4)<<std::endl;
    return 0;
}