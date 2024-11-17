Code performance can be tested by using the `performance.now()` function, placing one before the code begins and another after the code ends. It's accurate to 5 microsounds (5 milionth of a second).

The following steps are used to get the speed of code:


1. add `perfomance.now()` to the begining of the code
2. execute the code to test
3. add `performance.now()` to the end of the code
4. subtract the intial time from the end time

For example:

To test how fast this code is:

```js
for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}
```

It would use `performance.now()` as follows:

```js

const startTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endTime = performance.now();

const totalTime = endTime-StartTime;

console.log(`The total time it took to execute this code is: ${totalTime} milliseconds`);
```
Try this code out in `NestedLoop.js`.

The same idea can be applied for testing out the two different ways of adding the 200 paragraphs to a webpage.

The following codes can be used:


```js

const t0 = performance.now();
for (let i=0; i<200; i++){
    const newElement = document.createElement('p');

    newElement.textContent = 'This is paragraph number ' +i;

    document.body.appendchild(newElement);
}

const t1 = performance.now();



const t2 = performance.now();

const customDiv = document.createElement('p');

for (let i=0; i<200; i++){
    const newElement = document.createElement('p');

    newElement.innerText= 'This is pargraph number ' + i;

    customDiv.appendChild(newElement);
}

document.body.appendChild(customDiv);

const t3 = performance.now();


console.log(`Adding Pragraphs Directly to body took ${t1-t0} milliseconds
Adding Paragraphs to Container took ${t3-t2} milliseconds`);

```

The perfomance test can seen in `paragraphs.html`.

The performance test shows that parent container method is much faster than the body method, between 2-10 times faster.