# Lifecycle hooks

A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.

The following life cycle hooks of angular are :

`OnChanges` , `OnInit` , `DoCheck` , `OnDestroy` , `AfterContentInit` , `AfterContentChecked` , `AfterViewInit` , `AfterViewChecked`

Angular lifecycle hooks are methods provided by Angular that allow you to tap into different stages of a component's lifecycle, such as initialization, change detection,and destruction. Examples include ngOnInit, ngOnChanges, and ngOnDestroy.

The `ngOnInit` method is a lifecycle hook in Angular that is called once, after the component has been initialized and its inputs have been bound. It is commonly used to perform initialization tasks.The "ngOnInit" method is a lifecycle hook in Angular that is called after the component has been initialized and its inputs have been bound. It is commonly used to perform initialization tasks such as retrieving data from a server or setting up subscriptions.

The "ngOnInit" method is a lifecycle hook in Angular that is called after the component has been initialized and its inputs have been bound. It is commonly used to perform
initialization tasks such as retrieving data from a server or setting up subscriptions.

The `ngOnChanges` method is a lifecycle hook in Angular that is called when one or more input properties of a component change. It allows the component to respond to
changes in input values.

The `ngDoCheck` method is a lifecycle hook in Angular that is called during every change detection cycle. It is used to implement custom change detection logic and
perform manual checks for changes.

The `ngAfterViewInit` method is a lifecycle hook in Angular that is called after the component's view has been fully initialized. It is used to perform tasks that require access to the rendered DOM elements.

The `ngAfterViewChecked` method is a lifecycle hook in Angular that is called after every check of the component's view. It is used to perform tasks that need to be
executed after the view has been checked for changes.

The `ngOnDestroy` method is a lifecycle hook in Angular that is called just before a component is destroyed and removed from the DOM. It is used to perform cleanup
tasks and unsubscribe from subscriptions.
