# Views

It's not practical to return entire HTML documents strings directly from your routes and controllers. Thankfully, views provide a convenient way to place all of our HTML in separate files.
Views separate your controller/application logic from your presentation logic and are stored in the resources/views directory. When using Laravel, view templates are usually written using the Blade templating language. A simple view might look something like this:

```php
<!-- View stored in resources/views/greeting.blade.php -->
 
<html>
    <body>
        <h1>Hello, {{ $name }}</h1>
    </body>
</html>
```

Since this view is stored at resources/views/greeting.blade.php, we may return it using the global view helper like so:

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

## Writing Views in React / Vue

Instead of writing their frontend templates in PHP via Blade, many developers have begun to prefer to write their templates using React or Vue. Laravel makes this painless thanks to Inertia, a library that makes it a cinch to tie your React/Vue frontend to your Laravel backend without the typical complexities of building an SPA.
Our Breeze and Jetstream starter kits give you a great starting point for your next Laravel application powered by Inertia. In addition, the Laravel Bootcamp provides a full demonstration of building a Laravel application powered by Inertia, including examples in Vue and React.

`Creating and Rendering Views`:- You may create a view by placing a file with the .blade.php extension in your application's resources/views directory or by using the make:view Artisan command:

```sh
php artisan make:view greeting
```

The .blade.php extension informs the framework that the file contains a Blade template. Blade templates contain HTML as well as Blade directives that allow you to easily echo values, create "if" statements, iterate over data, and more.

Once you have created a view, you may return it from one of your application's routes or controllers using the global view helper:

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

Views may also be returned using the View facade:

```php
use Illuminate\Support\Facades\View;
 
return View::make('greeting', ['name' => 'James']);
```

As you can see, the first argument passed to the view helper corresponds to the name of the view file in the resources/views directory. The second argument is an array of data that should be made available to the view. In this case, we are passing the name variable, which is displayed in the view using Blade syntax.
Nested View Directories

Views may also be nested within subdirectories of the resources/views directory. "Dot" notation may be used to reference nested views. For example, if your view is stored at resources/views/admin/profile.blade.php, you may return it from one of your application's routes / controllers like so:

return view('admin.profile', $data);

View directory names should not contain the . character.
Creating the First Available View

Using the View facade's first method, you may create the first view that exists in a given array of views. This may be useful if your application or package allows views to be customized or overwritten:

```php
use Illuminate\Support\Facades\View;
 
return View::first(['custom.admin', 'admin'], $data);
```

Determining if a View Exists

If you need to determine if a view exists, you may use the View facade. The exists method will return true if the view exists:

```php
use Illuminate\Support\Facades\View;
 
if (View::exists('admin.profile')) {
    // ...
}
```

Passing Data to Views

As you saw in the previous examples, you may pass an array of data to views to make that data available to the view:

return view('greetings', ['name' => 'Victoria']);

When passing information in this manner, the data should be an array with key / value pairs. After providing data to a view, you can then access each value within your view using the data's keys, such as <?php echo $name; ?>.

As an alternative to passing a complete array of data to the view helper function, you may use the with method to add individual pieces of data to the view. The with method returns an instance of the view object so that you can continue chaining methods before returning the view:

```php
return view('greeting')
            ->with('name', 'Victoria')
            ->with('occupation', 'Astronaut');
```

Sharing Data With All Views

Occasionally, you may need to share data with all views that are rendered by your application. You may do so using the View facade's share method. Typically, you should place calls to the share method within a service provider's boot method. You are free to add them to the App\Providers\AppServiceProvider class or generate a separate service provider to house them:

```php
<?php
 
namespace App\Providers;
 
use Illuminate\Support\Facades\View;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }
 
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::share('key', 'value');
    }
}
```

View Composers

View composers are callbacks or class methods that are called when a view is rendered. If you have data that you want to be bound to a view each time that view is rendered, a view composer can help you organize that logic into a single location. View composers may prove particularly useful if the same view is returned by multiple routes or controllers within your application and always needs a particular piece of data.

Typically, view composers will be registered within one of your application's service providers. In this example, we'll assume that the App\Providers\AppServiceProvider will house this logic.

We'll use the View facade's composer method to register the view composer. Laravel does not include a default directory for class based view composers, so you are free to organize them however you wish. For example, you could create an app/View/Composers directory to house all of your application's view composers:

```php
<?php
 
namespace App\Providers;
 
use App\View\Composers\ProfileComposer;
use Illuminate\Support\Facades;
use Illuminate\Support\ServiceProvider;
use Illuminate\View\View;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }
 
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Using class based composers...
        Facades\View::composer('profile', ProfileComposer::class);
 
        // Using closure based composers...
        Facades\View::composer('welcome', function (View $view) {
            // ...
        });
 
        Facades\View::composer('dashboard', function (View $view) {
            // ...
        });
    }
}
```

Now that we have registered the composer, the compose method of the App\View\Composers\ProfileComposer class will be executed each time the profile view is being rendered. Let's take a look at an example of the composer class:

```php
<?php
 
namespace App\View\Composers;
 
use App\Repositories\UserRepository;
use Illuminate\View\View;
 
class ProfileComposer
{
    /**
     * Create a new profile composer.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}
 
    /**
     * Bind data to the view.
     */
    public function compose(View $view): void
    {
        $view->with('count', $this->users->count());
    }
}
```

As you can see, all view composers are resolved via the service container, so you may type-hint any dependencies you need within a composer's constructor.
Attaching a Composer to Multiple Views

You may attach a view composer to multiple views at once by passing an array of views as the first argument to the composer method:

```php
use App\Views\Composers\MultiComposer;
use Illuminate\Support\Facades\View;
 
View::composer(
    ['profile', 'dashboard'],
    MultiComposer::class
);
```

The composer method also accepts the * character as a wildcard, allowing you to attach a composer to all views:

```php
use Illuminate\Support\Facades;
use Illuminate\View\View;
 
Facades\View::composer('*', function (View $view) {
    // ...
});
```

View Creators

View "creators" are very similar to view composers; however, they are executed immediately after the view is instantiated instead of waiting until the view is about to render. To register a view creator, use the creator method:

```php
use App\View\Creators\ProfileCreator;
use Illuminate\Support\Facades\View;
 
View::creator('profile', ProfileCreator::class);
```

Optimizing Views

By default, Blade template views are compiled on demand. When a request is executed that renders a view, Laravel will determine if a compiled version of the view exists. If the file exists, Laravel will then determine if the uncompiled view has been modified more recently than the compiled view. If the compiled view either does not exist, or the uncompiled view has been modified, Laravel will recompile the view.

Compiling views during the request may have a small negative impact on performance, so Laravel provides the view:cache Artisan command to precompile all of the views utilized by your application. For increased performance, you may wish to run this command as part of your deployment process:

php artisan view:cache

You may use the view:clear command to clear the view cache:

php artisan view:clear

