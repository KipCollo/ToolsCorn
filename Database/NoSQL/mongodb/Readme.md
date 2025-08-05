# MongoDB: A NoSQL Database

MongoDB, is a popular NoSQL database that uses a document-based data model. MongoDB has been designed with flexibility, performance, and scalability in mind. With its JSON-like data format (BSON) and powerful querying capabilities, MongoDB is an excellent choice for modern applications dealing with diverse and large-scale data.

MongoDB is a database management system designed to rapidly develop web applications and internet infrastructure. The data model and persistence strategies are built for high read-and-write throughput and the ability to scale easily with automatic failover.

MongoDB’s document format is based on JSON, a popular scheme for storing arbitrary data structures. JSON is an acronym for JavaScript Object Notation.JSON structures consist of keys and values, and they can nest arbitrarily deep. They’re analogous to the dictionaries and hash maps of other programming languages.

A document-based data model can represent rich, hierarchical data structures. It’s often possible to do without the multitable joins common to relational databases.

MongoDB stores its information in documents rather than rows.

```bson
{
_id: 10,
username: 'peter',
email: [
   'pbbakkum@gmail.com',
   'pbb7c@virginia.edu'
]
}
```

A document-based data model can represent rich, hierarchical data structures.

You can run MongoDB in the following environments:

- `MongoDB Atlas`  : The fully managed service for MongoDB deployments in the cloud
- `MongoDB Enterprise`  : The subscription-based, self-managed version of MongoDB
- `MongoDB Community`  : The source-available, free-to-use, and self-managed version of MongoDB

## MongoDB’s key features

`Document data model`:-MongoDB’s data model is document-oriented.A document is essentially a set of property names and their values. The values can be simple data types, such as strings, numbers, and dates.
Internally, MongoDB stores documents in a format called Binary JSON, or BSON. BSON has a similar structure but is intended for storing many documents. When you query
MongoDB and get results back, these will be translated into an easy-to-read data structure.
MongoDB keeps its data in collections of documents, which you can think of as a group of documents.The data in a collection is stored to disk, and most queries require you to specify which collection you’d like to target.
Document-oriented data model naturally represents data in an aggregate form, allowing you to work with an object holistically: all the data representing a post, from comments to tags, can be fitted into a single database object.

`Indexes`:-Indexes in MongoDB are implemented as a B-tree data structure. B-tree indexes,also used in many relational databases, are optimized for a variety of queries, including range scans and queries with sort clauses. But WiredTiger has support for log-structured merge-trees (LSM) that’s expected to be available in the MongoDB 3.2 production release.

`Replication`:-MongoDB provides database replication via a topology known as a replica set. Replicasets distribute data across two or more machines for redundancy and automate failover in the event of server and network outages. Additionally, replication is used to scale database reads. If you have a read-intensive application, as is commonly the case on the web, it’s possible to spread database reads across machines in the replicaset cluster.

## MongoDB’s core server and tools

MongoDB is written in C++ and actively developed by MongoDB, Inc. The project compiles on all major operating systems, including Mac OS X, Windows, Solaris, and
most flavors of Linux. Precompiled binaries are available for each of these platforms at http://mongodb.org. MongoDB is open source and licensed under the GNU-Affero
General Public License (AGPL). The source code is freely available on GitHub, and contributions from the community are frequently accepted. But the project is guided
by the MongoDB, Inc. core server team, and the overwhelming majority of commits come from this group.

MongoDB v1.0 was released in November 2009. Major releases appear approximately once every three months, with even point numbers for stable branches and odd numbers for development.

`Core server`:- The core database server runs via an executable called mongod (mongodb.exe on Windows). The mongod server process receives commands over a network socket using a custom binary protocol. All the data files for a mongod process are stored by default in /data/db on Unix-like systems and in c:\data\db on Windows.

mongod can be run in several modes, such as a standalone server or a member of a replica set.When you use MongoDB’s sharding feature, you’ll also run mongod in config server mode. Finally, a separate routing server exists called mongos, which is used to send requests to the appropriate shard in this kind of setup.

Configuring a mongod process can be accomplished both with command-line arguments and with a text configuration file. Some common configurations to change are setting the port that mongod listens on and setting the directory where it stores its data. To see these configurations, you can run `mongod --help.`

`JavaScript shell`:-The MongoDB command shell is a JavaScript-based tool for administering the database and manipulating data. The mongo executable loads the shell and connects to a specified mongod process, or one running locally by default. The shell was developed to be similar to the MySQL shell; the biggest differences are that it’s based on JavaScript and SQL isn’t used.

In addition to allowing you to insert and query for data, the shell permits you to run administrative commands. Some examples include viewing the current database
operation, checking the status of replication to a secondary node, and configuring a collection for sharding.

`Database drivers`:-The driver is the code used in an application to communicate with a MongoDB server. All drivers have functionality to query, retrieve results, write data, and run database commands.

`Command-line tools`:- MongoDB is bundled with several command-line utilities:
   1. mongodump and mongorestore — Standard utilities for backing up and restoring a database. mongodump saves the database’s data in its native BSON format and
   thus is best used for backups only; this tool has the advantage of being usable for hot backups, which can easily be restored with mongorestore.
   2. mongoexport and mongoimport — Export and import JSON, CSV, and TSV7 data; this is useful if you need your data in widely supported formats. mongoimport
   can also be good for initial imports of large data sets, although before importing,it’s often desirable to adjust the data model to take best advantage of MongoDB.
   In such cases, it’s easier to import the data through one of the drivers using a custom script.
   3. mongosniff—A wire-sniffing tool for viewing operations sent to the database. It essentially translates the BSON going over the wire to human-readable shell statements.
   4. mongostat—Similar to iostat, this utility constantly polls MongoDB and the system to provide helpful stats, including the number of operations per second (inserts, queries, updates, deletes, and so on), the amount of virtual memory allocated, and the number of connections to the server.
   5. mongotop—Similar to top, this utility polls MongoDB and shows the amount of time it spends reading and writing data in each collection.
   6. mongoperf—Helps you understand the disk operations happening in a running MongoDB instance.
   7. mongooplog—Shows what’s happening in the MongoDB oplog.
   8. Bsondump—Converts BSON files into human-readable.


In terms of use cases, MongoDB is well-suited as a primary datastore for web applications, analytics and logging applications, and any application requiring a medium-
grade cache. In addition, because it easily stores schema-less data, MongoDB is also good for capturing data whose structure can’t be known in advance.
