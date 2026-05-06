# Native Drivers

Another way to connect to different databases in Node.js is to use the official native drivers provided by the database. 

**MongoClient**:- Official Mongo client library.

`Connect to MongoDB` - Connect to MongoDB, print 'Connected!' and close the connection.

```js
const MongoClient = require('mongodb').MongoClient;

//connection with mongoDB
MongoClient.connect('mongodb://localhost:27017/myNewDB',function (err,db) {

   //check the connection
   if(err)
      console.log("Unable to connect DB. Error: " + err)
   else
      console.log('Connected to DB');
      
   db.close();
})
```

`MongoClient method Connect()` - MongoClient.connect(url, options, callback)

- url - string - A string specifying the server ip/hostname, port and database
- options - object - (optional) Optional settings (default: null)
- callback - Function - Function to be called when the connection attempt is done

The callback function takes two arguments:-

1. err : Error - If an error occurs the err argument will be defined
2. db : object - The MongoDB instance.

`Insert a document` - Insert a document called 'myFirstDocument' and set 2 properties, greetings and farewell

```js
db.collection('myCollection').insertOne({ // Insert method 'insertOne'
"myFirstDocument": {
"greetings": "Hellu",
"farewell": "Bye"
}
});