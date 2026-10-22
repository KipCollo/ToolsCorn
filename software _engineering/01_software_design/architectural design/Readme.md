# Architectural design

Architectural design is concerned with understanding how a software system should be organized and designing the overall structure of that system.It is the critical link between design and requirements engineering, as it identifies the main structural components in a system and the relationships between them. The output of the architectural design process is an architectural model that describes how the system is organized as a set of communicating components.

## Architectural patterns

Architectural patterns were proposed in the 1990s under the name “architectural styles”

Architectural patterns are a set of solutions that have been proven to work well for specific types of software systems. They provide a common vocabulary and set of best practices for designing and building software systems, and can help developers make better design decisions. Some common architectural patterns include:

- Model-View-Controller (MVC): A pattern for separating the user interface, business logic, and data storage components of a system.
- Microservices: A pattern for building systems as a collection of small, independently deployable services that communicate over a network.
- Event-Driven: A pattern for building systems that respond to events and perform actions in response.
- Layered: A pattern for organizing a system into layers, with each layer providing a specific set of services to the layer above it.
- Pipe-and-Filter: A pattern for building systems as a series of independent, reusable processing elements that are connected together in a pipeline.
- Command-Query Responsibility Segregation (CQRS): A pattern for separating the handling of commands (which change the state of the system) from the handling of queries (which retrieve information from the system)
- Blackboard: A pattern for creating a centralized repository of information that can be accessed and modified by multiple independent modules or subsystems.
- Microkernel: A pattern that aims to minimize the amount of code running in kernel mode and move as much functionality as possible into user-mode processes.
- Serverless: A design pattern that allows developers to build and run applications and services without having to provision and manage servers.
- Message Queues and Streams: A pattern that decouples different components of a system and enables asynchronous communication between them.
- Event Sourcing: A pattern that stores all changes to the system's state as a sequence of events, rather than just the current state.

Learn more from the following links:

- [@article@Overview - Architectural Pattern](https://en.wikipedia.org/wiki/Architectural_pattern)
- [@video@Architecture Patterns Used In Enterprise Software Development](https://www.youtube.com/watch?v=BrT3AO8bVQY)

_Layered architecture_ - Organizes the system into layers, with related functionality associated with each layer. A layer provides services to the layer above it, so the lowest level layers represent core services that are likely to be used throughout the system.

_MVC (Model-View-Controller)_ - Separates presentation and interaction from the system data. The system is structured into three logical components that interact with each other. The Model component manages the system data and associated operations on that data. The View component defines and manages how the data is presented to the user. The Controller compo­nent manages user interaction (e.g., key presses, mouse clicks, etc.) and passes these interactions to the View and the Model.
Model-View-Controller (MVC) is an architectural pattern that separates the concerns of a software system into three distinct components: the model, the view, and the controller, where the model represents the data and the business logic of the system, the view represents the user interface of the system and the controller acts as an intermediary between the model and the view. The main goal of MVC is to separate the concerns of the system, making it easier to understand, maintain and evolve, it's widely used in web development.

Learn more from the following links:

- [@article@MVC Design Pattern](https://www.geeksforgeeks.org/mvc-design-pattern/)
- [@article@MVC Framework - Introduction](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)
- [@video@Tutorial - MVC Architectural Pattern](https://www.youtube.com/watch?v=e9S90R-Y24Q)

_Repository architecture_ - All data in a system is managed in a central repository that is accessible to all system components. Components do not interact directly, only through the repository.

_Client–server architecture_ - In a client–server architecture, the system is presented as a set of services, with each service delivered by a separate server. Clients are users of these services and access servers to make use of them.

_Pipe and filter architecture_ - The processing of the data in a system is organized so that each processing component (filter) is discrete and carries out one type of data transformation. The data flows (as in a pipe) from one component to another for processing.

_Architectural patterns for control_ - There are specific Architectural patterns that reflect commonly used ways of organizing control in a system.These include `hgcentralized control`, based on one component calling other components, and `event-based control`, where the system reacts to external events.
