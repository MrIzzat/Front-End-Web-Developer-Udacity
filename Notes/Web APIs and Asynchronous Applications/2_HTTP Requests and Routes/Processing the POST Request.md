After receiving a POST request, the data sent by the request can be accessed by doing `request.body`. This can be displayed on the terminal.

For the POST request to be completed, it should be assigned to a project endpoint.

For example:

```js

const projectData = {};

let data = request.body;

projectData['intelligence'] = data.intelligence
```

JSON entries can be accessed directly from the `data` after receieving it from the body.