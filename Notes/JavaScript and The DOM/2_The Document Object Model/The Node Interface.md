Information about nodes can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Node)

When an element has been retrieved from the DOM, there are some attributes that can be accessed.

The URL of the webpage can be accessed by using `.baseURI`. 

For example:

```js
const body = document.body;
console.log(body.baseURI)
```

This would ouput the URL of the webpage where that element is on.

`.nodeType` can be used to see what type of node the element is.

For example

```js
console.log(body.nodeType);
```

This outputs `1` which indicates it's an `ELEMENT_NODE` type. The full list can be found on this [page](https://developer.mozilla.org/en-US/docs/Web/API/Node).

Each type of a interface is a **N**ode, it's like saying there are different kinds of blueprints for different kinds of nodes to be built with different attributes and functions. This was the Node interface, there are others.