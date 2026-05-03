# PROTO

A PROTO node is defined in a PROTO file which is a text file ending with a .proto extension.

`Header`:- The PROTO file starts with the following header line:

```proto
#VRML_SIM R2025a utf8
```

Possibly followed by comments, such as:

```proto
# license: Apache License 2.0
# license url: https://www.apache.org/licenses/LICENSE-2.0
# This is the description of the sample PROTO node.
```

`Structure`:-The PROTO definition lists the fields of the PROTO and defines how these fields impact the underlying object which is defined using base nodes and/or PROTO nodes.

PROTO protoName [ protoFields ] { protoBody }

The interface is a sequence of field declarations which specify the types, names and default values for the PROTO's fields. A field declaration has the following syntax:

field fieldType fieldName defaultValue

- field is a reserved keyword.
- fieldType is one of: SFNode, SFColor, SFFloat, SFInt32, SFString, SFVec2f, SFVec3f, SFRotation, SFBool, MFNode, MFColor, MFFloat, MFInt32, MFString, MFVec2f, MFVec3f, MFRotation and MFBool.
- fieldName is a freely chosen name for this field.
- defaultValue is a literal default value that depends on fieldType