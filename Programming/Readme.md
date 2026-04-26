# Programming

Programming (also known as coding) is the process of writing instructions for a device such as a computer or mobile device. We write these instructions with a programming language, which is then interpreted by the device. These sets of instructions may be referred to by various names, but *program*, *computer program*, *application (app)*, and *executable* are a few popular names.

A *program* can be anything that is written with code; websites, games, and phone apps are programs. While it's possible to create a program without writing code, the underlying logic is interpreted by the device and that logic was most likely written with code. A program that is *running* or *executing* code is carrying out instructions. The device that you're reading this lesson with is running a program to print it to your screen.

## Programming Languages

Programming languages enable developers to write instructions for a device. Devices can only understand binary (1s and 0s), and for *most* developers that's not a very efficient way to communicate. Programming languages are the vehicle for communication between humans and computers.

Programming languages come in different formats and may serve different purposes. For example, JavaScript is primarily used for web applications, while Bash is primarily used for operating systems.

*Low level languages* typically require fewer steps than *high level languages* for a device to interpret instructions. However, what makes high level languages popular is their readability and support.

`Assembly`:-

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

`Go` - Go is an open source programming language supported by Google. Go can be used to write cloud services, CLI tools, used for API development, and much more.

`C++` - C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented, functional, and so on. This makes C++ powerful as well as flexible.

`Ruby` - Ruby is a high-level, interpreted programming language that blends Perl, Smalltalk, Eiffel, Ada, and Lisp. Ruby focuses on simplicity and productivity along with a syntax that reads and writes naturally. Ruby supports procedural, object-oriented and functional programming and is dynamically typed.Known for role in web development and scripting applications.Popular framework is **Ruby on rails**.

`Python` - Python is a well known programming language which is both a strongly typed and a dynamically typed language. Being an interpreted language, code is executed as soon as it is written and the Python syntax allows for writing code in functional, procedural or object-oriented programmatic ways.

