# Understanding Code Synchronicity

Another term for single threading is **synchronous**, which means existing or occuring at the same time.

Usually code is synchronous, meaning they are run according to their order. But there are codes that are not synchronous, meaning they are not run in the order they appear in. An example of which is **event listeners**.

For example:


```js
const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});
```


The first three lines of this code is synchronous but the code inside the event listener's function is not executed right away, but at some later point in time. It is not synchronous.


Sometimes code that is not synchronous is called asynchronous.