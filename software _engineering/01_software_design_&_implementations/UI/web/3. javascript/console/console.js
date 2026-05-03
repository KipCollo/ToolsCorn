let users={
    fname:"collo", age:22
};

console.table(users)

console.clear()

let age= 17;
console.assert(age>=18, "Is an adult")

console.group("User details")
 console.log("Name: Collo")
 console.log("Age: 21")
console.groupEnd();
console.group("Purchase details")
 console.log("Product: laptop")
 console.log("Price: 2100")
console.groupEnd();