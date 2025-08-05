# Redis

Redis is an open source(BSD licensed), in-memory data structure store used as a database,cache,message broker and streaming engine.
Redis, an in-memory database/data structure server, originally written by Salvatore Sanfilippo, but recently patched through the open source process.

Redis is an in-memory remote database that offers high performance, replication, and a unique data model to produce a platform for solving problems. By supporting five different types of data structures.

Redis is a very fast non-relational database that stores a mapping of keys to five different types of values. Redis supports in-memory persistent storage on disk, replication to scale read performance, and client-side sharding 1 to scale write performance.

Redis has two different forms of persistence available for writing in-memory data to disk in a compact format.
The first method is a point-in-time dump either when certain conditions are met (a number of writes in a given period) or when one of the two dump-to-disk commands is called.
The other method uses an append-only file that writes every command that alters data in Redis to disk as it happens.


Redis allows us to store keys that map to any one of five different data structure types; STRINGs, LISTs, SETs, HASHes, and ZSETs. Each of the five different structures have some shared commands (DEL, TYPE, RENAME, and others), as well as some commands that can only be used by one or two of the structures.

1. STRING - Strings, integers, or floating-point values - Operate on the whole string, parts, increment/decrement the integers and floats
2. LIST - Linked list of strings - Push or pop items from both ends, trim based on offsets, read individual or multiple items, find or remove items by value
3. SET - Unordered collection of unique strings - Add, fetch, or remove individual items, check membership, intersect, union, difference, fetch random items
4. HASH - Unordered hash table of keys to values - Add, fetch, or remove individual items, fetch the whole hash
5. ZSET (sorted set)Ordered mapping of string members to floating-point scores, ordered by score - Add, fetch, or remove individual values, fetch items based on score ranges or member value


**Strings in Redis**:- In Redis, STRINGs are similar to strings that we see in other languages or other key-value stores.
The operations available to STRINGs start with what’s available in other key-value stores. We can GET values, SET values, and DEL values.

1. GET - Fetches the data stored at the given key.
2. SET - Sets the value stored at the given key.
3. DEL - Deletes the value stored at the given key (works for all types).

```bash
──(collins㉿kali)-[~]
└─$ redis-cli
127.0.0.1:6379> SET name Collins
OK
127.0.0.1:6379> GET name
"Collins"
127.0.0.1:6379> SET name "Collins"
OK
127.0.0.1:6379> GET name
"Collins"
127.0.0.1:6379> DEL name
(integer) 1
127.0.0.1:6379> GET name
(nil)
127.0.0.1:6379> 
```

In addition to being able to GET, SET, and DEL STRING values, there are a handful of other commands for reading and writing parts of STRINGs, and commands that allow
us to treat strings as numbers to increment/decrement them.


**Lists in Redis**:- LISTs in Redis store an ordered sequence of strings.
The operations that can be performed on LISTs are typical of what we find in almost any programming language.We can push items to the front and the back of the LIST with LPUSH/RPUSH; we can pop items from the front and back of the list with LPOP/RPOP; we can fetch an item at a given position with LINDEX; and we can fetch a range of items with LRANGE.

1. RPUSH - Pushes the value onto the right end of the list
2. LRANGE - Fetches a range of values from the list
3. LINDEX - Fetches an item at a given position in the list
4. LPOP - Pops the value from the left end of the list and returns it

```bash
127.0.0.1:6379> RPUSH list-key item1
(integer) 1
127.0.0.1:6379> RPUSH list-key item2
(integer) 2
127.0.0.1:6379> RPUSH list-key item3
(integer) 3
127.0.0.1:6379> LRANGE list-key 0 -1
1) "item1"
2) "item2"
3) "item3"
127.0.0.1:6379> LRANGE list-key 0 
(error) ERR wrong number of arguments for 'lrange' command
127.0.0.1:6379> LINDEX list-key 0 
"item1"
127.0.0.1:6379> LPOP list-key 
"item1"
127.0.0.1:6379> LRANGE list-key 0 -1
1) "item2"
2) "item3"
127.0.0.1:6379> 
```

We can also remove items, insert items in the middle, trim the list to be a particular size (discarding items from one or both ends), and more.

**Sets in Redis**:- In Redis, SETs are similar to LISTs in that they’re a sequence of strings, but unlike LISTs, Redis SETs use a hash table to keep all strings unique (though there are no associated values).
Because Redis SETs are unordered,we can’t push and pop items from the ends like we did with LISTs. Instead, we add and remove items by value with the SADD and SREM commands. We can also find out whether an item is in the SET quickly with SISMEMBER, or fetch the entire set with SMEMBERS (this can be slow for large SETs, so be careful).

