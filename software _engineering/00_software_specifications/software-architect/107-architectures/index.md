# Architectures

_Event Driven Architecture_ - An Event-driven architecture(EDA) is a design pattern which software components execute in response to events.Events are significant changes in state.E.g a cusomer placing an order might be an event in an ecommerce system.

In EDA, systems are split into event producers and event consumers.Producers generate events and consumers react to them.
Due to its decoupled nature,EDA can easily scale horizontally by adding more event consumers.It promotes decoupling.Producers don't need to know about consumers and vice versa.

Events are handled asynchronously allowingsystems to remain responsive.It is transmitted via events buses or streams which manage and route the events to appropriate consumers.
EDA can introduce complexity when it comes to error handling and event ordering.
