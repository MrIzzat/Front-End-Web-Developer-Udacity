**DOM** stands for **Document Object Model**.

HTML contains rules to how data received (from an HTML file) should be processed. It first needs to read the HTML as characters, parse those characters into tokens convert the tokens into nodes and finally add the nodes to the DOM.

For example, text contained with the tags `<>` have special meaning refering to a tag. Depending on how the tag is formed, it will be either the start tag or end tag and thereby be reognized as a start or end tag token. Another process takes in the tokens and converts them to node objects.

The positions of the start and end tokens determine the relationships between nodes. If the start token appears after another element's start token but before it's end token, that means it is nested within the element and therefore a child of that element.

When all tokens are consumed, the final result will be the DOM, a tree like structure containing all the elements in the HTML depicting the relationships between the elements as well as the elements' properties.

In short, the DOM is the full parsed representation of the HTML markup (code).


Possible generated tokens during tokenization:

* DOCTYPE
* start tag
* end tag
* comment
* character
* end-of-file

Typing the word `document` on a browser's console returns the HTML of that page. The `document` object is only available in JavaScript being run alongside a webpage, it is not available in the JavaScript core language. But JavaScript will always assume it exists and it is freely accessible anywhere inthe JavaScript code.

The DOM is standardized by the **W3C**. There are a few spicifications that make up the DOM:

* Core Specification
* Events Specification
* Style Specification
* Validation Specification
* Load and Save Specification.

the full list can be found [here](https://www.w3.org/TR/?tags[0]=dom#w3c_all)