# CSS Forms

CSS Styling Forms - CSS is used to style HTML forms. The look of an HTML form can be greatly improved with CSS

**CSS Form Inputs** - With CSS, you can style most of the different input types, like text fields, password fields, checkboxes, radio buttons, and file inputs. You can also style input labels and form buttons.

Some commonly used CSS properties for styling input fields, are:

- width
- padding
- margin
- border
- border-radius
- background-color
- color
- font-size

`Style Input Width` - The width property is used to set the width of an input field.
Tip: The default width of an HTML input text field, is 20 characters.

```css
input {
  width: 100%;
}
```

The example above applies to all <input> elements. If you only want to style a specific input type, you can use attribute selectors:

- input[type=text] - will only select text fields
- input[type=password] - will only select password fields
- input[type=number] - will only select number fields


`Style Input Padding` - The padding property is used to add some space inside the text field.
Tip: When you have several input fields after each other, you might also want to add some margin, to add more space around them:

```css
input[type=text] {
    padding: 12px;
    margin: 10px 0;
}
```


`Style Input Border` - The border property is used to change the border size and color, and the border-radius property can be used to add rounded corners:

```css
input[type=text] {
  border: 2px solid red;
  border-radius: 8px;
}
```


`Style Input Background Color and Color` - The background-color property is used to add a background color to the input, and the color property is used to change the text color:

```css
input[type=text] {
  background-color: #3CBC8D;
  color: white;
}
```


**CSS Styling Buttons**  - With CSS, different HTML buttons can be styled in many ways.

The most common CSS properties for styling buttons are:

- background-color - defines the background color of a button
- color - defines the text color of a button
- border - defines the border of a button
- padding - defines the space between the text and the border of a button
- border-radius - adds rounded corners to a button
- box-shadow - adds shadows to a button
- text-align - centers the text of a button
- font-size - defines the font size of the text on a button
- text-decoration - removes the underline for <a> elements used as buttons
- cursor - changes the mouse cursor when hovering over the button

Buttons are typically created with the HTML <button> element, the <input type="button"> element, or an <a> element styled as a button.

