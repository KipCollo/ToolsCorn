# Threads & Concurrency API

All operating systems supports multithreaded processing. Multithreaded processing allows an application or group of applications to execute multiple tasks at the same time. This allows tasks waiting for other resources to give way to other processing requests.

`Parralel`:-
`Concurrency`:-
`Asynchronous`:-

Java 1.0 - Threads - Creating Thread is not optimal,you need to have pool of threads.
Java 5.0 - Executor Framework - Causes pool induced deadlocks.
Java 7.0 - ForkJoin API.
Java 8.0 - parallel streams and CompletableFuture
Java 21.0 - Virtual Threads

Multitasking - Multitasking is a process of executing multiple tasks simultaneously. We use multitasking to utilize the CPU. Multitasking can be achieved in two ways:
1) Process-based Multitasking (Multiprocessing)
2) Thread-based Multitasking (Multithreading)

## Threads

`Program`:- A program is an executable file containing a set of instructions passively stored on disk.

A `process` is a group of associated threads that execute in the same shared environment. It follows,then, that a single-­threaded process is one that contains exactly one thread, whereas a multi-threaded process supports more than one thread.
A process is a program in 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐨𝐧.
When a program is loaded into the memory and becomes active, the program becomes a process.
A process requires some essential resources such including CPU time, program counter, stack, memory, files, and I/O devices — to accomplish its task.
Program is a 𝐩𝐚𝐬𝐬𝐢𝐯𝐞 entity while process is an 𝐚𝐜𝐭𝐢𝐯𝐞 entity.One program can have 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 processes.

By shared environment, we mean that the threads in the same process share the same memory space and can communicate directly with one another.

A `thread` is the smallest unit of execution that can be scheduled by the operating system.A 𝐓𝐡𝐫𝐞𝐚𝐝 is the smallest unit of execution within a process (or) basically it is a segment of a process.
Thread is also known as lightweight process.

A `task` is a single unit of work performed by a thread. A thread can complete multiple independent tasks but only one task at a time.

- Thread Concurrency:- The property of executing multiple threads and processes at the same time is referred to as concurrency.Operating systems use a thread scheduler to determine which threads should be currently executing. For example, a thread scheduler may employ a round-­robin schedule in which each available thread receives an equal number of CPU cycles with which to execute, with threads visited in a circular order.

When a thread’s allotted time is complete but the thread has not finished processing, a context switch occurs. A context switch is the process of storing a thread’s current state and later restoring the state of the thread to continue execution. Be aware that a cost is often associated with a context switch due to lost time and having to reload a thread’s state. Intelligent thread schedulers do their best to minimize the number of context switches while keeping an application running smoothly.

Finally, a thread can interrupt or supersede another thread if it has a higher thread priority than the other thread. A thread priority is a numeric value associated with a thread that is taken into consideration by the thread scheduler when determining which threads should currently be executing. In Java, thread priorities are specified as integer values.

- **Creating a Thread**:- Thread defines public constructors for creating platform threads and the start method to schedule threads to execute. Thread may be extended for customization and other advanced reasons although most applications should have little need to do this.
Thread defines a `Thread.Builder` API for creating and starting both platform and virtual threads.

More generally, we can create a Thread and its associated task one of two ways in Java:
1. Provide a Runnable object or lambda expression to the Thread constructor.
2. Create a class that extends Thread and overrides the run() method.

`Using Runnable instance`:- One of the most common ways to define a task for a thread is by using the Runnable instance. Runnable is a functional interface that takes no arguments and returns no data.

```java
public Thread(Runnable task)
```

```java
@FunctionalInterface 
public interface Runnable {
void run();
}
```

With this, it’s easy to create and start a thread. In fact, you can do so in one line of code using the Thread class:

```java
new Thread(() -­> System.out.print("Hello")).start();
System.out.print("World");
```

The first line creates a new Thread object and then starts it with the start() method.Does this code print HelloWorld or WorldHello? The answer is that we don’t know.
Depending on the thread priority/scheduler, either is possible. Remember that order of thread execution is not often guaranteed.

