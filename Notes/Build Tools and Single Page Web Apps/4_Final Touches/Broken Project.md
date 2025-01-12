So far:

* JavaScript event code isn't running (Even though it is)
* The express server isn't doing anything (....)
* The production build isn't set up (????)

The production code relies on the express server to work.

The JavaScript event code isn't working due to scope issues, these are handled by  Immediately Invoked Function Expressions IIFE's.


Examples of IIFEs:

```js
// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();
```