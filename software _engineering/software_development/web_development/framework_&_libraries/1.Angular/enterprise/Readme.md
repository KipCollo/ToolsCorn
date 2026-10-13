# Enterprise Angular

One vital aspect here is decomposing the system into smaller libraries to reduce complexity.However, if this results in countless small libraries which are too intermingled, you haven’t exactly made progress. If everything depends on everything else, you can’t easily change or extend your system without breaking other parts.
Domain-driven design, especially strategic design, helps. Also, strategic design can be the foundation for building micro frontends.

1. Domain-Driven design
2. Nx Monorepos
3. Micro Frontends

## Domain-Driven Design

To make enterprise-scale applications maintainable, they need to be sub-divided into small, less complex, and decoupled parts.
To identify such parts and how can they communicate with each other we use technique: Strategic Design – a discipline of the domain driven design10 (DDD) approach.

DDD describes an approach that bridges the gap between the requirements for complex software systems and an appropriate application design. Historically, DDD came with two disciplines:`tactical design` and `strategic design`.
Tactical design proposes concrete concepts and design patterns.Meanwhile most of them are common knowledge. Examples are concepts like layering or patterns  like factories, repositories, and entities.
By contrast, strategic design deals with subdividing a huge system into smaller, decoupled, and less complex parts. This is what we need to define an architecture for a huge system that can evolve over time.

The goal of strategic design is to identify so-called sub-domains that don’t need to know much about each other. To recognize different sub-domains, it’s worth taking a look at the processes automated by your system.

To use these processes for identifying different domains, we can use several heuristics:

1. Organizational Structure: Different roles or different divisions that are responsible for several steps of the process are in indicator for the existence of several sub-domains.
2. Vocabulary: If the same term is used differently or has a significant different importance, we might have different sub-domains.
3. Pivotal Events: Pivotal Events are locations in the process where a significant (sub)task is completed. After such an event, very often, the process goes on at another time and/or place and/or with other roles. If our process was a movie, we’d have a scene change after such an event. Such events are likely boundaries between sub-domains.

Each of these heuristics gives you candidates for cutting your process into sub-domains. However,it’s your task to decide with which candidates to go. The general goal is to end up with slices that don’t need to know much about each other.
The good message is: You don’t need to do such decisions alone. You should do it together with other stakeholders like, first and foremost, business experts but also other architects, developers and product owners.

A modern approach for brining the knowledge of all these different people together is Event Storming11. It’s a workshop format where different groups of stakeholders. For this, they model the processes together with post-its (sticky notes).

`Domains are Modelled Separately`- Another important aspect of Strategic Design is that each domain is modelled separately. This is the key for decoupling domains from each other. While this might lead to redundancies, very often it doesn’t because each domain has a very unique perspective to its entities.
For instance, a product is not exactly the same in all domains. For example, while a product description is very detailed in the catalogue, the approval process only needs a few key data

In DDD, we distinguish between these two forms of a product. We create different models that are as concrete and meaningful as possible.
This approach prevents the creation of a single confusing model that attempts to describe the whole world. Such models have too many interdependencies that make decoupling and subdividing impossible.

Hence, each model is only valid for a specific area. DDD calls this area the bounded context12. To put it in another way: The bounded context defines thought borders and only within these borders the model makes sense. Beyond these borders we have a different perspective to the same concepts.Ideally, each domain has its own bounded context.
Within such a bounded context, we use a ubiquitous language. This is mainly the language of the domain experts. That means we try to mirror the real world with our model and also within our implementation. This makes the system more self-describing and reduces the risk for misunderstandings.

**NOTE**:- Strategic design is about identifying loosely-coupled sub-domains. In each domain, we find ubiquitous language and concepts that only make sense within the domain’s bounded context. A context map shows how those domains interact.

## Nx Monorepos

`Implementing Strategic Design with Nx Monorepos`:- We use an Nx-based workspace to implement the defined architecture. Nx is an extension for Angular CLI, which helps to break down a solution into different applications and libraries.

By default, Nx puts all applications into an apps folder and the libraries into libs.In our architecture, each domain is represented by a subfolder.Everything that is shared across different folders goes into shared. Besides this, we use prefixes to denote the layer a specific library is part of. For instance, the prefix feature- defines that the library is part of the feature layer.

Because such a workspace manages several applications and libraries in a common source code repository, there is also talk of a monorepo. This pattern is used extensively by Google and Facebook, among others.It allows source code sharing between project participants in a particularly simple way and prevents version conflicts by having only one central node_modules folder with dependencies. This arrangement ensures that, e.g., each library uses the same Angular version.

To create a new Nx-based Angular CLI project – a so-called workspace –, you can use the following command:

```sh
npm init nx-workspace e-proc
```

This command downloads a script which creates your workspace.Within this workspace, you can use ng generate to add applications and libraries.

`Categories for Libraries` - To reduce the cognitive load, the Nx team recommends to categorize libraries as follows:

• feature: Implements a use case with smart components
• data-access: Implements data accesses, e.g. via HTTP or WebSockets
• ui: Provides use case-agnostic and thus reusable components (dumb components)
• util: Provides helper functions

The separation between smart and dumb components. Smart components within feature libraries are use case-specific. An example is a component which enables a product search.
On the contrary, dumb components do not know the current use case. They receive data via inputs, display it in a specific way, and issue events. Such presentational components “just” help to implement use cases and hence they are reusable. An example is a date-time picker, which is unaware of which use case it supports. Hence, it is available within all use cases dealing with dates.

In addition to this, I also use the following categories:
• shell: For an application that has multiple domains, a shell provides the entry point for a domain
• api: Provides functionalities exposed to other domains
• domain: Domain logic like calculating additional expenses (not used here), validations or facades for use cases and state management.

Each category defines a layer in our architecture matrix. Also, each libary gets a prefix telling us to which category and hence layer it belongs to. This helps to maintain an overview.
