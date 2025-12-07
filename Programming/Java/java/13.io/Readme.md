# I/O

We use I/O (input/output) and NIO.2 (non-­blocking I/O) APIs to interact with files and I/O streams. The preferred approach for working with files and directories with newer software applications is to use NIO.2 rather than I/O where possible.

Java IO is an API that comes with java which is targeted at reading and writing data(input and output).The java.io package contains all classes required for input and output opertations.Most apps need to process some input and produce some output based on input.Eg read data from file or internet,and write to a file or write response back over the internet.

Java performs I/O through streams.A stream is linked to a physical layer by java I/O system to make input and output operation in java.A stream is a sequence of data.In java stream is composed of bytes.Streams support of diff kinds of data including simple bytes,primitive data types,localized characters and objects.

NIO stands for non-­blocking input/output API and is sometimes referred to as new I/O.

## Conceptualizing the File System

Data is stored on persistent storage devices, such as hard disk drives and memory cards. A `file` within the storage device holds data. Files are organized into hierarchies using directories. A `directory` is a location that can contain files as well as other directories.

When working with directories in Java, we often treat them like files. We use many of the same classes and interfaces to operate on files and directories.For example, a file and directory both can be renamed with the same Java method.

To interact with files, we need to connect to the file system. The `file system` is in charge of reading and writing data within a computer. Different operating systems use different file systems to manage their data. For example, Windows-­based systems use a different file system than Unix-­based ones.

The JVM will automatically connect to the local file system, allowing you to perform the same operations across multiple platforms.

The `root directory `is the topmost directory in the file system, from which all files and directories inherit. In Windows, it is denoted with a drive letter such as C:\, while on Linux, it is denoted with a single forward slash, /.

A `path `is a representation of a file or directory within a file system. Each file system defines its own path separator character that is used between directory entries. The value to the left of a separator is the parent of the value to the right of the separator. For example, the path value /user/home/zoo.txt means that the file zoo.txt is inside the home directory, with the home directory inside the user directory.

NOTE:- Different operating systems vary in their format of pathnames. For example, Unix-­based systems use the forward slash, /, for paths, whereas Windows-­based systems use the backslash, \, character. That said, many programming languages and file systems support both types of slashes when writing path statements. Java offers a system property to retrieve the local separator character for the current environment:

```java
System.out.print(System.getProperty("file.separator"));
```

- The absolute path of a file or directory is the full path from the root directory to the file or directory, including all subdirectories that contain the file or directory.
- The relative path of a file or directory is the path from the current working directory to the file or directory.

Absolute and relative paths can contain path symbols. A path symbol is one of a reserved series of characters with special meaning in some file systems.

- . A reference to the current directory
- .. A reference to the parent of the current directory

A symbolic link is a special file within a file system that serves as a reference or pointer to another file or directory.In general, symbolic links are transparent to the user, as the operating system takes care of resolving the reference to the actual file. While the I/O APIs do not support symbolic links, NIO.2 includes full support for creating, detecting, and navigating symbolic links within the file system.

## Creating a File or Path

In order to do anything useful, you first need an object that represents the path to a particular file or directory on the file system. Using legacy I/O, this is the java.io.File class, whereas with NIO.2, it is the java.nio.file.Path interface.

The File class and Path interface cannot read or write data within a file, although they are passed as a reference to other classes.

A File or Path can represent a file or a directory.

- Creating a File:- The File class is created by calling its constructor. This code shows three different constructors:

```java
File zooFile1 = new File("/home/tiger/data/stripes.txt");
File zooFile2 = new File("/home/tiger", "data/stripes.txt");
File parent = new File("/home/tiger");
File zooFile3 = new File(parent, "data/stripes.txt");
```

All three create a File object that points to the same location on disk. If we passed null as the parent to the final constructor, it would be ignored, and the method would behave the same way as the single String constructor

- Creating a Path:- Since Path is an interface, we can’t create an instance directly. After all, interfaces don’t have constructors! Java provides a number of classes and methods that you can use to obtain Path objects.

The simplest and most straightforward way to obtain a Path object is to use a static factory method defined on Path or Paths. All four of these examples point to the same reference on disk:

```java
Path zooPath1 = Path.of("/home/tiger/data/stripes.txt");
Path zooPath2 = Path.of("/home", "tiger", "data", "stripes.txt");
Path zooPath3 = Paths.get("/home/tiger/data/stripes.txt");
Path zooPath4 = Paths.get("/home", "tiger", "data", "stripes.txt");
System.out.println(Files.exists(zooPath1));
```

The Path.of() method was introduced in Java 11 as a static method on the interface. The Paths factory class also provides a get() method to do the same thing. Note the s at the end of the Paths class to distinguish it from the Path interface.

NOTE:- You might notice that both the I/O and NIO.2 classes can interact with a URI. A uniform resource identifier (URI) is a string of characters that identifies a resource. It begins with a schema that indicates the resource type, followed by a path value such as file:// for local file systems and http://, https://, and ftp:// for remote file systems.

Since File and Path both reference locations on disk, it is helpful to be able to convert between them. Luckily, Java makes this easy by providing methods to do just that:

```java
File file = new File("rabbit");
Path nowPath = file.toPath();
File backToFile = nowPath.toFile();
```

Many older libraries use File, making it convenient to be able to get a File from a Path and vice versa. When working with newer applications, you should rely on NIO.2’s
Path interface, as it contains a lot more features. For example, only NIO.2 provides FileSystem support.

NIO.2 makes extensive use of creating objects with factory classes. The FileSystems class creates instances of the abstract FileSystem class. The latter includes methods for working with the file system directly. Both Paths.get() and Path.of() are shortcuts for this FileSystem method. Let’s rewrite our earlier examples one more time to see how to obtain a Path instance the long way:

```java
Path zooPath1 = FileSystems.getDefault().getPath("/home/tiger/data/stripes.txt");
Path zooPath2 = FileSystems.getDefault().getPath("/home", "tiger", "data", "stripes.txt");
```

