# Implications of Single Threading

JavaScript is a **single-threaded**. Meaning it can only process one command at a time.*Something called **web workers** can be used to delegate process to threads so that it can turn a webpage into multi threaded process*

The opposite of single-threading is multi-threading, being able to execute multiple commands at the same time.


An example:


```js
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
```

The program first executes the function declration at the first line then the second function declration a few lines down. At the bottom, it executes the function call which means it executes all the lines within the function called in order and returns to where it left off. The same is done with the second function call.

When a function's code is being executed, all of the lines in the function are executed, none are exempted from execution to be executed later.

When a function is called to be executed, the program knows to return execution of the main program after it finishes executing the function code. It doesn't execute both the main program and the function code at the same time since JavaScript is a single threaded language.


In another example:

```js
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
```

There are nested function calls in this example. How does JavaScript know where to go back to continue execution of code? How does it keep track of what is to be executed after a function is done?

It uses something called the **Call Stack**