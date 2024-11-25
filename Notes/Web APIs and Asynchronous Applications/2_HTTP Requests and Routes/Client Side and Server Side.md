# Understanding Server and Client Side Code

**Server side** code is code that is set up at the beginning to handle anything outside of the browser. It handles things the browsers can't do. An example is to save data produced while someone is within the app.


**Client side** code refers to all the code the browser executes and that the user will see the end product of. Browsers are capable of executing HTML, CSS and JavaScript natively and interactively. The browser handles everything in terms of the runtime of the code, but everything else is handled by the server.

An example:

A client side script that send a POST request would look like this:


```js

const postData = async( url='', data={} ) => {
    console.log(data);
    const response = await fetch( url, {
        method: 'POST'
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch (error) {
        console.log(`error: ${error}`);
    }
} 

postData('/add', {answer:42});

```


The `fetch()` can be used by the client side code to send a HTTP request to a server. The `method` can be specified to what kind of HTTP request should be sent whether it be a **POST**, a **GET**, a **DELETE** etc. request. Some boiler plate information that is important is the `credentials`. The `headers` can be used to specified the the format of the content in the body, `application/json` refers to the body being in JSON format. The `body` needs make sure the data is formatted to be in JSON string form which is what `JSON.stringify()` does.

Checkout an example in the `Client Side and Server Side Exercise` folder.