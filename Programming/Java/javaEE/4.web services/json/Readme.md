# Java API for JSON Processing

Java API for JSON Processing (JSR 353). JSON is a data exchange format widely used in web services and other connected applications. JSR 353 provides an API to parse, transform, and query JSON data using the object model or the streaming model.

JSON (JavaScript Object Notation) is a lightweight, text-based, language-independent data exchange format that is easy for humans and machines to read and write. JSON can represent two structured types: objects and arrays. An object is an unordered collection of zero or more name/value pairs. An array is an ordered sequence of zero or more values. The values can be strings, numbers, booleans, null, and these two structured types.
JSON is often used in Ajax applications, configurations, databases, and RESTful web services. All popular websites offer JSON as the data exchange format with their RESTful web services.


`Generating and Parsing JSON Data`:- For generating and parsing JSON data, there are two programming models, which are imilar to those used for XML documents.

1. The object model creates a tree that represents the JSON data in memory. The tree can then be navigated, analyzed, or modified. This approach is the most flexible and allows for processing that requires access to the complete contents of the tree.However, it is often slower than the streaming model and requires more memory.The object model generates JSON output by navigating the entire tree at once.
2. The streaming model uses an event-based parser that reads JSON data one element at a time. The parser generates events and stops for processing when an object or an array begins or ends, when it finds a key, or when it finds a value.Each element can be processed or discarded by the application code, and then the parser proceeds to the next event. This approach is adequate for local processing,in which the processing of an element does not require information from the restof the data. The streaming model generates JSON output to a given stream by making a function call with one element at a time.


There are many JSON generators and parsers available for different programming languages and environments. JSON Processing in the Java EE Platform describes the functionality provided by the Java API for JSON Processing (JSR 353).

## JSON Processing in the Java EE Platform

The Java API for JSON Processing (JSON-P) JSR will develop a Java API to process (for e.g. parse, generate, transform and query) JSON.
Java EE includes support for JSR 353, which provides an API to parse, transform, and query JSON data using the object model or the streaming model described in Generating and Parsing JSON Data. The Java API for JSON Processing contains the following packages.

1. The javax.json package contains a reader interface, a writer interface, and a model builder interface for the object model. This package also contains other utility classes and Java types for JSON elements.
2. The javax.json.stream package contains a parser interface and a generator interface for the streaming model.
