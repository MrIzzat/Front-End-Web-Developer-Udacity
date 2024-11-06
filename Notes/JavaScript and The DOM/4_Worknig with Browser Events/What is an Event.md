An event is like an announcement to when something happens in a webpage. The browser makes an announcement when something happens, JavaScript is able to listen to the announcement and respond to it.

Events are usually invisible to the user on a webpage. The `monitorEvents()` functon in chrome allows for viewing the differente events as they are occuring.

For example:

```js
monitorEvents(document);
```

This line allows for viewing all events happening in the `document` object. This, can be used in the console in the devtools.

The `unmonitorEvents()` function can be used to stop monitoring a certain element, as the `monitorEvents()` function will keep outputting events occuring until the webpage is reloaded.

`monitorEvents()` is not supposed to be used for produciton code, it's intented use is for development or testing purposes.