# Software Engineering

Software engineering is a branch of computer science, which uses well-defined engineering concepts required to produce efficient, durable, scalable, in-budget and on-time software products.
Software engineering is an engineering discipline that is concerned with all aspects of software production.

`software` - Computer programs and associated documentation.Software products may be developed for a particular customer or may be developed for a general market.

The business environment relies heavily on software for many functions - from automated traffic control systems to complex manufacturing processes, and Software Engineers are crucial in the development of software that provides real solutions. A Software Engineer needs to address the entire software development lifecycle - to analyse the needs, and then design, test and develop software in order to meet those needs.


- Introduction-Software & Software engineering:-
    - Types of Software.
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

## SOFTWARE DEVELOPMENT LIFE CYCLE (software process)

The systems development life cycle (SDLC) is the process of determining how an information system (IS) can support business needs, designing the system, building it, and delivering it to users.

A software life cycle model (also called process model) is a descriptive and diagrammatic representation of the software life cycle
A life cycle model maps the different activities performed on a software product from its inception to retirement.

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



## Architecturial Design

Architectural design is concerned with understanding how a software system should be organized and designing the overall structure of that system.In the model of the software development process architectural design is the first stage in the software design process. It is the critical link between design and requirements engineering, as it identifies the main structural components in a system and the relationships between them. The output of the architectural design process is an architectural model that describes how the system is organized as a set of c­ommunicating components.

In agile processes, it is generally accepted that an early stage of an agile development process should focus on designing an overall system architecture. Incremental development of architectures is not usually successful.






## Distributed Software Engineering

A distributed system is one involving several computers,in contrast with centralized systems where all of the system components execute on a single computer.
Distributed SE is a collection of independent computers that appears to the user as a single coherent system.

*Architectural patterns for distributed systems*:- Designers of distributed systems have to organize their system designs to find a balance between performance, dependability, security, and manageability of the system. There is no universal model of system organization that is appropriate for all circumstances so various distributed architectural styles have emerged. When designing a distributed application,you should choose an architectural style that supports the critical non-functional requirements of your system.

- `Master-slave architectures`:- Master-slave architectures for distributed systems are commonly used in real-time systems where there may be separate processors associated with data acquisition from the system’s environment, data processing, and computation and actuator management.
- `Two-tier client–server architectures`:- which is used for simple client–server systems, and in situations where it is important to centralize the system for security reasons.In such cases, communication between the client and server is normally encrypted.


## Service-oriented software Engineering


**RESTful services**:- The initial developments of web services and service-oriented software engineering were standards-based, with XML-based messages exchanged between services. This is a general approach that allows for the development of complex services, dynamic service binding, and control over quality of service and service dependability.
However, as services were developed, it emerged that most of these were single-function services with relatively simple input and output interfaces. Service users were not really interested in dynamic binding and the use of multiple service providers. They rarely use web service standards for quality of service, reliability, and so forth.

The problem is that web services standards are “heavyweight” standards that are sometimes overly general and inefficient. Implementing these standards requires a considerable amount of processing to create, transmit, and interpret the associated XML messages. This slows down communications between services, and, for high-throughput systems, additional hardware may be required to deliver the quality of service required.
In response to this situation, an alternative “lightweight” approach to web service architecture has been developed. This approach is based on the REST architectural style, where REST stands for Representational State Transfer.

REST is an architectural style based on transferring representations of resources from a server to a client. It is the style that underlies the web as a whole and has been used as a much simpler method than SOAP/WSDL for implementing web service interfaces.
The fundamental element in a RESTful architecture is a resource. Essentially, a resource is simply a data element such as a catalog and a medical record, or a document, such as this book chapter. In general, resources may have multiple representations; that is, they can exist in different formats.

In a RESTful architecture, everything is represented as a resource. Resources have a unique identifier, which is their URL. Resources are a bit like objects, with four fundamental polymorphic operations associated with them:-

1. Create - bring resource into existence
2. Read - return a representation of the resource.
3. Update - change value of the resource.
4. Delete - make resource inaccessible.

The Web is an example of a system that has a RESTful architecture. Web pages are resources, and the unique identifier of a web page is its URL.The web protocols http and https are based on four actions, namely, POST, GET,PUT, and DELETE.





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


## Software Testing

Testing is intended to show that a program does what it is intended to do and to ­discover program defects before it is put into use. When you test software, you execute a program using artificial data. You check the results of the test run for errors,anomalies, or information about the program’s non-functional attributes.
When you test software, you are trying to do two things:
1. Demonstrate to the developer and the customer that the software meets its requirements.
2. Find inputs or input sequences where the behavior of the software is incorrect, undesirable, or does not conform to its specification.These are caused by defects(bugs) in the software. When you test software to find defects, you are trying to root out undesirable system behavior such as system crashes, unwanted interactions with other systems, incorrect computations, and data corruption.

