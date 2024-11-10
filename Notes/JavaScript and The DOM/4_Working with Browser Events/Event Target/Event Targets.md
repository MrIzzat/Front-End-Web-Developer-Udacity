# The `EventTarget` Interface

The `EventTarget` interface that the Node interface, therefore almost all elements inherit from the `EventTarget` interface.


![](./Inheritence%20Chain.jpg)


The `EventTarget` interface is defined as being an interface that is implemented by objects that can receive events and may have listeners for them. Element, document and window are the most common event targets but other objects can be event targets too.

`EventTarget` is at the top of the chain, it does not inherit from any other interface. Since other interfaces inherit from it, most objects are considered to be event targets, such as:


* The `document` object
* a paragraph element `<p>`
* a video element `<video>`


The `document` object and any DOM element can be an event target.


The `EventTarget` interface does not have any properties and only three methods:

* `.addEventListener()`
* `.removeEventListener()`
* `.dispatchEvent()`