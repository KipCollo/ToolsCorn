# Software Engineering

Software engineering is a branch of computer science, which uses well-defined engineering concepts required to produce efficient, durable, scalable, in-budget and on-time software products.
Software engineering is an engineering discipline that is concerned with all aspects of software production.It includes techniques that support program specification, design, and evolution, none of which are normally relevant for personal software development.

`software` - Computer programs and associated documentationlibraries, support websites, and configuration data that are needed to make these programs useful.Software products may be developed for a particular customer or may be developed for a general market.
A system may consist of several separate programs and configuration files that are used to set up these programs. It may include system documentation, which describes the structure of the system, user documentation, which explains how to use the system, and websites for users to download recent product information.

The business environment relies heavily on software for many functions - from automated traffic control systems to complex manufacturing processes, and Software Engineers are crucial in the development of software that provides real solutions. A Software Engineer needs to address the entire software development lifecycle - to analyse the needs, and then design, test and develop software in order to meet those needs.

The notion of software engineering was first proposed in 1968 at a conference held to discuss what was then called the software crisis (Naur and Randell 1969). It became clear that individual approaches to program development did not scale up to large and complex software systems. These were unreliable, cost more than expected, and were delivered late.
Throughout the 1970s and 1980s, a variety of new software engineering techniques and methods were developed, such as structured programming, information hiding, and object-oriented development. Tools and standard notations were developed which are the basis of today’s software engineering.


- Introduction-Software & Software engineering:-
    - Attributes of Good software.
    - Professional software development.
    - Software Engineering Ethics.
- Software Process:-
    - Software Process Models
    - Process acxtivities.
    - Coping with challenge.
- Requirements analysis & specification:-
    - Types of requirements
    - Software Requiremnts Document.
    - Requirements Engineering Process
    - Use cases
- Software Design:-
    - Design with Context of Software Engineering,The Design Process,Design Concepts, The Design Model.
    - Architectural Design: Software Architecture, Architecture Genres, Architecture Styles, Architectural Design, Assessing Alternative Architectural Designs, Architectural Mapping Using Data Flow.
- Implementation & testing:-
    - Development testing
    - Test-driven development
    - Release testing, User testing
- Software Project Management:-
    - Risk management, Managing people, Project planning, Software pricing, Project scheduling, Estimation techniques
- Advanced Software Engineering:-
    - Distributed Software Engineering
    - Embedded Software
    - Aspect-oriented software Engineering


References:-

1. Somerville I (2010) Software Engineering, 9th Edition  Addison Wesley 
2. Pressman R.S (1997): Software Engineering: A Practical Approach  McGraw Hill 


Software engineers are concerned with developing software products, that is,software that can be sold to a customer. There are two kinds of software product:
- `Generic products` - These are stand-alone systems that are produced by a development organization and sold on the open market to any customer who is able to buy them. Examples of this type of product include apps for mobile devices, software for PCs such as databases, word processors, drawing packages,and project management tools. This kind of software also includes “vertical” applications designed for a specific market such as library information systems,accounting systems, or systems for maintaining dental records.
- `Customized (or bespoke) software` - These are systems that are commissioned by and developed for a particular customer. A software contractor designs and implements the software especially for that customer. Examples of this type of software include control systems for electronic devices, systems written to support a particular business process, and air traffic control systems.

The critical distinction between these types of software is that, in generic products, the organization that develops the software controls the software specification.This means that if they run into development problems, they can rethink what is to be developed. For custom products, the specification is developed and controlled by the organization that is buying the software. The software developers must work to that specification.
However, the distinction between these system product types is becoming increasingly blurred. More and more systems are now being built with a generic product as a base, which is then adapted to suit the requirements of a customer. Enterprise Resource Planning (ERP) systems, such as systems from SAP and Oracle, are the best examples of this approach. Here, a large and complex system is adapted for a company by incorporating information about business rules and processes, reports required, and so on.


The systematic approach that is used in software engineering is sometimes called a `software process`. A software process is a sequence of activities that leads to the production of a software product. Four fundamental activities are common to all software processes.
1. Software specification, where customers and engineers define the software that is to be produced and the constraints on its operation.
2. Software development, where the software is designed and programmed.
3. Software validation, where the software is checked to ensure that it is what the customer requires.
4. Software evolution, where the software is modified to reflect changing customer and market requirements.