```java
Runnable printInventory = () -­> System.out.println("Printing zoo inventory");
Runnable printRecords = () -­> {
   for (int i = 0; i < 3; i++)
      System.out.println("Printing record: " + i);
};

new Thread(printInventory).start();
new Thread(printRecords).start();
```

While the order of thread execution is indeterminate once the threads have been started,the order within a single thread is still linear. In particular, the for() loop is still ordered. Also, begin always appears before end.

Calling run() on a Thread or a Runnable does not start a new thread.

```java
new Thread(printInventory).run();
```


`Extending java.lang.Thread`:- The simplest way to define code to run in a separate thread is to
1. Extend the java.lang.Thread class.
2. Override the run() method.

It looks like this:

```java
class MyThread extends Thread {
   public void run() {
      System.out.println("Important job running in MyThread");
   }
}
```

The limitation with this approach (besides being a poor design choice in most cases) is that if you extend Thread, you can't extend anything else. And it's not as if you really need that inherited Thread class behavior, because in order to use a thread, you'll need to instantiate one anyway.
Keep in mind that you're free to overload the run() method in your Thread subclass:

```java
class MyThread extends Thread {
public void run() {
System.out.println("Important job running in MyThread");
}
public void run(String s) {
System.out.println("String in run is " + s);
}
}
```

**Starting a Thread**:-

**Thread Types**:-

`A system thread`- is created by the Java Virtual Machine (JVM) and runs in the background of the application. For example, garbage collection is managed by a system thread created by the JVM.
There are two threads normally running:- Main Thread and a deamon thread for garbage collections.

`user-­defined thread` is one created by the application developer to accomplish a specific task. The majority of the programs we’ve presented so far have contained only one user-­defined thread, which calls the main() method. For simplicity, we commonly refer to programs that contain only a single user-­defined thread as single-­threaded applications.

System and user-­defined threads can both be created as daemon threads. A daemon thread is one that will not prevent the JVM from exiting when the program finishes. A Java application terminates when the only threads that are running are daemon threads. For example, if garbage collection is the only thread left running, the JVM will automatically shut down.


```java
public class Zoo {

   public static void pause() { // Defines the thread task
      try {
         Thread.sleep(10_000);// Wait for 10 seconds
      } catch (InterruptedException e) {}
      System.out.println("Thread finished!");
   }

   public static void main(String[] unused) {
      var job = new Thread(() -­> pause()); // Create thread
      job.start();// Start thread
      System.out.println("Main method finished!");
} }
```

The program will output two statements roughly 10 seconds apart:
Main method finished!
-­-­-­ 10 second wait-­-­-­
Thread finished!

Even though the main() method is done, the JVM will wait for the user thread to be done before ending the program. What if we change job to be a daemon thread

```java
job.setDaemon(true);
```

The program will print the first statement and terminate without ever printing the second line.
Main method finished!

By default, user-­defined threads are not daemons, and the program will wait for them to finish.


**Managing a Thread’s Life Cycle**:- After a thread has been created, it is in one of six states(NEW,RUNNABLE,TERMINATED,BLOCKED,WAITING,TIMED_WAITING).

1. NEW(Create a Thread) - Created but not started.
2. RUNNABLE(start()) - Running or able to be run.
3. TERMINATED(run() completes) - Task complete.
4. BLOCKED - Waiting to enter synchronized block.
5. WAITING( wait(),notify()) - Waiting indefinitely to be notified.
6. TIMED_WAITING(sleep()) - Waiting a specified time.

You can query a thread’s state by calling `getState()` on the thread object.

Every thread is initialized with a NEW state. As soon as start() is called, the thread is moved to a RUNNABLE state. Does that mean it is actually running? Not exactly: it may be running, or it may not be. The RUNNABLE state just means the thread is able to be run. Once the work for the thread is completed or an uncaught exception is thrown, the thread state becomes TERMINATED, and no more work is performed.

While in a RUNNABLE state, the thread may transition to one of three states where it pauses its work: BLOCKED, WAITING, or TIMED_WAITING. This figure includes common transitions between thread states, but there are other possibilities. For example, a thread in a WAITING state might be triggered by notifyAll(). Likewise, a thread that is interrupted by another thread will exit TIMED_WAITING and go straight back into RUNNABLE.

