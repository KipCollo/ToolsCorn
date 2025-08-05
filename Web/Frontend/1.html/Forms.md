# HTML Forms

Forms are used to collect user input.The user input is sent to the server for processing.

## Designing a Form

1. Ask the Right Questions.Keep it minimal.The more queations in your forms,the more errors.
2. Tone for asking queatins.
3. Explain what you want.

Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls.

`The form Element`:- The HTMl <form> element is used to create an HTML form for user input.
The <form> element is a container for different types of input elements,such as: text fields,checkboxes,radio buttons,submit buttons,etc.

```html
<form>
   form elements
</form>
```

## HTML Form Attributes

`Action Attribute`:- The action attribute defines the action to be performed when the form is submitted.Usually, the form data is sent to a file on the server when the user clicks on the submit button.

```html
 <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
```

Tip: If the action attribute is omitted, the action is set to the current page.

`Target Attribute`:- The target attribute specifies where to display the response that is received after submitting the form.
The target attribute can have one of the following values:
   1. _blank - The reponse is displayed in a new window or tab.
   2. _self - The response is displayed in the current window.
   3. _parent - The response is displayed in parent frame.
   4. _top - The response is displayed in the full body of the window.
   5. framename - The response is displayed in a named frame.
The default value is _self which means that the response will open in the current window.

```html
<form action="/action_page.php" target="_blank"> 
```

`The Method Attribute`:-The method attribute specifies the HTTP method to be used when submitting the form data.The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").The default HTTP method when submitting form data is GET. 

```html
<form action="/action_page.php" method="post"> 
```

`The Autocomplete Attribute`:- The autocomplete attribute specifies whether a form should have autocomplete on or off.When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

```html
 <form action="/action_page.php" autocomplete="on"> 
```

`The Novalidate Attribute`:-The novalidate attribute is a boolean attribute.When present, it specifies that the form-data (input) should not be validated when submitted.

```html
 <form action="/action_page.php" novalidate> 
```

`enctype`:- Specifies how the form-data should be encoded when submitting it to the server (only for method="post").
`name`:- Specifies the name of the form.
`rel`:-Specifies the relationship between a linked resource and the current document.
`accept-charset` :-Specifies the character encodings used for form submission

## HTML FORM Elements

The HTML <form> element can contain one or more of the following elements:-

- `<input>` - Often used.It can be displayed in several ways,depending on *type* attribute.

```html
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"> 
```

- `<label>` - Defines a label for several form elements.It is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.It also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.The for attribute of the <label> tag should be equal to the id attribute of the <input> element to bind them together.

- `<select>` - Defines a drop-down list:The <option> elements defines an option that can be selected.By default, the first item in the drop-down list is selected.
To define a pre-selected option, add the selected attribute to the option:

```html
 <label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab" selected>Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> 
```

Use the size attribute to specify the number of visible values:

```html
 <label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> 
```

Use the multiple attribute to allow the user to select more than one value:

```html
 <label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> 
```

- `<textarea>` - defines a multi-line input field (a text area):
The rows attribute specifies the visible number of lines in a text area.
The cols attribute specifies the visible width of a text area.

```html
 <textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea> 
```

- `<button>` - defines a clickable button: 

```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

Note: Always specify the type attribute for the button element. Different browsers may use different default types for the button element.


- `<fieldset>` & `<legend>` - The <fieldset> element is used to group related data in a form.The <legend> element defines a caption for the <fieldset> element.

```html
 <form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

- `<datalist>` - The <datalist> element specifies a list of pre-defined options for an <input> element.Users will see a drop-down list of the pre-defined options as they input data.The list attribute of the <input> element, must refer to the id attribute of the <datalist> element.

```html
 <form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form> 
```

- `<output>` - Defines the result of a calculation.
- `<option>` - Defines an option in a drop-down list.
- `<optgroup>` - Defines a group of related options in a drop-down list.

## HTML Input Types

`Input Type Text`:- <input type="text"> defines a single-line text input field:

```html
 <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

`Input Type Password`:- <input type="password"> defines a password field:

```html
 <form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form> 
```

The characters in a password field are masked (shown as asterisks or circles).

`Input Type Submit`:- <input type="submit"> defines a button for submitting form data to a form-handler.The form-handler is typically a server page with a script for processing input data.The form-handler is specified in the form's action attribute:

```html
 <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
```

If you omit the submit button's value attribute, the button will get a default text.

`Input Type Reset`:- <input type="reset"> defines a reset button that will reset all form values to their default values:

```html
 <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset">
</form> 
```

If you change the input values and then click the "Reset" button, the form-data will be reset to the default values.

`Input Type Radio`:- <input type="radio"> defines a radio button.Radio buttons let a user select ONLY ONE of a limited number of choices:

```html
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>
```

`Input Type Checkbox`:- <input type="checkbox"> defines a checkbox.Checkboxes let a user select ZERO or MORE options of a limited number of choices.

```html
 <form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form> 
```

`Input Type Button`:- <input type="button"> defines a button:

```html
 <input type="button" onclick="alert('Hello World!')" value="Click Me!"> 
```

`Input Type Color`:- The <input type="color"> is used for input fields that should contain a color.Depending on browser support, a color picker can show up in the input field.

```html
 <form>
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor">
</form> 
```

`Input Type Date`:-The <input type="date"> is used for input fields that should contain a date.Depending on browser support, a date picker can show up in the input field.

```html
 <form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
</form> 
```

You can also use the min and max attributes to add restrictions to dates:

```html
 <form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02">
</form> 
```

`Input Type Email`:- The <input type="email"> is used for input fields that should contain an e-mail address.Depending on browser support, the e-mail address can be automatically validated when submitted.Some smartphones recognize the email type, and add ".com" to the keyboard to match email input.

```html
 <form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form> 
```

`Input Type Search`:- The <input type="search"> is used for search fields (a search field behaves like a regular text field).

```html
 <form>
  <label for="gsearch">Search Google:</label>
  <input type="search" id="gsearch" name="gsearch">
</form> 
```
