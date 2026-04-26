# include<stdio.h>

using namespace std;

class Student{

    public:
      int id;
      bool isRegistered;
    
    private:
      char firstName;

    // Function inside a class
    public: 
        void getName(){
            //body
        }
        // declaring function to be defined outside
        void getMarks();

};

// Function outside class
void Student::getMarks(){
    //body
}

int main(){
    Student student;
    student.id=20;
    student.isRegistered=true;
    student.getName();

    Student std;
    std.id=25;
    std.isRegistered=false;

}