- **Useful Methods**:-

```java
public static int activeCount()
```

Returns an estimate of the number of live platform threads in the current thread's thread group and its subgroups. Virtual threads are not included in the estimate.
The value returned is only an estimate because the number of threads may change dynamically while this method traverses internal data structures, and might be affected by the presence of certain system threads. This method is intended primarily for debugging and monitoring purposes

**Polling with Sleep**:- Even though multithreaded programming allows you to execute multiple tasks at the same time, one thread often needs to wait for the results of another thread to proceed. One solution is to use polling.
Polling is the process of intermittently checking data at some fixed interval.

```java
public class ThreadSleap {

    private static int count = 0;

    public static void main(String[] args) {

        Thread thread1 = new Thread(
                () ->{
                    for(int i=0;i < 10000; i++){
                        count++;
                        System.out.println(count);
                    }
                }
        );
        thread1.start();

        while (count < 10000){
            System.out.println("Still counting");

        }
        System.out.println("Done counting");
        System.out.println(count);
    }
}
```

We can improve this result by using the Thread.sleep() method to implement polling and sleep for some milliseconds:

```java
while (count < 10000){
   System.out.println("Still counting");
   Thread.sleep(100);

}
```

`Interrupting a Thread`:- Calling interrupt() on a thread in the TIMED_WAITING or WAITING state causes the main() thread to become RUNNABLE again, triggering an InterruptedException. The thread may also move to a BLOCKED state if it needs to reacquire resources when it wakes up.


Interrupting a thread that is not alive need not have any effect.

```java
       var mainThread = Thread.currentThread();

        Thread thread1 = new Thread(
                () ->{
                    for(int i=0;i < 10000; i++){
                        count++;
                        System.out.println(count);
                    }
                    mainThread.interrupt();
                }
        );
```

This improved version includes both sleep(), to avoid tying up the CPU, and interrupt(), so the thread’s work ends without delaying the program. As before, our main() thread’s state alternates between TIMED_WAITING and RUNNABLE.

`Join a thread`:- Tells the current thread to wait for completition of another thread.Waits for this thread to terminate.

```java
thread1.start();
thread1.join();

thread2.start();
```


--------


## Executor API

Java includes the java.util.concurrent package, which we refer to as the Concurrency API, to handle the complicated work of managing threads for you. The Concurrency API includes the `ExecutorService` interface, which defines services that create and manage threads.
Concurrency APIs provides numerous ways to manage threads.

The ExecutorService provides a higher-level replacement for manually managing threads.
Instead of creating and managing threads yourself, ExecutorService simplifies this process by offering thread pooling, task scheduling, and lifecycle management.

KEY FEATURES OF EXECUTORSERVICE:-

1. Thread Pool Management: Reuse threads to optimize performance.
2. FixedThreadPool: Uses a pool with a fixed number of threads. Ideal for predictable workloads.

You first obtain an instance of an ExecutorService interface, and then you send the service tasks to be processed. The framework includes numerous useful features, such as thread pooling and scheduling. It is recommended that you use this framework any time you need to create and execute a separate task, even if you need only a single thread.

Implementation of ExecutorService are:-