ads via Carbon
Design and Development tips in your inbox. Every weekday.
ads via Carbon
Laravel 

## Blade

Blade is the simple, yet powerful templating engine that is included with Laravel. Unlike some PHP templating engines, Blade does not restrict you from using plain PHP code in your templates. In fact, all Blade templates are compiled into plain PHP code and cached until they are modified, meaning Blade adds essentially zero overhead to your application. Blade template files use the .blade.php file extension and are typically stored in the resources/views directory.

The view files that end with *.blade.php* and are Blade templates.Blade is a server-side templating language.In its basic form it’s HTML.

You can do lots of interesting stuff in Blade templates: insert data, add conditionals, do loops, display something if the user is authenticated or not, or show different information depending on the environment variables (e.g. if it’s in production or development), and much more.

Blade views may be returned from routes or controllers using the global view helper. Of course, as mentioned in the documentation on views, data may be passed to the Blade view using the view helper's second argument:

In the route definition, you can pass data to a Blade template:

```php
Route::get('/test', function () {
return view('test', ['name' => 'Flavio']);
});
```

and use it like this:

```php
<h1>{{ $name }}</h1>
```

The {{ }} syntax allows you to add any data to the template, escaped.Inside it you can also run any PHP function you like, and Blade will display the return value of that execution.

You can comment using {{-- --}} :

```php
{{-- <h1>test</h1> --}}
```

Conditionals are done using @if,@else,@endif :

```php
@if ($name === 'Flavio')
<h1>Yo {{ $name }}</h1>
@else
<h1>Good morning {{ $name }}</h1>
@endif
```

There’s also @elseif ,@unless which let you do more complex conditional structures.
We also have @switch to show different things based on the result of a variable.
Then we have shortcuts for common operations, convenient to use:

- @issetshows a block if the argument is defined
- @emptyshows a block if an array does not contain any element
- @authshows a block if the user is authenticated
- @guestshows a block if the user is not authenticated
- @production:-shows a block if the environment is a production environment

Using the @php directive we can write any PHP:

```php
@php
$cats = array("Fluffy", "Mittens", "Whiskers", "Felix");
@endphp
```

We can do loops using these different directives:-

1. @for
2. @foreach
3. @while

```php
@for ($i = 0; $i < 10; $i++)
Count: {{ $i }}
@endfor
<ul>
@foreach ($cats as $cat)
<li>{{ $cat }}</li>
@endforeach
</ul>
```

Like in most programming languages, we have directives to play with loops like @continue and @break .
Inside a loop a very convenient $loop variable is always available to tell us information about the loop, for example if it’s the first iteration or the last, if it’s even or odd, how many iterations were done and how many are left.


**Supercharging Blade With Livewire**:- Livewire allows you to write Blade components that are augmented with dynamic functionality that would typically only be possible via frontend frameworks like React or Vue, providing a great approach to building modern, reactive frontends without the complexities, client-side rendering, or build steps of many JavaScript frameworks.

Displaying Data:- You may display data that is passed to your Blade views by wrapping the variable in curly braces. For example, given the following route:

```php
Route::get('/', function () {
    return view('welcome', ['name' => 'Samantha']);
});
```

You may display the contents of the name variable like so:

```php
Hello, {{ $name }}.
```

Blade's {{ }} echo statements are automatically sent through PHP's htmlspecialchars function to prevent XSS attacks.

You are not limited to displaying the contents of the variables passed to the view. You may also echo the results of any PHP function. In fact, you can put any PHP code you wish inside of a Blade echo statement:

The current UNIX timestamp is {{ time() }}.

HTML Entity Encoding

By default, Blade (and the Laravel e function) will double encode HTML entities. If you would like to disable double encoding, call the Blade::withoutDoubleEncoding method from the boot method of your AppServiceProvider:

<?php
 
namespace App\Providers;
 
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blade::withoutDoubleEncoding();
    }
}

Displaying Unescaped Data:- By default, Blade {{ }} statements are automatically sent through PHP's htmlspecialchars function to prevent XSS attacks. If you do not want your data to be escaped, you may use the following syntax:

```php
Hello, {!! $name !!}.
```

Be very careful when echoing content that is supplied by users of your application. You should typically use the escaped, double curly brace syntax to prevent XSS attacks when displaying user supplied data.

**Blade and JavaScript Frameworks**:- Since many JavaScript frameworks also use "curly" braces to indicate a given expression should be displayed in the browser, you may use the @ symbol to inform the Blade rendering engine an expression should remain untouched. For example:

```php
<h1>Laravel</h1>
Hello, @{{ name }}.
```

In this example, the @ symbol will be removed by Blade; however, {{ name }} expression will remain untouched by the Blade engine, allowing it to be rendered by your JavaScript framework.

The @ symbol may also be used to escape Blade directives:

{{-- Blade template --}}
@@if()
 
<!-- HTML output -->
@if()

`Rendering JSON`:- Sometimes you may pass an array to your view with the intention of rendering it as JSON in order to initialize a JavaScript variable. For example:

```php
<script>
    var app = <?php echo json_encode($array); ?>;
</script>
```

However, instead of manually calling json_encode, you may use the Illuminate\Support\Js::from method directive. The from method accepts the same arguments as PHP's json_encode function; however, it will ensure that the resulting JSON is properly escaped for inclusion within HTML quotes. The from method will return a string JSON.parse JavaScript statement that will convert the given object or array into a valid JavaScript object:

```php
<script>
    var app = {{ Illuminate\Support\Js::from($array) }};
</script>
```

The latest versions of the Laravel application skeleton include a Js facade, which provides convenient access to this functionality within your Blade templates:

```php
<script>
    var app = {{ Js::from($array) }};
</script>
```

You should only use the Js::from method to render existing variables as JSON. The Blade templating is based on regular expressions and attempts to pass a complex expression to the directive may cause unexpected failures.
The @verbatim Directive

If you are displaying JavaScript variables in a large portion of your template, you may wrap the HTML in the @verbatim directive so that you do not have to prefix each Blade echo statement with an @ symbol:

@verbatim
    <div class="container">
        Hello, {{ name }}.
    </div>
@endverbatim

Blade Directives

In addition to template inheritance and displaying data, Blade also provides convenient shortcuts for common PHP control structures, such as conditional statements and loops. These shortcuts provide a very clean, terse way of working with PHP control structures while also remaining familiar to their PHP counterparts.
If Statements

You may construct if statements using the @if, @elseif, @else, and @endif directives. These directives function identically to their PHP counterparts:

@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif

For convenience, Blade also provides an @unless directive:

@unless (Auth::check())
    You are not signed in.
@endunless

In addition to the conditional directives already discussed, the @isset and @empty directives may be used as convenient shortcuts for their respective PHP functions:

@isset($records)
    // $records is defined and is not null...
@endisset
 
@empty($records)
    // $records is "empty"...
@endempty

Authentication Directives

The @auth and @guest directives may be used to quickly determine if the current user is authenticated or is a guest:

@auth
    // The user is authenticated...
@endauth
 
@guest
    // The user is not authenticated...
@endguest

If needed, you may specify the authentication guard that should be checked when using the @auth and @guest directives:

@auth('admin')
    // The user is authenticated...
@endauth
 
@guest('admin')
    // The user is not authenticated...
@endguest

Environment Directives

You may check if the application is running in the production environment using the @production directive:

@production
    // Production specific content...
@endproduction

Or, you may determine if the application is running in a specific environment using the @env directive:

@env('staging')
    // The application is running in "staging"...
@endenv
 
@env(['staging', 'production'])
    // The application is running in "staging" or "production"...
@endenv

Section Directives

You may determine if a template inheritance section has content using the @hasSection directive:

@hasSection('navigation')
    <div class="pull-right">
        @yield('navigation')
    </div>
 
    <div class="clearfix"></div>
@endif

You may use the sectionMissing directive to determine if a section does not have content:

@sectionMissing('navigation')
    <div class="pull-right">
        @include('default-navigation')
    </div>
@endif

Session Directives

The @session directive may be used to determine if a session value exists. If the session value exists, the template contents within the @session and @endsession directives will be evaluated. Within the @session directive's contents, you may echo the $value variable to display the session value:

@session('status')
    <div class="p-4 bg-green-100">
        {{ $value }}
    </div>
@endsession

Switch Statements

Switch statements can be constructed using the @switch, @case, @break, @default and @endswitch directives:

@switch($i)
    @case(1)
        First case...
        @break
 
    @case(2)
        Second case...
        @break
 
    @default
        Default case...
@endswitch

Loops

In addition to conditional statements, Blade provides simple directives for working with PHP's loop structures. Again, each of these directives functions identically to their PHP counterparts:

@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor
 
@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach
 
@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
 
@while (true)
    <p>I'm looping forever.</p>
@endwhile

While iterating through a foreach loop, you may use the loop variable to gain valuable information about the loop, such as whether you are in the first or last iteration through the loop.

When using loops you may also skip the current iteration or end the loop using the @continue and @break directives:

@foreach ($users as $user)
    @if ($user->type == 1)
        @continue
    @endif
 
    <li>{{ $user->name }}</li>
 
    @if ($user->number == 5)
        @break
    @endif
@endforeach

You may also include the continuation or break condition within the directive declaration:

@foreach ($users as $user)
    @continue($user->type == 1)
 
    <li>{{ $user->name }}</li>
 
    @break($user->number == 5)
@endforeach

The Loop Variable

While iterating through a foreach loop, a $loop variable will be available inside of your loop. This variable provides access to some useful bits of information such as the current loop index and whether this is the first or last iteration through the loop:

@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif
 
    @if ($loop->last)
        This is the last iteration.
    @endif
 
    <p>This is user {{ $user->id }}</p>
@endforeach

If you are in a nested loop, you may access the parent loop's $loop variable via the parent property:

@foreach ($users as $user)
    @foreach ($user->posts as $post)
        @if ($loop->parent->first)
            This is the first iteration of the parent loop.
        @endif
    @endforeach
@endforeach

The $loop variable also contains a variety of other useful properties:
Property 	Description
$loop->index 	The index of the current loop iteration (starts at 0).
$loop->iteration 	The current loop iteration (starts at 1).
$loop->remaining 	The iterations remaining in the loop.
$loop->count 	The total number of items in the array being iterated.
$loop->first 	Whether this is the first iteration through the loop.
$loop->last 	Whether this is the last iteration through the loop.
$loop->even 	Whether this is an even iteration through the loop.
$loop->odd 	Whether this is an odd iteration through the loop.
$loop->depth 	The nesting level of the current loop.
$loop->parent 	When in a nested loop, the parent's loop variable.
Conditional Classes & Styles

The @class directive conditionally compiles a CSS class string. The directive accepts an array of classes where the array key contains the class or classes you wish to add, while the value is a boolean expression. If the array element has a numeric key, it will always be included in the rendered class list:

@php
    $isActive = false;
    $hasError = true;
@endphp
 
<span @class([
    'p-4',
    'font-bold' => $isActive,
    'text-gray-500' => ! $isActive,
    'bg-red' => $hasError,
])></span>
 
<span class="p-4 text-gray-500 bg-red"></span>

Likewise, the @style directive may be used to conditionally add inline CSS styles to an HTML element:

@php
    $isActive = true;
@endphp
 
<span @style([
    'background-color: red',
    'font-weight: bold' => $isActive,
])></span>
 
<span style="background-color: red; font-weight: bold;"></span>

Additional Attributes

For convenience, you may use the @checked directive to easily indicate if a given HTML checkbox input is "checked". This directive will echo checked if the provided condition evaluates to true:

<input
    type="checkbox"
    name="active"
    value="active"
    @checked(old('active', $user->active))
/>

Likewise, the @selected directive may be used to indicate if a given select option should be "selected":

<select name="version">
    @foreach ($product->versions as $version)
        <option value="{{ $version }}" @selected(old('version') == $version)>
            {{ $version }}
        </option>
    @endforeach
</select>

Additionally, the @disabled directive may be used to indicate if a given element should be "disabled":

<button type="submit" @disabled($errors->isNotEmpty())>Submit</button>

Moreover, the @readonly directive may be used to indicate if a given element should be "readonly":

<input
    type="email"
    name="email"
    value="email@laravel.com"
    @readonly($user->isNotAdmin())
/>

In addition, the @required directive may be used to indicate if a given element should be "required":

<input
    type="text"
    name="title"
    value="title"
    @required($user->isAdmin())
/>

Including Subviews

While you're free to use the @include directive, Blade components provide similar functionality and offer several benefits over the @include directive such as data and attribute binding.

Blade's @include directive allows you to include a Blade view from within another view. All variables that are available to the parent view will be made available to the included view:

<div>
    @include('shared.errors')
 
    <form>
        <!-- Form Contents -->
    </form>
</div>

Even though the included view will inherit all data available in the parent view, you may also pass an array of additional data that should be made available to the included view:

@include('view.name', ['status' => 'complete'])

If you attempt to @include a view which does not exist, Laravel will throw an error. If you would like to include a view that may or may not be present, you should use the @includeIf directive:

@includeIf('view.name', ['status' => 'complete'])

If you would like to @include a view if a given boolean expression evaluates to true or false, you may use the @includeWhen and @includeUnless directives:

@includeWhen($boolean, 'view.name', ['status' => 'complete'])
 
@includeUnless($boolean, 'view.name', ['status' => 'complete'])

To include the first view that exists from a given array of views, you may use the includeFirst directive:

@includeFirst(['custom.admin', 'admin'], ['status' => 'complete'])

You should avoid using the __DIR__ and __FILE__ constants in your Blade views, since they will refer to the location of the cached, compiled view.
Rendering Views for Collections