There are many different types of `application`, including:
1. `Stand-alone applications`:- These are application systems that run on a personal computer or apps that run on a mobile device. They include all necessary functionality and may not need to be connected to a network. Examples of such applications are office applications on a PC, CAD programs, photo manipulation software, travel apps, productivity apps, and so on.
2. `Interactive transaction-based applications`:- These are applications that execute on a remote computer and that are accessed by users from their own computers,phones, or tablets. Obviously, these include web applications such as e-commerce applications where you interact with a remote system to buy goods and services.This class of application also includes business systems, where a business provides access to its systems through a web browser or special-purpose client program and cloud-based services, such as mail and photo sharing. Interactive applications often incorporate a large data store that is accessed and updated in each transaction.
3. `Embedded control systems`:- These are software control systems that control and manage hardware devices. Numerically, there are probably more embedded systems than any other type of system. Examples of embedded systems include the software in a mobile (cell) phone, software that controls antilock braking in a car, and software in a microwave oven to control the cooking process.
4. `Batch processing systems`:- These are business systems that are designed to process data in large batches. They process large numbers of individual inputs to create corresponding outputs. Examples of batch systems are periodic billing systems, such as phone billing systems, and salary payment systems.
5. `Entertainment systems`:- These are systems for personal use that are intended to entertain the user. Most of these systems are games of one kind or another, which may run on special-purpose console hardware. The quality of the user interaction offered is the most important distinguishing characteristic of entertainment systems.
6. `Systems for modeling and simulation`:- These are systems that are developed by scientists and engineers to model physical processes or situations, which include many separate, interacting objects. These are often computationally intensive and require high-performance parallel systems for execution.
7. `Data collection and analysis systems`:- Data collection systems are systems that collect data from their environment and send that data to other systems for processing. The software may have to interact with sensors and often is installed in a hostile environment such as inside an engine or in a remote location. “Big data” analysis may involve cloud-based systems carrying out statistical analysis and looking for relationships in the collected data.
8. `Systems of systems`:- These are systems, used in enterprises and other large organizations, that are composed of a number of other software systems. Some of these may be generic software products, such as an ERP system. Other systems in the assembly may be specially written for that environment.

The boundaries between these system types are blurred. If you develop a game for a phone, you have to take into account the same constraints (power, hardware interaction) as the developers of the phone software. Batch processing systems are often used in conjunction with web-based transaction systems. For example, in a company, travel expense claims may be submitted through a web application but processed in a batch application for monthly payment.


## software process

A software process is a set of related activities that leads to the production of a software system.There are many different types of software systems, and there is no universal software engineering method that is applicable to all of them. Consequently, there is no universally applicable software process. The process used in different companies depends on the type of software being developed, the requirements of the software customer, and the skills of the people writing the software.
However, although there are many different software processes, they all must include, in some form, the four fundamental software engineering activities:-
1. `Software specification`:- The functionality of the software and constraints on its operation must be defined.
2. `Software development` - The software to meet the specification must be produced.
3. `Software validation` - The software must be validated to ensure that it does what the customer wants.
4. `Software evolution` - The software must evolve to meet changing customer needs.

These activities are complex activities in themselves, and they include subactivities such as requirements validation, architectural design, and unit testing. Processes also include other activities, such as software configuration management and project planning that support production activities.

**Software process models(SOFTWARE DEVELOPMENT LIFE CYCLE)**:- A software process model (sometimes called a Software Development Life Cycle or SDLC model) is a simplified representation of a software process. Each process model represents a process from a particular perspective and thus only provides partial information about that process. For example, a process activity model shows the activities and their sequence but may not show the roles of the people involved in these activities.

The systems development life cycle (SDLC) is the process of determining how an information system (IS) can support business needs, designing the system, building it, and delivering it to users.

A software life cycle model (also called process model) is a descriptive and diagrammatic representation of the software life cycle
A life cycle model maps the different activities performed on a software product from its inception to retirement.

There are a number of very general process models (sometimes called process paradigms).These generic models are high-level, abstract descriptions of software processes that can be used to explain different approaches to software development. You can think of them as process frameworks that may be extended and adapted to create more specific software engineering processes.
The general process models includes:-

1. `The waterfall model` - This takes the fundamental process activities of specification, development, validation, and evolution and represents them as separate process phases such as requirements specification, software design, implementation, and testing.
2. `Incremental development` - This approach interleaves the activities of specification, development, and validation. The system is developed as a series of versions(increments), with each version adding functionality to the previous version.
3. `Integration and configuration` - This approach relies on the availability of reusable components or systems. The system development process focuses on configuring these components for use in a new setting and integrating them into a system.

