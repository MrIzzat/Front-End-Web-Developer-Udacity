# How to avoid Using extra `<div>`s

This is a continuation from `Testing Code Performance`

When a new element is added to the DOM, the browser does a `reflow` calculation, which determines the new screen layout and a `repaint` operation to the screen. They both take time.

That's the reason why appending a new element to the body when there are many elements to be appended takes a lot of extra time.

The browser should do these two operations once after all the elements have been added to the DOM. But in order to accomplish this the new elements must be attaced to something.


To avoid creating a new `<div>` to attach these new elements to, a `DocumentFragment` caneb sued instead.


A `DocumentFragment` is a light weight version of the DOM that stores a segment of a document structure made up fof nodes just like a normal DOM. It does not have a parent. The document fragment isn't part of the active DOM tree sttucture. Any changes made to the fragment does not affect the document, cause `refolo` or cause any performance impact when the changes are made.

In short, changes to the `DocumentFragement` does not cause any `reflow` or `repaint` operations.


The `.createDocumentFragment()` function can be used to create an empty `DocumentFragment` object.

For example:


```js
const docFrag = document.createDocumentFragment();`
```

Rewriting the code from the previous example:


```js
const frag = document.createDocumentFragment();

for (let i=0; i<200; i++){
    const newElement = document.createElememt('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment);
```

