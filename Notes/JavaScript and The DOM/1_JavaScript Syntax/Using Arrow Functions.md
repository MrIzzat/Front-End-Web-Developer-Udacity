Regular functions are either **function declarations** or **function expressions**. Arrow functions are always function expressions. Their full name is "arrow function expressions". This means arrow functions can only be used where an expression is valid. This includes:

* Being stored in avriable
* Passed as an argument to a function
* Stored in an object's property.

A confusing syntax is when the arrow function is stored in a variable. 

For example:

```js
const greet = name => `Hello ${name}!`;
```

The `greet` variable is used like this:

```js
greet('Asser');
```
Which retrurns:
```
Hello Asser!
```

# Parantheses and Arrow Function Paramters

The parameters for the arrow function appear right before the arrow `=>`. If there is only one parameter, it can be written with or without parantheses `( )`.

For example:

```js
// single parameter works without parentheses
const greetWithout = name => `Hello ${name}!`;
greetWithout('Nadia');

// single parameter works with parentheses
const greetWith = (name) => `Hello ${name}!`;
greetWith('Sam');
```

Both of these work. They would print:

```
Hello Nadia! Hello Sam!
```

But when there are two or more parameters, or no paramters, then the parameters must be warpped with parantheses before the arrows `=>`.

For example:

```js

const sayHi = () => console.log('Hello Udacity Student!');
sayHi();
```

Prints
```
Hello Udacity Student!
```

\
Another Example:
```js
const orderIceCream = (flavor, cone) => 
    console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);

orderIceCream('chocolate', 'waffle');
```
prints

```
Here's your chocolate ice cream in a waffle cone.
```

Some developers use an underscore `_` as a single parameter without using it in the function to represent no variables. It does not cause any issues because it is never used.

# Concise and block body syntax

Arrow functions with only a single expression and do not require curly braces are known as **concise body syntax**. It is defined by not having curly braces surrounding the function body and automatically returning the expression.

If there is more than one line of code in the arrow function's body, the **block body syntax** is needed.

For example:

```js
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});
```

The block body syntax does two things, it uses curly braces around the function's body and it uses the `return` keyword to return from the function.


There are some cases when using the traditional function is needed over an arrow function:

* There are some issues while using the `this` keyword in arrow functions.

* Arrow fucntion are only expressions, they cannot be declared.
* There is no such thing as an arrow function declaration.