# Forms

Although you can build forms using vanilla React, it normally requires a lot of boilerplate code. This is because the form is built using a combination of state and props. To make it easier to manage forms, we use some sort of library.

## React hook form

React hook form is an opensource form library for react. Performant, flexible and extensible forms with easy-to-use validation.

## Formik

Formik is another famous opensource form library that helps with getting values in and out of form state, validation and error messages, and handling form submissions.

## Final form

High performance subscription-based form state management for React.

Controlled components are form elements whose values are controlled by React state. The state is updated whenever the user interacts with the form, and the input
values are set explicitly using React state, allowing for more control and validation.

Forms in React can be handled by using controlled components or uncontrolled components. Controlled components store form data in React state and update the
state on user input. Uncontrolled components store form data internally and retrieve it using refs or other DOM methods.

`Handling Forms`:- Handling forms is about how you handle the data when it changes value or gets submitted.
In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the onChange attribute.We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

```jsx
import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}
```

`Submitting Forms`:- You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

```jsx
import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
```
