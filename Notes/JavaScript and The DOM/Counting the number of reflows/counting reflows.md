```js
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log(mutation.type);
    });    
  });

var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(main, config);

observer.disconnect();
```

This code can be used to see how many times a web page as been reflowed