There is no universal process model that is right for all kinds of software development. The right process depends on the customer and regulatory requirements, the environment where the software will be used, and the type of software being developed.For example, safety-critical software is usually developed using a waterfall process as lots of analysis and documentation is required before implementation begins. Software products are now always developed using an incremental process model. Business systems are increasingly being developed by configuring existing systems and integrating these to create a new system with the functionality that is required.

*The waterfall model*:- The first published model of the software development process was derived from engineering process models used in large military systems engineering (Royce 1970).
It presents the software development process as a number of stages:- Requirements definition, System and software Design, Implementation and Unit testing, Integration and system testing,Operation and maintenance.
Because of the cascade from one phase to another, this model is known as the waterfall model or software life cycle. The waterfall model is an example of a plan-driven process. In principle at least, you plan and schedule all of the process activities before starting software development.

The stages of the waterfall model directly reflect the fundamental software development activities:
1. Requirements analysis and definition - The system’s services, constraints, and goals are established by consultation with system users. They are then defined in detail and serve as a system specification.
2. System and software design - The systems design process allocates the requirements to either hardware or software systems. It establishes an overall system architecture. Software design involves identifying and describing the fundamental software system abstractions and their relationships.
3. Implementation and unit testing - During this stage, the software design is realized as a set of programs or program units. Unit testing involves verifying that each unit meets its specification.
4. Integration and system testing - The individual program units or programs are integrated and tested as a complete system to ensure that the software requirements have been met. After testing, the software system is delivered to the customer.
5. Operation and maintenance - Normally, this is the longest life-cycle phase. The system is installed and put into practical use. Maintenance involves correcting errors that were not discovered in earlier stages of the life cycle, improving the implementation of system units, and enhancing the system’s services as new requirements are discovered.

In principle, the result of each phase in the waterfall model is one or more documents that are approved (“signed off”). The following phase should not start until the previous phase has finished. For hardware development, where high manufacturing costs are involved, this makes sense. However, for software development, these stages overlap and feed information to each other. During design, problems with requirements are identified; during coding design problems are found, and so on.The software process, in practice, is never a simple linear model but involves feedback from one phase to another.
As new information emerges in a process stage, the documents produced at previous stages should be modified to reflect the required system changes. For example, if it is discovered that a requirement is too expensive to implement, the requirements document should be changed to remove that requirement. However, this requires customer approval and delays the overall development process.

The need for early commitment and system rework when changes are made means that the waterfall model is only appropriate for some types of system:
1. Embedded systems where the software has to interface with hardware systems. Because of the inflexibility of hardware, it is not usually possible to delay decisions on the software’s functionality until it is being implemented.
2. Critical systems where there is a need for extensive safety and security analysis of the software specification and design. In these systems, the specification and design documents must be complete so that this analysis is possible. Safety-related problems in the specification and design are usually very expensive to correct at the implementation stage.
3. Large software systems that are part of broader engineering systems developed by several partner companies. The hardware in the systems may be developed using a similar model, and companies find it easier to use a common model for hardware and software. Furthermore, where several companies are involved, complete specifications may be needed to allow for the independent development of different subsystems.

The waterfall model is not the right process model in situations where informal team communication is possible and software requirements change quickly. Iterative development and agile methods are better for these systems.


*Incremental development*:- Incremental development is based on the idea of developing an initial implementation, getting feedback from users and others, and evolving the software through several versions until the required system has been developed.Specification, development, and validation activities are interleaved rather than ­separate, with rapid feedback across activities.

Incremental development in some form is now the most common approach for the development of application systems and software products. This approach can be either plan-driven, agile or, more usually, a mixture of these approaches. In a plan-driven approach, the system increments are identified in advance; if an agile approach is adopted, the early increments are identified, but the development of later increments depends on progress and customer priorities.

Incremental software development, which is a fundamental part of agile development methods, is better than a waterfall approach for systems whose requirements are likely to change during the development process. This is the case for most business systems and software products.


*Integration and configuration*:- In the majority of software projects, there is some software reuse. This often happens informally when people working on the project know of or search for code that is similar to what is required. They look for these, modify them as needed, and integrate them with the new code that they have developed.

