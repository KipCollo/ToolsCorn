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