The model for I/O is smaller, and you only need to understand the File class. In contrast,NIO.2 has more features and makes extensive use of the factory pattern. You should become comfortable with this approach. Many of your interactions with NIO.2 will require two types: an abstract class or interface and a factory or helper class.

NOTE:- The java.io.File is the I/O class, while Files is an NIO.2 helper class.Files operates on Path instances, not java.io.File instances. We know this is confusing, but they are from completely different APIs!

## Operating on File and Path

## Creating, Moving, and Deleting Files and Directories

## NIO

`FileSystem`:- Provides an interface to a file system and is the factory for objects to access files and other objects in the file system.
The default file system, obtained by invoking the FileSystems. getDefault method, provides access to the file system that is accessible to the Java virtual machine. The FileSystems class defines methods to create file systems that provide access to other types of (custom) file systems.

A FileSystem can provide read-only or read-write access to the file system. Whether or not a file system provides read-only access is established when the FileSystem is created and can be tested by invoking its isReadOnly method. Attempts to write to file stores by means of an object associated with a read-only file system throws ReadOnlyFileSystemException.

**FileSystems**:- Factory methods for file systems. This class defines the getDefault method to get the default file system and factory methods to construct other types of file systems.The first invocation of any of the methods defined by this class causes the default provider to be loaded. The default provider, identified by the URI scheme "file", creates the FileSystem that provides access to the file systems accessible to the Java virtual machine. If the process of loading or initializing the default provider fails then an unspecified error is thrown.

- 

```java
public static FileSystem getDefault()
```

Returns the default FileSystem. The default file system creates objects that provide access to the file systems accessible to the Java virtual machine. The working directory of the file system is the current user directory, named by the system property user. dir. This allows for interoperability with the java. io. File class.

- 

```java
public static FileSystem getFileSystem(URI uri)
```

Returns a reference to an existing FileSystem.
This method iterates over the installed providers to locate the provider that is identified by the URI scheme of the given URI. URI schemes are compared without regard to case. The exact form of the URI is highly provider dependent. If found, the provider's getFileSystem method is invoked to obtain a reference to the FileSystem.


**Files**:- This class consists exclusively of static methods that operate on files, directories, or other types of files.In most cases, the methods defined here will delegate to the associated file system provider to perform the file operations.

- `Making Directories`:- To create a directory, we use these Files methods:

```java
public static Path createDirectory(Path dir,FileAttribute<?>... attrs) throws IOException
public static Path createDirectories(Path dir,FileAttribute<?>... attrs) throws IOException
```

The createDirectory() method will create a directory and throw an exception if it already exists or if the paths leading up to the directory do not exist.
The createDirectories() method creates the target directory along with any nonexistent parent directories leading up to the path. If all of the directories already exist,
createDirectories() will simply complete without doing anything. This is useful in situations where you want to ensure a directory exists and create it if it does not.

Both of these methods also accept an optional list of FileAttribute<?> values to apply to the newly created directory or directories.

The following shows how to create directories:

```java
Files.createDirectory(Path.of("/bison/field"));
Files.createDirectories(Path.of("/bison/field/pasture/green"));
```

The first example creates a new directory, field, in the directory /bison, assuming /bison exists; otherwise, an exception is thrown. Contrast this with the second example,
which creates the directory green along with any of the following parent directories if they do not already exist, including bison, field, and pasture.


- `Creating a file`:-

```java
public static Path createFile(Path path, FileAttribute<?>... attrs) throws IOException
```

Creates a new and empty file, failing if the file already exists. The check for the existence of the file and the creation of the new file if it does not exist are a single operation that is atomic with respect to all other filesystem activities that might affect the directory.


- `Copying Files`:- The Files class provides a method for copying files and directories within the file system.

```java
public static Path copy(Path source, Path target,CopyOption... options) throws IOException
```

This method copies a file to the target file with the options parameter specifying how the copy is performed. By default, the copy fails if the target file already exists or is a symbolic link, except if the source and target are the same file, in which case the method completes without copying the file. File attributes are not required to be copied to the target file. If symbolic links are supported, and the file is a symbolic link, then the final target of the link is copied. If the file is a directory then an empty directory is created in the target location (entries in the directory are not copied).

The options parameter may include any of the following:
1.  REPLACE_EXISTING - Replace an existing file. A non-empty directory cannot be replaced. If the target file exists and is a symbolic link, then the symbolic link itself, not the target of the link, is replaced.
2. COPY_ATTRIBUTES - Attempts to copy the file attributes associated with this file to the target file. The exact file attributes that are copied is platform and file system dependent and therefore unspecified. Minimally, the last-modified-time is copied to the target file if supported by both the source and target file stores. Copying of file timestamps may result in precision loss.
3. NOFOLLOW_LINKS - Symbolic links are not followed. If the file is a symbolic link, then the symbolic link itself, not the target of the link, is copied. It is implementation specific if file attributes can be copied to the new link. In other words, the COPY_ATTRIBUTES option may be ignored when copying a symbolic link.

The method copies a file or directory from one location to another using Path objects.
The following shows an example of copying a file and a directory:

```java
Files.copy(Paths.get("/panda/bamboo.txt"),Paths.get("/pandasave/bamboo.txt"),StandardCopyOption.REPLACE_EXISTING);
Files.copy(Paths.get("/turtle"), Paths.get("/turtleCopy"));
```

When directories are copied, the copy is shallow. A shallow copy means that the files and subdirectories within the directory are not copied. A deep copy means that the entire tree is copied, including all of its content and subdirectories. A deep copy typically requires recursion, where a method calls itself.

```java
public void copyPath(Path source, Path target) {
   try {
      Files.copy(source, target);
         if(Files.isDirectory(source))
            try (Stream<Path> s = Files.list(source)) {
               s.forEach(p -­> copyPath(p,target.resolve(p.getFileName())));
               }
            } catch(IOException e) {
         // Handle exception
            }
   } catch(IOException e) {
// Handle exception
}
```

The method first copies the path, whether a file or a directory. If it is a directory, only a shallow copy is performed. Next, it checks whether the path is a directory and, if it is, performs a recursive copy of each of its elements. What if the method comes across a symbolic
link? Don’t worry: the JVM will not follow symbolic links when using the list() method.

