# Software Design

Software design is a creative activity in which you identify software components and their ­relationships, based on a customer’s requirements.

1. Architecture Design

Software design architecture is the process of defining the overall structure and organization of a software system. It involves determining the components, interfaces, and relationships between those components that are needed to meet the requirements of the system. The architecture of a software system sets the foundation for the design and implementation of the system, and it plays a crucial role in determining the quality and maintainability of the final product.

There are several different architecture styles and patterns that can be used to design a software system, including:

- Layered architecture
- Microservices architecture
- Event-driven architecture
- Service-oriented architecture (SOA)
- Domain-Driven Design (DDD)

Each architecture pattern or style has its own set of advantages and disadvantages, and the choice of architecture will depend on the specific requirements of the system and the constraints of the project.

Learn more from the following links:

- [@article@Software Architecture & Design Introduction](https://www.tutorialspoint.com/software_architecture_design/introduction.htm)
- [@article@Overview of Software architecture](https://en.wikipedia.org/wiki/Software_architecture)

## System Design

System design is the process of defining the elements of a system, as well as their interactions and relationships, in order to satisfy a set of specified requirements.

It involves taking a problem statement, breaking it down into smaller components and designing each component to work together effectively to achieve the overall goal of the system. This process typically includes analyzing the current system (if any) and determining any deficiencies, creating a detailed plan for the new system, and testing the design to ensure that it meets the requirements. It is an iterative process that may involve multiple rounds of design, testing, and refinement.

In software engineering, system design is a phase in the software development process that focuses on the high-level design of a software system, including the architecture and components.

It is also one of the important aspects of the interview process for software engineers. Most of the companies have a dedicated system design interview round, where they ask the candidates to design a system for a given problem statement. The candidates are expected to come up with a detailed design of the system, including the architecture, components, and their interactions. They are also expected to discuss the trade-offs involved in their design and the alternatives that they considered.

## How To: System Design?

There are several steps that can be taken when approaching a system design:

- **Understand the problem**: Gather information about the problem you are trying to solve and the requirements of the system. Identify the users and their needs, as well as any constraints or limitations of the system.
- **Identify the scope of the system:** Define the boundaries of the system, including what the system will do and what it will not do.
- **Research and analyze existing systems:** Look at similar systems that have been built in the past and identify what worked well and what didn't. Use this information to inform your design decisions.
- **Create a high-level design:** Outline the main components of the system and how they will interact with each other. This can include a rough diagram of the system's architecture, or a flowchart outlining the process the system will follow.
- **Refine the design:** As you work on the details of the design, iterate and refine it until you have a complete and detailed design that meets all the requirements.
- **Document the design:** Create detailed documentation of your design for future reference and maintenance.
- **Continuously monitor and improve the system:** The system design is not a one-time process, it needs to be continuously monitored and improved to meet the changing requirements.

Note that this is a general approach to System Design. For interview specific answers, see the following resources:

- [@opensource@How to approach System Design?](https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question)
- [@article@What are system design questions?](https://www.hiredintech.com/system-design)
- [@video@Intro to Architecture and Systems Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70)
- [@article@My System Design Template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)

## Software Design Principles

There are many software design principles that aim to guide the development of software in a way that makes it easy to understand, maintain, and extend. Some of the most common design principles include:

- SOLID principles (Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle)
- DRY (Don't Repeat Yourself)
- YAGNI (You Ain't Gonna Need It)
- KISS (Keep It Simple, Stupid)
- LoD (Law of Demeter)
- Composition over Inheritance
- Encapsulate What Varies
- Hollywood Principle
- Program Against Abstractions

By following these design principles, software can be developed in a way that is easy to understand, maintain, and extend, and that is less prone to bugs.

Learn more from the following resources:

- [@article@Principles of Software Design](https://www.geeksforgeeks.org/principles-of-software-design/)
- [@video@Software Design Principles For Beginners](https://www.youtube.com/watch?v=60EqoRcanpo)

**SOLID** - SOLID is an acronym that stands for five principles of object-oriented software development, which were first introduced by Robert C. Martin in the early 2000s. These principles are:

- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

Learn more from the following resources:

- [@article@Get Started with SOLID](https://www.bmc.com/blogs/solid-design-principles/)
- [@article@SOLID Principles](https://khalilstemmler.com/articles/tags/solid/)
- [@video@Tutorial - What are SOLID principle?](https://www.youtube.com/watch?v=aUCo5cy32kE)

**DRY** - DRY (Don't Repeat Yourself) is a software development principle that suggests that code should not have duplicate functionality. The idea is to keep the codebase as simple as possible by eliminating redundancy and duplication. The goal is to reduce complexity and improve maintainability by ensuring that each piece of knowledge is expressed in a single, unambiguous way within the system.

The DRY principle is closely related to the Single Responsibility Principle (SRP) and the Open-Closed Principle (OCP), which are part of the SOLID principles. The DRY principle aims to reduce the amount of duplicate code by creating abstractions that can be reused across the system.

Learn more from the following resources:

- [@video@What is DRY in programming?](https://www.youtube.com/watch?v=Rv3RIc_ziOY)
- [@article@Overview of Don't repeat yourself (DRY)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

**Composition over Inheritance** - Composition over inheritance is a programming principle that suggests that it is better to use composition, a mechanism for assembling objects, to create complex objects, rather than using inheritance, which is a mechanism for creating new classes based on existing ones.

Inheritance is a powerful mechanism for creating reusable code, but it can also lead to tightly coupled, hard-to-maintain code. This is because inherited classes are tightly bound to their parent classes and any changes made to the parent class will affect all of its child classes. This makes it hard to change or extend the code without affecting the entire class hierarchy.

Learn more from the following links:

- [@video@Tutorial - Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
- [@article@Overview of Composition over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

**Hollywood Principle** - The Hollywood Principle is a software development principle that states: "Don't call us, we'll call you." It suggests that high-level components should dictate the flow of control in an application, rather than low-level components.

This principle is often used in the context of inversion of control (IoC) and dependency injection. In traditional software development, low-level components are responsible for creating and managing the high-level components that they depend on. With IoC, the high-level components dictate the flow of control, and the low-level components are created and managed by a separate mechanism.

Learn more from the following resources:

- [@video@Tutorial - Hollywood Principle](https://www.youtube.com/watch?v=lRuygpsXE5s)

**YAGNI** - YAGNI (You Ain't Gonna Need It) is a software development principle that suggests that developers should not add functionality to a codebase unless it is immediately necessary. The idea is to avoid creating unnecessary complexity in the codebase by only adding features that are actually needed.

The YAGNI principle is closely related to the Single Responsibility Principle (SRP) and the Open-Closed Principle (OCP), which are part of the SOLID principles. YAGNI aims to keep the codebase as simple as possible by avoiding the creation of unnecessary abstractions and functionality.

Learn more from the following resources:

- [@article@YAGNI (You Aren’t Gonna Need It) Principle Helps in Efficiency](https://builtin.com/software-engineering-perspectives/yagni)
- [@video@What is YAGNI coding rule, and Why it helps?](https://www.youtube.com/watch?v=2vys1q1dKc4)

**Encapsulate What Varies** - Encapsulate what varies is a programming principle that suggests that code should be organized in such a way that the parts that are likely to change in the future are isolated from the parts that are unlikely to change. This is accomplished by creating interfaces and classes that separate the varying parts of the code from the stable parts.

Encapsulating what varies allows for more flexibility in the code. When changes are needed, they can be made to the encapsulated parts without affecting the rest of the code. This makes it easier to understand, test, and maintain the code.

Learn more from the following resources:

- [@article@What does it mean when one says “Encapsulate what varies”?](https://softwareengineering.stackexchange.com/questions/337413/what-does-it-mean-when-one-says-encapsulate-what-varies)
- [@article@Overview of Encapsulate What Varies](https://bootcamp.uxdesign.cc/software-design-principles-every-developers-should-know-23d24735518e)

**Program Against Abstractions** - Programming against abstractions is a programming principle that suggests that code should be written in such a way that it is not tied to specific implementations, but rather to abstractions. This is accomplished by defining interfaces or abstract classes that define the behavior of a group of related classes without specifying their implementation.

Programming against abstractions allows for more flexibility in the code. When changes are needed, they can be made to the implementation of the abstractions without affecting the code that uses them. This makes it easier to understand, test, and maintain the code.

Learn more from the following resources:

- [@article@What is Abstraction in Programming – And Why is it Useful?](https://www.freecodecamp.org/news/what-is-abstraction-in-programming/)
- [@article@Overview of Abstraction principle](<https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)>)

---

## Design Patterns

Design patterns are general solutions to common problems that arise in software development. They provide a way to describe and communicate proven solutions to common design problems and they provide a common vocabulary for design. They are not specific to any particular programming language or technology, but rather describe the problem and the solution in a way that can be applied to many different contexts.

There are several different types of design patterns, including:

- Creational patterns
- Structural patterns
- Behavioral patterns
- Architectural patterns

Learn more from the following links:

- [@video@What Are Design Patterns?](https://www.youtube.com/watch?v=BWprw8UHIzA)
- [@article@Overview - Software Design Pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
- [@article@Explaining, imaging and simplifying design patterns](https://refactoring.guru/design-patterns/what-is-pattern)
- [@feed@Explore top posts about Design Patterns](https://app.daily.dev/tags/design-patterns?ref=roadmapsh)

**POSA Patterns** - POSA (Pattern-Oriented Software Architecture) is a set of design patterns for developing software systems that can scale and adapt to changing requirements. These patterns were first described in the book "Patterns of Scalable, Reliable Services" by Kevin Hoffman.

POSA patterns are divided into four categories:

- Partitioning Patterns
- Placement Patterns
- Routing Patterns
- Federation Patterns

Learn more from the following links:

- [@video@POSA Pattern Examples](https://www.youtube.com/watch?v=iYNa_KcWxCU)
- [@article@Overview of Pattern-Oriented Software Architecture](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture)

**GoF Design Patterns** - The Gang of Four (GoF) design patterns are a set of design patterns for object-oriented software development that were first described in the book "Design Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (also known as the Gang of Four).

The GoF design patterns are divided into three categories: Creational, Structural and Behavioral.

- Creational Patterns
- Structural Patterns
- Behavioral Patterns

Learn more from the following links:

- [@article@Gangs of Four (GoF) Design Patterns](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)
- [@video@Tutorial - Builder Pattern (Gang of Four Design Patterns Series)](https://www.youtube.com/watch?v=_sa2WlAFWQos)