This informal reuse takes place regardless of the development process that is used. However, since 2000, software development processes that focus on the reuse of existing software have become widely used. Reuse-oriented approaches rely on a base of reusable software components and an integrating framework for the composition of these components.
Three types of software components are frequently reused:
1. Stand-alone application systems that are configured for use in a particular environment. These systems are general-purpose systems that have many features,but they have to be adapted for use in a specific application.
2. Collections of objects that are developed as a component or as a package to be integrated with a component framework such as the Java Spring framework(Wheeler and White 2013).
3. Web services that are developed according to service standards and that are available for remote invocation over the Internet.


Building an information system using the SDLC follows a set of four fundamental phases: planning, analysis, design, and implementation.
Each phase is itself composed of a series of steps, which rely on techniques that produce deliverables (specific documents and files that explain various elements of the system).

`Planning`:- The planning phase is the fundamental process of understanding why an information system should be built and determining how the project team will go about building it. 

It has two steps:
1. Project Initiation.
2. Project Management.


`Analysis`:- The analysis phase answers the questions of who will use the system, what the system will do, and where and when it will be used.
During this phase, the project team investigates any current system(s), identifies improvement opportunities, and develops a concept for the new system. 
This phase has four steps:-
1. analysis strategy.
2. Requirements Gathering & analysis
3. Requirements specification/definition.
4. Requirements validation.


`Design`:- The design phase decides how the system will operate in terms of the hardware, software, and network infrastructure that will be in place; the user interface, forms, and reports that will be used; and the specific programs, databases, and files that will be needed. Although most of the strategic decisions about the system are made in the development of the system concept during the analysis phase, the steps in the design phase determine exactly how the system will operate.
The design phase has four steps:
1. Architectural design
2. Interface design.
3. Component design.
4. Database design.


`Implementation`:- The final phase in the SDLC is the implementation phase, during which the system is actually built (or purchased, in the case of a packaged software design and installed). This is the phase that usually gets the most attention, because for most systems it is the longest and most expensive single part of the development process.
This phase has three steps:
1. System construction.
2. Deployment.
3. Maintenance.


**Process activities**:- Real software processes are interleaved sequences of technical, collaborative, and managerial activities with the overall goal of specifying, designing, implementing,and testing a software system. Generally, processes are now tool-supported. This means that software developers may use a range of software tools to help them, such as requirements management systems, design model editors, program editors, automated testing tools, and debuggers.

The four basic process activities of specification, development, validation, and evolution are organized differently in different development processes. In the waterfall model, they are organized in sequence, whereas in incremental development they are interleaved. How these activities are carried out depends on the type of software being developed, the experience and competence of the developers, and the type of organization developing the software.

`Software specification`:- Software specification or requirements engineering is the process of understanding and defining what services are required from the system and identifying the constraints on the system’s operation and development. Requirements engineering is a particularly critical stage of the software process, as mistakes made at this stage inevitably lead to later problems in the system design and implementation.
Before the requirements engineering process starts, a company may carry out feasibility or marketing study to assess whether or not there is a need or a market for the software and whether or not it is technically and financially realistic to develop the software required. Feasibility studies are short-term, relatively cheap studies that inform the decision of whether or not to go ahead with a more detailed analysis.
The requirements engineering process aims to produce an agreed requirements document that specifies a system satisfying stakeholder requirements.Requirements are usually presented at two levels of detail. End-users and customers need a high-level statement of the requirements; system developers need a more detailed system specification.

There are three main activities in the requirements engineering process:
1. Requirements elicitation and analysis - This is the process of deriving the system requirements through observation of existing systems, discussions with potential users and procurers, task analysis, and so on. This may involve the development of one or more system models and prototypes. These help you understand the system to be specified.
2. Requirements specification - Requirements specification is the activity of translating the information gathered during requirements analysis into a document that defines a set of requirements. Two types of requirements may be included in this document. User requirements are abstract statements of the system requirements for the customer and end-user of the system; system requirements are a more detailed description of the functionality to be provided.
3. Requirements validation - This activity checks the requirements for realism, consistency, and completeness. During this process, errors in the requirements document are inevitably discovered. It must then be modified to correct these problems.

Requirements analysis continues during definition and specification, and new requirements come to light throughout the process. Therefore, the activities of analysis, definition, and specification are interleaved.
In agile methods, requirements specification is not a separate activity but is seen as part of system development. Requirements are informally specified for each increment of the system just before that increment is developed. Requirements are specified according to user priorities. The elicitation of requirements comes from users who are part of or work closely with the development team.


