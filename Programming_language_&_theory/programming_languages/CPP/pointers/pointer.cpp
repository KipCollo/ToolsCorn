#include<iostream>

int age =30;
int* point = &age;
int **ptr = &point;

void hello(){
    std::cout<<"Hello World"<<std::endl;
}

int main(){

    void (*func)() = &hello;

    std::cout<< age << std::endl;
    std::cout<< point <<std::endl;
    std::cout<< *point <<std::endl;
    std::cout<< &age <<std::endl;
    std::cout<< ptr <<std::endl;

    func();

    return 0;
}