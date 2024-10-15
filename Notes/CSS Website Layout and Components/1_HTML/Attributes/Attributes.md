All HTML elements can have attributes. They provide extra information about the element. Attributes come in a name value pair, `name="value"`. Some popular attributes in different elements can look like:

# Images

The `<img>` tag can be used to display an image onto a web page. 

* The source of the image (whether a URL or a file location) can be specified using the `src` attribute.

* An image's alternate text (text to be displayed when displaying the image is not available) can be specified using the `alt` attribute.

* An image's size can be adjusted through the `width` and `height` attributes.

An example:

```
<img
src="nefertiti.png"
alt = "A Smiling Labrador Retriever"
width="480"
height="320"
/>
```

<img
src="nefertiti.png"
alt = "A Smiling Labrador Retriever"
width="480"
height="320"
/>

The `width` and `height` attributes can be in percentages instead of a number.

# Links

Links are used to link other documents in the website with the current web page, by clicking on a link. This is done through using the anchor tag `<a>`. It uses the `href` attribute (hyperlink reference) to specify where a link is supposed to go when it is clicked, which could be an anchor target (on the same page), a relative URL (which leads to another page on the same website) or an absolute URL (which leads to a seperate website).

There also the `rel`, which is used for specifying the relationship between the current and linked document and `target`, which is used to specify where the linked document is opened, attributes.

An example:
```
<a href="https://thelabradorclub.com" rel="noopener" targets="_blank">Join the Labrador Retriever Club</a>
```

<a href="https://thelabradorclub.com" rel="noopener" target="_blank">Join the Labrador Retriever Club</a>

The `noopener` `rel` value is to makre sure the website is opened in a seperate process and preventing it from accessing the `window.opener` property. The `_blank` `target` attribute is used to make sure the link is open in a new window instead of in the current one.

# Comments

Comments in HTML are annything inside the tag:

`<!-- -->`

# Self-Enclosing Elements

Some elements like `<br/>` and `<img/>` and `<input/>` are known as self-enclosing elements since they don't have a closing tag and can't have anything inside of them, except for attributes.