`JavaScript` - Apart from being used in the browser, JavaScript is also used in backend e.g. using [Node.js](https://nodejs.org/) or [Deno](https://deno.land/) for writing server-side code in JavaScript.

If you pick up JavaScript for the Backend, my personal recommendation would be to learn [JavaScript](/javascript) and then go with [Node.js](/nodejs) as it is the most popular and widely used option. Also, I would recommend learning TypeScript later on as you continue with your backend development Journey; it's a superset of JavaScript and is used in many projects.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

`PHP` - PHP is a general purpose scripting language often used for making dynamic and interactive Web pages. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group and supported by PHP Foundation. PHP supports procedural and object-oriented styles of programming with some elements of functional programming as well.

`C#` - C# (pronounced "C sharp") is a general purpose programming language made by Microsoft. It is used to perform different tasks and can be used to create web apps, games, mobile apps, etc.

`Java` - Java is general-purpose language, primarily used for Internet-based applications.
It was created in 1995 by James Gosling at Sun Microsystems and is one of the most popular options for backend developers.

`Rust` - Rust is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.

## Elements of a Program

A single instruction in a program is called a *statement* and will usually have a character or line spacing that marks where the instruction ends, or *terminates*. How a program terminates varies with each language.

Statements within a program may rely on data provided by a user or elsewhere to carry out instructions. Data can change how a program behaves, so programming languages come with a way to temporarily store data so that it can be used later. These are called *variables*. Variables are statements that instruct a device to save data in its memory. Variables in programs are similar to variables in algebra, where they have a unique name and their value may change over time.

There's a chance that some statements will not be executed by a device. This is usually by design when written by the developer or by accident when an unexpected error occurs. This type of control over an application makes it more robust and maintainable. Typically, these changes in control happen when certain conditions are met. A common statement used in modern programming to control how a program runs is the `if..else` statement.


**Procedural language**:— A procedural programming language includes functions/methods that can be called from the main flow of the program. The flow of the program jumps to the function/method, executes the code within the module, and then returns to the next statement in the main flow of the program. Some procedural languages include a main function/method that automatically is called when the program is executed.

**Object-oriented language**:— An object-oriented language uses classes and objects. Classes are similar to blueprints. A class describes what an object can contain, including properties/variables and functions/methods. An object is an instance of a class(like a building that has been created from a blueprint). Object-­oriented languages provide polymorphism, encapsulation, and inheritance. Objects are naturally encapsulated by containing all related functions/methods and properties/variables within the object itself. Polymorphism allows duplicate method/function names within object-oriented objects. However, the “signature” must be different. The “signature” is the combination of the types of variables (numbers and characters) passed into the method/function and the type of information passed out of a method/function. For example, several add methods could be created— one that only accepts integers (whole numbers), one that only accepts floating-point numbers (numbers with decimals), and one that accepts a combination. The program will determine which method/function to call by what has been passed into the method/function. Inheritance in object-oriented programming allows an object to inherit properties/variables and functions/methods from another object. The object can also override those items inherited.This is similar to a child inheriting characteristics from the parents.Object-oriented languages can also be event driven. An event-­driven program will “sleep” until an event occurs. This is similar to an ATM machine program waiting for a user to input an ATM card or walk in front of the machine.



Here’s a brief history of modern computer programming:

✓ 1954–1957: FORTRAN is developed.

FORTRAN was the first modern computer programming language. For scientific programming, FORTRAN is a real racehorse. Year after year,FORTRAN is a leading language among computer programmers through-out the world.

✓ 1959: Grace Hopper at Remington Rand develops the COBOL ­programming language.

The letter B in COBOL stands for Business, and business is just what COBOL is all about. The language’s primary feature is the processing of one record after another, one customer after another, or one employee after another.Within a few years after its initial development, COBOL became the most widely used language for business data processing. Even today, COBOL represents a large part of the computer programming industry.

✓ 1972: Dennis Ritchie at AT&T Bell Labs develops the C programming language.

Code written in C uses curly braces, if statements, for statements, and so on.In terms of power, you can use C to solve the same problems that you can solve by using FORTRAN, Java, or any other modern programming language. (You can write a scientific calculator program in COBOL,but doing that sort of thing would feel really strange.) The difference between one programming language and another isn’t power. The difference is ease and appropriateness of use. That’s where the Java language excels.

✓ 1986: Bjarne Stroustrup (again at AT&T Bell Labs) develops C++.

Unlike its C language ancestor, the language C++ supports object-oriented programming. This support represents a huge step forward.

✓ May 23, 1995: Sun Microsystems releases its first official version of the Java programming language.

Java improves upon the concepts in C++. Java’s “Write Once, Run Anywhere” philosophy makes the language ideal for distributing code across the Internet.Additionally, Java is a great general-purpose programming language. With Java, you can write windowed applications, build and explore databases, control handheld devices, and more. Within five short years,the Java programming language had 2.5 million developers worldwide.

✓ 2002: Microsoft introduces a new language named C#.Many of the C# language features come directly from features in Java.

✓ 2007: Google adopts Java as the primary language for creating apps on Android mobile devices.

✓ January 2010: Oracle Corporation purchases Sun Microsystems, ­bringing Java technology into the Oracle family of products.

Additionally, Java technology provides interactive capabilities to all Blu-ray devices and is the most popular programming language in the TIOBE Programming Community Index on PYPL: the PopularitY of Programming Language Index, and on other indexes.


`Functional Programming`
`Reactive Programming`

## OOP Programming

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Reactive Programming

- Elastic
- Message-driven
- Responsive
- Resilience


## Programming Paradigm



A programming language is an engineered language for expressing computer programs, typically allowing software to be written in a human readable manner.

Execution of a program requires an implementation. There are two main approaches for implementing a programming language – compilation, where programs are compiled ahead-of-time to machine code, and interpretation, where programs are directly executed. In addition to these two extremes, some implementations use hybrid approaches such as just-in-time compilation and bytecode interpreters.

The design of programming languages has been strongly influenced by computer architecture, with most imperative languages designed around the ubiquitous von Neumann architecture.While early programming languages were closely tied to the hardware, modern languages often hide hardware details via abstraction in an effort to enable better software with less effort.

### Programming language design and implementation

**Design**:- In programming language design, there are a wide variety of factors to consider. Some factors may be mutually exclusive (e.g. security versus speed). It may be necessary to consider whether a programming language will perform better interpreted, or compiled, if a language should be dynamically or statically typed, if inheritance will be in, and the general syntax of the language.Many factors involved with the design of a language can be decided on by the goals behind the language. It's important to consider the target audience of a language, its unique features and its purpose.It is good practice to look at what existing languages lack, or make difficult, to make sure a language serves a purpose.

**Implementation**:- There are two general approaches to programming language implementation:
- `Interpretation`: The program is read as input by an interpreter, which performs the actions written in the program.
- `Compilation`: The program is read by a compiler, which translates it into some other language, such as bytecode or machine code. The translated code may either be directly executed by hardware or serve as input to another interpreter or another compiler.
In addition to these two extremes, many implementations use hybrid approaches such as just-in-time compilation and bytecode interpreters.

Interpreters have some advantages over JIT compilers and ahead-of-time compilers.Typically interpreters support a read–eval–print loop that makes developing new programs much quicker; compilers force developers to use a much slower edit-compile-run-debug loop.
A typical program, when compiled with an ahead-of-time compiler, will (after the program has been compiled) run faster than the same program processed and run with a JIT compiler; which in turn may run faster than that same program partially compiled into a p-code intermediate language such as a bytecode and interpreted by an application virtual machine; which in turn runs much faster than a pure interpreter

Multiple implementations - Programming languages can have multiple implementations. Different implementations can be written in different languages and can use different methods to compile or interpret code. For example, implementations of Python include: 
1. CPython, the reference implementation of Python
2. IronPython, an implementation targeting the .NET Framework (written in C#)
3. Jython, an implementation targeting the Java virtual machine
4. PyPy, an implementation designed for speed (written in RPython).
