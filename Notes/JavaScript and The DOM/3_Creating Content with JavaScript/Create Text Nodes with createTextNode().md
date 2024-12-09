The `.createTextNode()` function can be used to create new text nodes.

For example:

```js
const myParagraph = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph');

myParagraph.appendChild(textOfParagraph);
document.body.appendChild(myPara);

```

This code:

1. creates a paragraph element.
2. creates a text node.
3. appends the text node to the paragraph.
4. appends the paragraph to the tag.

The exact same thing can be accomplished with the `.textContent` property:


```js
const myParagraph = document.createElement('p');
myparagraph.textContent = 'I am the text for the paragraph';

document.body.appendChild(myPara);
```

It's faster to use the `textContent` property rather than creating a new text node and appending to the element.

If `appendChild()` is called twice to two different elements, the appended element will be moved to the leement that called `appendChild()` last.

For example:

```js

const mainHeading = document.querySelector('h1');
const otherHeading = document.querySelector('h4');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);

```

Only `otherHeading` will contain the exclamation marks, the `mainHeading` won't.