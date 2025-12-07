# Limited to printing smthng on the console
def collo (first_name = "Collo", l_name="Rotich"):
    print(f"Hello {first_name.upper()} {l_name.upper()}")
    print("Welcome ")
    
# Printed only on console
# it prints none on console since it doesn't have a return type
collo()
collo("Blixen","Cherotich")


def greet(name):# Not limited to print something on console, you can save it as variable
    return f"Your name is {name}"

greeting = greet("coolo")

#can save it on a file
file = open("content.txt", "w")
file.write(greeting)

# Can print it on console
print(greeting)

#Keyword argument
def increment(num, by):
    return num + by

increment(4, by=4)