The method first copies the path, whether a file or a directory. If it is a directory, only a
shallow copy is performed. Next, it checks whether the path is a directory and, if it is, per-
forms a recursive copy of each of its elements. What if the method comes across a symbolic
link? Don’t worry: the JVM will not follow symbolic links when using the list() method.
Copying and Replacing Files
By default, if the target already exists, the copy() method will throw an exception.
You can change this behavior by providing the StandardCopyOption enum value
REPLACE_EXISTING to the method. The following method call will overwrite the
movie.txt file if it already exists:
Files.copy(Paths.get("book.txt"), Paths.get("movie.txt"),
StandardCopyOption.REPLACE_EXISTING);
For the exam, you need to know that without the REPLACE_EXISTING option, this
method will throw an exception if the file already exists.
Copying Files with I/O Streams
The Files class includes two copy() methods that operate with I/O streams.
public static long copy(InputStream in, Path target,
CopyOption... options) throws IOException
public static long copy(Path source, OutputStream out)
throws IOException
The first method reads the contents of an I/O stream and writes the output to a file. The
second method reads the contents of a file and writes the output to an I/O stream. These
methods are quite convenient if you need to quickly read/write data from/to disk.
The following are examples of each copy() method:
try (var is = new FileInputStream("source-­
data.txt")) {
// Write I/O stream data to a file
Files.copy(is, Paths.get("/mammals/wolf.txt"));
}
Files.copy(Paths.get("/fish/clown.xsl"), System.out);
While we used FileInputStream in the first example, the I/O stream could have been
any valid I/O stream including website connections, in-­memory stream resources, and so
forth. The second example prints the contents of a file directly to the System.out stream.

## java.io

package java.io: Provides for system input and output through data streams, serialization and the file system. Unless otherwise noted, passing a null argument to a constructor or method in any class or interface in this package will cause a NullPointerException to be thrown. A pathname string passed as a String argument to a constructor or method in any class or interface in this package will be interpreted as described in the class specification of File.

Java IO is an API that comes with Java which is targeted at reading and writing data(input & output).The java.io package contains all classes required for input and output operations.Most app need to process some input and produce some output based on that input.e.g read data from a file or over network.

Provides for system input and output through data streams, serialization and the file system. Unless otherwise noted, passing a null argument to a constructor or method in any class or interface in this package will cause a NullPointerException to be thrown.

Java uses the concept of a stream to make I/O operation fast.The stream in the java.io package supports many data such as primitives, Object, localized characters, etc.A stream can be defined as a sequence of data. The InputStream is used to read data from a source and the OutputStream is used for writing data to a destination.

## Stream

A stream is a sequence of data. In Java, a stream is composed of bytes. It's called a stream because it is like a stream of water that continues to flow.Stream supports diff types of data including primitive data types,localized characters and objects.

In Java, 3 streams are created for us automatically. All these streams are attached with the console.

1) System.out: standard output stream
2) System.in: standard input stream  
3) System.err: standard error stream

Java application uses an input stream to read data from source ,it may be a file,memory arrays,peripheral device or socket.

Java application uses an output stream to read data to destination,it may be a file,memory arrays,peripheral device or socket.

### Java InputStream class

Java uses byte streams to perform input and output of 8-bit bytes.All input byte stream classes are descended from **IputStream**.InputStream class is an abstract class.Is superclass of all class rep input stream of bytes.

1. AudioInputStream
2. ByteArrayInputStream
3. FileInputStream
4. FilterInputStream
5. ObjectInputStream
6. PipedinputStream
7. SequenceInputStream
8. StringBufferinputStream

### Java OutputStream class

Java uses byte streams to perform input and output of 8-bit bytes.All input byte stream classes are descended from **OutputStream**.OutputStream class is an abstract class.Is superclass of all class rep output stream of bytes.

1. ByteArrayoutputStream
2. FileOutputStream
3. FilterOutputStream
4. ObjectOutputStream
5. PipedOutputStream

#### Class FileOutputStream

A file output stream is an output stream for writing data to a File or to a FileDescriptor. Whether or not a file is available or may be created depends upon the underlying platform. Some platforms, in particular, allow a file to be opened for writing by only one FileOutputStream (or other file-writing object) at a time. In such situations the constructors in this class will fail if the file involved is already open.

FileOutputStream is meant for writing streams of raw bytes such as image data. For writing streams of characters, consider using FileWriter.

Note:

The close() method should be called to release resources used by this stream, either directly, or with the try-with-resources statement.

##### Constructors

1. FileOutputStream(File file) - Creates a file output stream to write to the file represented by the specified File object.
2. FileOutputStream(FileDescriptor fdObj) - Creates a file output stream to write to the specified file descriptor, which represents an existing connection to an actual file in the file system.
3. FileOutputStream(File file, boolean append) - Creates a file output stream to write to the file represented by the specified File object.
4. FileOutputStream(String name) - Creates a file output stream to write to the file with the specified name.
5. FileOutputStream(String name, boolean append) - Creates a file output stream to write to the file with the specified name.

##### Methods

1. void close() - Closes this file output stream and releases any system resources associated with this stream.
2. FileChannel getChannel() - Returns the unique FileChannel object associated with this file output stream.
3. final FileDescriptor getFD() - Returns the file descriptor associated with this stream.
4. void write(byte[] b) - Writes b.length bytes from the specified byte array to this file output stream.
5. void write(byte[] b, int off, int len) - Writes len bytes from the specified byte array starting at offset off to this file output stream.
6. void write(int b) - Writes the specified byte to this file output stream.

## File Navigation and I/O

There are several other classes that we would be going through to get to know the basics of File Navigation and I/O .

1. File Class
2. FileReader Class
3. FileWriter Class

- **File Class** :An abstract representation of file and directory pathnames. Java File class represents the files and directory pathnames in an abstract manner. This class is used for creation of files and directories, file searching, file deletion etc.

```java
public class File extends Object implements Serializable, Comparable<File>
```

User interfaces and operating systems use system-dependent pathname strings to name files and directories. This class presents an abstract, system-independent view of hierarchical pathnames. An abstract pathname has two components:

