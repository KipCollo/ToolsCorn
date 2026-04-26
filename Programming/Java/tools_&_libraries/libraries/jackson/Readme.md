# Jackson Libraries

In Java, we need to work with data of different types of formats. In software development, we have to save, load, and transfer data into various formats. The JSON format is one of the formats which is mostly used in software development. Besides JSON, there are many more data formats such as CSV, XML, BSON, and Avro.

Jackson library is basically a suite of data processing libraries. The Jackson JSON library is a parser/generator library for transferring a .class file into a JSON format or JSON string. The Java Jackson library provides data binding and annotations, which can convert POJO objects into data or generate POJO from data.

`@JsonBackReference`
`@JsonManagedReference`

## Serialization Annotations

@JsonAnyGetter - The @JsonAnyGetter annotation allows the flexibility of using a Map field as standard properties.
@JsonGetter - The @JsonGetter annotation is an alternative to @JsonProperty annotation to mark the specified method as a getter method.
@JsonPropertyOrder - The @JsonPropertyOrder annotation is used to specify the order of properties on serialization.
@JsonRawValue - @JsonRawValue is used to instruct the Jackson to serialize a property exactly as is.
@JsonValue - @JsonValue indicates a single method that should be used to serialize the entire instance.
