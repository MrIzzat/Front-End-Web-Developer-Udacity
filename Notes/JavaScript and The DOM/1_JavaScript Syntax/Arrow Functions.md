**Arrow functions** are very similar to regular functions in behavior but differ in syntax.

An example of a regular function being used on a list:

```js
const upperizedNames = ['Farrin', 'Kagure','Asser'].map(function(name){return name.toUpperCase();
    
});
```
\
This code converts every string in that list to uppercase. The same thing can be done using arrow functions:

```js
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase());
```
The `map()` function is part of the Array prototype. It takes a function as a parameter and calls the function on every element in the array. It gathers the returned results from each function call and makes a new array with them.

# Convert a function to an arrow function

To convert a function to an arrow function, the following must be done:

* Remove the `function` keyword.
* Remove the parantheses (after the function keyword)
* Remove the opening and closing curly braces.
* Remove the `return` keyword.
* Remove the semicolon.
* Add an arrow `=>` between the parameter list and function body.

This conversion only works for single line functions. To be able to make the Arrow function work with muli lines, it should keep the curly braces and the `return` keyword. 

For example:


```js
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
                 name.toLowerCase();
                 name.toUpperCase();
                 return name;
            });

console.log(...upperizedNames)

```

Without `return`, it will return `undefined`. 