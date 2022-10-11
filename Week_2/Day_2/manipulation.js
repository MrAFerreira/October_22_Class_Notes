// Manipulation

//attribute

let link = document.getElementById('google-link');

//getAttribute - retrieves the value
console.log(link.getAttribute('href'));

//setAttribute

link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

let customParagraph = document.getElementById('custom-text');
//remove attribute
customParagraph.removeAttribute('id');

// Create element
// creates a dom element

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Smaller h2, but still important';

//appendChild
// we need a parent, and a child to append

//let parent = document.getElementsByTagName('body')[0]
let parent = document.querySelector('body');

parent.appendChild(h2Tag);

//insertBefore

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'New and improved h1';

//Where (body)      what (h1),  before(paragraph)
parent.insertBefore(h1Tag, customParagraph);

//remove child
parent.removeChild(customParagraph);

//Clearing a whole element
let messyDiv = document.getElementById('messy');

let name = 'Nathalie';

//console.log(messyDiv.innerHTML);
messyDiv.innerHTML = `<p>Hello there ${name} </p>`;

// Events

let addBtn = document.getElementById('add-item-btn');

//onClick

addBtn.onclick = function () {
  console.log('Button was clicked');
};

//When the button is clicked:
// Add to the ul an li with the text:
// "Item number x"

//Target the elements
//Create elements
// Insert elements
