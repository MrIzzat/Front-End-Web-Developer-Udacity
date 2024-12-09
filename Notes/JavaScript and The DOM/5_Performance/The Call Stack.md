# What is the Call Stack

*A stack is basically a list but goes through its elements in reverse order, last in first out*

The call stack is basically a list of functions that are running. When a function is called it is added to the stack. After all the code in the function is exectued, the function is popped from the stack. 

A function does not have to be completed before another function can be added the call stack.

The function at the topmost of the stack is the one that is currently running.


In the previous example, *in `Single Threading`*:

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

The call stack first starts by adding the main code, which can be labelled as `<main>` or `<anonymous>` or `<global>`. While in `<main>`, it decalres the two function seen in the code. Once it reaches the `addParagraph()` function call, it pushes the function to the call stack (adds it to the top). As it executes the `addParagraph` function, it calls the `addNewMessage()` function. That causes the new function to be pushed to the call stack. After the `addNewMessage` function is finished execution, it is popped from the call stack and the program returns to the `addParagraph` function to complete execution. Once the execution in `addParagraph` is done, it returns to the main program where the program finishes execution and the `<main>` entry is popped  from the stack.

The entries to the stack are known as **frames**.