1. `ThreadPoolExecutor`:- An ExecutorService that executes each submitted task using one of possibly several pooled threads, normally configured using Executors factory methods.
Thread pools address two different problems: they usually provide improved performance when executing large numbers of asynchronous tasks, due to reduced per-task invocation overhead, and they provide a means of bounding and managing the resources, including threads, consumed when executing a collection of tasks. Each ThreadPoolExecutor also maintains some basic statistics, such as the number of completed tasks.
To be useful across a wide range of contexts, this class provides many adjustable parameters and extensibility hooks. However, programmers are urged to use the more convenient Executors factory methods *Executors.newCachedThreadPool* (unbounded thread pool, with automatic thread reclamation), *Executors.newFixedThreadPool*(fixed size thread pool) and *Executors.newSingleThreadExecutor* (single background thread), that preconfigure settings for the most common usage scenarios.
2. `ThreadPerTaskExecutor`:- An ExecutorService that starts a new thread for each task. The number of threads is unbounded.
3. `ScheduledThreadPoolExecutor`:- A ThreadPoolExecutor that can additionally schedule commands to run after a given delay, or to execute periodically. This class is preferable to java.util.Timer when multiple worker threads are needed, or when the additional flexibility or capabilities of ThreadPoolExecutor (which this class extends) are required.
4. `ForkJoinPool`:- An ExecutorService for running ForkJoinTasks. A ForkJoinPool provides the entry point for submissions from non-ForkJoinTask clients, as well as management and monitoring operations.
A ForkJoinPool differs from other kinds of ExecutorService mainly by virtue of employing work-stealing: all threads in the pool attempt to find and execute tasks submitted to the pool and/ or created by other active tasks (eventually blocking waiting for work if none exist). This enables efficient processing when most tasks spawn other subtasks (as do most ForkJoinTasks), as well as when many small tasks are submitted to the pool from external clients. Especially when setting asyncMode to true in constructors, ForkJoinPools may also be appropriate for use with event-style tasks that are never joined. All worker threads are initialized with Thread. isDaemon set true.

The implementation of ExecutorService has many paraeters in te constructor,so we use Executors factory method to create it's instance.

- **Executors**:- Factory and utility methods for Executor, ExecutorService, ScheduledExecutorService, ThreadFactory, and Callable classes defined in this package. This class supports the following kinds of methods:
1. Methods that create and return an ExecutorService set up with commonly useful configuration settings.
2. Methods that create and return a ScheduledExecutorService set up with commonly useful configuration settings.
3. Methods that create and return a "wrapped" ExecutorService, that disables reconfiguration by making implementation-specific methods inaccessible.
4. Methods that create and return a ThreadFactory that sets newly created threads to a known state.
5. Methods that create and return a Callable out of other closure-like forms, so they can be used in execution methods requiring Callable.

A thread pool is a group of pre-­instantiated reusable threads that are available to perform a set of arbitrary tasks.

Executors factory methods:-
1. public static ExecutorService newSingleThreadExecutor() - Creates single-­threaded executor that uses single worker thread operating off unbounded queue.Results are processed sequentially in order in which they are submitted.
2. public static ScheduledExecutorService newSingleThreadScheduledExecutor() - Creates single-­threaded executor that can schedule commands to run after given delay or to execute periodically.
3. Creates thread pool that creates new threads as needed but reuses previously constructed threads when they are available.
4. ExecutorService newFixedThreadPool(int nThreads) - Creates thread pool that reuses fixed number of threads operating off shared unbounded queue.
5. Creates thread pool that can schedule commands to run after given delay or execute periodically.

These methods return the same instance types, ExecutorService and ScheduledExecutorService.

The difference between a single-­thread and a pooled-­thread executor is what happens when a task is already running. While a single-­thread executor will wait for the thread to become available before running the next task, a pooled-­thread executor can execute the next task concurrently. If the pool runs out of available threads, the task will be queued by the thread executor and wait to be completed.


- **Single-­Thread Executor**:- Since ExecutorService is an interface, Concurrency API includes the Executors factory class that can be used to create instances
of the ExecutorService object.

```java
Runnable printInventory = () -­> System.out.println("Printing zoo inventory");
Runnable printRecords = () -­> {
   for (int i = 0; i < 3; i++)
      System.out.println("Printing record: " + i);
};

ExecutorService service = Executors.newSingleThreadExecutor();
try{
   service.execute(printInventory);
   service.execute(printRecords);
} finally{
   service.shutdown();
}
```

