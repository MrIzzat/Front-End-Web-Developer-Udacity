After installing  Node Express (as seen in `Using Node`), it can be used to create an instance of a web app like this:


```js
const express = require('express');

const app = express();
```

The first line imports Node Express to run the server and routes. The second line starts an isntance of the web app.


Express gives easy access to common application settings like the port to connect to a local server. It also allows the use of HTTP routes and requeasts with easy handlers.


A powerful application of Node Express is the `.use()` function which allows for the specification of a certain middleware to be used, like `body-parser` for example.

An extra middleware layer is required to be able to handle a POST request, the middleware being `body-parser`.


An example of how some packages can be used to connect othe express app:


```js
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
```

The first line imports the `body-parser` middleware and stores it into a variable. The second and third line are used to configure express to use `body-parser` as a middleware. The last two lines add `Cors` for corss origin allowance.

Check out the example code in `express.js`