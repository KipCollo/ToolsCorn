# Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

It is built on top of MongoClient library.


- Connecting to Database

Install mongoose library

```bash
npm install mongoose
```

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb:127.0.0.1:27017/dbName")//connect method returns a promise
        .then(()=>console.log("Connected.."))
        .catch(err=>console.error(err))
```

- Defining schemas.Schema defines the shape of documents within collection in db.Its specifi in mongoose and it's not available in mongoDB.Schem class takes objects.Schema can take Strings,Number,Boolean,Date,Buffer(store binary),array,ObjectID(assigning unique numbers)

```js

const studentSchema = new mongoose.Schema({
    name:String,
    age:number
})
```

TODO Understand what is a model

- Models: Schema is compiled into a model.The model maps to Document in MongoDB.

```js
const Student= mongoose.model("Student",studentSchema);
const std1=new Student({
    name:"Collins",
    age:21
})
```

- Saving Data to Database.We use save method of model object.The save method is asynchronous i.e the result of the operation will be ready in the future.It returns asved object with the unique id generated b MongoDB.

```js
const result=await std1.save()
```

Note: When using await, the code should be in async function.

- Retrieving Data from Databse.You use the querying methods in Model class.You can perform several operations of returned data from table i.e sorting,limit

```js
Student.find()//Returns a promise
```