**Shutting Down a Thread Executor**:- Once you have finished using a thread executor, it is important that you call the shutdown() method. A thread executor creates a non-­daemon thread on the first task that is executed, so failing to call shutdown() will result in your application never terminating.
The shutdown process for a thread executor involves first rejecting any new tasks submitted to the thread executor while continuing to execute any previously submitted tasks.
During this time, calling isShutdown() will return true, while isTerminated() will return false. If a new task is submitted to the thread executor while it is shutting down,a RejectedExecutionException will be thrown. Once all active tasks have been completed, isShutdown() and isTerminated() will both return true.
shutdown() does not stop any tasks that have already been submitted to the thread executor.
The ExecutorService provides a method called shutdownNow(), which attempts to stop all running tasks and discards any that have not been started yet. It is not guaranteed to succeed because it is possible to create a thread that will never terminate, so any attempt to interrupt it may be ignored.

NOTE:- Resources such as thread executors should be properly closed to prevent memory leaks. Unfortunately, the ExecutorService interface does not extend the AutoCloseable interface, so you cannot use a try-­with-­resources statement. You can still use a finally block.

**Submitting Tasks**:- You can submit tasks to an ExecutorService instance multiple ways.
- The first method we presented, execute(), is inherited from the Executor interface, which the ExecutorService interface extends.The execute() method takes a Runnable instance and completes the task asynchronously. Because the return type of the method is void, it does not tell us anything about the result of the task. It is considered a “fire-­and-­forget” method, as once it is submitted, the results are not directly available to the calling thread.
- Fortunately, the writers of Java added submit() methods to the ExecutorService interface, which, like execute(), can be used to complete tasks asynchronously. Unlike execute(), though, submit() returns a Future instance that can be used to determine whether the task is complete. It can also be used to return a generic result object after the task has been completed.

Using the submit() method is quite similar to using the execute() method,except that the submit() method returns a Future instance that can be used to determine whether the task has completed execution.

```java
Runnable task1 = () -> System.out.println("Task 1");

try (ExecutorService service = Executors.newSingleThreadExecutor()) {
   service.submit(task1);
}
```

- `void execute(Runnable command)`:- Executes Runnable task at some point in future.
- `public Future<?> submit(Runnable task)`:- Executes Runnable task at some point in future and returns Future representing task.
- `public <T> Future<T> submit(Callable<T> task)`:- Executes Callable task at some point in future and returns Future representing pending results of task
- `public <T> Future<T> submit(Runnable task, T result)`:-
- `public <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks)`:- Executes given tasks and waits for all tasks to complete. Returns List of Future instances in same order in which they were in original collection.
- `public <T> T invokeAny(Collection<? extends Callable<T>> tasks)`:- Executes given tasks and waits for at least one to complete.

The submit() method has the obvious advantage of doing the same thing execute() does, but with a return object that can be used to track the result. Because of this advantage and the fact that execute() does not support Callable expressions, we tend to prefer submit() over execute(), even if we don’t store the Future reference.


**Waiting for Results**:- The submit() method returns a Future<V> instance that can be used to determine if the result is complete.

```java
Future<?> future = service.submit(() -­> System.out.println("Hello"));
```

The Future type is actually an interface.
Future is a handle to the result of an asynchronous computation submitted via Callable. It lets us:
- Retrieve Results: Access the task output when it’s ready.
- Check Status: Verify if the task is complete or canceled.
- Cancel Tasks: Terminate tasks that are no longer needed.

`Future`:- A Future represents the result of an asynchronous computation. Methods are provided to check if the computation is complete, to wait for its completion, and to retrieve the result of the computation. The result can only be retrieved using method get when the computation has completed, blocking if necessary until it is ready. Cancellation is performed by the cancel method. Additional methods are provided to determine if the task completed normally or was cancelled. Once a computation has completed, the computation cannot be cancelled. If you would like to use a Future for the sake of cancellability but not provide a usable result, you can declare types of the form Future<?> and return null as a result of the underlying task.
Future methods:-

1. boolean isDone() - Returns true if task was completed, threw exception, or was cancelled.
2. boolean isCancelled() - Returns true if task was cancelled before it completed normally.
3. boolean cancel(boolean mayInterruptIfRunning):- Attempts to cancel execution of task and returns true if it was successfully cancelled or false if it could not be cancelled or is complete.
4. V get() - Retrieves result of task, waiting endlessly if it is not yet available.
5. V get(long timeout,TimeUnit unit):- Retrieves result of task, waiting specified amount of time.If result is not ready by time timeout is reached, checked TimeoutException will be thrown.

