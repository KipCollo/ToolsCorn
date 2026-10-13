# Decorators

A decorator in Angular is a function that modifies a class, property, method, or parameter by extending or adding behavior to it. Decorators are used extensively in
Angular to configure and enhance various parts of the application.

## Component DECORATOR

Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.

Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

A component must belong to an NgModule in order for it to be available to another component or application. To make it a member of an NgModule, list it in the declarations field of the NgModule metadata.

- Options:

1. templateUrl - The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.--templateUrl?: string--
2. template - An inline template for an Angular component. If provided, do not supply a template file using templateUrl.--template?: string--
changeDetection?	
The change-detection strategy to use for this component.

viewProviders?	
Defines the set of injectable objects that are visible to its view DOM children. See example.

moduleId?	DEPRECATED
The module ID of the module that contains the component. The component must be able to resolve relative URLs for templates and styles. SystemJS exposes the __moduleName variable within each module. In CommonJS, this can be set to module.id.

templateUrl?	
The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.

template?	
An inline template for an Angular component. If provided, do not supply a template file using templateUrl.

styleUrl?	
One relative paths or an absolute URL for files containing CSS stylesheet to use in this component.

styleUrls?	
Relative paths or absolute URLs for files containing CSS stylesheets to use in this component.

styles?	
One or more inline CSS stylesheets to use in this component.

animations?	
One or more animation trigger() calls, containing state() and transition() definitions. See the Animations guide and animations API documentation.

encapsulation?	
An encapsulation policy for the component's styling. Possible values:

ViewEncapsulation.Emulated: Apply modified component styles in order to emulate a native Shadow DOM CSS encapsulation behavior.
ViewEncapsulation.None: Apply component styles globally without any sort of encapsulation.
ViewEncapsulation.ShadowDom: Use the browser's native Shadow DOM API to encapsulate styles.
interpolation?	
Overrides the default interpolation start and end delimiters ({{ and }}).

preserveWhitespaces?	
True to preserve or false to remove potentially superfluous whitespace characters from the compiled template. Whitespace characters are those matching the \s character class in JavaScript regular expressions. Default is false, unless overridden in compiler options.

standalone?	
Angular components marked as standalone do not need to be declared in an NgModule. Such components directly manage their own template dependencies (components, directives, and pipes used in a template) via the imports property.

imports?	
The imports property specifies the standalone component's template dependencies — those directives, components, and pipes that can be used within its template. Standalone components can import other standalone components, directives, and pipes as well as existing NgModules.

schemas?	
The set of schemas that declare elements to be allowed in a standalone component. Elements and properties that are neither Angular components nor directives must be declared in a schema.

selector?	
The CSS selector that identifies this directive in a template and triggers instantiation of the directive.

inputs?	
Enumerates the set of data-bound input properties for a directive

outputs?	
Enumerates the set of event-bound output properties.

providers?	
Configures the injector of this directive or component with a token that maps to a provider of a dependency.

exportAs?	
Defines the name that can be used in the template to assign this directive to a variable.

queries?	
Configures the queries that will be injected into the directive.

host?	
Maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs.

jit?	
When present, this directive/component is ignored by the AOT compiler. It remains in distributed code, and the JIT compiler attempts to compile it at run time, in the browser. To ensure the correct behavior, the app must import @angular/compiler.

standalone?	
Angular directives marked as standalone do not need to be declared in an NgModule. Such directives don't depend on any "intermediate context" of an NgModule (ex. configured providers).

signals?	
// TODO(signals): Remove internal and add public documentation

hostDirectives?	
Standalone directives that should be applied to the host whenever the directive is matched. By default, none of the inputs or outputs of the host directives will be available on the host, unless they are specified in the inputs or outputs properties

## NgModule DECORATOR

Decorator that marks a class as an NgModule and supplies configuration metadata.

- Options:

1. providers?- The set of injectable objects that are available in the injector of this module.
2. declarations?- The set of components, directives, and pipes (declarables) that belong to this module.
3. imports?- The set of NgModules whose exported declarables are available to templates in this module.
4. exports?- The set of components, directives, and pipes declared in this NgModule that can be used in the template of any component that is part of an NgModule that imports this NgModule. Exported declarations are the module's public API.
5. bootstrap?- The set of components that are bootstrapped when this module is bootstrapped.
6. schemas?- The set of schemas that declare elements to be allowed in the NgModule. Elements and properties that are neither Angular components nor directives must be declared in a schema.
7. id?- A name or path that uniquely identifies this NgModule in getNgModuleById. If left undefined, the NgModule is not registered with getNgModuleById.
8. jit?- When present, this module is ignored by the AOT compiler. It remains in distributed code, and the JIT compiler attempts to compile it at run time, in the browser. To ensure the correct behavior, the app must import @angular/compiler.

## Attribute DECORATOR

Parameter decorator for a directive constructor that designates a host-element attribute whose value is injected as a constant string literal.

Option:

attributeName- The name of the attribute whose value can be injected.--attributeName: string--
