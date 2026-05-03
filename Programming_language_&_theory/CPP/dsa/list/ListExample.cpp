#include<iostream>
#include<list>
#include<string>

using namespace std;

int main(){

   list<string> students={"Collins","John","Doe"};
   
   for(string student: students){
      cout<<student <<endl;
   }

   cout<<students.back();
}