As Future<V> is a generic interface, the type V is determined by the return type of the Runnable method. Since the return type of Runnable.run() is void, the get() method always returns null when working with Runnable expressions.
The Future.get() method can take an optional value and enum type java.util.concurrent.TimeUnit.


**Callable**:- The Callable interface, introduced in Java 5, is designed for tasks that require a result or may throw checked exceptions. It’s the evolved sibling of Runnable.
Features of Callable
- Return Value: Callable tasks return results after execution.
- Exception Handling: Supports checked exceptions in the call() method.
- Thread-Safe Execution: Works seamlessly with thread pools via ExecutorService.

The java.util.concurrent.Callable functional interface is similar to Runnable except that its call() method returns a value and can throw a checked exception. The following is the definition of the Callable interface:

```java
@FunctionalInterface public interface Callable<V> {
   V call() throws Exception;
}
```

The Callable interface is often preferable over Runnable, since it allows more details to be retrieved easily from the task after it is completed.
Unlike Runnable, in which the get() methods always return null, the get() methods on a Future instance return the matching generic type (which could also be a null value).

```java
var service = Executors.newSingleThreadExecutor();
try {
   Future<Integer> result = service.submit(() -­> 30 + 11);
   System.out.println(result.get());// 41
} finally {
   service.shutdown();
}
```

We could rewrite this example using Runnable, some shared object, and an interrupt() or timed wait, but this implementation is a lot easier to code and understand. In essence, that’s the spirit of the Concurrency API, giving you the tools to write multithreaded code that is thread-­safe, performant, and easy to follow.

**Blocking/Synchronous**:-

```java
private static void task(){
   try {
      Thread.sleep(1000);
   } catch (InterruptedException e) {
      throw new RuntimeException(e);
   }
}

public static void main(String[] args) {
   System.out.println(STR."Starting...\{Thread.currentThread().getName()}");

   var executor = Executors.newFixedThreadPool(3);
      try {
         var status = executor.submit(() ->{
            ThreadSafeDemo.task();
            return 20;
         });
      Integer result = null;
      System.out.println(status + Thread.currentThread().getName());
      result = status.get();
      System.out.println(status + Thread.currentThread().getName());
      System.out.println(result + Thread.currentThread().getName());
      } catch (InterruptedException | ExecutionException e) {
         throw new RuntimeException(e);
      } finally {
         executor.shutdown();
      }

      System.out.println("Ending..." + Thread.currentThread().getName());

    }
```


------


## Fork/Join Framework

When a task gets too complicated, we can split the task into multiple other tasks using the fork/join framework.
The fork/join framework relies on the concept of recursion to solve complex tasks.Recursion is the process by which a task calls itself to solve a problem. A recursive solution is constructed with a base case and a recursive case:
Base case: A non-recursive method that is used to terminate the recursive path.
Recursive case: A recursive method that may call itself one or multiple times to solve a problem

Applying the fork/join framework requires us to perform three steps:
1. Create a ForkJoinTask.
2. Create the ForkJoinPool.
3. Start the ForkJoinTask.

The first step is the most complex, as it requires defining the recursive process.
Fortunately, the second and third steps are easy and can each be completed with a single line of code.

The first class, RecursiveAction, is an abstract class that requires us to implement the compute() method, which returns void, to perform the bulk of the work. The second class,RecursiveTask, is an abstract generic class that requires us to implement the compute() method, which returns the generic type, to perform the bulk of the work.


----- 

## Asynchronous API

**Non-Blocking/Asychronous**:-

`CompletableFuture`:- A Future that may be explicitly completed (setting its value and status), and may be used as a CompletionStage, supporting dependent functions and actions that trigger upon its completion.When two or more threads attempt to complete, completeExceptionally, or cancel a CompletableFuture, only one of them succeeds.In addition to these and related methods for directly manipulating status and results, CompletableFuture implements interface CompletionStage

