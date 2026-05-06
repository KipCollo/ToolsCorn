#if..elif..else

number= int(input("Enter a number: "))

if number <= 13:
    print(f"young age {number}")

elif number >= 18:
    print(f"Adult age {number}")

else:
    print(f"Teen age {number}")

#
if 18 <= number > 65: # Can be written as if number >= 18 and number < 65
    print("Eligable")