You may combine loops and includes into one line with Blade's @each directive:

@each('view.name', $jobs, 'job')

The @each directive's first argument is the view to render for each element in the array or collection. The second argument is the array or collection you wish to iterate over, while the third argument is the variable name that will be assigned to the current iteration within the view. So, for example, if you are iterating over an array of jobs, typically you will want to access each job as a job variable within the view. The array key for the current iteration will be available as the key variable within the view.

You may also pass a fourth argument to the @each directive. This argument determines the view that will be rendered if the given array is empty.

@each('view.name', $jobs, 'job', 'view.empty')

Views rendered via @each do not inherit the variables from the parent view. If the child view requires these variables, you should use the @foreach and @include directives instead.
The @once Directive

The @once directive allows you to define a portion of the template that will only be evaluated once per rendering cycle. This may be useful for pushing a given piece of JavaScript into the page's header using stacks. For example, if you are rendering a given component within a loop, you may wish to only push the JavaScript to the header the first time the component is rendered:

@once
    @push('scripts')
        <script>
            // Your custom JavaScript...
        </script>
    @endpush
@endonce

Since the @once directive is often used in conjunction with the @push or @prepend directives, the @pushOnce and @prependOnce directives are available for your convenience:

@pushOnce('scripts')
    <script>
        // Your custom JavaScript...
    </script>
@endPushOnce

Raw PHP

In some situations, it's useful to embed PHP code into your views. You can use the Blade @php directive to execute a block of plain PHP within your template:

@php
    $counter = 1;
@endphp

Or, if you only need to use PHP to import a class, you may use the @use directive:

@use('App\Models\Flight')

A second argument may be provided to the @use directive to alias the imported class:

@use('App\Models\Flight', 'FlightModel')

Comments

Blade also allows you to define comments in your views. However, unlike HTML comments, Blade comments are not included in the HTML returned by your application:

{{-- This comment will not be present in the rendered HTML --}}

Components

Components and slots provide similar benefits to sections, layouts, and includes; however, some may find the mental model of components and slots easier to understand. There are two approaches to writing components: class based components and anonymous components.

To create a class based component, you may use the make:component Artisan command. To illustrate how to use components, we will create a simple Alert component. The make:component command will place the component in the app/View/Components directory:

php artisan make:component Alert

The make:component command will also create a view template for the component. The view will be placed in the resources/views/components directory. When writing components for your own application, components are automatically discovered within the app/View/Components directory and resources/views/components directory, so no further component registration is typically required.

You may also create components within subdirectories:

php artisan make:component Forms/Input

The command above will create an Input component in the app/View/Components/Forms directory and the view will be placed in the resources/views/components/forms directory.

If you would like to create an anonymous component (a component with only a Blade template and no class), you may use the --view flag when invoking the make:component command:

php artisan make:component forms.input --view

The command above will create a Blade file at resources/views/components/forms/input.blade.php which can be rendered as a component via <x-forms.input />.
Manually Registering Package Components

When writing components for your own application, components are automatically discovered within the app/View/Components directory and resources/views/components directory.

However, if you are building a package that utilizes Blade components, you will need to manually register your component class and its HTML tag alias. You should typically register your components in the boot method of your package's service provider:

use Illuminate\Support\Facades\Blade;
 
/**
 * Bootstrap your package's services.
 */
public function boot(): void
{
    Blade::component('package-alert', Alert::class);
}

Once your component has been registered, it may be rendered using its tag alias:

<x-package-alert/>

Alternatively, you may use the componentNamespace method to autoload component classes by convention. For example, a Nightshade package might have Calendar and ColorPicker components that reside within the Package\Views\Components namespace:

use Illuminate\Support\Facades\Blade;
 
/**
 * Bootstrap your package's services.
 */
public function boot(): void
{
    Blade::componentNamespace('Nightshade\\Views\\Components', 'nightshade');
}

This will allow the usage of package components by their vendor namespace using the package-name:: syntax:

<x-nightshade::calendar />
<x-nightshade::color-picker />

Blade will automatically detect the class that's linked to this component by pascal-casing the component name. Subdirectories are also supported using "dot" notation.
Rendering Components

To display a component, you may use a Blade component tag within one of your Blade templates. Blade component tags start with the string x- followed by the kebab case name of the component class:

<x-alert/>
 
<x-user-profile/>

If the component class is nested deeper within the app/View/Components directory, you may use the . character to indicate directory nesting. For example, if we assume a component is located at app/View/Components/Inputs/Button.php, we may render it like so:

<x-inputs.button/>

If you would like to conditionally render your component, you may define a shouldRender method on your component class. If the shouldRender method returns false the component will not be rendered:

use Illuminate\Support\Str;
 
/**
 * Whether the component should be rendered
 */
public function shouldRender(): bool
{
    return Str::length($this->message) > 0;
}

Index Components

Sometimes components are part of a component group and you may wish to group the related components within a single directory. For example, imagine a "card" component with the following class structure:

App\Views\Components\Card\Card
App\Views\Components\Card\Header
App\Views\Components\Card\Body

Since the root Card component is nested within a Card directory, you might expect that you would need to render the component via <x-card.card>. However, when a component's file name matches the name of the component's directory, Laravel automatically assumes that component is the "root" component and allows you to render the component without repeating the directory name:

<x-card>
    <x-card.header>...</x-card.header>
    <x-card.body>...</x-card.body>
</x-card>

Passing Data to Components

You may pass data to Blade components using HTML attributes. Hard-coded, primitive values may be passed to the component using simple HTML attribute strings. PHP expressions and variables should be passed to the component via attributes that use the : character as a prefix:

<x-alert type="error" :message="$message"/>

You should define all of the component's data attributes in its class constructor. All public properties on a component will automatically be made available to the component's view. It is not necessary to pass the data to the view from the component's render method:

<?php
 
namespace App\View\Components;
 
use Illuminate\View\Component;
use Illuminate\View\View;
 
class Alert extends Component
{
    /**
     * Create the component instance.
     */
    public function __construct(
        public string $type,
        public string $message,
    ) {}
 
    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View
    {
        return view('components.alert');
    }
}

When your component is rendered, you may display the contents of your component's public variables by echoing the variables by name:

<div class="alert alert-{{ $type }}">
    {{ $message }}
</div>

Casing

Component constructor arguments should be specified using camelCase, while kebab-case should be used when referencing the argument names in your HTML attributes. For example, given the following component constructor:

/**
 * Create the component instance.
 */
public function __construct(
    public string $alertType,
) {}

The $alertType argument may be provided to the component like so:

<x-alert alert-type="danger" />

Short Attribute Syntax

When passing attributes to components, you may also use a "short attribute" syntax. This is often convenient since attribute names frequently match the variable names they correspond to:

{{-- Short attribute syntax... --}}
<x-profile :$userId :$name />
 
{{-- Is equivalent to... --}}
<x-profile :user-id="$userId" :name="$name" />

