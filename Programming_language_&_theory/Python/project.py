#initialize an empty shopping cart as a list 
shopping_cart=[]

def add_to_cart():
    productName = input("Enter item Name..")
    productPrice = input("Enter price..")

    shopping_cart.append({"item": productName, "price": productPrice})
    print(f"{productName} added to cart.")


#display current cart contents 
def view_cart():
    print("Current Cart")
    for item in shopping_cart:
        print(f"{item['item']}: ${item['price']}")


#calculate and display total price
def total_price():
    #otal_price = sum(item["price"])
    for item in shopping_cart:
        print(f"Total Price: ${total_price}")

while True:
    print("Welcome...")
    print("1. Add to cart")
    print("2. View Cart")
    print("3. Total amont")
    print("0. Exit")

    choice = input()

    if(choice == 1):
        add_to_cart()
    elif(choice == 2):
        view_cart()
    elif(choice == 3):
        total_price()
    elif(choice == 0):
        break
    else:
        print("Invalid,Try Again!")
        continue