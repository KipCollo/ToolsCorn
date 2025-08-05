
var element=document.getElementById('hello');
console.log(element);

var doc=document.getElementsByClassName('world');
console.log(doc);

// Access element by ID
const elementById = document.getElementById('myElementId');
console.log(elementById.textContent); // Output: This is a div with an ID.

// Access elements by class name
const elementsByClassName = document.getElementsByClassName('myClassName');
console.log(elementsByClassName[0].textContent); // Output: This is a div with a class.

// Access elements by tag name
const elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName.length); // Output: 3

// Access element by CSS selector
const elementBySelector = document.querySelector('.myClassName');
console.log(elementBySelector.textContent); // Output: This is a div with a class.

// Access elements by CSS selector
const elementsBySelectorAll = document.querySelectorAll('.myClassName');
console.log(elementsBySelectorAll.length); // Output: 2

// Add an event listener to the button
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    elementById.textContent = 'Text has been changed!';})