`Software design and implementation`:- The implementation stage of software development is the process of developing an executable system for delivery to the customer. Sometimes this involves separate activities of software design and programming. However, if an agile approach to development is used, design and implementation are interleaved, with no formal design documents produced during the process. Of course, the software is still designed, but the design is recorded informally on whiteboards and programmer’s notebooks.
A software design is a description of the structure of the software to be implemented, the data models and structures used by the system, the interfaces between system components and, sometimes, the algorithms used. Designers do not arrive at a finished design immediately but develop the design in stages. They add detail as they develop their design, with constant backtracking to modify earlier designs.

Most software interfaces with other software systems. These other systems include the operating system, database, middleware, and other application systems.These make up the “software platform,’ the environment in which the software will execute. Information about this platform is an essential input to the design process,as designers must decide how best to integrate it with its environment. If the system is to process existing data, then the description of that data may be included in the platform specification. Otherwise, the data description must be an input to the design process so that the system data organization can be defined.
The activities in the design process vary, depending on the type of system being developed. For example, real-time systems require an additional stage of timing design but may not include a database, so there is no database design involved.

1. Architectural design, where you identify the overall structure of the system, the principal components (sometimes called subsystems or modules), their relationships, and how they are distributed.
2. Database design, where you design the system data structures and how these are to be represented in a database. Again, the work here depends on whether an existing database is to be reused or a new database is to be created.
3. Interface design, where you define the interfaces between system components.This interface specification must be unambiguous. With a precise interface, a component may be used by other components without them having to know how it is implemented. Once interface specifications are agreed, the components can be separately designed and developed.
4. Component selection and design, where you search for reusable components and, if no suitable components are available, design new software components.The design at this stage may be a simple component description with the implementation details left to the programmer. Alternatively, it may be a list of changes to be made to a reusable component or a detailed design model expressed in the UML. The design model may then be used to automatically generate an implementation.

The development of a program to implement a system follows naturally from system design. Although some classes of program, such as safety-critical systems,are usually designed in detail before any implementation begins, it is more common for design and program development to be interleaved. Software development tools may be used to generate a skeleton program from a design. This includes code to define and implement interfaces, and, in many cases, the developer need only add details of the operation of each program component.

Programming is an individual activity, and there is no general process that is usually followed. Some programmers start with components that they understand, develop these, and then move on to less understood components. Others take the opposite approach, leaving familiar components till last because they know how to develop them. Some developers like to define data early in the process and then use this to drive the program development; others leave data unspecified for as long as possible.
Normally, programmers carry out some testing of the code they have developed.This often reveals program defects (bugs) that must be removed from the program.Finding and fixing program defects is called debugging. Defect testing and debugging are different processes. Testing establishes the existence of defects. Debugging is concerned with locating and correcting these defects.
When you are debugging, you have to generate hypotheses about the observable behavior of the program and then test these hypotheses in the hope of finding the fault that caused the output anomaly. Testing the hypotheses may involve tracing the program code manually. It may require new test cases to localize the problem. Interactive debugging tools, which show the intermediate values of program variables and a trace of the statements executed, are usually used to support the debugging process.


`Software validation`:- Software validation or, more generally, verification and validation (V & V) is intended to show that a system both conforms to its specification and meets the expectations of the system customer. Program testing, where the system is executed using simulated test data, is the principal validation technique. Validation may also involve checking processes, such as inspections and reviews, at each stage of the software process from user requirements definition to program development.However, most V & V time and effort is spent on program testing.

Except for small programs, systems should not be tested as a single, monolithic unit.For custom software, customer testing involves testing the system with real customer data. For products that are sold as applications, customer testing is sometimes called beta testing where selected users try out and comment on the software.

