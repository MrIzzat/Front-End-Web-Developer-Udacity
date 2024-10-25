There are three ways to declare a variable in JavaScript:

 1. By using the `var` keyword. Allows for redeclaring and reassigning of the same variable name within the same scope.
 2. By using the `let` keyword. Allows for reassigning of the same variable but not the redeclaring within the same scope.
 3. By using the `const` keyword. Does not allow for reassigning nor redeclaration of the same variable within the same scope.

 If a variable is defined in a scope using `var` but is reached by code, it will have a value of undefined but it will not raise a reference error. Like this:

 ```js
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
 ```
 This outputs:
 ```
 "undefined"
```
 A variable `let` on the other hand will raise an error. Like in this example:

```js
function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```

This will output 
```
ReferenceError: freezing not defined
```

This is do to **Hoisting**. Hoisting refers to all variables declared with `var` being raised to the top of the funciton scope during execution.

That means a function like this:

 ```js
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
 ```

 Is actually executed like this:

```js
function getClothing(isCold) {
  var freezing, hot;
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
 ```

 `let` and `const` avoid the issue of hoisting by scoping the variable to the code block (denoted by curly braces `{ }`) and not to the funciton. `var` scopes variables globally or locally to an entire function scope.

This means a variable defined by `let` or `const` is stuck in **temporal dead zone** until the variables declaration is processed, which means the variable can't be accesed until the declaration code has been reached.

An example:

 ```js
function getClothing(isCold) {
  if (isCold) {
    let freezing = 'Grab a jacket!';
  } else {
    let hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
 ```

 Because the variables in this function use `let` instead of `var`, the code is executed as expected by the code order.


 When should `let` and `const` be used?

* `let` should be used if the variable needs to have its value reassigned later on.
* `const` should be used when the variable does not need to have its value reassigned.


When should `var` be used?

Even though its recommended `var` should be avoided when declaring variables, there are arguments that say `var` may be useful when defining global variables. But most people consider this bad practice.