An optional system-dependent prefix string, such as a disk-drive specifier, "/" for the UNIX root directory, or "\\\\" for a Microsoft Windows UNC pathname, and
A sequence of zero or more string names.
The first name in an abstract pathname may be a directory name or, in the case of Microsoft Windows UNC pathnames, a hostname. Each subsequent name in an abstract pathname denotes a directory; the last name may denote either a directory or a file. The empty abstract pathname has no prefix and an empty name sequence.

The first name in an abstract pathname may be a directory name or, in the case of Microsoft Windows UNC pathnames, a hostname. Each subsequent name in an abstract pathname denotes a directory; the last name may denote either a directory or a file. The empty abstract pathname has no prefix and an empty name sequence.
The conversion of a pathname string to or from an abstract pathname is inherently system-dependent. When an abstract pathname is converted into a pathname string, each name is separated from the next by a single copy of the default separator character. The default name-separator character is defined by the system property file.separator, and is made available in the public static fields separator and separatorChar of this class. When a pathname string is converted into an abstract pathname, the names within it may be separated by the default name-separator character or by any other name-separator character that is supported by the underlying system.

A pathname, whether abstract or in string form, may be either absolute or relative. An absolute pathname is complete in that no other information is required in order to locate the file that it denotes. A relative pathname, in contrast, must be interpreted in terms of information taken from some other pathname. By default the classes in the java.io package always resolve relative pathnames against the current user directory. This directory is named by the system property user.dir, and is typically the directory in which the Java virtual machine was invoked.

The parent of an abstract pathname may be obtained by invoking the getParent() method of this class and consists of the pathname's prefix and each name in the pathname's name sequence except for the last. Each directory's absolute pathname is an ancestor of any File object with an absolute abstract pathname which begins with the directory's absolute pathname. For example, the directory denoted by the abstract pathname "/usr" is an ancestor of the directory denoted by the pathname "/usr/local/bin".

The prefix concept is used to handle root directories on UNIX platforms, and drive specifiers, root directories and UNC pathnames on Microsoft Windows platforms, as follows:

For UNIX platforms, the prefix of an absolute pathname is always "/". Relative pathnames have no prefix. The abstract pathname denoting the root directory has the prefix "/" and an empty name sequence.
For Microsoft Windows platforms, the prefix of a pathname that contains a drive specifier consists of the drive letter followed by ":" and possibly followed by "\\" if the pathname is absolute. The prefix of a UNC pathname is "\\\\"; the hostname and the share name are the first two names in the name sequence. A relative pathname that does not specify a drive has no prefix.
Instances of this class may or may not denote an actual file-system object such as a file or a directory. If it does denote such an object then that object resides in a partition. A partition is an operating system-specific portion of storage for a file system. A single storage device (e.g. a physical disk-drive, flash memory, CD-ROM) may contain multiple partitions. The object, if any, will reside on the partition named by some ancestor of the absolute form of this pathname.

A file system may implement restrictions to certain operations on the actual file-system object, such as reading, writing, and executing. These restrictions are collectively known as access permissions. The file system may have multiple sets of access permissions on a single object. For example, one set may apply to the object's owner, and another may apply to all other users. The access permissions on an object may cause some methods in this class to fail.

Instances of the File class are immutable; that is, once created, the abstract pathname represented by a File object will never change.

Interoperability with java.nio.file package: The java.nio.file package defines interfaces and classes for the Java virtual machine to access files, file attributes, and file systems. This API may be used to overcome many of the limitations of the java.io.File class. The toPath method may be used to obtain a Path that uses the abstract path represented by a File object to locate a file. The resulting Path may be used with the Files class to provide more efficient and extensive access to additional file operations, file attributes, and I/O exceptions to help diagnose errors when an operation on a file fails.

The File object represents the actual file/directory on the disk. There are following constructors to create a File object:

File(File parent, String child);- Following syntax creates a new File instance by converting the given pathname string into an abstract pathname.Creates a new File instance from a parent abstract pathname and a child pathname string.

If parent is null then the new File instance is created as if by invoking the single-argument File constructor on the given child pathname string.
Otherwise the parent abstract pathname is taken to denote a directory, and the child pathname string is taken to denote either a directory or a file. If the child pathname string is absolute then it is converted into a relative pathname in a system-dependent way. If parent is the empty abstract pathname then the new File instance is created by converting child into an abstract pathname and resolving the result against a system-dependent default directory. Otherwise each pathname string is converted into an abstract pathname and the child abstract pathname is resolved against the parent.

File(String pathname) - Following syntax creates a new File instance from a parent pathname string and a child pathname string.Creates a new File instance by converting the given pathname string into an abstract pathname. If the given string is the empty string, then the result is the empty abstract pathname.

File(String parent, String child)- Following syntax creates a new File instance by converting the given file: URI into an abstract pathname.Creates a new File instance from a parent pathname string and a child pathname string.

If parent is null then the new File instance is created as if by invoking the single-argument File constructor on the given child pathname string.
Otherwise the parent pathname string is taken to denote a directory, and the child pathname string is taken to denote either a directory or a file. If the child pathname string is absolute then it is converted into a relative pathname in a system-dependent way. If parent is the empty string then the new File instance is created by converting child into an abstract pathname and resolving the result against a system-dependent default directory. Otherwise each pathname string is converted into an abstract pathname and the child abstract pathname is resolved against the parent.

File(URI uri)- Once you have File object in hand then there is a list of helper methods which can be used manipulate the files.
Creates a new File instance by converting the given file: URI into an abstract pathname.
The exact form of a file: URI is system-dependent, hence the transformation performed by this constructor is also system-dependent.

For a given abstract pathname f it is guaranteed that

new File( f.toURI()).equals( f.getAbsoluteFile())
so long as the original abstract pathname, the URI, and the new abstract pathname are all created in (possibly different invocations of) the same Java virtual machine. This relationship typically does not hold, however, when a file: URI that is created in a virtual machine on one operating system is converted into an abstract pathname in a virtual machine on a different operating system.

- **FileWriter**: This class inherits from the OutputStreamWriter class. The class is used for writing streams of characters.
This class has several constructors to create required objects.

