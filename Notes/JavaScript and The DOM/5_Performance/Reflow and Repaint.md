# Reflow and Repaint

**Reflow** is the process the browser does to calculate the laout of the page. It happens when the DOM is first displayed (usually after the DOM and CSS have been loaded) and also happens whenever there is a change to the DOM. It's an expensive and slow process.

**Repaint** happens after the reflow process. It occurs as the browser draws the new layout onto the screen. It's a fairly quick process but occurence of it should be limited. It can be said to be the process of drawing the pixels onto thes screen.


An example of when reflow and repaint might occur is when adding a CSS class to an element. This causes the browser to recaulate the layout of an entire page, meaning one reflow and one repaint.


If an element is to be removed with `remove()` or `removeChild()` it requires a reflow and repaint for each usage. If the entire section that contains the elements to be removed is to be rebuilt using `DocumentFragment` to replace the elements to be removed without using `remove()` or `removeChild()`, it would require to rebuild the entire structure with the possibility for needing to read files or data in addition to one reflow and one repaint.

Hiding elements instead of removing is often much more effcient. Hiding an element only costs one repaint. Making that element repear costs one reflow and one repaint.

For example:

Given this HTML:

```html
<div id="comments">
  <div class="comment"> <!-- some content --> </div>
  <div class="comment"> <!-- some content --> </div>
  <div class="comment"> <!-- some content --> </div>
</div>
```
To remove some of the elements with the `comment` class, instead of using `.remove()` to a comment and needing to reflow and repaint the page, changing it's `display` to `none` would cause it to disppear from the screen and only require one repaint:

```js
document.getElementById("comment").style.display = "none";
```

It can also be made to repear by setting the `display` attribute to `block` or any other value besides `none`, which costs one reflow and one repaint:

```js
document.getElementById("comments").style.display = "block";
```

In general, if there are a group changes to be made hiding/change all/show are a great pattern to use if the changes are realtively contained.


# Virtual DOM

React and other "virtual DOM" libraries are popular because changes are done to the DOM but to another structure called a "virtual DOM". The library calculates the best way to update the screen for the DOM to match the virtual DOM.

The problem with virtual DOMs is that the code has to be reworked so that it matches the library that is going to be used. Sometimes it's better to update the screen a manually depending on the situation. 