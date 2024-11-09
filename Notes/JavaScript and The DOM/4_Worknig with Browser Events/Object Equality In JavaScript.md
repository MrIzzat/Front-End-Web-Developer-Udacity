Objects in JavaScripts can contain the same value, but that does not neccessarily mean they are the same object, they could be referencing two different, but equal, values in the memory.


It's similar to the difference between two jackets that look very much alike versus the same jacket having two different names (A student's desk and their classmates desk are the one and the same because they share a single desk).


# Type Coercion

**Type coercion** refers to items being comapred to be converted to the same type of object, for example comparing two numbers or two string values. The double equality `==` operator uses type coercion. While the triple equality `===` operator does not. 

This means `==` will compare based on value but `===` will compare based on the object refernce (to see if the variable is the exact same but with a different name).

For example:


```js
function quiz() { ... }

const a = {
    myFunction: quiz
};
const b = {
    myFunction: quiz
}

a.myFunction === b.myFunction
```

This code returns `true` since the two functions are referencing the same function.

But:

```js
const a = {
    myFunction: function quiz() { console.log('hi'); }
};
const b = {
    myFunction: function quiz() { console.log('hi'); }
};

a.myFunction === b.myFunction
```

This will return `false` because even though the two functions do the same thing, they are not the one and the same function.


It's important to know this for the `removeEventListener()` function because it requires the exact same listener function that was added using `addEventListner()` to be removed, not a copy.