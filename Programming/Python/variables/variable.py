
#All primitive data types are immutable i.e new memory is allocated
age: int = 20
print(id(age))# diff memory
age = age + 1
print(id(age))#Diff memory

#Objects data types are mutable. No allocation of new memory.
courses = ["maths", "Computer", "History"]
print(id(courses))# Same memory
courses.append("Physics")
print(id(courses))#Same memory

student_count =1000 # Integer
rating = 4.99 # Float
is_published = False # Boolean
course_name = "Python" #String 'Python'
courses = """
Multiple Lines
"""
x = 1
y = 2
# x,y = 1,2 --->This is equavalent as the upper two lines
x =y =1
