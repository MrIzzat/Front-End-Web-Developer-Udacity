# `setTimeout` with a delay of 0

The `setTimeout()` function can take a delay of 0 miliseconds.

For example:

```js
setTimeout(function sayHi(){
    console.log('hi');
},0);
```

Even though the delay is 0 miliseconds the function is not executed immediately as it still has to go through the event loop. Since the timer ends immediately after the function is handed to the browser, it is passed directly to the event queue where it will wait until the call stack is empty to pass the function to the call stack to be executed.


Using a delay of 0 allows for converting potentially long runnign ocode to one that is broken up so that it allows for the browser to handle user interactions instead of having to wait until a long running function is done before allowing the user to view the page.

# Break Up Long-Running Code

*In continuation of a previous example where it was required to add 200 paragaph elements as efficently as possible*

What if instead of wanting to add 200 paragraphs, the requirement is to add 20,000 paragraphs. If the code was written to add 20,000 paragaphs directly, the browser would freeze up and not allow the user to interact with it until all 20,000 elements have been loaded onto the DOM, then reflowed and repainted to the browser (because JavaScript runs synchronously).

The `setTimeout()` function can be used to break up the process of adding the content to the page into chunks.

For example:

```js

let count=0;

function generateParagraphs(){
    const frag = document.createDocumentFragment();

    for (let i=0; i<500 l i++){
        const newElement = document.createElement('p');
        newElement.textContent = `This is paragraph number ${count+1}`;

        fragment.appendChild(newElement);

    }

    document.appendChild(frag);

    if(count<20000){
        setTimeout(generateParagraphs(),0);
    }
}

generateParagraphs();
```

The `count` varaible is used to keep track of how many paragraph elements have been added. The `generateParagraphs()` function will generate 20,000 paragraphs, 500 paragraphs at a time. After every 500 paragraphs, it will send a `setTimeout()` call which will pause the process of adding paragraphs to the page until other events finished passing through the event loop. So long as there are less than 20,000 paragraphs, it will keep adding paragraphs to the page.


Because of the use of `setTimeout()` the page won't freeze up while adding the paragraphs to the page.


The numeber of reflows and repaints depends on the number of paragraphs is added a time, changing this number will change the number of reflows and repaints are done throughout this operation.