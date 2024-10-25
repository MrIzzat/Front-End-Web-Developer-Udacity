# Object Literal shorthand.

Normally, initializing an object requires the property name and the variable name, like this:


```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
    type: type,
    color: color,
    carat: carat
}

console.log(gemstone);
```
Outputs:
```
 Object {type: "quartz", color: "rose", carat: 21.29}
```

Instead of typing the variable names in repetition, It can be written in a shorter way:

```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {type, color, carat};
```

This only works on the condition that the variable names are the same as the property names in the object.

# Shorthand Function (method) Names

Function names also have a shorthand way of being written. Originally, functions are added to objects like this:

```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function(){
    ....
  }
};
```

It works by assigning an anonymous function to the property `calculateWorth`. The `function` keyword is really not needed. The function can be writtein like this instead:

```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth(){ ..... }
};
```
The `function` keyword can be dropped.