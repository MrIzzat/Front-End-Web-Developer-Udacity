# Script Tag Placement

If the JavaScript is referencing elements in the DOM, the `<script>` tag must be placed after  that element in the HTML. Otherwise the DOM won't be ready to be manipulated when the JavaScript code is running.


# How the DOM is built

The DOM is built Incrementally. So during the DOM tree building process, when the `<script>` tag has been reached, the DOM tree building process stops until the JavaScript file is downloaded and the code within executed. That means any element that is referenced in the JavaScript is after the `<script>` element in the HTML won't be in the DOM tree yet. The JavaScript would be trying to access an element that does not exist (`null`) and raise an error.

This process of how the JavaScript accesses elements before it can be visuallized by adding the JavaScript code inline, within the HTML file. For example:


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/css/styles.css" />
  <script>
    document.querySelector('footer').style.backgroundColor = 'purple';
  </script>
```

From this code it can be seen that the JavaSCript is trying to access the `footer` element but it has not been defined yet in the HTMl, its only natural for an error to be raised (because code runs sequentiall).

The same idea is applied with the external JavaScript. *because it is basically adding whatever is in the JavaScript file in the script tag*

# Fixing this problem

The `<script>` element should always be added after all the elements it is referencing in the HTML. Placing it right before the end tag of the body element `</body>` is a quick and easy way to cover all the reference elements in the JavaScript.

If the `<script>` tag is added after the referenced element, by the time the DOM reaches it, the referenced element would already be built within the DOM tree.


An alternative way to avoid this would be to use browser events. See `DOMContentLoaded.md`.