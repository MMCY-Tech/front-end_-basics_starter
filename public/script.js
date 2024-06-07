/**
 * Utility function to create a DOM element with given attributes and text content.
 * @param {string} tag - The HTML tag to create.
 * @param {Object} [attributes={}] - A set of attributes to set on the element.
 * @param {string} [textContent=''] - The text content to set on the element.
 * @returns {HTMLElement} The created element.
 */
function createElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    element.textContent = textContent;
    return element;
}

/**
 * Utility function to add classes to a DOM element.
 * @param {HTMLElement} element - The element to add classes to.
 * @param {string|string[]} classes - A string or array of strings of class names.
 */
function addClasses(element, classes) {
    if (typeof classes === 'string') {
        classes = classes.split(' ');
    }
    element.classList.add(...classes);
}

/**
 * Utility function to attach a click event listener to a DOM element.
 * @param {HTMLElement} element - The element to attach the event listener to.
 * @param {Function} callback - The event handler function.
 */
function onClick(element, callback) {
    element.addEventListener('click', callback);
}

/**
 * Utility function to attach a click event listener to a DOM element.
 * @param {HTMLElement} element - The element to attach the event listener to.
 * @param {Function} callback - The event handler function.
 */
function onInput(elementId, callback) {
    const element = document.getElementById(elementId);
    element?.addEventListener('input', callback);
}

/**
 * Utility function to create a form field input element.
 * @param {string} type - The type of the input element.
 * @param {string} name - The name attribute of the input element.
 * @param {string} placeholder - The placeholder text for the input element.
 * @param {string} [value=''] - The default value of the input element.
 * @returns {HTMLInputElement} The created input element.
 */
function createFormField(type, name, placeholder, value = '') {
    const input = createElement('input', {
        type: type,
        name: name,
        placeholder: placeholder,
        value: value
    });
    return input;
}

/**
 * Utility function to create a label element.
 * @param {string} text - The text content of the label.
 * @param {string} htmlFor - The ID of the input element this label is associated with.
 * @returns {HTMLLabelElement} The created label element.
 */
function createFormLabel(text, htmlFor) {
    const label = createElement('label', { for: htmlFor }, text);
    return label;
}

/**
 * Utility function to create a form group containing a label and an input field.
 * @param {string} labelText - The text content of the label.
 * @param {string} inputType - The type of the input element.
 * @param {string} inputName - The name attribute of the input element.
 * @param {string} inputPlaceholder - The placeholder text for the input element.
 * @param {string} [inputValue=''] - The default value of the input element.
 * @returns {HTMLElement} The created form group element.
 */
function createFormGroup(labelText, inputType, inputName, inputPlaceholder, inputValue = '') {
    const label = createFormLabel(labelText, inputName);
    const input = createFormField(inputType, inputName, inputPlaceholder, inputValue);
    const formGroup = createElement('div', { class: 'form-group' });
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    return formGroup;
}

/**
 * Utility function to handle form submission and extract form data as an object.
 * @param {HTMLFormElement} formElement - The form element to attach the event listener to.
 * @param {Function} callback - The callback function to handle the form data.
 */
function handleFormSubmit(formElement, callback) {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(formElement);
        const formDataObject = Object.fromEntries(formData.entries());
        callback(formDataObject);
    });
}

/**
 * Utility function to show a hidden element.
 * @param {HTMLElement} element - The element to show.
 */
function showElement(element) {
    element.classList.remove('hidden');
}

/**
 * Utility function to hide an element.
 * @param {HTMLElement} element - The element to hide.
 */
function hideElement(element) {
    element.classList.add('hidden');
}

/**
 * Utility function to append multiple children to a parent element.
 * @param {HTMLElement} parent - The parent element.
 * @param {HTMLElement[]} children - The child elements to append.
 */
function appendChildren(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

/**
 * Utility function to remove all children from an element.
 * @param {HTMLElement} element - The element to remove children from.
 */
function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/**
 * Utility function to toggle a class on an element.
 * @param {HTMLElement} element - The element to toggle the class on.
 * @param {string} className - The class name to toggle.
 */
function toggleClass(element, className) {
    element.classList.toggle(className);
}

/**
 * Utility function to set multiple attributes on an element.
 * @param {HTMLElement} element - The element to set attributes on.
 * @param {Object} attributes - An object of attribute key-value pairs.
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
}

/**
 * Utility function to create a button element with specified classes and click handler.
 * @param {string} text - The text content of the button.
 * @param {string|string[]} classes - A string or array of class names.
 * @param {Function} onClickHandler - The click event handler function.
 * @returns {HTMLButtonElement} The created button element.
 */
function createButton(text, classes, onClickHandler) {
    const button = createElement('button', {}, text);
    addClasses(button, classes);
    onClick(button, onClickHandler);
    return button;
}