Escaping Attribute Rendering

Since some JavaScript frameworks such as Alpine.js also use colon-prefixed attributes, you may use a double colon (::) prefix to inform Blade that the attribute is not a PHP expression. For example, given the following component:

<x-button ::class="{ danger: isDeleting }">
    Submit
</x-button>

The following HTML will be rendered by Blade:

<button :class="{ danger: isDeleting }">
    Submit
</button>

Component Methods

In addition to public variables being available to your component template, any public methods on the component may be invoked. For example, imagine a component that has an isSelected method:

/**
 * Determine if the given option is the currently selected option.
 */
public function isSelected(string $option): bool
{
    return $option === $this->selected;
}

You may execute this method from your component template by invoking the variable matching the name of the method:

<option {{ $isSelected($value) ? 'selected' : '' }} value="{{ $value }}">
    {{ $label }}
</option>

Accessing Attributes and Slots Within Component Classes

Blade components also allow you to access the component name, attributes, and slot inside the class's render method. However, in order to access this data, you should return a closure from your component's render method:

use Closure;
 
/**
 * Get the view / contents that represent the component.
 */
public function render(): Closure
{
    return function () {
        return '<div {{ $attributes }}>Components content</div>';
    };
}

The closure returned by your component's render method may also receive a $data array as its only argument. This array will contain several elements that provide information about the component:

return function (array $data) {
    // $data['componentName'];
    // $data['attributes'];
    // $data['slot'];
 
    return '<div {{ $attributes }}>Components content</div>';
}

The elements in the $data array should never be directly embedded into the Blade string returned by your render method, as doing so could allow remote code execution via malicious attribute content.

The componentName is equal to the name used in the HTML tag after the x- prefix. So <x-alert />'s componentName will be alert. The attributes element will contain all of the attributes that were present on the HTML tag. The slot element is an Illuminate\Support\HtmlString instance with the contents of the component's slot.

The closure should return a string. If the returned string corresponds to an existing view, that view will be rendered; otherwise, the returned string will be evaluated as an inline Blade view.
Additional Dependencies

If your component requires dependencies from Laravel's service container, you may list them before any of the component's data attributes and they will automatically be injected by the container:

use App\Services\AlertCreator;
 
/**
 * Create the component instance.
 */
public function __construct(
    public AlertCreator $creator,
    public string $type,
    public string $message,
) {}

Hiding Attributes / Methods

If you would like to prevent some public methods or properties from being exposed as variables to your component template, you may add them to an $except array property on your component:

<?php
 
namespace App\View\Components;
 
use Illuminate\View\Component;
 
class Alert extends Component
{
    /**
     * The properties / methods that should not be exposed to the component template.
     *
     * @var array
     */
    protected $except = ['type'];
 
    /**
     * Create the component instance.
     */
    public function __construct(
        public string $type,
    ) {}
}

`Component Attributes`:- Sometimes you may need to specify additional HTML attributes, such as class, that are not part of the data required for a component to function. Typically, you want to pass these additional attributes down to the root element of the component template. For example, imagine we want to render an alert component like so:

```php
<x-alert type="error" :message="$message" class="mt-4"/>
```

All of the attributes that are not part of the component's constructor will automatically be added to the component's "attribute bag". This attribute bag is automatically made available to the component via the $attributes variable. All of the attributes may be rendered within the component by echoing this variable:

```php
<div {{ $attributes }}>
    <!-- Component content -->
</div>
```

Using directives such as @env within component tags is not supported at this time. For example, <x-alert :live="@env('production')"/> will not be compiled.
Default / Merged Attributes

Sometimes you may need to specify default values for attributes or merge additional values into some of the component's attributes. To accomplish this, you may use the attribute bag's merge method. This method is particularly useful for defining a set of default CSS classes that should always be applied to a component:

<div {{ $attributes->merge(['class' => 'alert alert-'.$type]) }}>
    {{ $message }}
</div>

If we assume this component is utilized like so:

<x-alert type="error" :message="$message" class="mb-4"/>

The final, rendered HTML of the component will appear like the following:

<div class="alert alert-error mb-4">
    <!-- Contents of the $message variable -->
</div>

Conditionally Merge Classes

Sometimes you may wish to merge classes if a given condition is true. You can accomplish this via the class method, which accepts an array of classes where the array key contains the class or classes you wish to add, while the value is a boolean expression. If the array element has a numeric key, it will always be included in the rendered class list:

<div {{ $attributes->class(['p-4', 'bg-red' => $hasError]) }}>
    {{ $message }}
</div>

If you need to merge other attributes onto your component, you can chain the merge method onto the class method:

<button {{ $attributes->class(['p-4'])->merge(['type' => 'button']) }}>
    {{ $slot }}
</button>

If you need to conditionally compile classes on other HTML elements that shouldn't receive merged attributes, you can use the @class directive.
Non-Class Attribute Merging

When merging attributes that are not class attributes, the values provided to the merge method will be considered the "default" values of the attribute. However, unlike the class attribute, these attributes will not be merged with injected attribute values. Instead, they will be overwritten. For example, a button component's implementation may look like the following:

<button {{ $attributes->merge(['type' => 'button']) }}>
    {{ $slot }}
</button>

To render the button component with a custom type, it may be specified when consuming the component. If no type is specified, the button type will be used:

<x-button type="submit">
    Submit
</x-button>

The rendered HTML of the button component in this example would be:

<button type="submit">
    Submit
</button>

If you would like an attribute other than class to have its default value and injected values joined together, you may use the prepends method. In this example, the data-controller attribute will always begin with profile-controller and any additional injected data-controller values will be placed after this default value:

<div {{ $attributes->merge(['data-controller' => $attributes->prepends('profile-controller')]) }}>
    {{ $slot }}
</div>

Retrieving and Filtering Attributes

You may filter attributes using the filter method. This method accepts a closure which should return true if you wish to retain the attribute in the attribute bag:

{{ $attributes->filter(fn (string $value, string $key) => $key == 'foo') }}

For convenience, you may use the whereStartsWith method to retrieve all attributes whose keys begin with a given string:

{{ $attributes->whereStartsWith('wire:model') }}

Conversely, the whereDoesntStartWith method may be used to exclude all attributes whose keys begin with a given string:

{{ $attributes->whereDoesntStartWith('wire:model') }}

Using the first method, you may render the first attribute in a given attribute bag:

{{ $attributes->whereStartsWith('wire:model')->first() }}

If you would like to check if an attribute is present on the component, you may use the has method. This method accepts the attribute name as its only argument and returns a boolean indicating whether or not the attribute is present:

@if ($attributes->has('class'))
    <div>Class attribute is present</div>
@endif

If an array is passed to the has method, the method will determine if all of the given attributes are present on the component:

@if ($attributes->has(['name', 'class']))
    <div>All of the attributes are present</div>
@endif

The hasAny method may be used to determine if any of the given attributes are present on the component:

@if ($attributes->hasAny(['href', ':href', 'v-bind:href']))
    <div>One of the attributes is present</div>
@endif

You may retrieve a specific attribute's value using the get method:

{{ $attributes->get('class') }}

Reserved Keywords

By default, some keywords are reserved for Blade's internal use in order to render components. The following keywords cannot be defined as public properties or method names within your components:

    data
    render
    resolveView
    shouldRender
    view
    withAttributes
    withName

`Slots`:- You will often need to pass additional content to your component via "slots". Component slots are rendered by echoing the $slot variable. To explore this concept, let's imagine that an alert component has the following markup:

```php
<!-- /resources/views/components/alert.blade.php -->
<div class="alert alert-danger">
    {{ $slot }}
</div>
```

We may pass content to the slot by injecting content into the component:

```php
<x-alert>
    <strong>Whoops!</strong> Something went wrong!
</x-alert>
```

Sometimes a component may need to render multiple different slots in different locations within the component. Let's modify our alert component to allow for the injection of a "title" slot:

```php
<!-- /resources/views/components/alert.blade.php -->
<span class="alert-title">{{ $title }}</span>
<div class="alert alert-danger">
    {{ $slot }}
</div>
```

You may define the content of the named slot using the x-slot tag. Any content not within an explicit x-slot tag will be passed to the component in the $slot variable:

<x-alert>
    <x-slot:title>
        Server Error
    </x-slot>
 
    <strong>Whoops!</strong> Something went wrong!
</x-alert>

You may invoke a slot's isEmpty method to determine if the slot contains content:

<span class="alert-title">{{ $title }}</span>
 
<div class="alert alert-danger">
    @if ($slot->isEmpty())
        This is default content if the slot is empty.
    @else
        {{ $slot }}
    @endif
</div>

Additionally, the hasActualContent method may be used to determine if the slot contains any "actual" content that is not an HTML comment:

@if ($slot->hasActualContent())
    The scope has non-comment content.
@endif

Scoped Slots

If you have used a JavaScript framework such as Vue, you may be familiar with "scoped slots", which allow you to access data or methods from the component within your slot. You may achieve similar behavior in Laravel by defining public methods or properties on your component and accessing the component within your slot via the $component variable. In this example, we will assume that the x-alert component has a public formatAlert method defined on its component class:

<x-alert>
    <x-slot:title>
        {{ $component->formatAlert('Server Error') }}
    </x-slot>
 
    <strong>Whoops!</strong> Something went wrong!
</x-alert>

Slot Attributes

Like Blade components, you may assign additional attributes to slots such as CSS class names:

<x-card class="shadow-sm">
    <x-slot:heading class="font-bold">
        Heading
    </x-slot>
 
    Content
 
    <x-slot:footer class="text-sm">
        Footer
    </x-slot>
</x-card>

To interact with slot attributes, you may access the attributes property of the slot's variable. For more information on how to interact with attributes, please consult the documentation on component attributes:

@props([
    'heading',
    'footer',
])
 
<div {{ $attributes->class(['border']) }}>
    <h1 {{ $heading->attributes->class(['text-lg']) }}>
        {{ $heading }}
    </h1>
 
    {{ $slot }}
 
    <footer {{ $footer->attributes->class(['text-gray-700']) }}>
        {{ $footer }}
    </footer>
</div>

Inline Component Views

For very small components, it may feel cumbersome to manage both the component class and the component's view template. For this reason, you may return the component's markup directly from the render method:

/**
 * Get the view / contents that represent the component.
 */
public function render(): string
{
    return <<<'blade'
        <div class="alert alert-danger">
            {{ $slot }}
        </div>
    blade;
}

Generating Inline View Components

To create a component that renders an inline view, you may use the inline option when executing the make:component command:

php artisan make:component Alert --inline

Dynamic Components

Sometimes you may need to render a component but not know which component should be rendered until runtime. In this situation, you may use Laravel's built-in dynamic-component component to render the component based on a runtime value or variable:

// $componentName = "secondary-button";
 
<x-dynamic-component :component="$componentName" class="mt-4" />

Manually Registering Components

The following documentation on manually registering components is primarily applicable to those who are writing Laravel packages that include view components. If you are not writing a package, this portion of the component documentation may not be relevant to you.

When writing components for your own application, components are automatically discovered within the app/View/Components directory and resources/views/components directory.

However, if you are building a package that utilizes Blade components or placing components in non-conventional directories, you will need to manually register your component class and its HTML tag alias so that Laravel knows where to find the component. You should typically register your components in the boot method of your package's service provider:

use Illuminate\Support\Facades\Blade;
use VendorPackage\View\Components\AlertComponent;
 
/**
 * Bootstrap your package's services.
 */
public function boot(): void
{
    Blade::component('package-alert', AlertComponent::class);
}

Once your component has been registered, it may be rendered using its tag alias:

<x-package-alert/>

Autoloading Package Components

Alternatively, you may use the componentNamespace method to autoload component classes by convention. For example, a Nightshade package might have Calendar and ColorPicker components that reside within the Package\Views\Components namespace:

use Illuminate\Support\Facades\Blade;
 
/**
 * Bootstrap your package's services.
 */
public function boot(): void
{
    Blade::componentNamespace('Nightshade\\Views\\Components', 'nightshade');
}

This will allow the usage of package components by their vendor namespace using the package-name:: syntax:

<x-nightshade::calendar />
<x-nightshade::color-picker />

Blade will automatically detect the class that's linked to this component by pascal-casing the component name. Subdirectories are also supported using "dot" notation.
Anonymous Components

Similar to inline components, anonymous components provide a mechanism for managing a component via a single file. However, anonymous components utilize a single view file and have no associated class. To define an anonymous component, you only need to place a Blade template within your resources/views/components directory. For example, assuming you have defined a component at resources/views/components/alert.blade.php, you may simply render it like so:

<x-alert/>

You may use the . character to indicate if a component is nested deeper inside the components directory. For example, assuming the component is defined at resources/views/components/inputs/button.blade.php, you may render it like so:

<x-inputs.button/>

Anonymous Index Components

Sometimes, when a component is made up of many Blade templates, you may wish to group the given component's templates within a single directory. For example, imagine an "accordion" component with the following directory structure:

/resources/views/components/accordion.blade.php
/resources/views/components/accordion/item.blade.php

This directory structure allows you to render the accordion component and its item like so:

<x-accordion>
    <x-accordion.item>
        ...
    </x-accordion.item>
</x-accordion>

However, in order to render the accordion component via x-accordion, we were forced to place the "index" accordion component template in the resources/views/components directory instead of nesting it within the accordion directory with the other accordion related templates.

Thankfully, Blade allows you to place a file matching the component's directory name within the component's directory itself. When this template exists, it can be rendered as the "root" element of the component even though it is nested within a directory. So, we can continue to use the same Blade syntax given in the example above; however, we will adjust our directory structure like so:

