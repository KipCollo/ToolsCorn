class Animal:
    def __init__(self):
      self.age=2

    def eat(self):
       print("Eat")


class Mammal(Animal):
   def walk(self):
      print("Walking")

class Fish(Animal):
   def swim(self):
      print("Swimming")

tilapia = Fish()
sheep = Mammal()
print(tilapia.age)
print(tilapia.eat())
print(sheep.eat())