First, the following line was added to the webpack configuration dev file:

```js
output: {
    libraryTarget: 'var',
    library: 'Client'
},
```

Basically, this will convert all the client JavaScript into a library. The name `Client` can be any name.

Second, in the `index.js` file, all the used functions need to be imported:

```js
export {
    checkForName,
    handleSubmit,
    onBlur,
}
```

This allows them to be used in the HTML.

The function calls in the `index.html` file need to be updated, so that they are being called from the `Client` library:

```html
<section>
    <form class="" onsubmit="return Client.handleSubmit(event)">
        <input id="name" type="text" name="input" value="" onblur="Client.onBlur()" placeholder="Name">
        <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
    </form>
<section>
```


Any code in the JavaScript that references a function in another file needs to reference it through the `Client` library:

```js
const handleSubmit =  function (event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
```

Now the code works!