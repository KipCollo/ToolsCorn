# Validations

The Java API for JavaBean Validation ("Bean Validation") provides a facility for validating objects, object members, methods, and constructors. In Java EE environments, Bean Validation integrates with Java EE containers and services to allow developers to easily define and enforce validation constraints.
Bean Validation is available as part of the Java EE 7 platform.

`Using Bean Validation Constraints`:- The Bean Validation model is supported by constraints in the form of annotations placed on a field, method, or class of a JavaBeans component, such as a managed bean.
Constraints can be built in or user defined. User-defined constraints are called custom constraints.Built-in annotations are annotated with an empty @Constraint annotation to avoid any dependency between the specification API and a specific implementation. Each Jakarta Validation provider must recognize built-in constraint annotations as valid constraint definitions and provide compliant constraint implementations for each. The built-in constraint validation implementation is having a lower priority than an XML mapping definition.


**Built-In Bean Validation Constraints**:- Several built-in constraints are available in the javax.validation.constraints package.

- `@AssertFalse`:- The value of the field or property must be false.

```java
@AssertFalse
boolean isUnsupported;
```

- `@AssertTrue`:- The value of the field or property must be true.

```java
@AssertTrue
boolean isActive;
```

- `@DecimalMax`:- The value of the field or property must be a decimal value lower than or equal to the number in value element.

```java
@DecimalMax("30.00")
BigDecimal discount;
```

- `@DecimalMin`:- The value of the field or property must be a decimal value greater than or equal to the number in the value element.

```java
@DecimalMin("5.00")
BigDecimal discount;
```

- `@Digits`:- The value of field or property must be a number within a specified range.The integer element specifies the maximum integral digits for the number, and fraction element specifies maximum fraction of digits.

```java
@Digits(integer=6,fraction=2)
BigDecimal price;
```

- `@Future`:- The value of the field or property must be a date in the future.

```java
@Future
Date eventDate;
```

- `Max`:- The value of the field or property must be an integer value lower than or equal to the number in the value element.

```java
@Max(10)
int quantity;
```

- `@NotNull`:- The value of the field or property must not be null.

```java
@NotNull
String username;
```

- `@Null`:- The value of the field or property must be null.

```java
@Null
String unusedString;
```

- `@Past`:- The value of the field or property must be a date in the past.

```java
@Past
Date birthday;
```

- `@Pattern`:- The value of the field or property must match the regular expression defined in the regexp element.

```java
@Pattern(regexp="\\(\\d{3}\\)\\d{3}-\\d{4}")
String phoneNumber;
```

- `@Size`:- The size of the field or property is evaluated and  must match the specified boundaries. If the field or property is a String, the size of the string is evaluated. If the field or property is a Collection,the size of the Collection is evaluated. If the field or property is a Map, the size of the Map is evaluated. If the field or property is an array, the size of the array is evaluated. Use one of the optional max or min elements to specify the boundaries.

```java
@Size(min=2, max=240)
String briefMessage;
```

- `@NotBlank`:- The annotated element must not be null and must contain at least one non-whitespace character. Accepts CharSequence.
