# ENTITY-RELATIONSHIP MODEL

The entity-relationship (E-R) data model perceives the real world as consisting of basic objects, called `entities`, and `relationships` among these objects. It was developed to facilitate database design by allowing specification of an enterprise schema, which represents the overall logical structure of a database. The E-R data model is one of several semantic data models; the semantic aspect of the model lies in its representation of the meaning of the data. The E-R model is very useful in mapping the meanings and interactions of real-world enterprises onto a conceptual schema. Because of this usefulness, many database-design tools draw on concepts from the E-R model.


## Entity Sets

An `entity` is a “thing” or “object” in the real world that is distinguishable from all other objects. For example, each person in an enterprise is an entity. An entity has a set of properties, and the values for some set of properties may uniquely identify an entity. For instance, a person may have a person-id property whose value uniquely identifies that person.

An `entity set` is a set of entities of the same type that share the same properties, or attributes. The set of all persons who are customers at a given bank, for example, can be defined as the entity set customer. Similarly, the entity set loan might represent the set of all loans awarded by a particular bank.

**Attributes**:- An entity is represented by a set of attributes. Attributes are descriptive properties possessed by each member of an entity set. The designation of an attribute for an entity set expresses that the database stores similar information concerning each entity in the entity set; however, each entity may have its own value for each attribute.
For each attribute, there is a set of permitted values, called the `domain`, or value set, of that attribute. The domain of attribute customer-name might be the set of all text strings of a certain length. Similarly, the domain of attribute loan-number might be the set of all strings of the form “L-n” where n is a positive integer. A database thus includes a collection of entity sets, each of which contains any number of entities of the same type.

`Types of Attributes`:- An attribute, as used in the E-R model, can be characterized by the following attribute types:-

1. Simple and composite attributes: simple attributes are not divided into subparts,Composite attributes, on the other hand, can be divided into subparts (that is, other attributes). For example, an attribute name could be structured as a composite attribute consisting of first-name, middle-initial, and last-name.
2. Single-valued and multivalued attributes:
3. Derived attribute: The value for this type of attribute can be derived from the values of other related attributes or entities.

An attribute takes a null value. The null value may indicate “not applicable”— that is, that the value does not exist for the entity. For example, one may when an entity does not have a value for it have no middle name. Null can also designate that an attribute value is unknown. An unknown value may be either missing (the value does exist, but you do not have that information) or not known (you do not know whether or not the value actually exists).


## Relationships

A relationship is an association among several entities.
A relationship set is a set of relationships of the same type.

A `relationship instance` in an E-R schema represents an association between the named entities in the real-world enterprise that is being modeled.
Relationships are classified in terms of degree, connectivity, cardinality, and existence.


## Keys

A key allows us to identify a set of attributes that sufﬁce to distinguish entities from each other. Keys also help uniquely identify relationships,and thus distinguish relationships from each other.


## Entity-Relationship (E-R) Notation
