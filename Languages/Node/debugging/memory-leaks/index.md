# Memory Leaks

Memory leaks are caused when your Node.js app’s CPU and memory usage increases over time for no apparent reason. In simple terms, a Node.js memory leak is an orphan block of memory on the Heap that is no longer used by your app because it has not been released by the garbage collector. It’s a useless block of memory. These blocks can grow over time and lead to your app crashing because it runs out of memory.

## Garbage Collection

Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory. The main concept of memory management in JavaScript is reachability.