`CompletionStage<T>`:- A stage of a possibly asynchronous computation, that performs an action or computes a value when another CompletionStage completes. A stage completes upon termination of its computation, but this may in turn trigger other dependent stages.

Methods of CompletableFuture:-

1. CompletableFuture<Void> runAsync(Runnable runnable) - Returns a new CompletableFuture that is asynchronously completed by a task running in the ForkJoinPool.commonPool() after it runs the given action.
2. CompletableFuture<Void> runAsync(Runnable runnable,Executor executor):- Returns a new CompletableFuture that is asynchronously completed by a task running in the given executor after it runs the given action.
3. CompletableFuture<U> supplyAsync(Supplier<U> supplier):- Returns a new CompletableFuture that is asynchronously completed by a task running in the ForkJoinPool. commonPool() with the value obtained by calling the given Supplier.
4. CompletableFuture<U> supplyAsync(Supplier<U> supplier,Executor executor):- Returns a new CompletableFuture that is asynchronously completed by a task running in the given executor with the value obtained by calling the given Supplier.
5. CompletableFuture<Void> thenAccept(Consumer<? super T> action):- 
6. CompletableFuture<Void> thenAcceptAsync(Consumer<? super T> action):-

## Thread-­Safe

Thread-­safety is the property of an object that guarantees safe execution by multiple threads at the same time. Since threads run in a shared environment and memory space,We must organize access to data so that we don’t end up with invalid or unexpected results.

`volatile`:- The volatile keyword is used to guarantee that access to data within memory is consistent.
The volatile attribute ensures that only one thread is modifying a variable at one time and that data read among multiple threads is consistent.

```java
   private volatile int count = 0;

   private void increment() {
        System.out.println((++count)+" ");
    }
```


`Atomic Classes`:- Atomic is the property of an operation to be carried out as a single unit of execution without any interference from another thread. A thread-­safe atomic version of the increment operator would perform the read and write of the variable as a single operation, not allowing any other threads to access the variable during the operation.

Since accessing primitives and references is common in Java, the Concurrency API includes numerous useful classes in the java.util.concurrent.atomic package.

1. AtomicBoolean - A boolean value that may be updated atomically
2. AtomicInteger - An int value that may be updated atomically
3. AtomicLong - A long value that may be updated atomically

Each class includes numerous methods that are equivalent to many of the primitive built-­in operators that we use on primitives, such as the assignment operator (=) and the increment operators (++).
The type is determined by the class.

```java
   private AtomicInteger count = new AtomicInteger(0);

   private void increment() {
        System.out.println(count.incrementAndGet());
    }
```

Common atomic methods:-

- get()Retrieves current value
- set(type newValue)Sets given value, equivalent to assignment = operator
- getAndSet(type newValue)Atomically sets new value and returns old value
- incrementAndGet()For numeric classes, atomic pre-­increment operation equivalent to
- getAndIncrement()For numeric classes, atomic post-­increment operation equivalent to
- decrementAndGet()For numeric classes, atomic pre-­decrement operation equivalent to
- getAndDecrement()For numeric classes, atomic post-­decrement operation equivalent
to value-­-­

The key in this section is that using the atomic classes ensures that the data is consistent between workers and that no values are lost due to concurrent modifications.

`synchronized Blocks`:- While atomic classes are great at protecting a single variable, they aren’t particularly useful if you need to execute a series of commands or call a method.For example, we can’t use them to update two atomic variables at the same time.

The most common technique is to use a monitor to synchronize access. A monitor, also
called a lock, is a structure that supports mutual exclusion, which is the property that at
most one thread is executing a particular segment of code at a given time.
In Java, any Object can be used as a monitor, along with the synchronized keyword.

```java
var manager = new SheepManager();
synchronized(manager) {
   // Work to be completed by one thread at a time
}
```

This example is referred to as a synchronized block. Each thread that arrives will first check if any threads are already running the block. If the lock is not available, the thread will transition to a BLOCKED state until it can “acquire the lock.” If the lock is available (or the thread already holds the lock), the single thread will enter the block, preventing all other threads from entering. Once the thread finishes executing the block, it will release the lock,allowing one of the waiting threads to proceed.