The first of these is validation testing, where you expect the system to perform correctly using a set of test cases that reflect the system’s expected use. The ­second is defect testing, where the test cases are designed to expose defects. The test cases in defect testing can be deliberately obscure and need not reflect how the system is normally used.

Testing cannot demonstrate that the software is free of defects or that it will behave as specified in every circumstance.
Testing can only show the presence of errors, not their absence.

Input Test Data    -------------> Output test Results.

Input Test Data - Inputs causing anomalous behavior.
Output Results - Outputs which reveal the presence of defects.

Testing is part of a broader process of software verification and validation (V & V).
Verification and validation processes are concerned with checking that software being developed meets its specification and delivers the functionality expected by the people paying for the software. These checking processes start as soon as requirements become available and continue through all stages of the development process.
`Software verification` is the process of checking that the software meets its stated functional and non-functional requirements. Validation is a more general process.The aim of `software validation` is to ensure that the software meets the customer’s expectations. It goes beyond checking conformance with the specification to demonstrating that the software does what the customer expects it to do.


*Test planning*:- Test planning is concerned with scheduling and resourcing all of the activities in the testing process. It involves defining the testing process, taking into account the people and the time available. Usually, a test plan will be created that defines what is to be tested, the predicted testing schedule, and how tests will be recorded. For critical systems, the test plan may also include details of the tests to be run on the software.

Typically, a commercial software system has to go through three stages of testing:
1. `Development testing`, where the system is tested during development to discover bugs and defects. System designers and programmers are likely to be involved
in the testing process.
2. `Release testing`, where a separate testing team tests a complete version of the system before it is released to users. The aim of release testing is to check that the system meets the requirements of the system stakeholders.
3. `User testing`, where users or potential users of a system test the system in their own environment. For software products, the “user” may be an internal marketing group that decides if the software can be marketed, released and sold.`Acceptance testing` is one type of user testing where the customer formally tests a system to decide if it should be accepted from the system supplier or if further development is required.

In practice, the testing process usually involves a mixture of manual and automated testing. In `manual testing`, a tester runs the program with some test data and compares the results to their expectations. They note and report discrepancies to the program developers. In `automated testing`, the tests are encoded in a program that is run each time the system under development is to be tested. This is faster than manual testing, especially when it involves regression testing—re-running previous tests to check that changes to the program have not introduced new bugs.


**Development testing**:- Development testing includes all testing activities that are carried out by the team developing the system. The tester of the software is usually the programmer who developed that software. Some development processes use programmer/tester pairs where each programmer has an associated tester who develops tests and assists with the testing process. For critical systems, a more formal process may be used, with a separate testing group within the development team.This group is responsible for developing tests and maintaining detailed records of test results.
There are three stages of development testing:

1. `Unit testing`, where individual program units or object classes are tested. Unit testing should focus on testing the functionality of objects or methods.
2. `Component testing`, where several individual units are integrated to create composite components. Component testing should focus on testing the component interfaces that provide access to the component functions.
3. `System testing`, where some or all of the components in a system are integrated and the system is tested as a whole. System testing should focus on testing component interactions.

Development testing is primarily a defect testing process, where the aim of testing is to discover bugs in the software. It is therefore usually interleaved with debugging—the process of locating problems with the code and changing the program to fix these problems.

`Debugging` is the process of fixing errors and problems that have been discovered by testing. Using information from the program tests, debuggers use their knowledge of the programming language and the intended outcome of the test to locate and repair the program error. When you are debugging a program, you usually use interactive tools that provide extra information about program execution.

*Unit testing*:- Unit testing is the process of testing program components, such as methods or object classes. Individual functions or methods are the simplest type of component. Your tests should be calls to these routines with different input parameters.
When you are testing object classes, you should design your tests to provide coverage of all of the features of the object. This means that you should test all operations associated with the object; set and check the value of all attributes associated with the object; and put the object into all possible states. This means that you should simulate all events that cause a state change.
Whenever possible, you should automate unit testing. In automated unit testing, you make use of a test automation framework, such as JUnit to write and run your program tests. Unit testing frameworks provide generic test classes that you extend to create specific test cases. They can then run all of the tests that you have implemented and report, often through some graphical unit interface (GUI), on the success or otherwise of the tests. An entire test suite can often be run in a few seconds, so it is possible to execute all tests every time you make a change to the program.
An automated test has three parts:

1. A setup part, where you initialize the system with the test case, namely, the inputs and expected outputs.
2. A call part, where you call the object or method to be tested.
3. An assertion part, where you compare the result of the call with the expected result. If the assertion evaluates to true, the test has been successful; if false,then it has failed.

Sometimes, the object that you are testing has dependencies on other objects that may not have been implemented or whose use slows down the testing process. For example, if an object calls a database, this may involve a slow setup process before it can be used. In such cases, you may decide to use mock objects.
`Mock objects` are objects with the same interface as the external objects being used that simulate its functionality. For example, a mock object simulating a database may have only a few data items that are organized in an array. They can be accessed quickly, without the overheads of calling a database and accessing disks.Similarly, mock objects can be used to simulate abnormal operations or rare events. For example, if your system is intended to take action at certain times of day, your mock object can simply return those times, irrespective of the actual clock time.

