//document - only available when linked to html

//console.log(document);

// targeting by ID, getElementById()

let branchDiv = document.getElementById('branch');
console.log(branchDiv);

//innerHTML

branchDiv.innerHTML = 'This is a branch';

//style

branchDiv.style.border = '2px solid red';
branchDiv.style.backgroundColor = 'green';

let changeColor = (element) => {
  if (element.style.backgroundColor === 'green') {
    element.style.backgroundColor = 'yellow';
  } else {
    element.style.backgroundColor = 'green';
  }
};

console.log(changeColor(branchDiv));
//changeColor(branchDiv)
//When you need to passa rguments to a callback, they come at the end. NEVER invoke the function with ()

//setInterval(changeColor, 500, branchDiv);

//get by class - className

let leaves = document.getElementsByClassName('leaf');
//console.log(leaves);
//returns an array-like object with all the elements with the specified class

const randomNumbers = () => {
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].innerHTML = Math.floor(Math.random() * 10);
  }
};

setInterval(randomNumbers, 1000);

/* let twigDiv = document.getElementsByClassName('twig');
console.log(twigDiv[0]); */

//get elements by tag

let divs = document.getElementsByTagName('div');
//console.log(divs);

//querySelector

let twigDiv = document.querySelector('.twig');
//console.log(twigDiv);
//it returns only one element

//querySelectorAll

let allDivs = document.querySelectorAll('.leaf, #branch, .twig');
//console.log(allDivs);

//Changing class

let firstLeaf = document.querySelector('.leaf');

//className
firstLeaf.className = 'fruit';

//classList
//add
firstLeaf.classList.add('twig');

//remove
firstLeaf.classList.remove('fruit');

//toggle
firstLeaf.classList.toggle('flower');
firstLeaf.classList.toggle('twig');

//console.log(firstLeaf.className);

//Dark mode example

let h1 = document.querySelector('h1');

h1.classList.toggle('dark');
/* if (h1.className.includes('dark')) {
  h1.classList.remove('dark');
} else {
  h1.classList.add('dark');
}
 */

//Hidding example

/* let startScreen = document.getElementById('start');

setTimeout(function () {
  startScreen.classList.toggle('hidden');
}, 5000);
 */

branchDiv.id = 'tree';
//console.log(branchDiv);