/resources/views/components/accordion/accordion.blade.php
/resources/views/components/accordion/item.blade.php

Data Properties / Attributes

Since anonymous components do not have any associated class, you may wonder how you may differentiate which data should be passed to the component as variables and which attributes should be placed in the component's attribute bag.

You may specify which attributes should be considered data variables using the @props directive at the top of your component's Blade template. All other attributes on the component will be available via the component's attribute bag. If you wish to give a data variable a default value, you may specify the variable's name as the array key and the default value as the array value:

<!-- /resources/views/components/alert.blade.php -->
 
@props(['type' => 'info', 'message'])
 
<div {{ $attributes->merge(['class' => 'alert alert-'.$type]) }}>
    {{ $message }}
</div>

Given the component definition above, we may render the component like so:

<x-alert type="error" :message="$message" class="mb-4"/>

Accessing Parent Data

Sometimes you may want to access data from a parent component inside a child component. In these cases, you may use the @aware directive. For example, imagine we are building a complex menu component consisting of a parent <x-menu> and child <x-menu.item>:

<x-menu color="purple">
    <x-menu.item>...</x-menu.item>
    <x-menu.item>...</x-menu.item>
</x-menu>

The <x-menu> component may have an implementation like the following:

<!-- /resources/views/components/menu/index.blade.php -->
 
@props(['color' => 'gray'])
 
<ul {{ $attributes->merge(['class' => 'bg-'.$color.'-200']) }}>
    {{ $slot }}
</ul>

Because the color prop was only passed into the parent (<x-menu>), it won't be available inside <x-menu.item>. However, if we use the @aware directive, we can make it available inside <x-menu.item> as well:

<!-- /resources/views/components/menu/item.blade.php -->
 
@aware(['color' => 'gray'])
 
<li {{ $attributes->merge(['class' => 'text-'.$color.'-800']) }}>
    {{ $slot }}
</li>

The @aware directive cannot access parent data that is not explicitly passed to the parent component via HTML attributes. Default @props values that are not explicitly passed to the parent component cannot be accessed by the @aware directive.
Anonymous Component Paths

As previously discussed, anonymous components are typically defined by placing a Blade template within your resources/views/components directory. However, you may occasionally want to register other anonymous component paths with Laravel in addition to the default path.

The anonymousComponentPath method accepts the "path" to the anonymous component location as its first argument and an optional "namespace" that components should be placed under as its second argument. Typically, this method should be called from the boot method of one of your application's service providers:

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::anonymousComponentPath(__DIR__.'/../components');
}

When component paths are registered without a specified prefix as in the example above, they may be rendered in your Blade components without a corresponding prefix as well. For example, if a panel.blade.php component exists in the path registered above, it may be rendered like so:

<x-panel />

Prefix "namespaces" may be provided as the second argument to the anonymousComponentPath method:

Blade::anonymousComponentPath(__DIR__.'/../components', 'dashboard');

When a prefix is provided, components within that "namespace" may be rendered by prefixing to the component's namespace to the component name when the component is rendered:

<x-dashboard::panel />

## Building Layouts

`Layouts Using Components`:- Most web applications maintain the same general layout across various pages. It would be incredibly cumbersome and hard to maintain our application if we had to repeat the entire layout HTML in every view we create. Thankfully, it's convenient to define this layout as a single Blade component and then use it throughout our application.

For example, imagine we are building a "todo" list application. We might define a layout component that looks like the following:

```php
<!-- resources/views/components/layout.blade.php -->
<html>
    <head>
        <title>{{ $title ?? 'Todo Manager' }}</title>
    </head>
    <body>
        <h1>Todos</h1>
        <hr/>
        {{ $slot }}
    </body>
</html>
```

Once the layout component has been defined, we may create a Blade view that utilizes the component. In this example, we will define a simple view that displays our task list:

```php
<!-- resources/views/tasks.blade.php -->
<x-layout>
    @foreach ($tasks as $task)
        <div>{{ $task }}</div>
    @endforeach
</x-layout>
```

Remember, content that is injected into a component will be supplied to the default $slot variable within our layout component. As you may have noticed, our layout also respects a $title slot if one is provided; otherwise, a default title is shown. We may inject a custom title from our task list view using the standard slot syntax discussed in the component documentation:

```php
<!-- resources/views/tasks.blade.php -->
<x-layout>
    <x-slot:title>
        Custom Title
    </x-slot>
 
    @foreach ($tasks as $task)
        <div>{{ $task }}</div>
    @endforeach
</x-layout>
```

Now that we have defined our layout and task list views, we just need to return the task view from a route:

```php
use App\Models\Task;
Route::get('/tasks', function () {
    return view('tasks', ['tasks' => Task::all()]);
});
```

- Laravel tries to resolve <x-layout> in one of these ways:
    1. Looks for a Blade file at:- resources/views/components/layout.blade.php
    2. Looks for a PHP class component named App\View\Components\Layout

Layouts Using Template Inheritance
Defining a Layout

Layouts may also be created via "template inheritance". This was the primary way of building applications prior to the introduction of components.

To get started, let's take a look at a simple example. First, we will examine a page layout. Since most web applications maintain the same general layout across various pages, it's convenient to define this layout as a single Blade view:

<!-- resources/views/layouts/app.blade.php -->
 
<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            This is the master sidebar.
        @show
 
        <div class="container">
            @yield('content')
        </div>
    </body>
</html>

As you can see, this file contains typical HTML mark-up. However, take note of the @section and @yield directives. The @section directive, as the name implies, defines a section of content, while the @yield directive is used to display the contents of a given section.

Now that we have defined a layout for our application, let's define a child page that inherits the layout.
Extending a Layout

When defining a child view, use the @extends Blade directive to specify which layout the child view should "inherit". Views which extend a Blade layout may inject content into the layout's sections using @section directives. Remember, as seen in the example above, the contents of these sections will be displayed in the layout using @yield:

<!-- resources/views/child.blade.php -->
 
@extends('layouts.app')
 
@section('title', 'Page Title')
 
@section('sidebar')
    @parent
 
    <p>This is appended to the master sidebar.</p>
@endsection
 
@section('content')
    <p>This is my body content.</p>
@endsection

In this example, the sidebar section is utilizing the @parent directive to append (rather than overwriting) content to the layout's sidebar. The @parent directive will be replaced by the content of the layout when the view is rendered.

Contrary to the previous example, this sidebar section ends with @endsection instead of @show. The @endsection directive will only define a section while @show will define and immediately yield the section.

The @yield directive also accepts a default value as its second parameter. This value will be rendered if the section being yielded is undefined:

@yield('content', 'Default content')

Forms
CSRF Field

Anytime you define an HTML form in your application, you should include a hidden CSRF token field in the form so that the CSRF protection middleware can validate the request. You may use the @csrf Blade directive to generate the token field:

<form method="POST" action="/profile">
    @csrf
 
    ...
</form>

