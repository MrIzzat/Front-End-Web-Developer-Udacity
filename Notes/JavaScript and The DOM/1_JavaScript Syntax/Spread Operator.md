The **spread operator** is written with three dots `...`. It allows for the expanding or spreading of iterable objects into multiple elements.

An example:

```js
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];

console.log(...books);
```

Prints:
```
Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities
```

Another example:

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
```

Prints:
```
2 3 5 7 11 13 17 19 23 29
```


Instead of printing the Set and list as a list, the spread operator printed each value in them seperately.

# Combining arrays with concat

The spread operator can be very useful when trying to concatenate arrays. In the past the Array's `concat()` method would have to be used to combine arrays.

An example:

```js
const fruit = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);

console.log(produce);
```

Which prints:
```
["apples", "bananas", "pears", "corn", "potatoes", "carrots"]
```
\
While this code is functional, it would be better if there was a shorthand way to write this. For example, like this:

```js
const fruit = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce =[fruits, vegetables];

console.log(produce);
```

But this would print:

```
[Array[3], Array[3]]
```

Or sometimes it would print:

```
[ [ 'apples', 'bananas', 'pears' ], [ 'corn', 'potatoes', 'carrots' ] ]
```

Meaning, instead of merging the two arrays into one bigger array, the first array is placed in the first index of the larger array, and the second array is placed in the second index. Making the larger array an array of arrays instead of one large array.

The spread operator can be used to avoid this issue by adding the three dots `...` before each array when combing them. 

An example:

```js
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);
```
Which prints:

```
[ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]
```