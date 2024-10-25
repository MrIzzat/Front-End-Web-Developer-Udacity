Extracting data from arrays and objects into distinct variables can be done through `destructing`.

The following examples, though do extract data into distinct variables are not destructing:

```js
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
```
Outputs:
```
 10 25 -34
```

This shows extracting values from an array.

<br>

```js
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);

```

Outputs: 
```
quartz rose 21.29
```
This shows extracting values from an object.

# Destructing

**Destructing** allows to specify the elements to extract from an array or an object from the left side of an assignment. It yields the same results as the previous examples.

## Destructing from an Array
Example of destructing values from an array:

```js
const point = [10, 25, -34];
const [x,y,z] = point;

console.log(x,y,z);
```
Outputs: 
```
10 25 -34
```
\
When using brackets `[]`, it represents an array being destructed into the values inside the brackets. Indexes don't need to specified in the array because they are implied (no need to say x=points[0] etc.).

Some values can be ignored by leaving an empty space in it's place and placing a comma in it's place, for example:

```js
const [x, ,z] = point
```
Would ignore the `y` value and discard it.

## Destructing from an Object

Example of destructing values from an object:

```js
const gemstone = {
    type: `quartz`,
    color: 'rose',
    carat: 21.20
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);
```
Outputs: 
```
quartz rose 21.29
```
\
Objects can be destructed by using the curly braces `{ }`. Because `type`, `color` and `carat` are already in the object `gemstone` as keys, they will automatically be associated with the key they are equal to.

A value from an object can be specified. For example:
```js
let {color} = gemstone;
```

will only select the `color` property from the `gemstone` object.


Function destructed from an object will no longer be in the scope of the original object, meaning the function will lose access to any value that is normally accessed by the `this` keyword.

For example:

```js
const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI  *this.radius*  this.radius;
  },
  getCircumference: function() {
    return 2  *Math.PI*  this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;
```
The `getArea()` function will return `Nan` because it has been destructed and no longer has access to the `radius` property in the `circle` object.