1. SADD - Adds the item to the set
2. SMEMBERS - Returns the entire set of items
3. SISMEMBER - Checks if an item is in the set
4. SREM - Removes the item from the set, if it exists

```bash
127.0.0.1:6379> SADD set-key item1
(integer) 1
127.0.0.1:6379> SADD set-key item2
(integer) 1
127.0.0.1:6379> SADD set-key item3
(integer) 1
127.0.0.1:6379> SADD set-key item1
(integer) 0
127.0.0.1:6379> SMEMBERS set-key
1) "item1"
2) "item2"
3) "item3"
127.0.0.1:6379> SISMEMBER set-key item4
(integer) 0
127.0.0.1:6379> SISMEMBER set-key item1
(integer) 1
127.0.0.1:6379> SREM set-key item2
(integer) 1
127.0.0.1:6379> SREM set-key item2
(integer) 0
127.0.0.1:6379> SMEMBERS set-key
1) "item1"
2) "item3"
127.0.0.1:6379> 
```

Three commonly used operations with SETs include intersection, union, and difference (SINTER, SUNION, and SDIFF, respectively).

**Hashes in Redis**:- Redis HASHes store a mapping of keys to values. The values that can be stored in HASHes are the same as what can be stored as normal STRINGs:
strings themselves, or if a value can be interpreted as a number, that value can be incremented or decremented.
In a lot of ways, we can think of HASHes in Redis as miniature versions of Redis itself.
Some of the same commands that we can perform on STRINGs, we can perform on the values inside HASHes with slightly different commands.

1. HSET - Stores the value at the key in the hash
2. HGET - Fetches the value at the given hash key
3. HGETALL - Fetches the entire hash
4. HDEL - Removes a key from the hash, if it exists

```bash
127.0.0.1:6379> HSET hash-key sub-key1 value1
(integer) 1
127.0.0.1:6379> HSET hash-key sub-key2 value2
(integer) 1
127.0.0.1:6379> HSET hash-key sub-key1 value1
(integer) 0
127.0.0.1:6379> HGETALL hash-key
1) "sub-key1"
2) "value1"
3) "sub-key2"
4) "value2"
127.0.0.1:6379> HDEL hash-key sub-key1
(integer) 1
127.0.0.1:6379> HDEL hash-key sub-key1
(integer) 0
127.0.0.1:6379> HGETALL hash-key sub-key2
(error) ERR wrong number of arguments for 'hgetall' command
127.0.0.1:6379> HGET hash-key sub-key2
"value2"
127.0.0.1:6379> HGETALL hash-key
1) "sub-key2"
2) "value2"
127.0.0.1:6379> 
```

We can consider a Redis HASH as being similar to a document in a document store, or a row in a relational database, in that we can access or change individual or multiple fields at a time.

**Sorted sets in Redis**:- Like Redis HASHes, ZSETs also hold a type of key and value. The keys (called members) are unique, and the values (called scores) are limited to floating-point numbers. ZSETs have the unique property in Redis of being able to be accessed by member (like a HASH), but items can also be accessed by the sorted order and values of the scores.

1. ZADD - Adds member with the given score to the ZSET
2. ZRANGE - Fetches the items in the ZSET from their positions in sorted order
3. ZRANGEBYSCORE - Fetches items in the ZSET based on a range of scores
4. ZREM - Removes the item from the ZSET, if it exists

```bash
127.0.0.1:6379> ZADD zset-key 2 member1
(integer) 1
127.0.0.1:6379> ZADD zset-key 4 member0
(integer) 1
127.0.0.1:6379> ZADD zset-key 4 member0
(integer) 0
127.0.0.1:6379> ZRANGE zset-key 0 -1 WITHSCORES
1) "member1"
2) "2"
3) "member0"
4) "4"
127.0.0.1:6379> ZRANGEBYSCORE zset-key 0 3 WITHSCORES
1) "member1"
2) "2"
127.0.0.1:6379> ZREM zset-key member1
(integer) 1
127.0.0.1:6379> ZREM zset-key member1
(integer) 0
127.0.0.1:6379> ZRANGE zset-key 0 -1 WITHSCORES
1) "member0"
2) "4"
127.0.0.1:6379> 
```

