# packages

Packages are containers for classes. They are used to keep the class name space compartmentalized.
A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer. You might keep HTML pages in one folder, images in another, and scripts or applications in yet another. Because software written in the Java programming language can be composed of hundreds or thousands of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages.

`Defining a Package`:- To create a package is quite easy: simply include a package command as the first statement in a Java source file. Any classes declared within that file will belong to the specified package.
The package statement defines a name space in which classes are stored. If you omit the package statement, the class names are put into the default package, which has no name.(This is why you haven’t had to worry about packages before now.) While the default package is fine for short, sample programs, it is inadequate for real applications.
This is the general form of the package statement:-

package pkg;

Here, pkg is the name of the package. For example, the following statement creates a package called MyPackage:

```java
package mypackage;
```

Java uses file system directories to store packages. For example, the .class files for any classes you declare to be part of MyPackage must be stored in a directory called MyPackage.
Remember that case is significant, and the directory name must match the package name exactly.

More than one file can include the same package statement. The package statement simply specifies to which package the classes defined in a file belong. It does not exclude
other classes in other files from being part of that same package. Most real-world packages are spread across many files.

You can create a hierarchy of packages. To do so, simply separate each package name from the one above it by use of a period. The general form of a multileveled package statement is shown here:

package pkg1[.pkg2[.pkg3]];

A package hierarchy must be reflected in the file system of your Java development system. For example, a package declared as

```java
package java.awt.image;
```

- *Java package is used to categorize the classes and interfaces, provides access protection and removes naming collision.*
- *The package keyword is used to create a package. Package inside the package is called the subpackage.*
- *If you import a package (package.* ), subpackages will not be imported.*
- *To import subpackage, use import package.classname.*
- *Use fully qualified name to access only the declared class of a package.*
- *Sequence of the program must be package then import then class.*
- *The standard of defining package is domain.company.package. eg - com.oracle.database*
- *There can be only one public class in a java source file and it must be saved by the public class name.*

Packages may include:   
  - java.lang :Provides classes that are fundamental to the design of the Java programming language.
  - java. util: Contains the collections framework, legacy collection classes, event model, date and time facilities, internationalization, and miscellaneous utility classes (a string tokenizer, a random-number generator, and a bit array).
  - java.awt: Contains all of the classes for creating user interfaces and for painting graphics and images.
  - java.sql: Provides the API for server side data source access and processing from the JavaTM programming language.
  - java.net: Provides classes for networking applications
  - java.io: Provides for system input and output through data streams, serialization and the file system.