- **FileReader**: This class inherits from the InputStreamReader class. FileReader is used for reading streams of characters.

Reads text from character files using a default buffer size. Decoding from bytes to characters uses either a specified charset or the default charset.
The FileReader is meant for reading streams of characters. For reading streams of raw bytes, consider using a FileInputStream.
This class has several constructors to create required objects.

1. FileReader(File file): Creates a new FileReader, given the File to read, using the default charset.
2. FileReader(FileDescriptor fd): Creates a new FileReader, given the FileDescriptor to read, using the default charset.
3. FileReader(File file, Charset charset): Creates a new FileReader, given the File to read and the charset.
4. FileReader(String fileName): Creates a new FileReader, given the name of the file to read, using the default charset.
5. FileReader(String fileName, Charset charset): Creates a new FileReader, given the name of the file to read and the charset.

Once you have FileReader object in hand then there is a list of helper methods which can be used manipulate the files:

1. public int read() throws IOException- Reads a single character. Returns an int, which represents the character read.
2. public int read(char [] c, int offset, int len)- Reads characters into an array. Returns the number of characters read.
Example:

```java
import java.io.*;
public class FileRead{
public static void main(String args[])throws IOException{
File file = new File("Hello1.txt");
// creates the file
file.createNewFile();
// creates a FileWriter Object
FileWriter writer = new FileWriter(file);
// Writes the content to the file
writer.write("This\n is\n an\n example\n");
writer.flush();
writer.close();
//Creates a FileReader Object
FileReader fr = new FileReader(file);
char [] a = new char[50];
fr.read(a); // reads the content to the array
for(char c : a)
System.out.print(c); //prints the characters one by one
fr.close();
}
}
```

## I/O Streams

The “I/O” refers to the nature of how data is accessed, either by reading the data from a resource (input) or by writing the data to a resource (output).

The contents of a file may be accessed or written via an I/O stream, which is a list of data elements presented sequentially. An I/O stream can be conceptually thought of as a long,nearly never-­ending stream of water with data presented one wave at a time.

The I/O stream is so large that once we start reading it, we have no idea where the beginning or the end is. We just have a pointer to our current position in the I/O stream and read data one block at a time.

Each type of I/O stream segments data into a wave or block in a particular way. For example, some I/O stream classes read or write data as individual bytes. Other I/O stream
classes read or write individual characters or strings of characters. On top of that, some I/O stream classes read or write larger groups of bytes or characters at a time, specifically those with the word Buffered in their name.

NOTE:- Although the java.io API is full of I/O streams that handle characters, strings, groups of bytes, and so on, nearly all are built on top of reading or writing an individual byte or an array of bytes at a time. Higher-­level I/O streams exist for convenience as well as performance.

Although I/O streams are commonly used with file I/O, they are more generally used to handle the reading/writing of any sequential data source. For example, you might construct a Java application that submits data to a website using an output stream and reads the result via an input stream.

The java.io API provides numerous classes for creating, accessing, and manipulating I/O streams.

- `Storing Data as Bytes`:- Data is stored in a file system (and memory) as a 0 or 1, called a bit. Since it’s really hard for humans to read/write data that is just 0s and 1s, they are grouped into a set of 8 bits, called a byte.When we use I/O streams, values are often read or written using byte values and arrays.

The java.io API defines two sets of I/O stream classes for reading and writing I/O streams: byte I/O streams and character I/O streams.

1. Byte I/O streams read/write binary data (0s and 1s) and have class names that end in InputStream or OutputStream.
2. Character I/O streams read/write text data and have class names that end in Reader or Writer.

The API frequently includes similar classes for both byte and character I/O streams, such as FileInputStream and FileReader. The difference between the two classes is based on how the bytes are read or written.

NOTE:- It is important to remember that even though character I/O streams do not contain the word Stream in their class name, they are still I/O streams. The use of Reader/Writer in the name is just to distinguish them from byte streams.

The byte I/O streams are primarily used to work with binary data, such as an image or executable file, while character I/O streams are used to work with text files. For example, you can use a Writer class to output a String value to a file without necessarily having to worry about the underlying character encoding of the file.

The character encoding determines how characters are encoded and stored in bytes in an I/O stream and later read back or decoded as characters. Although this may sound simple,Java supports a wide variety of character encodings, ranging from ones that may use one byte for Latin characters, UTF-­8 and ASCII for example, to using two or more bytes per character, such as UTF-­16.

In Java, the character encoding can be specified using the Charset class by passing a name value to the static Charset.forName() method, such as in the following examples:

```java
Charset usAsciiCharset = Charset.forName("US-­ASCII");
Charset utf8Charset = Charset.forName("UTF-­8");
Charset utf16Charset = Charset.forName("UTF-­16");
```

Java supports numerous character encodings, each specified by a different standard name value.

- Input vs. Output Streams

Most InputStream classes have a corresponding OutputStream class, and vice versa. For example, the FileOutputStream class writes data that can be read by a FileInputStream. If you understand the features of a particular Input or Output stream class, you should naturally know what its complementary class does.

It follows, then, that most Reader classes have a corresponding Writer class. For example, the FileWriter class writes data that can be read by a FileReader.
There are exceptions to this rule. For the exam, you should know that PrintWriter has no accompanying PrintReader class. Likewise, the PrintStream is an OutputStream that has no corresponding InputStream class. It also does not have Output in its name.

- Low-­Level vs. High-­Level Streams

Another way that you can familiarize yourself with the java.io API is by segmenting I/O streams into low-­level and high-­level streams.

1. A low-­level stream connects directly with the source of the data, such as a file, an array, or a String. Low-­level I/O streams process the raw data or resource and are accessed in a direct and unfiltered manner. For example, a FileInputStream is a class that reads file data one byte at a time.
2. A high-­level stream is built on top of another I/O stream using wrapping.Wrapping is the process by which an instance is passed to the constructor of another class,
and operations on the resulting instance are filtered and applied to the original instance.For example, take a look at the FileReader and BufferedReader objects in the following sample code:

