# This is a start code for sprint 4: Front-end basics

**The utility functions provided simplify DOM manipulation, making it easier for learners to focus on the application logic.**

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build Tailwind CSS:
    ```bash
    npm run build:css
    ```

4. Open `public/index.html` in your browser to see the To-Do list application as an example.

## Utility Functions Documentation

### `createElement(tag, attributes = {}, textContent = '')`

Creates a DOM element with the specified tag, attributes, and text content.

### `addClasses(element, classes)`

Adds one or more classes to a DOM element.

### `onClick(element, callback)`

Attaches a click event listener to a DOM element.

### `createFormField(type, name, placeholder, value = '')`

Creates an input form field with the specified type, name, placeholder, and value.

### `createFormLabel(text, htmlFor)`

Creates a label element with the specified text and `for` attribute.

### `createFormGroup(labelText, inputType, inputName, inputPlaceholder, inputValue = '')`

Creates a form group consisting of a label and an input field.

### `handleFormSubmit(formElement, callback)`

Handles form submission and passes the form data as an object to the callback function.

### `showElement(element)`

Shows a hidden element by removing the 'hidden' class.

### `hideElement(element)`

Hides an element by adding the 'hidden' class.

### `appendChildren(parent, children)`

Appends multiple children to a parent element.

### `removeAllChildren(element)`

Removes all children from an element.

### `toggleClass(element, className)`

Toggles a class on a DOM element.

### `setAttributes(element, attributes)`

Sets multiple attributes on a DOM element.

### `createButton(text, classes, onClickHandler)`

Creates a button element with specified text, classes, and a click event handler.