`Method Field`:- Since HTML forms can't make PUT, PATCH, or DELETE requests, you will need to add a hidden _method field to spoof these HTTP verbs. The @method Blade directive can create this field for you:

```php
<form action="/foo/bar" method="POST">
    @method('PUT')
 
    ...
</form>
```

`Validation Errors`:-  The @error directive may be used to quickly check if validation error messages exist for a given attribute. Within an @error directive, you may echo the $message variable to display the error message:

```php
<!-- /resources/views/post/create.blade.php -->
 
<label for="title">Post Title</label>
 
<input
    id="title"
    type="text"
    class="@error('title') is-invalid @enderror"
/>
 
@error('title')
    <div class="alert alert-danger">{{ $message }}</div>
@enderror
```

Since the @error directive compiles to an "if" statement, you may use the @else directive to render content when there is not an error for an attribute:

<!-- /resources/views/auth.blade.php -->
 
<label for="email">Email address</label>
 
<input
    id="email"
    type="email"
    class="@error('email') is-invalid @else is-valid @enderror"
/>

You may pass the name of a specific error bag as the second parameter to the @error directive to retrieve validation error messages on pages containing multiple forms:

<!-- /resources/views/auth.blade.php -->
 
<label for="email">Email address</label>
 
<input
    id="email"
    type="email"
    class="@error('email', 'login') is-invalid @enderror"
/>
 
@error('email', 'login')
    <div class="alert alert-danger">{{ $message }}</div>
@enderror

Stacks

Blade allows you to push to named stacks which can be rendered somewhere else in another view or layout. This can be particularly useful for specifying any JavaScript libraries required by your child views:

@push('scripts')
    <script src="/example.js"></script>
@endpush

If you would like to @push content if a given boolean expression evaluates to true, you may use the @pushIf directive:

@pushIf($shouldPush, 'scripts')
    <script src="/example.js"></script>
@endPushIf

You may push to a stack as many times as needed. To render the complete stack contents, pass the name of the stack to the @stack directive:

<head>
    <!-- Head Contents -->
 
    @stack('scripts')
</head>

If you would like to prepend content onto the beginning of a stack, you should use the @prepend directive:

@push('scripts')
    This will be second...
@endpush
 
// Later...
 
@prepend('scripts')
    This will be first...
@endprepend

Service Injection

The @inject directive may be used to retrieve a service from the Laravel service container. The first argument passed to @inject is the name of the variable the service will be placed into, while the second argument is the class or interface name of the service you wish to resolve:

@inject('metrics', 'App\Services\MetricsService')
 
<div>
    Monthly Revenue: {{ $metrics->monthlyRevenue() }}.
</div>

Rendering Inline Blade Templates

Sometimes you may need to transform a raw Blade template string into valid HTML. You may accomplish this using the render method provided by the Blade facade. The render method accepts the Blade template string and an optional array of data to provide to the template:

use Illuminate\Support\Facades\Blade;
 
return Blade::render('Hello, {{ $name }}', ['name' => 'Julian Bashir']);

Laravel renders inline Blade templates by writing them to the storage/framework/views directory. If you would like Laravel to remove these temporary files after rendering the Blade template, you may provide the deleteCachedView argument to the method:

return Blade::render(
    'Hello, {{ $name }}',
    ['name' => 'Julian Bashir'],
    deleteCachedView: true
);

Rendering Blade Fragments

When using frontend frameworks such as Turbo and htmx, you may occasionally need to only return a portion of a Blade template within your HTTP response. Blade "fragments" allow you to do just that. To get started, place a portion of your Blade template within @fragment and @endfragment directives:

@fragment('user-list')
    <ul>
        @foreach ($users as $user)
            <li>{{ $user->name }}</li>
        @endforeach
    </ul>
@endfragment

Then, when rendering the view that utilizes this template, you may invoke the fragment method to specify that only the specified fragment should be included in the outgoing HTTP response:

return view('dashboard', ['users' => $users])->fragment('user-list');

The fragmentIf method allows you to conditionally return a fragment of a view based on a given condition. Otherwise, the entire view will be returned:

return view('dashboard', ['users' => $users])
    ->fragmentIf($request->hasHeader('HX-Request'), 'user-list');

The fragments and fragmentsIf methods allow you to return multiple view fragments in the response. The fragments will be concatenated together:

view('dashboard', ['users' => $users])
    ->fragments(['user-list', 'comment-list']);
 
view('dashboard', ['users' => $users])
    ->fragmentsIf(
        $request->hasHeader('HX-Request'),
        ['user-list', 'comment-list']
    );

Extending Blade

Blade allows you to define your own custom directives using the directive method. When the Blade compiler encounters the custom directive, it will call the provided callback with the expression that the directive contains.

The following example creates a @datetime($var) directive which formats a given $var, which should be an instance of DateTime:

<?php
 
namespace App\Providers;
 
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }
 
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blade::directive('datetime', function (string $expression) {
            return "<?php echo ($expression)->format('m/d/Y H:i'); ?>";
        });
    }
}

As you can see, we will chain the format method onto whatever expression is passed into the directive. So, in this example, the final PHP generated by this directive will be:

<?php echo ($var)->format('m/d/Y H:i'); ?>

After updating the logic of a Blade directive, you will need to delete all of the cached Blade views. The cached Blade views may be removed using the view:clear Artisan command.
Custom Echo Handlers

If you attempt to "echo" an object using Blade, the object's __toString method will be invoked. The __toString method is one of PHP's built-in "magic methods". However, sometimes you may not have control over the __toString method of a given class, such as when the class that you are interacting with belongs to a third-party library.

In these cases, Blade allows you to register a custom echo handler for that particular type of object. To accomplish this, you should invoke Blade's stringable method. The stringable method accepts a closure. This closure should type-hint the type of object that it is responsible for rendering. Typically, the stringable method should be invoked within the boot method of your application's AppServiceProvider class:

use Illuminate\Support\Facades\Blade;
use Money\Money;
 
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::stringable(function (Money $money) {
        return $money->formatTo('en_GB');
    });
}

Once your custom echo handler has been defined, you may simply echo the object in your Blade template:

Cost: {{ $money }}

Custom If Statements

Programming a custom directive is sometimes more complex than necessary when defining simple, custom conditional statements. For that reason, Blade provides a Blade::if method which allows you to quickly define custom conditional directives using closures. For example, let's define a custom conditional that checks the configured default "disk" for the application. We may do this in the boot method of our AppServiceProvider:

use Illuminate\Support\Facades\Blade;
 
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::if('disk', function (string $value) {
        return config('filesystems.default') === $value;
    });
}

Once the custom conditional has been defined, you can use it within your templates:

@disk('local')
    <!-- The application is using the local disk... -->
@elsedisk('s3')
    <!-- The application is using the s3 disk... -->
@else
    <!-- The application is using some other disk... -->
@enddisk
 
@unlessdisk('local')
    <!-- The application is not using the local disk... -->
@enddisk