```java
try (var br = new BufferedReader(new FileReader("zoo-­data.txt"))) {
 System.out.println(br.readLine());
}
```

In this example, FileReader is the low-­level I/O stream, whereas BufferedReader is the high-­level I/O stream that takes a FileReader as input. Many operations on the high-­level I/O stream pass through as operations to the underlying low-­level I/O stream, such as read() or close(). Other operations override or add new functionality to the low-­level I/O stream methods. The high-­level I/O stream may add new methods, such as readLine(),as well as performance enhancements for reading and filtering the low-­level data.

High-­level I/O streams can also take other high-­level I/O streams as input. For example, although the following code might seem a little odd at first, the style of wrapping an I/O stream is quite common in practice:

```java
try (var ois = new ObjectInputStream(new BufferedInputStream(new FileInputStream("zoo-­data.txt")))) {
 System.out.print(ois.readObject());
}
```

In this example, the low-­level FileInputStream interacts directly with the file, which is wrapped by a high-­level BufferedInputStream to improve performance. Finally, the entire object is wrapped by another high-­level ObjectInputStream, which allows us to interpret the data as a Java object.

`Stream Base Classes`:- The java.io library defines four abstract classes that are the parents of all I/O stream classes defined within the API: InputStream, OutputStream, Reader, and Writer.
The constructors of high-­level I/O streams often take a reference to the abstract class. For example, BufferedWriter takes a Writer object as input, which allows it to take any subclass of Writer.

The java.io abstract stream base classes:-

1. InputStream - Abstract class for all input byte streams
2. OutputStream - Abstract class for all output byte streams
3. Reader - Abstract class for all input character streams
4. Writer - Abstract class for all output character streams

The java.io concrete I/O stream classes:-

1. FileInputStream - Low - Reads file data as bytes
2. FileOutputStream - Low - Writes file data as bytes
3. FileReader - Low - Reads file data as characters
4. FileWriter - Low - Writes file data as characters

5. BufferedInputStream - High - Reads byte data from existing InputStream in buffered manner, which improves efficiency and performance
6. BufferedOutputStream - High - Writes byte data to existing OutputStream in buffered manner, which improves efficiency and performance
7. BufferedReader - High - Reads character data from existing Reader in buffered manner, which improves efficiency and performance
8. BufferedWriter - High - Writes character data to existing Writer in buffered manner, which improves efficiency and performance
9. ObjectInputStream - High - Deserializes primitive Java data types and graphs of Java objects from existing Description InputStream
10. ObjectOutputStream - High - Serializes primitive Java data types and graphs of Java objects to existingOutputStream
11. PrintStream - High - Writes formatted representations of Java objects to binary stream
12. PrintWriter- High - Writes formatted representations of Java objects to character stream

## Reading and Writing Files

There are a number of ways to read and write from a file:-

- `Using I/O Streams`:- I/O streams are all about reading/writing data,important methods are read() and write(). Both InputStream and Reader declare a read() method to read byte data from an I/O stream. Likewise, OutputStream and Writer both define a write() method to write a byte to the stream:

```java
    private static void write(File file,String text){
        try (var writer = new FileWriter(file)){
                writer.write(text);
            System.out.println(text);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
```

The following copyStream() methods show an example of reading all of the values of an InputStream and Reader and writing them to an OutputStream and Writer, respectively. In both examples, -­1 is used to indicate the end of the stream.

```java
void copyStream(InputStream in, OutputStream out) throws IOException {
   int b;
   while ((b = in.read()) != -­1) {
      out.write(b);
   }
}
void copyStream(Reader in, Writer out) throws IOException {
   int b;
   while ((b = in.read()) != -­1) {
      out.write(b);
   }  
}
```

`Enhancing with Files`:- The NIO.2 APIs provide even easier ways to read and write a file using the Files class.

```java
private static void nioWrite(Path file,String text){
   try {
      Files.write(file, text.getBytes());
   } catch (IOException e) {
      throw new RuntimeException(e);
   }
}
```


```java
    private static void read(File file){
        try (var reader = new FileReader(file);
             var breader = new BufferedReader(reader);
        ){
//            while (reader.ready()){
//                System.out.println(reader.read());
//            }
            var out = breader.readLine();
            System.out.println(out);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
```

## Interacting with Users

Java includes numerous classes for interacting with the user. For example, you might want to write an application that asks a user to log in and then prints a success message.

- Printing Data to the User:- Java includes two PrintStream instances for providing information to the user: System.out and System.err.The syntax for calling and using System.err is the same as System.out but is used to report errors to the user in a separate I/O stream from the regular output information.

```java
try (var in = new FileInputStream("zoo.txt")) {
   System.out.println("Found file!");
} catch (FileNotFoundException e) {
   System.err.println("File not found!");
}
```

They differs depending on what is executing the program.For example, if you are running from a command prompt, they will likely print text in the same format. On the other hand, if you are working in an integrated development environment (IDE), they might print the System.err text in a different color. Finally, if the code is being run on a server, the System.err stream might write to a different log file.

NOTE:- Using Logging APIs:- While System.out and System.err are incredibly useful for debugging stand-­alone or simple applications, they are rarely used in professional software development. Most applications rely on a logging service or API.While many logging APIs are available, they tend to share a number of similar attributes.
First you create a static logging object in each class. Then you log a message with an appropriate logging level: debug(), info(), warn(), or error(). The debug() and
info() methods are useful as they allow developers to log things that aren’t errors but may be useful

## Review of Key APIs

1. File - I/O representation of location in file system
2. Files - Helper methods for working with Path
3. Path - NIO.2 representation of location in file system
4. Paths - Contains factory methods to get Path
5. URI - Uniform resource identifier for files, URLs, etc.
6. FileSystem - NIO.2 representation of file system
7. FileSystems - Contains factory methods to get FileSystem
8. InputStream - Superclass for reading files based on bytes
9. OuputStream - Superclass for writing files based on bytes
10. Reader - Superclass for reading files based on characters
11. Writer - Superclass for writing files based on characters


## Serializing and Deserializing Data

