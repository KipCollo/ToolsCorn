# Validations

It is important to ensure all required form controls are filled out, in the correct format, before submitting user entered form data to the server. This client-side form validation helps ensure data entered matches the requirements set forth in the various form controls.

Client-side validation is an initial check and an important feature of good user experience; by catching invalid data on the client-side, the user can fix it straight away. If it gets to the server and is then rejected, a noticeable delay is caused by a round trip to the server and then back to the client-side to tell the user to fix their data.
When you enter data, the browser (and the web server) will check to see that the data is in the correct format and within the constraints set by the application. Validation done in the browser is called client-side validation, while validation done on the server is called server-side validation. In this chapter we are focusing on client-side validation.

If the information is correctly formatted, the application allows the data to be submitted to the server and (usually) saved in a database; if the information isn't correctly formatted, it gives the user an error message explaining what needs to be corrected, and lets them try again.

Main reasons for validation:

1. We want to get the right data, in the right format. Our applications won't work properly if our users' data is stored in the wrong format, is incorrect, or is omitted altogether.
2. We want to protect our users' data. Forcing our users to enter secure passwords makes it easier to protect their account information.
3. We want to protect ourselves. There are many ways that malicious users can misuse unprotected forms to damage the application.


There are two different types of client-side validation that you'll encounter on the web:

- `HTML form validation` - HTML form attributes can define which form controls are required and which format the user-entered data must be in to be valid.
- `JavaScript form validation` - JavaScript is generally included to enhance or customize HTML form validation.

Client side validation can be accomplished with little to no JavaScript. HTML validation is faster than JavaScript, but is less customizable than JavaScript validation. It is generally recommended to begin your forms using robust HTML features, then enhance the user experience with JavaScript as needed.


**Using built-in form validation** - One of the most significant features of form controls is the ability to validate most user data without relying on JavaScript. This is done by using validation attributes on form elements. We've seen many of these earlier in the course, but to recap:

- `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength and maxlength`: Specifies the minimum and maximum length of textual data (strings).
- `min, max, and step`: Specifies the minimum and maximum values of numerical input types, and the increment, or step, for values, starting from the minimum.
- `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- `pattern`: Specifies a regular expression that defines a pattern the entered data needs to follow.
If the data entered in a form field follows all of the rules specified by the attributes applied to the field, it is considered valid. If not, it is considered invalid.

When an element is valid, the following things are true:

The element matches the :valid CSS pseudo-class, which lets you apply a specific style to valid elements. The control will also match :user-valid if the user has interacted with the control, and may match other UI pseudo-classes, such as :in-range, depending on the input type and attributes.
If the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).
When an element is invalid, the following things are true:

The element matches the :invalid CSS pseudo-class. If the user has interacted with the control, it also matches the :user-invalid CSS pseudo-class. Other UI pseudo-classes may also match, such as :out-of-range, depending on the error. These let you apply a specific style to invalid elements.
If the user tries to send the data, the browser will block the form submission and display an error message. The error message will differ depending on the type of error. The Constraint Validation API is described below.


*The required attribute* - A common HTML validation feature is the required attribute. Add this attribute to an input to make an element mandatory. When this attribute is set, the element matches the :required UI pseudo-class and the form won't submit, displaying an error message on submission, if the input is empty. While empty, the input will also be considered invalid, matching the :invalid UI pseudo-class.

If any radio button in a same-named group has the required attribute, one of the radio buttons in that group must be checked for the group to be valid; the checked radio doesn't have to be the one with the attribute set.

Note: Only require users to input data you need: For example, is it really necessary to know someone's gender or title?

*Validating against a regular expression* - Another useful validation feature is the pattern attribute, which expects a Regular Expression as its value. A regular expression (regexp) is a pattern that can be used to match character combinations in text strings, so regexps are ideal for form validation and serve a variety of other uses in JavaScript.

Regexps are quite complex, and we don't intend to teach you them exhaustively in this article. Below are some examples to give you a basic idea of how they work.

a — Matches one character that is a (not b, not aa, and so on).
abc — Matches a, followed by b, followed by c.
ab?c — Matches a, optionally followed by a single b, followed by c. (ac or abc)
ab*c — Matches a, optionally followed by any number of bs, followed by c. (ac, abc, abbbbbc, and so on).
a|b — Matches one character that is a or b.
abc|xyz — Matches exactly abc or exactly xyz (but not abcxyz or a or y, and so on).

*Constraining the length of your entries* - You can constrain the character length of all text fields created by <input> or <textarea> by using the minlength and maxlength attributes. A field is invalid if it has a value and that value has fewer characters than the minlength value or more than the maxlength value.

Browsers often don't let the user type a longer value than expected into text fields. A better user experience than just using maxlength is to also provide character count feedback in an accessible manner and let the user edit their content down to size. An example of this is the character limit when posting on social media. JavaScript, including solutions using maxlength, can be used to provide this.

Note: Length constraints are never reported if the value is set programmatically. They are only reported for user-provided input.

*Constraining the values of your entries* - For numeric fields, including <input type="number"> and the various date input types, the min and max attributes can be used to provide a range of valid values. If the field contains a value outside this range, it will be invalid.


**Validating forms using JavaScript** - If you want to change the text of the native error messages, JavaScript is needed.
The Constraint Validation API
The Constraint Validation API consists of a set of methods and properties available on the following form element DOM interfaces:

HTMLButtonElement (represents a <button> element)
HTMLFieldSetElement (represents a <fieldset> element)
HTMLInputElement (represents an <input> element)
HTMLOutputElement (represents an <output> element)
HTMLSelectElement (represents a <select> element)
HTMLTextAreaElement (represents a <textarea> element)
The Constraint Validation API makes the following properties available on the above elements.

validationMessage: Returns a localized message describing the validation constraints that the control doesn't satisfy (if any). If the control is not a candidate for constraint validation (willValidate is false) or the element's value satisfies its constraints (is valid), this will return an empty string.

validity: Returns a ValidityState object that contains several properties describing the validity state of the element. You can find full details of all the available properties in the ValidityState reference page; below is listed a few of the more common ones:

patternMismatch: Returns true if the value does not match the specified pattern, and false if it does match. If true, the element matches the :invalid CSS pseudo-class.
tooLong: Returns true if the value is longer than the maximum length specified by the maxlength attribute, or false if it is shorter than or equal to the maximum. If true, the element matches the :invalid CSS pseudo-class.
tooShort: Returns true if the value is shorter than the minimum length specified by the minlength attribute, or false if it is greater than or equal to the minimum. If true, the element matches the :invalid CSS pseudo-class.
rangeOverflow: Returns true if the value is greater than the maximum specified by the max attribute, or false if it is less than or equal to the maximum. If true, the element matches the :invalid and :out-of-range CSS pseudo-classes.
rangeUnderflow: Returns true if the value is less than the minimum specified by the min attribute, or false if it is greater than or equal to the minimum. If true, the element matches the :invalid and :out-of-range CSS pseudo-classes.
typeMismatch: Returns true if the value is not in the required syntax (when type is email or url), or false if the syntax is correct. If true, the element matches the :invalid CSS pseudo-class.
valid: Returns true if the element meets all its validation constraints, and is therefore considered to be valid, or false if it fails any constraint. If true, the element matches the :valid CSS pseudo-class; the :invalid CSS pseudo-class otherwise.
valueMissing: Returns true if the element has a required attribute, but no value, or false otherwise. If true, the element matches the :invalid CSS pseudo-class.
willValidate: Returns true if the element will be validated when the form is submitted; false otherwise.

The Constraint Validation API also makes the following methods available on the above elements and the form element.

checkValidity(): Returns true if the element's value has no validity problems; false otherwise. If the element is invalid, this method also fires an invalid event on the element.
reportValidity(): Reports invalid field(s) using events. This method is useful in combination with preventDefault() in an onSubmit event handler.
setCustomValidity(message): Adds a custom error message to the element; if you set a custom error message, the element is considered to be invalid, and the specified error is displayed. This lets you use JavaScript code to establish a validation failure other than those offered by the standard HTML validation constraints. The message is shown to the user when reporting the problem.

Implementing a customized error message
As you saw in the HTML validation constraint examples earlier, each time a user tries to submit an invalid form, the browser displays an error message. The way this message is displayed depends on the browser.

These automated messages have two drawbacks:

There is no standard way to change their look and feel with CSS.
They depend on the browser locale, which means that you can have a page in one language but an error message displayed in another language

