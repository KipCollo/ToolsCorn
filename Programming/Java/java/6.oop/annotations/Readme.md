# Annotations (Metadata)

Since JDK 5, Java has supported a feature that enables you to embed supplemental information into a source file. This information, called an annotation, does not change the actions of a program. Thus, an annotation leaves the semantics of a program unchanged.
However, this information can be used by various tools during both development and deployment. For example, an annotation might be processed by a source-code generator. The term metadata is also used to refer to this feature, but the term annotation is the most descriptive and more commonly used.

An annotation is created through a mechanism based on the interface.

```java
// A simple annotation type.
@interface MyAnno {
   String str();
   int val();
}
```

The `@` that precedes the keyword interface tells the compiler that an annotation type is being declared. Next, notice the two members str( ) and val( ). All annotations consist solely of method declarations. However, you don’t provide bodies for these methods. Instead, Java implements these methods. Moreover, the methods act much like fields.
An annotation cannot include an extends clause. However, all annotation types automatically extend the Annotation interface. Thus, Annotation is a super-interface of all annotations. It is declared within the java.lang.annotation package. It overrides hashCode( ), equals( ), and toString( ), which are defined by Object. It also specifies annotationType( ), which returns a Class object that represents the invoking annotation.

Once you have declared an annotation, you can use it to annotate something. Prior to JDK 8, annotations could be used only on declarations.(JDK 8 adds the ability to annotate type.However, the same basic techniques apply to both kinds of annotations.) Any type of declaration can have an annotation associated with it. For example, classes, methods, fields,parameters, and enum constants can be annotated. Even an annotation can be annotated.In all cases, the annotation precedes the rest of the declaration.

```java
// Annotate a method.
@MyAnno(str = "Annotation Example", val = 100)
public static void myMeth() { // ...
}
```

To give a member a value, that member’s name is assigned a value.

**Specifying a Retention Policy**:- A retention policy determines at what point an annotation is discarded. Java defines three such policies, which are encapsulated within the java.lang.annotation.RetentionPolicy enumeration. They are SOURCE, CLASS, and RUNTIME.
- An annotation with a retention policy of SOURCE is retained only in the source file and is discarded during compilation.
- An annotation with a retention policy of CLASS is stored in the .class file during compilation. However, it is not available through the JVM during run time.
- An annotation with a retention policy of RUNTIME is stored in the .class file during compilation and is available through the JVM during run time. Thus, RUNTIME retention offers the greatest annotation persistence.

NOTE An annotation on a local variable declaration is not retained in the .class file.

A retention policy is specified for an annotation by using one of Java’s built-in annotations: @Retention. Its general form is shown here: @Retention(retention-policy).
If no retention policy is specified for an annotation, then the default policy of CLASS is used.

```java
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnno {
   String str();
   int val();
}
```

**Obtaining Annotations at Run Time by Use of Reflection**:- Although annotations are designed mostly for use by other development or deployment tools, if they specify a retention policy of RUNTIME, then they can be queried at run time by any Java program through the use of reflection. Reflection is the feature that enables information about a class to be obtained at run time. The reflection API is contained in the java.lang.reflect package. There are a number of ways to use reflection.

The first step to using reflection is to obtain a Class object that represents the class whose annotations you want to obtain. Class is one of Java’s built-in classes and is defined in java.lang. 

There are various ways to obtain a Class object.One of the easiest is to call getClass( ), which is a method defined by Object. Its general form is shown here:

```java
final Class<?> getClass( )
```

It returns the Class object that represents the invoking object.

`Obtaining All Annotations`:- You can obtain all annotations that have RUNTIME retention that are associated with an item by calling getAnnotations( ) on that item. It has this general form:

```java
Annotation[ ] getAnnotations( )
```

It returns an array of the annotations. getAnnotations( ) can be called on objects of type Class, Method, Constructor, and Field, among others.

`Using Default Values` - You can give annotation members default values that will be used if no value is specified when the annotation is applied. A default value is specified by adding a default clause to a member’s declaration. It has this general form:

```java
type member( ) default value ;
```

```java
// An annotation type declaration that includes defaults.
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnno {
   String str() default "Testing";
   int val() default 9000;
}
```

**Marker Annotations**:- A marker annotation is a special kind of annotation that contains no members. Its sole purpose is to mark an item. Thus, its presence as an annotation is sufficient. The best way to determine if a marker annotation is present is to use the method isAnnotationPresent( ), which is defined by the AnnotatedElement interface.

```java
// A marker annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MyMarker { }
```


**Single-Member Annotations**:- A single-member annotation contains only one member. It works like a normal annotation except that it allows a shorthand form of specifying the value of the member. When only one member is present, you can simply specify the value for that member when the annotation is applied—you don’t need to specify the name of the member. However,in order to use this shorthand, the name of the member must be value.

```java
// A single-member annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MySingle {
   int value(); // this variable name must be value
}
```

## The Built-In Annotations

Java defines many built-in annotations. Most are specialized, but nine are general purpose.
Of these, four are imported from java.lang.annotation: @Retention, @Documented,@Target, and @Inherited. Five—@Override, @Deprecated, @FunctionalInterface,@SafeVarargs, and @SuppressWarnings—are included in java.lang.

NOTE:- To java.lang.annotation, JDK 8 adds the annotations Repeatable and Native. Repeatable supports repeatable annotations, as described later in this chapter. Native annotates a field that can be accessed by native code.

`@Retention`:- @Retention is designed to be used only as an annotation to another annotation. It specifies the retention policy.
`@Documented`:- The @Documented annotation is a marker interface that tells a tool that an annotation is to be documented. It is designed to be used only as an annotation to an annotation declaration.
`@Deprecated`:- @Deprecated is a marker annotation. It indicates that a declaration is obsolete and has been replaced by a newer form.
`@FunctionalInterface`:- @FunctionalInterface is a marker annotation added by JDK 8 and designed for use on interfaces. It indicates that the annotated interface is a functional interface. A functional interface is an interface that contains one and only one abstract method. Functional interfaces are used by lambda expressions.
`@SafeVarargs`:- @SafeVarargs is a marker annotation that can be applied to methods and constructors. It indicates that no unsafe actions related to a varargs parameter occur. It is used to suppress unchecked warnings on otherwise safe code as it relates to non-reifiable vararg types and parameterized array instantiation. (A non-reifiable type is, essentially, a generic type.)
`@Inherited`:- @Inherited is a marker annotation that can be used only on another annotation declaration.Furthermore, it affects only annotations that will be used on class declarations. @Inherited causes the annotation for a superclass to be inherited by a subclass. Therefore, when a request for a specific annotation is made to the subclass, if that annotation is not present in the subclass, then its superclass is checked. If that annotation is present in the superclass,and if it is annotated with @Inherited, then that annotation will be returned.
`@Target`:- The @Target annotation specifies the types of items to which an annotation can be applied.It is designed to be used only as an annotation to another annotation. @Target takes one argument, which is an array of constants of the ElementType enumeration. This argument specifies the types of declarations to which the annotation can be applied. The constants are shown here along with the type of declaration to which they correspond:
- ANNOTATION_TYPE - Another annotation
- CONSTRUCTOR - Constructor
- FIELD - Field
- LOCAL_VARIABLE - Local variable
- METHOD - Method
- PACKAGE - Package
- PARAMETE - Parameter
- TYPE - Class, interface, or enumeration
- TYPE_PARAMETER - Type parameter (Added by JDK 8.)
- TYPE_USE - Type use (Added by JDK 8.)