Serialization is the process of converting an in-­memory object to a byte stream. Likewise, deserialization is the process of converting from a byte stream into an object. Serialization often involves writing an object to a stored or transmittable format,while deserialization is the reciprocal process.
E.g serializing and deserializing a Giraffe object to and from a giraffe.txt file.

- Applying the Serializable Interface:- To serialize an object using the I/O API, the object must implement the java.io.Serializable interface. The Serializable interface is a marker interface, which means it does not have any methods. Any class can implement the Serializable interface since there are no required methods to implement.

NOTE:- You should only mark data-­oriented classes serializable. Process-­oriented classes, such as the I/O streams or the Thread instances  are often poor candidates for serialization,as the internal state of those classes tends to be ephemeral or short-­lived.

The purpose of using the Serializable interface is to inform any process attempting to serialize the object that you have taken the proper steps to make the object serializable. All Java primitives and many of the built-­in Java classes that you have worked with throughout this book are Serializable. For example, this class can be serialized:

```java
import java.io.Serializable;
public class Gorilla implements Serializable {
   private static final long serialVersionUID = 1L;
   private String name;
   private int age;
   private Boolean friendly;
   private transient String favoriteFood;

   // Constructors/Getters/Setters/toString() omitted

}
```

- Maintaining a serialVersionUID:- It’s a good practice to declare a static serialVersionUID variable in every class that implements Serializable. The version is stored with each object as part of serialization.Then, every time the class structure changes, this value is updated or incremented.
Perhaps our Gorilla class receives a new instance member Double banana, or maybe the age field is renamed. The idea is a class could have been serialized with an older version of the class and deserialized with a newer version of the class.
The serialVersionUID helps inform the JVM that the stored data may not match the new class definition. If an older version of the class is encountered during deserialization,a java.io.InvalidClassException may be thrown. Alternatively, some APIs support converting data between versions.

- Marking Data transient:- The transient modifier can be used for sensitive data of the class, like a password. There are other objects it does not make sense to serialize, like the state of an in-­memory Thread.If the object is part of a serializable object, we just mark it transient to ignore these select instance members.

It reverts to its default Java values, such as 0.0 for double, or null for an object.

NOTE:- Marking static fields transient has little effect on serialization. Other than the serialVersionUID, only the instance members of a class are serialized.

## Serialization

Serialization in java is a mechanism of writing the state of an object into a byte stream. It is mainly used in Hibernate, RMI, JPA, EJB and JMS technologies. The reverse operation of serialization is called deserialization.JVM can use this byte array to transmit/ read object over a network.

**Advantage of Java Serialization :**
It is mainly used to travel object's state on the network (known as marshaling).
Can be used for caching to improve performance
Used for persistence storing object's state in db.

**java.io.Serializable interface :**
Serializable is a marker interface (has no data member and method). It is used to "mark" java classes so that objects of these classes may get certain capability. The Cloneable and Remote are also marker interfaces.

It must be implemented by the class whose object you want to persist.

The String class and all the wrapper classes implements java.io.Serializable interface by default.

## ObjectOutputStream class
The ObjectOutputStream class is used to write primitive data types and Java objects to an OutputStream. Only objects that support the java.io.Serializable interface can be written to streams.

**Constructor :**
```java
public ObjectOutputStream(OutputStream out) throws IOException {}
```
Above constructor creates an ObjectOutputStream that writes to the specified OutputStream.

**Important Methods :**
<table class="alt">
<tbody><tr><th>Method</th><th>Description</th></tr>
<tr><td>1) public final void writeObject(Object obj) throws IOException {}</td><td>writes the specified object to the ObjectOutputStream. </td></tr>
<tr><td>2) public void flush() throws IOException {}</td><td>flushes the current output stream. </td></tr>
<tr><td>3) public void close() throws IOException {}</td><td>closes the current output stream. </td></tr>
</tbody></table>



## Deserialization in java
Deserialization is the process of reconstructing the object from the serialized state.It is the reverse operation of serialization.

## ObjectInputStream class
An ObjectInputStream deserializes objects and primitive data written using an ObjectOutputStream.

**Constructor :**
```java
public ObjectInputStream(InputStream in) throws IOException {}
```
Above constructor creates an ObjectInputStream that reads from the specified InputStream.

**Important Methods :**
<table class="alt">
<tbody><tr><th>Method</th><th>Description</th></tr>
<tr><td>1) public final Object readObject() throws IOException, ClassNotFoundException{}</td><td>reads an object from the input stream. </td></tr>
<tr><td>2) public void close() throws IOException {}</td><td>closes ObjectInputStream.</td></tr>
</tbody></table>


## Serialization Rules

**Serialization with Inheritance (IS-A Relationship) :**
If a class implements serializable then all its sub classes will also be serializable. Parent class properties are inherited to subclasses so if parent class is Serializable, subclass would also be.

**Serialization with Aggregation (HAS-A Relationship) :**
If a class has a reference of another class, all the references must be Serializable otherwise serialization process will not be performed. In such case, NotSerializableException is thrown at runtime. 

All the objects within an object must be Serializable.

**Serialization with static data member :**
If there is any static data member in a class, it will not be serialized because static is the part of class not object.

**Serialization with array or collection :**
In case of array or collection, all the objects of array or collection must be serializable. If any object is not serialiizable, serialization will be failed.

## Externalizable in Java
The Externalizable interface provides the facility of writing the state of an object into a byte stream in compress format. It is not a marker interface.

The Externalizable interface provides two methods:
- public void writeExternal(ObjectOutput out) throws IOException
- public void readExternal(ObjectInput in) throws IOException

## Java Transient Keyword
If you don't want to serialize any data member of a class, you can mark it as transient.
**Example :**
```java
transient int age; //It will not be serialized  
```

