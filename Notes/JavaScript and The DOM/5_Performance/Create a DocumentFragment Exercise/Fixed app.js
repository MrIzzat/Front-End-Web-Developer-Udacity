const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

/* REFACTOR the code below to use DocumentFragment */

// Create an h1 element and append to the page
const frag = document.createDocumentFragment();


const h1 = document.createElement('h1');
h1.textContent = "All My Favorite Fruits";

frag.appendChild(h1);


// Create an unordered list element and append to the page
const ul = document.createElement('ul');
frag.appendChild(ul);

// Add each fruit as a list item
for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.textContent = fruits[i];
  ul.appendChild(li);
}

document.querySelector('body').appendChild(frag);