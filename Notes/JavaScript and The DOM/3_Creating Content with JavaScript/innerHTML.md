`.innerHTML` is a property that is inherited from the Element interface. Every HTML element will have this property. It can be used for getting an element's HTML content, including all of its descendants. It can also be used for setting an element's HTML content. 

As opposed to the `.innerHTML`, `.outerHTML` can also be used but it's use is rare. `.outerHTML` returns the element itself as well as its children. In other words, it returns the element itself as well as what's contained in it.



If there are extra `\n` in the output text while using the mentioned functions, `.trim()` can be used to remove them and make the output resemble HTML more.

`.childNodes[i].nodeValue.trim()` can be used to modify only text of only certain children specified by `i`.


The HTML can be changed just by doing an assignment.

For example:

```js
const card = document.querySelector('.card');

card.innerHTML = "<h1>HI</h1>"
```