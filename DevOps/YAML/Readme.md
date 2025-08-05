# YAML(YML)

YAML, which stands for `YAML Ain’t Markup Language`, is a data-serialization language optimized to be directly writable and readable by humans. It is a strict superset of
JSON but with syntactically relevant newlines and indentation instead of braces.

YAML files are text files with a .yml or .yaml extension. Because YAML uses indentation instead of braces, these text files can be versioned very well with Git, as changes are always made per line.
YAML files can have different encodings, but GitHub uses UTF-8 for the workflows.

You can write comments in YAML by prefixing text with a hash (#):

```yml
# A full-line comment in YAML
key:value # An in-line comment
```

Comments can occur anywhere in a line.

## Data types

In YAML, you have various data types available. There are simple (scalar) data types as well as more complex collection types.

- **Scalar types**:- In YAML, you can assign a value to a variable with the following syntax:

```yml
key: value
```

The key is the name of the variable. The type of the variable will be different, depending on the data type of value.

```yaml
integer: 42
float: 42.0
string: a text value
boolean: true
null value: null
datetime: 1999-12-31T23:59:43.1Z
```

Note that keys and values can contain spaces and do not need quotation! You can quote keys and values with single or double quotes, but you only have to do so if they
contain special characters or if the characters would indicate an incorrect data type to YAML. Double quotes use the backslash as the escape pattern; single quotes use an
additional single quote for this:

```yaml
'single quotes': 'have ''one quote'' as the escape pattern'
"double quotes": "have the \"backslash \" escape pattern"
```

String variables can also span multiple lines using the pipe operator and a four spaces indentation. The multiline text block can also contain line breaks and empty lines and
continues until the next element:

```yaml
literal_block: |
   Text blocks use four spaces as indentation. The entire
   block is assigned to the key 'literal_block' and keeps
   line breaks and empty lines.

   The block continuous until the next YAML element with the same
   indentation as the literal block.
```

- **Collection types**:- In YAML, there are two different collection types: nested types called maps and lists,which are also called sequences.
`Maps` use two spaces of indentation and the same syntax as assigning variables:

```yaml
parent:
   key1: value1
   key2: value2
   child:
      key1: value1
```

Since YAML is a superset of JSON, you can also use the JSON syntax to put maps in one line:

```yaml
parent: {key1: value1, key2: value2, child: {key1: value1}}
```

A sequence is an ordered list of items and has a dash before each line:

```yaml
sequence:
   - item1
   - item2
   - item3
```

You can also write this in one line, using the JSON syntax:

```yaml
sequence: [item1, item2, item3]
```
