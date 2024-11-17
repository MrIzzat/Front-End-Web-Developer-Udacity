# Using a Loop to Add Content

A for loop can be used to add elements to the DOM interatively. 
For example:


```js
for (let i=0; i<200; i++){
    const newElement = document.createElement('p');

    newElement.textContent = 'This is paragraph number ' +i;

    document.body.appendChild(newElement);
}
```

This code:

1. creates a paragraph elemnt `<p>`
2. adds some text to the paragraph
3. adds the pragraph to the body element `<body>`

Since it's to be done 200 times, a for loop is neccessary. But, the code inside the for loop can be optimized.


Some things that can be done to optimize the efficency of the code:

* Creating a parent container outside the loop
* appending each paragraph element to the parent container in the loop
* append the parent container to the body when the loop ends

The changes would look like this:

```js
const customDiv = document.createElement('p');

for (let i=0; i<200; i++){
    const newElement = document.createElement('p');

    newElement.innerText= 'This is pargraph number ' + i;

    customDiv.appendChild(newElement);
}

document.body.appendChild(customDiv);
```


Even though this code is supposed to be better, how can it be proven that it is better?

This can be done by testing the time it takes the code to finish execution.