The stages in the testing process are:
1.      Component testing The components making up the system are tested by the people
developing the system. Each component is tested independently, without other
system components. Components may be simple entities such as functions or
object classes or may be coherent groupings of these entities. Test automation
tools, such as JUnit for Java, that can rerun tests when new versions of the
­component are created, are commonly used (Koskela 2013).
2.   System testing System components are integrated to create a complete system.
This process is concerned with finding errors that result from unanticipated
interactions between components and component interface problems. It is also
concerned with showing that the system meets its functional and non-functional
requirements, and testing the emergent system properties. For large systems,
this may be a multistage process where components are integrated to form
­subsystems that are individually tested before these subsystems are integrated to
form the final system.
3.   Customer testing This is the final stage in the testing process before the system
is accepted for operational use. The system is tested by the system customer (or
potential customer) rather than with simulated test data. For custom-built
­software, customer testing may reveal errors and omissions in the system
requirements definition, because the real data exercise the system in different
ways from the test data. Customer testing may also reveal requirements problems
where the system’s facilities do not really meet the users’ needs or the system
performance is unacceptable. For products, customer testing shows how well
the software product meets the customer’s needs.


`Software evolution`:- The flexibility of software is one of the main reasons why more and more software is being incorporated into large, complex systems. Once a decision has been made to manufacture hardware, it is very expensive to make changes to the hardware design.
However, changes can be made to software at any time during or after the system development. Even extensive changes are still much cheaper than corresponding changes to system hardware.
Historically, there has always been a split between the process of software development and the process of software evolution (software maintenance). People think of software development as a creative activity in which a software system is developed from an initial concept through to a working system. However, they sometimes think of software maintenance as dull and uninteresting. They think that software maintenance is less interesting and challenging than original software development.
This distinction between development and maintenance is increasingly irrelevant.
Very few software systems are completely new systems, and it makes much more sense to see development and maintenance as a continuum. Rather than two separate processes, it is more realistic to think of software engineering as an evolutionary process where software is continually changed over its lifetime in response to changing requirements and customer needs.


**Coping with change**:- Change is inevitable in all large software projects. The system requirements change as businesses respond to external pressures, competition, and changed management priorities. As new technologies become available, new approaches to design and implementation become possible. Therefore whatever software process model is used, it is essential that it can accommodate changes to the software being developed.
Change adds to the costs of software development because it usually means that work that has been completed has to be redone. This is called rework. For example, if the relationships between the requirements in a system have been analyzed and new requirements are then identified, some or all of the requirements analysis has to be repeated. It may then be necessary to redesign the system to deliver the new requirements, change any programs that have been developed, and retest the system.
Two related approaches may be used to reduce the costs of rework:
1. Change anticipation, where the software process includes activities that can anticipate or predict possible changes before significant rework is required. For example, a prototype system may be developed to show some key features of the system to customers. They can experiment with the prototype and refine their requirements before committing to high software production costs.
2. Change tolerance, where the process and software are designed so that changes can be easily made to the system. This normally involves some form of incremental development. Proposed changes may be implemented in increments that have not yet been developed. If this is impossible, then only a single increment (a small part of the system) may have to be altered to incorporate the change.

Two ways of coping with change and changing system requirements:
1. System prototyping, where a version of the system or part of the system is developed quickly to check the customer’s requirements and the feasibility of design decisions. This is a method of change anticipation as it allows users to experiment with the system before delivery and so refine their requirements.The number of requirements change proposals made after delivery is therefore likely to be reduced.
2. Incremental delivery, where system increments are delivered to the customer for comment and experimentation. This supports both change avoidance and change tolerance. It avoids the premature commitment to requirements for the whole system and allows changes to be incorporated into later increments at relatively low cost.



Fields:- Computer programming,DevOps,Empirical software engineering,Experimental software engineering,Formal methods,Requirements engineering,Search-based software engineering,Site reliability engineering,Social software engineering,Software deployment,Software design,Software maintenance,Software testing,Systems analysis.

Concepts	
AbstractionCI/CDCompatibility Backward compatibilityCompatibility layerCompatibility modeForward compatibilitySoftware incompatibilityComponent-based software engineeringData modelingEnterprise architectureFunctional specificationModeling languageProgramming paradigmSoftwareSoftware archaeologySoftware architectureSoftware configuration managementSoftware development process/methodologySoftware qualitySoftware quality assuranceSoftware systemSoftware verification and validationStructured analysis Essential analysis
Orientations	
AgileAspect-orientedObject orientationOntologySDLCService orientation
Models	
Developmental	
AgileEUPExecutable UMLIncremental modelIterative modelPrototype modelRADScrumSpiral modelUPV-modelWaterfall modelXPModel-driven engineeringRound-trip engineering
Other	
CMMIData modelER modelFunction modelInformation modelMetamodelingObject modelSPICESystems modelView model
Languages	
IDEFSysMLUMLUSL