To synchronize access across multiple threads, each thread must have access to the same Object. If each thread synchronizes on different objects, the code is not thread-­safe.

**Race Conditions**:- A race condition is an undesirable result that occurs when two tasks that should be completed sequentially are completed at the same time.
Multiple threads are competing or racing to modify the same data.

**Visibility problem**:- One thread changes shared data but changes are not visible to other threads.Different threads will have different view of the same data.

## Parallel Streams

A serial stream is a stream in which the results are ordered, with only one entry being processed at a time.
A `parallel stream` is a stream that is capable of processing results concurrently, using multiple threads. For example, you can use a parallel stream and the stream map() method to operate concurrently on the elements in the stream, vastly improving performance over processing a single element at a time.
Using a parallel stream can change not only the performance of your application but also the expected results.

By default, the number of threads available in a parallel stream is related to the number of available CPUs in your environment. In order to increase the thread count, you would need to create your own custom class.

**Creating Parallel Streams**:- The Streams API was designed to make creating parallel streams quite easy.

`parallel()` - The first way to create a parallel stream is from an existing stream. You just call parallel() on an existing stream to convert it to one that supports multi-threaded processing, as shown in the following code:

```java
Stream<Integer> stream = Arrays.asList(1,2,3,4,5,6).stream();
Stream<Integer> parallelStream = stream.parallel();
```

Be aware that parallel() is an intermediate operation that operates on the original stream.

`parallelStream()` - The second way to create a parallel stream is from a Java collection class. The Collection interface includes a method parallelStream() that can be called on any collection and returns a parallel stream. The following is a revised code snippet that creates the parallel stream directly from the List object:

```java
Stream<Integer> parallelStream2 = Arrays.asList(1,2,3,4,5,6).parallelStream();
```

**Ordering forEach Results**:- The Streams API includes an alternate version of the forEach() operation called forEachOrdered(), which forces a parallel stream to process the results in order at the cost of performance. For example, take a look at the following code snippet:

```java
Arrays.asList(1,2,3,4,5,6)
   .parallelStream()
   .forEachOrdered(s -> System.out.print(s+" "));
```

**Independent Operations**:- Parallel streams can improve performance because they rely on the property that many stream operations can be executed independently. By independent operations, we mean that the results of an operation on one element of a stream do not require or impact the results of another element of the stream.
Many common streams including map(), forEach(), and filter() can be processed independently, although order is never guaranteed.


-----

## Virtual Threads

Thread also supports the creation of virtual threads. Virtual threads are typically user-mode threads scheduled by the Java runtime rather than the operating system. Virtual threads will typically require few resources and a single Java virtual machine may support millions of virtual threads. Virtual threads are suitable for executing tasks that spend most of the time blocked, often waiting for I/ O operations to complete. Virtual threads are not intended for long running CPU intensive operations.

Virtual threads typically employ a small set of platform threads used as carrier threads. Locking and I/ O operations are examples of operations where a carrier thread may be re-scheduled from one virtual thread to another. Code executing in a virtual thread is not aware of the underlying carrier thread. The currentThread() method, used to obtain a reference to the current thread, will always return the Thread object for the virtual thread.

Virtual threads do not have a thread name by default. The getName method returns the empty string if a thread name is not set.
Virtual threads are daemon threads and so do not prevent the shutdown sequence from beginning. Virtual threads have a fixed thread priority that cannot be changed.


Amount of memory limits what number of Threads we are allowed to create.

                  No. of cores
No. of Threads = -------------------
                  1 - blocking factor

blocking factor is amount of time your task will not use a CPU because it is doing an IO.
For computationally intensive jobs,blocking factor equals to zero(BF = 0).For IO intensive jobs, (0 < BF < 1).

For computationally intensive jobs,no of Threads <= No. of cores.
For computationally intensive jobs with BF of 0.5, no of Threads <= 2 * No. of cores.

`Coroutines`:- A data structure that can remember your current state and restore that state when you resume execution - continuation - wehere you save your state before resuming.

