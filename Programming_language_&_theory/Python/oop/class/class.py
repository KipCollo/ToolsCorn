class Shape:
    shape_name='circle'

    def __init__(self,radius):
        self.radius =radius
        self.height =2

    def setRadius(self,radius):
        self.radius=radius

    def show(self):
        print(f"The height is {self.height} and radius is {self.radius}")

    def __eq__(self, other):
        return self.radius == other.radius

circle = Shape(27)
circle2 = Shape(4)

circle.setRadius(3)
circle2.setRadius(3)
circle.show()

print(circle == circle2)
print(circle.radius)
print(circle.__dict__)