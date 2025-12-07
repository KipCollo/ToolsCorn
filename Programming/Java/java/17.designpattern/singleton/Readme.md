# Singleton

This pattern was previously described in GoF95.
It ensures efficient object management for your Java applications, ensuring optimal use of resources and easy access with examples and detailed explanations."
Also known as Single Instance

Ensure a Java class only has one instance, and provide a global point of access to this singleton instance.
Ensures that only one object of a particular class is ever created.

Wikipedia says:-

> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

A class that maintains its single instance nature by itself is referred to as a `Singleton class`.

Key Characteristics of Singleton:-

1. Single Instance: Only one instance of the class is created.
2. Global Access: The instance is globally accessible.
3. Lazy Initialization: The instance is created only when it is needed.
4. Thread Safety: Ensures that the singleton instance is thread-safe in multi-threaded environments.

## Programmatic Example of Singleton Pattern in Java

Joshua Bloch, Effective Java 2nd Edition p.18

> A single-element enum type is the best way to implement a singleton

```java
public enum EnumIvoryTower {
  INSTANCE
}
```

Then in order to use:

```java
    var enumIvoryTower1 = EnumIvoryTower.INSTANCE;
    var enumIvoryTower2 = EnumIvoryTower.INSTANCE;
    LOGGER.info("enumIvoryTower1={}", enumIvoryTower1);
    LOGGER.info("enumIvoryTower2={}", enumIvoryTower2);
```

The console output

```bash
enumIvoryTower1=com.iluwatar.singleton.EnumIvoryTower@1221555852
enumIvoryTower2=com.iluwatar.singleton.EnumIvoryTower@1221555852
```

Use the Singleton pattern when

1. There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point
2. When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code

Real-World Applications of Singleton Pattern in Java

- The logging class
- Configuration classes in many applications
- Connection pools
- File manager
- [java.lang.Runtime#getRuntime()](http://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#getRuntime%28%29)
- [java.awt.Desktop#getDesktop()](http://docs.oracle.com/javase/8/docs/api/java/awt/Desktop.html#getDesktop--)
- [java.lang.System#getSecurityManager()](http://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getSecurityManager--)

## Benefits and Trade-offs of Singleton Pattern

Benefits:

1. Controlled access to the single instance.
2. Reduced namespace pollution.
3. Allows refinement of operations and representation.
4. Permits a variable number of instances (more than one, if desired).
5. More flexible than class operations.

Trade-offs:

1. Difficult to test due to global state.
2. Potentially more complex lifecycle management.
3. Can introduce bottlenecks if used in a concurrent context without careful synchronization.

## Related Java Design Patterns

* [Abstract Factory](https://java-design-patterns.com/patterns/abstract-factory/): Often used to ensure a class only has one instance.
* [Factory Method](https://java-design-patterns.com/patterns/factory-method/): Singleton pattern can be implemented using a Factory Method to encapsulate the creation logic.
* [Prototype](https://java-design-patterns.com/patterns/prototype/): Avoids the need to create instances, can work alongside Singleton to manage unique instances.

Implementation of Singleton in Java:-

- `Basic Singleton (Non-Thread-Safe)`:- This is the simplest form of a singleton but is not thread-safe.

```java
public class DBConnection {

    //Private static instance of the class
    private static DBConnection connection;

    //Private constructor to prevent instantiation
    private DBConnection() {
    }

    //Public method to provide access to the instance
    public static DBConnection getInstance() {
        if (connection == null) {
            connection = new DBConnection();
        }
        return connection;
    }
}
```

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    private static Connection dbConnection;

    private DBConnection() {
    }

    public static Connection getConnection() {
            if (dbConnection == null) {
                try {
                    String url = "jdbc:postgresql://localhost:5432/security";
                    String user = "postgres";
                    String password = "postgres";

                    dbConnection= DriverManager.getConnection(url, user, password);
                    System.out.println("Connected to Database" + dbConnection);
                } catch (SQLException e) {
                    throw new RuntimeException(e);
                }
                return dbConnection;
            }
            else {
                return dbConnection;
            }
    }
}
```

Making the constructor private prevents client objects from creating objects by invoking its constructor. At the same time, other methods inside the class will have access to the private constructor.

- `Basic Singleton (Thread-Safe with Eager Initialization)` - The instance is created at the time of class loading.

```java
public class DBConnection {

    //Eagerly create the instance
    private static DBConnection connection = new DBConnection();

    //Private constructor to prevent instantiation
    private DBConnection() {
    }

    //Public method to provide access to the instance
    public static DBConnection getInstance() {
      return connection;
    }
}
```

- `Thread-Safe Singleton(Using Synchronized)`:- Ensures the singleton instance is thread-safe but may reduce performance due to synchronization.


```java
public class DBConnection {

    private static DBConnection connection;

    private DBConnection() {
    }

    public static synchronized DBConnection getInstance() {
        if (connection == null) {
            connection = new DBConnection();
        }
        return connection;
    }
}
```

- `Double-Checked Locking Singleton`:- This approach improves performance by reducing the overhead of synchronization.

```java
public class DBConnection {

    private static volatile DBConnection connection;

    private DBConnection() {
    }

    public static DBConnection getInstance() {
        if (connection == null) {
           synchronized(DBConnection.class) {
            if (connection == null){
              connection = new DBConnection();
            }
           }
        }
        return connection;
    }
}
```

- `Bill Pugh Singleton (Using Static Inner Class)`:- This is a thread-safe and efficient way to implement a singleton using a static inner class.

```java
public class Singleton{
  private Singleton(){}

  private static class SingletonHelper{
    private static final Singleton INSTANCE = new Singleton();
  }

  public static Singleton getInstance(){
    return SingletonHelper.INSTANCE;
  }
}