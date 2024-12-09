# The Content Is Loaded Event

When the DOM is fully loaded, the browser invokes an event called the `DOMContentLoaded` event. It can be interacted with just like any other event. For example:


```js
document.addEventListener('DOMContentLoaded', function(){
    console.log('The DOM is ready to be interacted with!');
})
```
The `DOMContentLoaded` event can be viewed in the devtools in chrome by going to the `Network` tab and viewing it on the bottom. It will appear on the bottom with a color and the time from when the website request was to load it. It can also be viweed as a vertical line on the timeline with the line being the same color as the text on the bottom.


The `DOMContentLoaded` event only fires when all scripts have been downloaded and exectued as well as when all DOM elements are loaded. It does not work for stylesheets to load.


The `DOMContentLoaded` event should only be attached to the `document` object.


# Using the `DOMContentLoaded` Event

The `DOMContentLoaded` can be used to allow for the storing of the `<script>` tag in the head without worrying about the DOM tree not being loaded issue mentioned previously in `When is the DOM Ready`.

Wrapping the JavaScript code in an `DOMContentLoaded` listener function will accomplish this. For example:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>
```

Though this example has code that is inline, it also works for JavaScript code stored in an external JavaScript file.

Wrapping JavaScript code in an `DOMContentLoaded` event listener prevents the code from being executed until the DOM tree is fully built and ready instead of running as soon as the browser gets to it.

Sometimes, the `load` event is used in place of `DOMContentLoaded`, especially on older browsers. The difference between them is that `load` is fired after all images, stylesheets etc. is loaded (everything referenced by the HTML) while `DOMContentLoaded` is fired when the DOM tree is ready.

It's recommended to use `DOMContentLoaded` rather than `load` to detect when code should run.

Though it's possible to have JavaScript in the `<head>`, it is not recommended to do so as it will require extra code (the event listening code), instead it's recommend to place the `<script>` tag right at the bottom of the page before the closing body tag `</body>`.

JavaScript should only be written in the `<head>` when certain code needs to run first before anything in the `<body>` element but before the other scripts. So as soon as possible but not too early for the DOM not to be ready for it.