`Path testing`:- Path testing is a testing strategy that aims to exercise every independent execution path through a component or program. If every independent path is executed, then all statements in the component must have been executed at least once. All conditional statements are tested for both true and false cases. In an object-oriented development process, path testing may be used to test the methods associated with objects.


- *Component testing*:- Software components are often made up of several interacting objects. For example, in the weather station system, the reconfiguration component includes objects that deal with each aspect of the reconfiguration. You access the functionality of these objects through component interfaces.
Assume that components A, B, and C have been integrated to create a larger component or subsystem.The test cases are not applied to the individual components but rather to the interface of the composite component created by combining these components. Interface errors in the composite component may not be detectable by testing the individual objects because these errors result from interactions between the objects in the component.There are different types of interface between program components and, consequently, different types of interface error that can occur:


- *System testing*:- System testing during development involves integrating components to create a version of the system and then testing the integrated system. System testing checks that components are compatible, interact correctly, and transfer the right data at the right time across their interfaces. It obviously overlaps with component testing, but there are two important differences:
1. During system testing, reusable components that have been separately developed and off-the-shelf systems may be integrated with newly developed components.The complete system is then tested.
2. Components developed by different team members or subteams may be integrated at this stage. System testing is a collective rather than an individual process. In some companies, system testing may involve a separate testing team with no involvement from designers and programmers.


`Test-driven development`:- Test-driven development (TDD) is an approach to program development in which you interleave testing and code development.
You develop the code incrementally, along with a set of tests for that increment. You don’t start working on the next increment until the code that you have developed passes all of its tests. Test-driven development was introduced as part of the XP agile development method. However, it has now gained mainstream acceptance and may be used in both agile and plan-based processes.
The fundamental TDD process steps are as follows:
1. You start by identifying the increment of functionality that is required. This should normally be small and implementable in a few lines of code.
2. You write a test for this functionality and implement it as an automated test.This means that the test can be executed and will report whether or not it has
passed or failed.
3. You then run the test, along with all other tests that have been implemented.Initially, you have not implemented the functionality so the new test will fail.This is deliberate as it shows that the test adds something to the test set.
4. You then implement the functionality and re-run the test. This may involve refactoring existing code to improve it and add new code to what’s already there.
5. Once all tests run successfully, you move on to implementing the next chunk of functionality.

An automated testing environment, such as the JUnit environment that supports Java program testing is essential for TDD. As the code is developed in very small increments, you have to be able to run every test each time that you add functionality or refactor the program. Therefore, the tests are embedded in a separate program that runs the tests and invokes the system that is being tested.Using this approach, you can run hundreds of separate tests in a few seconds.
Test-driven development helps programmers clarify their ideas of what a code segment is actually supposed to do. To write a test, you need to understand what is intended, as this understanding makes it easier to write the required code. Of course,if you have incomplete knowledge or understanding, then TDD won’t help. If you don’t know enough to write the tests, you won’t develop the required code.


**Release testing**:- Release testing is the process of testing a particular release of a system that is intended for use outside of the development team. Normally, the system release is for customers and users. In a complex project, however, the release could be for other teams that are developing related systems. For software products, the release could be for product management who then prepare it for sale.
There are two important distinctions between release testing and system testing during the development process:
1. The system development, team should not be responsible for release testing.
2. Release testing is a process of validation checking to ensure that a system meets its requirements and is good enough for use by system customers. System testing by the development team should focus on discovering bugs in the system (defect testing).

The primary goal of the release testing process is to convince the supplier of the system that it is good enough for use. If so, it can be released as a product or delivered to the customer. Release testing, therefore, has to show that the system delivers its specified functionality, performance, and dependability, and that it does not fail during normal use.


**User testing**:- User or customer testing is a stage in the testing process in which users or customers provide input and advice on system testing. This may involve formally testing a system that has been commissioned from an external supplier. Alternatively, it may be an informal process where users experiment with a new software product to see if they like it and to check that it does what they need. User testing is essential, even when comprehensive system and release testing have been carried out. Influences from the user’s working environment can have a major effect on the reliability, performance, usability, and robustness of a system.
It is practically impossible for a system developer to replicate the system’s working environment, as tests in the developer’s environment are inevitably artificial. For example, a system that is intended for use in a hospital is used in a clinical environment where other things are going on, such as patient emergencies and conversations with relatives. These all affect the use of a system, but developers cannot include them in their testing environment.
There are three different types of user testing:
1. Alpha testing, where a selected group of software users work closely with the development team to test early releases of the software.
2. Beta testing, where a release of the software is made available to a larger group of users to allow them to experiment and to raise problems that they discover with the system developers.
3. Acceptance testing, where customers test a system to decide whether or not it is ready to be accepted from the system developers and deployed in the customer environment.

