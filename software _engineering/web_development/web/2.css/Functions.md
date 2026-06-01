# CSS Functions

- `calc()` performs a calculation to be used as the property value. Ex.
width: calc(100% - 100px);

- `var()` can be used to insert the value of a custom property. Variables in CSS should be declared within a CSS selector that defines its scope. For a global scope you can use either the :root or the body selector. The variable name must begin with two dashes (--) and is case sensitive! The syntax of the var() function is as follows: var(custom-name, value). Ex.

```css
:root {
  --main-bg-color: coral;
}

#div1 {
  background-color: var(--main-bg-color);
}
```

