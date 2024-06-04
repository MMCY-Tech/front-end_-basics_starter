# Utility Functions Documentation

This documentation covers the utility functions provided for DOM manipulation, event handling, and form handling. These functions are designed to simplify common tasks in your project.

### Function List
* createElement
* addClasses
* onClick
* appendChildren
* createButton
* createFormField
* createFormLabel
* createFormGroup
* handleFormSubmit
* showElement
* hideElement

##### `createElement`
Description: Creates a new DOM element with the specified tag, attributes, and text content.

```javascript
const element = createElement(tag, attributes = {}, textContent = '');
```

**Parametres:**
* `tag` (string): The type of element to create (e.g., 'div', 'span', 'input').
* `attributes` (object): An object containing key-value pairs of attributes to set on the element.
* `textContent` (string): The text content to set for the element.

**Example:**

```javascript
const div = createElement('div', { class: 'my-class', id: 'my-id' }, 'Hello, World!');
```

##### `addClasses`
**Description**: Adds one or more classes to a DOM element.

```javascript
addClasses(element, classes);
```

**Parameters:**

* `element` (HTMLElement): The DOM element to add classes to.
* `classes` (string or array): The class or classes to add. Can be a single string or an array of strings.

**Example:**

```javascript
const element = document.getElementById('my-element');
addClasses(element, 'class1 class2');
// or
addClasses(element, ['class1', 'class2']);
```

##### `onClick`
**Description**: Attaches a click event listener to a DOM element.

```javascript
onClick(element, callback);
```

**Parameters:**
* `element` (HTMLElement): The DOM element to attach the event listener to.
* `callback` (function): The function to call when the element is clicked.

**Example:**
```javascript
const button = document.getElementById('my-button');
onClick(button, () => {
    alert('Button clicked!');
});
```

##### `appendChildren`
**Description**: Appends multiple children to a parent DOM element.

```javascript
appendChildren(parent, children);
```

**Parameters:**
* `parent` (HTMLElement): The parent DOM element to append children to.
* `children` (array): An array of DOM elements to append to the parent.

**Example**:

```javascript
const parent = document.getElementById('parent');
const child1 = createElement('div', {}, 'Child 1');
const child2 = createElement('div', {}, 'Child 2');
appendChildren(parent, [child1, child2]);
```

#### `createButton`
**Description:** Creates a button element with specified text, classes, and a click event handler.

```javascript
const button = createButton(text, classes, onClickHandler);
```

**Parameters**:

* `text` (string): The text content of the button.
* `classes` (string): The classes to add to the button.
* `onClickHandler` (function): The function to call when the button is clicked.

**Example:**

```javascript
const button = createButton('Click Me', 'btn btn-primary', () => {
    console.log('Button clicked');
});
document.body.appendChild(button);
```

##### `createFormField`
**Description:** Creates a form field (input element) with the specified type, name, placeholder, and value.

```javascript
const input = createFormField(type, name, placeholder, value = '');
```

**Parameters:**

* `type` (string): The type of the input element (e.g., 'text', 'email', 'password').
* `name` (string): The name attribute for the input element.
* `placeholder` (string): The placeholder text for the input element.
* `value` (string, optional): The initial value for the input element.

```javascript
const input = createFormField('text', 'username', 'Enter your username');
document.body.appendChild(input);
```

#### createFormLabel
**Description:** Creates a label element with the specified text and for attribute.

```javascript
const label = createFormLabel(text, htmlFor);
```

**Parameters:**
* `text` (string): The text content of the label.
* `htmlFor` (string): The for attribute of the label, linking it to a form element.

```javascript
const label = createFormLabel('Username', 'username');
document.body.appendChild(label);
```

#### `createFormGroup`
**Description:** Creates a form group containing a label and an input field.

```javascript
const formGroup = createFormGroup(labelText, inputType, inputName, inputPlaceholder, inputValue = '');
```

**Parameters:**
* `labelText` (string): The text content of the label.
* `inputType` (string): The type of the input element.
* `inputName` (string): The name attribute of the input element.
* `inputPlaceholder` (string): The placeholder text for the input element.
* `inputValue` (string, optional): The initial value of the input element.

**Example:**
```javascript
const formGroup = createFormGroup('Username', 'text', 'username', 'Enter your username');
document.body.appendChild(formGroup);
```

#### `handleFormSubmit`
**Description:** Attaches a submit event listener to a form element and processes the form data.

```javascript
handleFormSubmit(formElement, callback);
```

**Parameters:**

* `formElement` (HTMLElement): The form element to attach the event listener to.
* `callback` (function): The function to call with the form data object when the form is submitted.

**Example:**
```javascript
const form = document.getElementById('my-form');
handleFormSubmit(form, (formData) => {
    console.log(formData);
});
```

**How It Works:**

1. Adds a submit event listener to the form element.
2. Prevents the default form submission behavior (page reload).
3. Create a FormData object from the form element.
4. Converts the FormData object into a plain JavaScript object.
5. Calls the callback function with the form data object.

#### `showElement`
**Description:** Removes the hidden class from a DOM element to make it visible.

```javascript
showElement(element);
```

**Parameters**
* element (HTMLElement): The DOM element to show.

**Example:**
```javascript
const element = document.getElementById('my-element');
showElement(element);
```

#### `hideElement`
**Description:** Adds the `hidden` class to a DOM element to hide it.

```javascript
hideElement(element);
```
**Parameters:**
* `element` (HTMLElement): The DOM element to hide.

**Example:**
```javascript
const element = document.getElementById('my-element');
hideElement(element);
```
