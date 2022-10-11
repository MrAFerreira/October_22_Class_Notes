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

let list = document.getElementById('item-list');
let count = 1;

/* addBtn.onclick = function () {
  //console.log('Button was clicked');
  //First we create the element
  let newLi = document.createElement('li');
  //Then we add content
  newLi.innerHTML = `Item number ${count}`;
  //Append it to the list
  list.appendChild(newLi);
  //increase the count
  count++;
}; */

//When the button is clicked:
// Add to the ul an li with the text:
// "Item number x"

//Target the elements
//Create elements
// Insert elements

//Inputs and values
let taskInput = document.getElementById('task');
console.log(taskInput.value);

addBtn.onclick = function () {
  //Create li
  let newTask = document.createElement('li');
  //Set the content of the li to be the input value
  newTask.innerHTML = taskInput.value;
  //also pass a function to the new element
  newTask.onclick = function (e) {
    //Once you click the li, give it a line-trough
    //Bonus 1  - Once you click again, it removes it
    if (newTask.style.textDecoration === 'line-through') {
      newTask.style.textDecoration = '';
    } else {
      newTask.style.textDecoration = 'line-through';
    }

    console.log(e.currentTarget.innerHTML);
    //Bonus iteration: Delete the li
  };
  //add li to the list
  list.appendChild(newTask);
  //clear the input
  taskInput.value = '';
};

//CurrentTarget

//getting all the lis
let allLi = document.getElementsByTagName('li');

//looping over all of them
for (let i = 0; i < allLi.length; i++) {
  //giving a function to all of them
  allLi[i].onclick = function (e) {
    console.log(e.currentTarget.innerHTML);

    //parentNode
  };
}