Interface Serializable

    All Known Subinterfaces:
        AdapterActivator, Attribute, Attribute, Attributes, BindingIterator, CertPathValidatorException.Reason, ClientRequestInfo, ClientRequestInterceptor, Codec, CodecFactory, Control, Current, Current, Current, CustomValue, DataInputStream, DataOutputStream, Descriptor, DHPrivateKey, DHPublicKey, DocAttribute, DomainManager, DSAPrivateKey, DSAPublicKey, DynAny, DynAnyFactory, DynArray, DynEnum, DynFixed, DynSequence, DynStruct, DynUnion, DynValue, DynValueBox, DynValueCommon, ECPrivateKey, ECPublicKey, ExtendedRequest, ExtendedResponse, Externalizable, IdAssignmentPolicy, IDLEntity, IDLType, IdUniquenessPolicy, ImplicitActivationPolicy, Interceptor, IORInfo, IORInterceptor, IORInterceptor_3_0, IRObject, Key, LifespanPolicy, Name, NamingContext, NamingContextExt, NotificationFilter, ObjectReferenceFactory, ObjectReferenceTemplate, ORBInitializer, ORBInitInfo, PBEKey, POA, POAManager, Policy, PolicyFactory, PrintJobAttribute, PrintRequestAttribute, PrintServiceAttribute, PrivateKey, PublicKey, QueryExp, RelationType, RemoteRef, RequestInfo, RequestProcessingPolicy, RSAMultiPrimePrivateCrtKey, RSAPrivateCrtKey, RSAPrivateKey, RSAPublicKey, RunTime, SecretKey, ServantActivator, ServantLocator, ServantManager, ServantRetentionPolicy, ServerRef, ServerRequestInfo, ServerRequestInterceptor, StreamableValue, SupportedValuesAttribute, ThreadPolicy, UnsolicitedNotification, ValueBase, ValueExp


    public interface Serializable

    Serializability of a class is enabled by the class implementing the java.io.Serializable interface. Classes that do not implement this interface will not have any of their state serialized or deserialized. All subtypes of a serializable class are themselves serializable. The serialization interface has no methods or fields and serves only to identify the semantics of being serializable.

    To allow subtypes of non-serializable classes to be serialized, the subtype may assume responsibility for saving and restoring the state of the supertype's public, protected, and (if accessible) package fields. The subtype may assume this responsibility only if the class it extends has an accessible no-arg constructor to initialize the class's state. It is an error to declare a class Serializable if this is not the case. The error will be detected at runtime.

    During deserialization, the fields of non-serializable classes will be initialized using the public or protected no-arg constructor of the class. A no-arg constructor must be accessible to the subclass that is serializable. The fields of serializable subclasses will be restored from the stream.

    When traversing a graph, an object may be encountered that does not support the Serializable interface. In this case the NotSerializableException will be thrown and will identify the class of the non-serializable object.

    Classes that require special handling during the serialization and deserialization process must implement special methods with these exact signatures:

     private void writeObject(java.io.ObjectOutputStream out)
         throws IOException
     private void readObject(java.io.ObjectInputStream in)
         throws IOException, ClassNotFoundException;
     private void readObjectNoData()
         throws ObjectStreamException;
     

    The writeObject method is responsible for writing the state of the object for its particular class so that the corresponding readObject method can restore it. The default mechanism for saving the Object's fields can be invoked by calling out.defaultWriteObject. The method does not need to concern itself with the state belonging to its superclasses or subclasses. State is saved by writing the individual fields to the ObjectOutputStream using the writeObject method or by using the methods for primitive data types supported by DataOutput.

    The readObject method is responsible for reading from the stream and restoring the classes fields. It may call in.defaultReadObject to invoke the default mechanism for restoring the object's non-static and non-transient fields. The defaultReadObject method uses information in the stream to assign the fields of the object saved in the stream with the correspondingly named fields in the current object. This handles the case when the class has evolved to add new fields. The method does not need to concern itself with the state belonging to its superclasses or subclasses. State is saved by writing the individual fields to the ObjectOutputStream using the writeObject method or by using the methods for primitive data types supported by DataOutput.

    The readObjectNoData method is responsible for initializing the state of the object for its particular class in the event that the serialization stream does not list the given class as a superclass of the object being deserialized. This may occur in cases where the receiving party uses a different version of the deserialized instance's class than the sending party, and the receiver's version extends classes that are not extended by the sender's version. This may also occur if the serialization stream has been tampered; hence, readObjectNoData is useful for initializing deserialized objects properly despite a "hostile" or incomplete source stream.

    Serializable classes that need to designate an alternative object to be used when writing an object to the stream should implement this special method with the exact signature:

     ANY-ACCESS-MODIFIER Object writeReplace() throws ObjectStreamException;
     

    This writeReplace method is invoked by serialization if the method exists and it would be accessible from a method defined within the class of the object being serialized. Thus, the method can have private, protected and package-private access. Subclass access to this method follows java accessibility rules.

    Classes that need to designate a replacement when an instance of it is read from the stream should implement this special method with the exact signature.

     ANY-ACCESS-MODIFIER Object readResolve() throws ObjectStreamException;
     

    This readResolve method follows the same invocation rules and accessibility rules as writeReplace.

    The serialization runtime associates with each serializable class a version number, called a serialVersionUID, which is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization. If the receiver has loaded a class for the object that has a different serialVersionUID than that of the corresponding sender's class, then deserialization will result in an InvalidClassException. A serializable class can declare its own serialVersionUID explicitly by declaring a field named "serialVersionUID" that must be static, final, and of type long:

     ANY-ACCESS-MODIFIER static final long serialVersionUID = 42L;
     

    If a serializable class does not explicitly declare a serialVersionUID, then the serialization runtime will calculate a default serialVersionUID value for that class based on various aspects of the class, as described in the Java(TM) Object Serialization Specification. However, it is strongly recommended that all serializable classes explicitly declare serialVersionUID values, since the default serialVersionUID computation is highly sensitive to class details that may vary depending on compiler implementations, and can thus result in unexpected InvalidClassExceptions during deserialization. Therefore, to guarantee a consistent serialVersionUID value across different java compiler implementations, a serializable class must declare an explicit serialVersionUID value. It is also strongly advised that explicit serialVersionUID declarations use the private modifier where possible, since such declarations apply only to the immediately declaring class--serialVersionUID fields are not useful as inherited members. Array classes cannot declare an explicit serialVersionUID, so they always have the default computed value, but the requirement for matching serialVersionUID values is waived for array classes.
    